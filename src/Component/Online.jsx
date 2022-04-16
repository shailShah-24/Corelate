import "./online.css";
import { Driver } from "../Auth/neo4j";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export default function Online(props) {
	const [friendModal, setFriendModal] = useState(false);
	const friendToggle = () => setFriendModal(!friendModal);
	const [friend, setFriend] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [biod, setBiod] = useState('');
	const [proUrl,setProUrl] = useState('');
	const handleAdd = (e) => {
		setFriend(true);
		(async () => {
			const driver = Driver();
			const session = driver.session();
			const user1 = props.mainUser;
			const user2 = props.user;
			try {
				const query = `Match (n:User{username:$user1})
							Match (m:User{username:$user2})
							Merge (n)-[:relates]->(m)
							return n,m;`;
				const queryResult = await session.writeTransaction(tx =>
					tx.run(query, { user1, user2 })
				)
			} catch (error) {
				console.error('Something went wrong: ', error)
			}
		})();
	}
	const handleDelete = (e) => {
		setFriend(false);
		(async () => {
			const driver = Driver();
			const session = driver.session();
			const user1 = props.mainUser;
			const user2 = props.user;
			try {
				const query = `Match (n:User{username:$user1})-[r:relates]->(m:User{username:$user2}) delete r;`;
				const queryResult = await session.writeTransaction(tx =>
					tx.run(query, { user1, user2 })
				)
			} catch (error) {
				console.error('Something went wrong: ', error)
			}
		})();
	}
	const handleUser = (e) => {
		(async () => {
			const driver = Driver();
			const session = driver.session();
			const user1 = props.user;
			try {
				const query = `Match (n:User{username:$user1}) return n;`;
				const queryResult = await session.writeTransaction(tx =>
					tx.run(query, { user1:user1 })
				)
				queryResult.records.forEach(record =>{
					const Information = record.get('n');
					setName(Information.properties.name);
					setEmail(Information.properties.email);
					setBiod(Information.properties.bio);
					setProUrl(Information.properties.profilUrl);
				})
				friendToggle();
			} catch (error) {
				console.error('Something went wrong: ', error)
			}
		})();
	}
	return (
		<>
			<li className="rightbarFriend">
				<div className="rightbarProfileImgContainer">
					<img className="rightbarProfileImg" src={props.proUrl} alt="" onClick={handleUser} />
				</div>
				<div>
					<span className="rightbarUsername" onClick={handleUser}>{props.name}</span>
					<button className={`btn btn-${friend ? 'danger' : 'primary'}`} onClick={friend ? handleDelete : handleAdd} >{friend ? 'Delete' : 'Add'}</button>
				</div>
			</li>
			<Modal className="custom-modal-style" isOpen={friendModal} toggle={friendToggle} >
				<ModalHeader className="head">
					<b>{name}</b>
				</ModalHeader>
				<ModalBody className="body">
					<img src={proUrl} alt="" className="modalImg" />
					<div className="rightbarInfoItem">
						<p><b>UserName:</b> {props.user}</p>
						<p><b>Name:</b> {name}</p>
						<p><b>Email:</b> {email}</p>
						<p><b>Biodata:</b> {biod}</p>
					</div>
				</ModalBody>
				<ModalFooter className="foot">
					<button type="button" className="btn btn-secondary" onClick={friendToggle}>Close</button>
					<button className={`btn btn-${friend ? 'danger' : 'primary'}`} onClick={friend ? handleDelete : handleAdd} >{friend ? 'Delete' : 'Add'}</button>
				</ModalFooter>
			</Modal>
		</>
	);
}
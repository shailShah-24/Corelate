import Header from "../../Component/Header";
import Sidebar from "../../Component/Sidebar";
import Feed from "../../Component/Feed";
import { Link } from "react-router-dom";
import Rightbar from "../../Component/Rightbar";
import "./home.css";
import { Driver } from "../../Auth/neo4j";
import { useState } from "react";
import { propNames } from "@chakra-ui/react";

export default function Home(props) {
	console.log(props.friend);
	const userName = props.user;
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [biod, setBiod] = useState('');
	const [proUrl,setProUrl] = useState('');
	(async () => {
		const driver = Driver();
		const session = driver.session();
		try {
			const userExistsQuery = `Match (n:User{username:$userName}) return n`;
			const userExistsQueryResult = await session.writeTransaction(tx =>
				tx.run(userExistsQuery, { userName: userName })
			)
			userExistsQueryResult.records.forEach(record => {
				const Information = record.get('n')
				setName(Information.properties.name);
				setEmail(Information.properties.email);
				setBiod(Information.properties.bio);
				setProUrl(Information.properties.profilUrl);
			})
		} catch (error) {
			console.error('Something went wrong: ', error)
		}
	})();
	return (
		<>
			<Header userName={userName} Name={name} bioD={biod} email={email} profileUrl={proUrl}/>
			<div className="homeContainer">
				<Sidebar userName={userName} Name={name} bioD={biod} email={email} profileUrl={proUrl} />
				<Feed userName={userName} Name={name} bioD={biod} email={email} profileUrl={proUrl} />
				<Rightbar userName={userName} Name={name} bioD={biod} email={email} profileUrl={proUrl} friend={props.friend} nonFriend={props.nonFriend}/>
			</div>

		</>

	)
}

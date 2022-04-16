import "./register.css";
import { Link } from "react-router-dom";
import Login from '../login/Login';
import { useState } from "react";
import { Driver } from "../../Auth/neo4j";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
export default function Register() {
	const [accountModal, setAccountModal] = useState(false);
	const accountToggle = () => setAccountModal(!accountModal);
	const [accountExistsModal, setAccountExistsModal] = useState(false);
	const accountExistsToggle = () => setAccountExistsModal(!accountExistsModal);
	const [error,setError] = useState('');
	const [uname, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	let is_user_exists = false;
	const [password, setPassword] = useState({
		pass: '',
		cpass: ''
	});
	const handleUname = event => {
		setUserName(event.target.value);
	}
	const handleEmail = event => {
		setEmail(event.target.value);
	}
	const handleFname = event => {
		setFname(event.target.value);
	}
	const handleLname = event => {
		setLname(event.target.value);
	}
	const handlePassword = event => {
		setPassword({
			pass: event.target.value,
			cpass: ''
		});
	}
	const handleRepassword = event => {
		setPassword({
			pass: password.pass,
			cpass: event.target.value
		});
	}
	const handleSubmit = (e) => {
		if (password.pass === password.cpass) {
			(async () => {
				const driver = Driver();
				const session = driver.session();
				const userName = uname
				const name = fname + " " + lname;
				const Email = email;
				const Pass = password.pass;
				try {
					const userExistsQuery = `Match (n:User{username:$userName}) With Count(n)>0 as node_exists return node_exists`;
					const userExistsQueryResult = await session.writeTransaction(tx =>
						tx.run(userExistsQuery, { userName: userName })
					)
					userExistsQueryResult.records.forEach(record => {
						const exists = record.get('node_exists')
						if (exists) {
							is_user_exists = true;
						}
					})
					if(userName === ""){
						setError('Invalid Username');
						accountExistsToggle();
					}else if (!is_user_exists) {
						const userCreateQuery = `Create (n:User{username:$userName,name:$name,email:$Email,password:$Pass,bio:"Your Default Bio is this, to change click on Edit Profile",profilUrl:"/assets/person/profile.png"})`
						const result = await session.writeTransaction(tx =>
							tx.run(userCreateQuery, { userName, name, Email, Pass })
						)
						accountToggle();
					} else {
						setError('Username already exists');
						accountExistsToggle();
					}
				} catch (error) {
					console.error('Something went wrong: ', error)
				}
			})();
		} else {
			alert('pass not match');
		}
	}
	return (
		<>
			<div className="login">
				<div className="loginWrapper">
					<div className="loginLeft">
						<h3 className="loginLogo">Corelate</h3>
						<span className="loginDesc">
							Connect with friends and the world around you on Corelate.
						</span>
					</div>
					<div className="loginRight">
						<div className="loginBox" id="first">
							<div className="field-wrapper">
								<label htmlFor="Uname">User Name</label>
								<input type="text"
									id="Uname"
									name="userName"
									placeholder="User Name.."
									onChange={handleUname}
									value={uname}
									required />
							</div>

							<div className="field-wrapper">
								<label htmlFor="fname">First Name</label>
								<input type="text"
									id="fname"
									name="firstname"
									placeholder="Your name.."
									onChange={handleFname}
									value={fname}
									required />
							</div>

							<div className="field-wrapper">
								<label htmlFor="lname">Last Name</label>
								<input type="text"
									id="lname"
									name="lastname"
									placeholder="Your last name.."
									onChange={handleLname}
									value={lname}
									required />
							</div>

							<div className="field-wrapper">
								<label htmlFor="email">Email</label><br />
								<input type="email"
									id="email"
									name="emailaddress"
									placeholder="Your email address.."
									onChange={handleEmail}
									value={email}
									required />
							</div>

							<div className="field-wrapper">
								<label htmlFor="password">Password</label>
								<input type="password"
									id="password"
									name="password"
									placeholder="Your Password.."
									onChange={handlePassword}
									value={password.pass}
									required />
							</div>

							<div className="field-wrapper">
								<label htmlFor="password2">Repeat Password</label>
								<input type="password"
									id="password2"
									name="password2"
									placeholder="Your Password.."
									onChange={handleRepassword}
									required />
							</div>

							<div>
								{/* <Link to="/"><input className="submit-btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#registerModal" type="button" value="Sign up" onClick={handleSubmit} /></Link> */}

								<button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={handleSubmit}>Signup</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal isOpen={accountModal} toggle={accountToggle} >
				<ModalBody>
					<div className="modal-body">
						<h5 className="modal-title" id="accountModalLabel">Your Accout has been created Now you can login</h5>
					</div>
				</ModalBody>
				<ModalFooter>
					<Link to="/">
						<button type="button" className="btn btn-primary" >OK</button>
					</Link>
				</ModalFooter>
			</Modal>
			<Modal isOpen={accountExistsModal} toggle={accountExistsToggle} >
				<ModalBody>
					<div className="modal-body">
						<h5 className="modal-title" id="accountExistsModalLabel">{error}</h5>
					</div>
				</ModalBody>
				<ModalFooter>
					<button type="button" className="btn btn-primary" onClick={accountExistsToggle}>OK</button>
				</ModalFooter>
			</Modal>
		</>

	);
}
import "./login.css";
import { useState } from "react";
import { Driver } from "../../Auth/neo4j";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
export default function Login(props) {
	let is_user_exists = false;
	const [loginModal, setLoginModal] = useState(false);
	const [invalidModal, setInvalidModal] = useState(false);
	const [registerModal, setRegisterModal] = useState(false);
	const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
	const [forgotUser, setForgotUser] = useState('');
	const [error, setError] = useState('');
	const [accountExistsModal, setAccountExistsModal] = useState(false);
	const accountExistsToggle = () => setAccountExistsModal(!accountExistsModal);
	const handleForgotUser = (event) => {
		setForgotUser(event.target.value);
	}
	const [forgotPassowrd, setForgotPassword] = useState({
		pass: '',
		cpass: ''
	});
	const handleForgotNewPassword = event => {
		setForgotPassword({
			pass: event.target.value,
			cpass: ''
		});
	}
	const handleForgotConfirmPassword = event => {
		setForgotPassword({
			pass: forgotPassowrd.pass,
			cpass: event.target.value
		});
	}
	const loginToggle = () => setLoginModal(!loginModal);
	const invalidToggle = () => setInvalidModal(!invalidModal);
	const registerToggle = () => setRegisterModal(!registerModal);
	const forgotPasswordToggle = () => setForgotPasswordModal(!forgotPasswordModal);
	const [password, setPassword] = useState('');
	const handlePassword = event => {
		setPassword(event.target.value);
	}
	const handleSubmit = () => {
		(async () => {
			const driver = Driver();
			const session = driver.session();
			const user = props.user;
			const pass = password;
			try {
				const userExistsQuery = `Match (n:User{username:$user,password:$pass}) With Count(n)>0 as node_exists return node_exists`;
				const userExistsQueryResult = await session.writeTransaction(tx =>
					tx.run(userExistsQuery, { user, pass })
				)
				userExistsQueryResult.records.forEach(record => {
					const exists = record.get('node_exists')
					if (exists) {
						is_user_exists = true;
					}
				})
				if (!is_user_exists || user === "") {
					invalidToggle();
				} else {
					loginToggle();
				}
			} catch (error) {
				console.error('Something went wrong: ', error)
			}
		})();
	}
	const handleForgotPassword = (e) => {
		if (forgotPassowrd.pass === forgotPassowrd.cpass) {
			(async () => {
				const driver = Driver();
				const session = driver.session();
				const user = forgotUser;
				const pass = forgotPassowrd.pass;
				try {
					const userExistsQuery = `Match (n:User{username:$user}) With Count(n)>0 as node_exists return node_exists`;
					const userExistsQueryResult = await session.writeTransaction(tx =>
						tx.run(userExistsQuery, { user: user })
					)
					userExistsQueryResult.records.forEach(record => {
						const exists = record.get('node_exists')
						if (exists) {
							is_user_exists = true;
						}
					})
					if (is_user_exists) {
						const updatePasswordQuery = `Match (n:User{username:$user}) set n.password = $pass return n;`;
						const updatePasswordQueryResult = await session.writeTransaction(tx =>
							tx.run(updatePasswordQuery, { user, pass })
						)
						forgotPasswordToggle();
					} else {
						setError('Invalid Username');
						accountExistsToggle();
					}
				} catch (error) {
					console.error('Something went wrong: ', error)
				}
			})();
		} else {
			alert('Passwords do not match');
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
							<div className="field-wrapper" id="final">
								<label htmlFor="Uname">Username</label>
								<input type="text"
									id="Uname"
									name="emailaddress"
									placeholder="Your User name"
									onChange={props.setUser}
									value={props.user}
									required />
							</div>

							<div className="field-wrapper" id="final1">
								<label htmlFor="password">Password</label>
								<input type="password"
									id="password"
									name="password"
									placeholder="Your Password.."
									onChange={handlePassword}
									value={password}
									required />
							</div>

							<span onClick={forgotPasswordToggle}>Forgot Your Password?</span>
							<div className="action" id="action">
								<button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={registerToggle}>Sign up</button>
								{/* Link tiio homre */}
								<button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={handleSubmit}>Log in</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal isOpen={loginModal} toggle={loginToggle} >
				<ModalHeader>
					<h5 className="modal-title" id="loginModalLabel">Logged in Successfully</h5>
				</ModalHeader>
				<ModalFooter>
					<Link to="/home">
						<button type="button" className="btn btn-primary" data-bs-dismiss="modal" >OK</button>
					</Link>
				</ModalFooter>
			</Modal>
			<Modal isOpen={invalidModal} toggle={invalidToggle} >
				<ModalBody>
					<h5 className="modal-title" id="invalidModalLabel">Invalid Username/Password</h5>
				</ModalBody>
				<ModalFooter>
					<button type="button" className="btn btn-primary" onClick={invalidToggle} >OK</button>
				</ModalFooter>
			</Modal>
			<Modal isOpen={registerModal} toggle={registerToggle} >
				<ModalBody>
					<div className="modal-body">
						<h5 className="modal-title" id="registerModalLabel">Are Sure you want to signup?</h5>
					</div>
				</ModalBody>
				<ModalFooter>
					<div className="modal-body">
						<Link to="/register">
							<button type="button" className="btn btn-primary" >Yes</button>
						</Link>
						<button type="button" className="btn btn-danger mx-1" data-bs-dismiss="modal" onClick={registerToggle}>No</button>
					</div>
				</ModalFooter>
			</Modal>
			<Modal isOpen={forgotPasswordModal} toggle={forgotPasswordToggle} >
				<ModalHeader>
					<h5 className="modal-title" id="forgotPasswordModalLabel"><b>Forgot Password?</b></h5>
				</ModalHeader>
				<ModalBody>
					<label htmlFor="newPass" className="col-form-label" >Username</label>
					<input type="text" className="form-control" value={forgotUser} onChange={handleForgotUser} />
					<label htmlFor="newPass" className="col-form-label" >New Password</label>
					<input type="password" className="form-control" value={forgotPassowrd.pass} onChange={handleForgotNewPassword} />
					<label htmlFor="newPass" className="col-form-label" >Confirm Password</label>
					<input type="password" className="form-control" value={forgotPassowrd.cpass} onChange={handleForgotConfirmPassword} />
				</ModalBody>
				<ModalFooter>
					<button type="button" className="btn btn-danger mx-1" onClick={forgotPasswordToggle} >Cancel</button>
					<button type="button" className="btn btn-primary" onClick={handleForgotPassword} >Reset</button>
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
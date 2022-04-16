import "./sidebar.css";
import "./rightbar.css";
import React, { useState } from "react";
import EditBio from "./EditBio";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Sidebar(props) {
	const User = props.userName;
	const Email = props.email;
	const name = props.Name;
	const biodata = props.bioD;
	const prfUrl = props.profileUrl;
	const ProfileRightbar = () => {
		const [editProfileModal, setEditProfileModal] = useState(false);
		const editProfileToggle = () => setEditProfileModal(!editProfileModal);
		const [editBio, setEditBiod] = useState('');
		const handleBio = (event) => {
			setEditBiod(event.target.value);
		}
		const handleEdit = () => {
			EditBio(User, editBio);
			editProfileToggle();
		}
		return (
			<>
				<div className="rightbarInfo">
					<div className="rightbarInfoItem">
						<p><b>UserName:</b> {User}</p>
						<p><b>Name:</b> {name}</p>
						<p><b>Email:</b> {Email}</p>
						<p><b>Biodata:</b> {biodata}</p>
					</div>
					<button className="shareButton btn btn-success" onClick={editProfileToggle}>Edit Bio</button>
				</div>
				<Modal isOpen={editProfileModal} toggle={editProfileToggle} >
					<ModalHeader>
						<b>Edit Biodata</b>
					</ModalHeader>
					<ModalBody>
						<label htmlFor="message-text" className="col-form-label">New Bio:</label>
						<textarea className="form-control" id="message-text" onChange={handleBio} />
					</ModalBody>
					<ModalFooter>
						<button type="button" className="btn btn-secondary" onClick={editProfileToggle}>Close</button>
						<button type="button" className="btn btn-primary" onClick={handleEdit}>Save changes</button>
					</ModalFooter>
				</Modal>

			</>
		);
	};
	const newTab = () => {
		window.open(prfUrl, "_blank");
	}
	return (
		<div className="sidebar">
			<img src={prfUrl} alt="" className="sidebarImg" onClick={newTab} /><br /><br /><br />
			<div className="sidebarWrapper">
			</div>
			<div>
				<ProfileRightbar />
			</div>

		</div>
	);
}
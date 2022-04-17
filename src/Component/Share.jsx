import "./share.css";
import React from 'react'
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
// match (m:User{username:"Dhruv_001"})
//     create (n:Post{url:"assets/person/kalpit2311.jpg"})
//     create (m)-[p:posted]->(n)
//     return n,m;
export default function Share(props) {
	const plH = `What's in Your mind ${props.name}?`;
	const uploadedImage = React.useRef(null);
	const imageUploader = React.useRef(null);
	const handleImageUpload = (e) => {
		const [file] = e.target.files;
		if (file) {
			const reader = new FileReader();
			const { current } = uploadedImage;
			current.file = file;
			reader.onload = (e) => {
				current.src = e.target.result;
			}
			console.log(reader.readAsDataURL(file));
			console.log(uploadedImage);
		}
	}
	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img className="shareProfileImg" src={props.profUrl} alt="" />
					<input
						placeholder={plH}
						className="shareInput"
					/>
				</div>
				<hr className="shareHr" />
				<div className="shareBottom">
					<div className="shareOptions">
						<div className="shareOption">
							<input type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader} placeholder="create Post" />
							<img ref={uploadedImage}/>
						</div>
					</div>
					<button className=" shareButton">Share</button>
				</div>
			</div>
		</div >
	);
}
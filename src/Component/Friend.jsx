import React from 'react'
import "./friend.css";
import { Search} from "@mui/icons-material";
import Online from "./Online"

export default function Friend(props) {
	return (
		<div>
			<Search className="searchIcon" />
			<input
				placeholder="Search for friend"
				className="searchInput"
			/>
			<div className="list">
				<ul className="rightbarFriendList">
					<Online user="Dhruv_001" proUrl="/assets/person/20ce117.jpg" name="Dhruv Puvar"mainUser={props.user}/>
					<Online user="Khushi_001" proUrl="/assets/person/20ce118.jpg" name="Khushi Ranpariya"mainUser={props.user}/>
					<Online user="Dip_001" proUrl="/assets/person/20ce119.jpg" name="Dip Ruparara"mainUser={props.user}/>
					<Online user="Krishna_001" proUrl="/assets/person/20ce120.jpg" name="Achyut Krishna"mainUser={props.user}/>
					<Online user="Keyur_001" proUrl="/assets/person/20ce122.jpg" name="Keyur Sanghani"mainUser={props.user}/>
					<Online user="Shubham_001" proUrl="/assets/person/20ce123.jpg" name="Shubham Sarelia"mainUser={props.user}/>
					<Online user="Sagar_001" proUrl="/assets/person/20ce124.jpg" name="Sagar Senjaliya"mainUser={props.user}/>
					<Online user="Dhruv_002" proUrl="/assets/person/20ce125.jpg" name="Dhruv Shah"mainUser={props.user}/>
					<Online user="Hardi_001" proUrl="/assets/person/20ce126.jpg" name="Hardi Shah"mainUser={props.user}/>
					<Online user="Jay_001" proUrl="/assets/person/20ce128.jpg" name="Jay Shah"mainUser={props.user}/>
					<Online user="Het_001" proUrl="/assets/person/20ce127.jpg" name="Het Shah"mainUser={props.user}/>
					<Online user="Krima_001" proUrl="/assets/person/20ce130.jpg" name="Krima Shah"mainUser={props.user}/>
					<Online user="Darshil_001" proUrl="/assets/person/20ce137.jpg" name="Darshil Shukla"mainUser={props.user}/>
				</ul>

			</div>
		</div>

	)
}

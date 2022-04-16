import "./header.css";
import {Link} from "react-router-dom";
import { Search} from "@mui/icons-material";
export default function Header(props) {
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">Corelate</span>
			</div>
			<div className="topbarCenter">
				<div className="searchbar">
					<Search className="searchIcon" />
					<input
						placeholder="Search for friend, post "
						className="searchInput"
					/>
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarLinks">
					<Link to="/"><button className="topbarLink btn btn-danger">Logout</button></Link>
				</div>
				<img src={props.profileUrl}  alt="" className="topbarImg" />
			</div>

		</div>
	)
}

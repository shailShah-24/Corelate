import "./rightbar.css";
import Friend from "./Friend";

export default function Rightbar(props) {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <Friend user={props.userName}/>
      </div>
    </div>
  );
}
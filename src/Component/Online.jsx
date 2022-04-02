import "./online.css";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
export default function Online({user}) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
      <span>       </span><ButtonComponent cssClass='e-add'>Add</ButtonComponent>
    </li>
  );
}
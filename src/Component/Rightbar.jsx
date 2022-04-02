import "./rightbar.css";
import whoTofollow from "./whoTofollow";
import Friend from "./Friend";
import { Users } from "../dummyData";
import Online from "./Online";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
       <Friend/>
       
      </>
    );
  };

  // const ProfileRightbar = () => {
  //   return (
  //     <>
  //       <h4 className="rightbarTitle">User information</h4>
  //       <div className="rightbarInfo">
  //         <div className="rightbarInfoItem">
  //           <span className="rightbarInfoKey">City:</span>
  //           <span className="rightbarInfoValue">New York</span>
  //         </div>
  //         <div className="rightbarInfoItem">
  //           <span className="rightbarInfoKey">From:</span>
  //           <span className="rightbarInfoValue">Madrid</span>
  //         </div>
  //         <div className="rightbarInfoItem">
  //           <span className="rightbarInfoKey">Relationship:</span>
  //           <span className="rightbarInfoValue">Single</span>
  //         </div>
  //       </div>
  //       <h4 className="rightbarTitle">User friends</h4>
  //       <div className="rightbarFollowings">
  //         <div className="rightbarFollowing">
  //           <img
  //             src="assets/person/1.jpg"
  //             alt=""
  //             className="rightbarFollowingImg"
  //           />
  //           <span className="rightbarFollowingName">John Carter</span>
  //         </div>
  //         <div className="rightbarFollowing">
  //           <img
  //             src="assets/person/2.jpg"
  //             alt=""
  //             className="rightbarFollowingImg"
  //           />
  //           <span className="rightbarFollowingName">John Carter</span>
  //         </div>
  //         <div className="rightbarFollowing">
  //           <img
  //             src="assets/person/3.jpeg"
  //             alt=""
  //             className="rightbarFollowingImg"
  //           />
  //           <span className="rightbarFollowingName">John Carter</span>
  //         </div>
  //         <div className="rightbarFollowing">
  //           <img
  //             src="assets/person/4.jpeg"
  //             alt=""
  //             className="rightbarFollowingImg"
  //           />
  //           <span className="rightbarFollowingName">John Carter</span>
  //         </div>
  //         <div className="rightbarFollowing">
  //           <img
  //             src="assets/person/5.jpeg"
  //             alt=""
  //             className="rightbarFollowingImg"
  //           />
  //           <span className="rightbarFollowingName">John Carter</span>
  //         </div>
  //         <div className="rightbarFollowing">
  //           <img
  //             src="assets/person/6.jpeg"
  //             alt=""
  //             className="rightbarFollowingImg"
  //           />
  //           <span className="rightbarFollowingName">John Carter</span>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <Friend/>
        {/* {profile ? <ProfileRightbar /> : <HomeRightbar />} */}
      </div>
    </div>
  );
}
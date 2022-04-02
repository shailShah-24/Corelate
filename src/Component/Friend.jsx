import React from 'react'
import "./friend.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Users } from "../dummyData";
import Online from "./Online"
export default function Friend() {
  return (
    <div>
    <Search className="searchIcon" />
    <input
          placeholder="Search for friend"
          className="searchInput"
        />
        <div className="list">
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
           
        </ul>
       
        </div>
    </div>
    
  )
}

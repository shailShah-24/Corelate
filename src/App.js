import React, { useState } from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {FriendList,NonFriendList} from './Component/FriendList';
import Logout from './pages/logout/logout';
import './App.css';

export default function App(){
	const [userName, setUserName] = useState('');
	const handleUserName = (event)=>{
		setUserName(event.target.value);
		// handleFriends(userName);
		// handleNonFriends(userName);
	}
	const [friendList,setFriendList] = useState();
	const [nonFriendList,setNonFriendList] = useState();
	const handleFriends = (e)=>{
		setFriendList(FriendList(userName));
	}
	const handleNonFriends = (e)=>{
		setNonFriendList(NonFriendList(e));
	}
	return (
		<Router>
			<div className="nw">
				<Routes>
					<Route exact path="/" element={<Login user={userName} setUser={handleUserName}/>} />
					<Route exact path="/register" element={<Register />}>
					</Route>
					<Route exact path="/home" element={userName?<Home user={userName} setUser={handleUserName} friend={friendList} nonFriend={nonFriendList}/>:<Logout/>}>
					</Route>
					<Route exact path="/logout" element={<Logout/>}>
					</Route>
				</Routes>
			</div>
		</Router>
	);
}
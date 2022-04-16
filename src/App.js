import React, { useState } from 'react';
import Header from './Component/Header';
import Post from './Component/Post';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {FriendList,NonFriendList} from './Component/FriendList';
export default function App(){
	const [userName, setUserName] = useState('');
	const handleUserName = (event)=>{
		setUserName(event.target.value);
		handleFriends(userName);
		handleNonFriends(userName);
	}
	const [friendList,setFriendList] = useState();
	const [nonFriendList,setNonFriendList] = useState();
	const handleFriends = (e)=>{
		setFriendList(FriendList(userName));
	}
	const handleNonFriends = (e)=>{
		setNonFriendList(NonFriendList(e));
	}
	console.log(friendList);
	return (
		<Router>
			<div className="nw">
				<Routes>
					<Route exact path="/" element={<Login user={userName} setUser={handleUserName}/>} />
					<Route exact path="/register" element={<Register />}>
					</Route>
					<Route exact path="/home" element={<Home user={userName} friend={friendList} nonFriend={nonFriendList}/>}>
					</Route>
				</Routes>
			</div>
		</Router>

	);
}
import React, { Component } from 'react';
import Header from './Component/Header';
import Post from './Component/Post'; 
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      
      <Router>
<div className="nw">
           <Routes>
          <Route exact path="/" element={<Login/>} />
            <Route exact path="/register" element={<Register/>}>
            </Route>
            <Route exact path="/home" element={<Home/>}>
            </Route>
          </Routes>
          </div>
      </Router>
    
    );
  }
}
 
export default App;
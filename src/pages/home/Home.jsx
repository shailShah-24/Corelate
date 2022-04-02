import Header from "../../Component/Header";
import Sidebar from "../../Component/Sidebar";
import Feed from "../../Component/Feed";
import { Link } from "react-router-dom";
import Rightbar from "../../Component/Rightbar";
import "./home.css";

export default function Home() {
  return (
    <>
     <Header/>
     <div className="homeContainer">
     <Sidebar/>
     <Feed/>
     <Rightbar/>
     </div>
    
     </> 
   
  )
}

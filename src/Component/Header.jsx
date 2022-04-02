import "./header.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
export default function Header() {
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
        <span className="topbarLink">Homepage</span>
        <span className="topbarLink">Timeline</span>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <Chat />
          <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
          <Notifications />
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      <img src="/assets/shail.jpg" alt="" className="topbarImg"/>
    </div>

    </div>
  )
}

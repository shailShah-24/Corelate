import Post from "./Post";
import Share from "./Share";
import "./feed.css";
import { Posts } from "../dummyData";


export default function Feed(props) {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share profUrl={props.profileUrl} name={props.Name}/>
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}; 
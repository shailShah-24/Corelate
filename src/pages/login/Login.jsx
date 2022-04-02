import "./login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Corelate</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Corelate.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox" id="first">
          <div class="field-wrapper" id="final">
            <label for="email">Email</label>
            <input type="email" 
                   id="email" 
                   name="emailaddress" 
                   placeholder="Your email address.."
                   required/>
          </div>
          
          <div class="field-wrapper" id="final1">
            <label for="password">Password</label>
            <input type="password" 
                   id="password" 
                   name="password" 
                   placeholder="Your Password.."
                   required/>
          </div>
            {/* <button className="loginButton"><Link to="/home">Log in</Link></button> */}
            {/* <span className="loginForgot">Forgot Password?</span> */}
            {/* <button className="loginRegisterButton">
             <Link to="./register">Sign up</Link> 
            </button> */}
            
      <a href="#" id="link">Forgot Your Password?</a>
            <div class="action" id="action">
      <button> <Link to="./register">Sign up</Link> </button>
      <button><Link to="/home">Log in</Link></button>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}
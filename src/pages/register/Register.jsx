import "./register.css";
import { Link } from "react-router-dom";
import Login from '../login/Login';
export default function Register() {
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
            {/* <input placeholder="Username" className="loginInput" />
            <input placeholder="Firstname" className="loginInput" />
            <input placeholder="Lastname" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Confirm Password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton"> */}
             {/* </div><Link to="/">Log into Account</Link>  */}
            {/* </button> */}
            <form id="register-form" >
          <div class="field-wrapper">
            <label for="fname">First Name</label>
            <input type="text" 
                   id="fname"
                   name="firstname" 
                   placeholder="Your name.."
                   required/>
           </div>
          
          <div class="field-wrapper">
            <label for="lname">Last Name</label>
            <input type="text" 
                   id="lname" 
                   name="lastname" 
                   placeholder="Your last name.."
                   required/>
          </div>
          
          <div class="field-wrapper">
            <label for="email">Email</label>
            <input type="email" 
                   id="email" 
                   name="emailaddress" 
                   placeholder="Your email address.."
                   required/>
          </div>
          
          <div class="field-wrapper">
            <label for="password">Password</label>
            <input type="password" 
                   id="password" 
                   name="password" 
                   placeholder="Your Password.."
                   required/>
          </div>
          
          <div class="field-wrapper">
            <label for="password2">Repeat Password</label>
            <input type="password" 
                   id="password2" 
                   name="password2" 
                   placeholder="Your Password.."
                   required/>
          </div>
          
          <div>
           <Link to="/"><input className="submit-btn" type="submit" value="Sign up"/></Link> 
          </div>
          
        </form>
          </div>
        </div>
      </div>
    
  );
}
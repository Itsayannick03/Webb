import '../login/style.css';
import { FaKey } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export function Registration()
{
    return(
  <div className = "registrationpage">
  <form action="#">
    <div className="registration">
      <div className = "h1">
      <h1>Registration</h1>
      </div>
      <hr />
      <div className = "border">
          <label htmlFor="firstname"><b>First Name <div className = "first"><FaIdCard /></div></b></label>
          <input type="text" placeholder="Enter First Name" name="firstname" id="firstname" required/>

          <label htmlFor="lastname"><b>Last Name <div className = "user"><FaUser /></div></b></label>
          <input type="text" placeholder="Enter Last Name" name="lastname" id="lastname" required/>

          <label htmlFor="email"><b>Email <div className="mail"><IoMdMail /></div></b></label>
          <input type="text" placeholder="Enter email" name="email" id="email" required/>

          <label htmlFor="phonenumber"><b>Phone Number <div className="phone"><FaPhone /></div></b></label>
          <input type="text" placeholder="Enter Phone Number" name="phonenumber" id="phonenumber" required/>

          <label htmlFor="psw"><b>Password <div className="icon"><FaKey /></div></b></label> 
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required /> 

          <label htmlFor="psw-repeat"><b>Repeat Password <div className="icon"><FaKey /></div></b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
        </div>
      <button type="submit" className="registerbtn">Register</button>

      <div className="signin">
        <p>Already have an account? <a href="/login">Sign in</a>.</p>
      </div>
    </div>
  </form>
  </div>
    )
}
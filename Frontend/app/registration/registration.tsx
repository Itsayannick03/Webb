import '../login/style.css';
import { FaKey } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


export function Registration() {
  function registerUser() {
    let psw = document.getElementById("psw");
    let pswr = document.getElementById("pswr");
    if (psw != pswr) {
      window.postMessage("Password do not match");
    }
    const userData = {
      firstName: document.getElementById("firstname"),
      lastName: document.getElementById("lastname"),
      email: document.getElementById("email"),
      phoneNumber: document.getElementById("phonenumber"),
      password: document.getElementById("psw")
    };

  }
  return (
    <div className="registrationpage">
      <form action="#">
        <div className="registration">
          <div className="h1">
          </div>
          <hr />
          <div className="border">
            <div className="reg">
              <p><b>Registration</b></p>
            </div>
            <label htmlFor="firstname">First Name <div className="first"><FaIdCard /></div></label>
            <input type="text" placeholder="Enter First Name" name="firstname" id="firstname" required />

            <label htmlFor="lastname">Last Name <div className="user"><FaUser /></div></label>
            <input type="text" placeholder="Enter Last Name" name="lastname" id="lastname" required />

            <label htmlFor="email">Email <div className="mail"><IoMdMail /></div></label>
            <input type="text" placeholder="Enter email" name="email" id="email" required />

            <label htmlFor="phonenumber">Phone Number <div className="phone"><FaPhone /></div></label>
            <input type="text" placeholder="Enter Phone Number" name="phonenumber" id="phonenumber" required />

            <label htmlFor="psw">Password <div className="icon"><FaKey /></div></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

            <label htmlFor="pswr">Repeat Password <div className="icon"><FaKey /></div></label>
            <input type="password" placeholder="Repeat Password" name="pswr" id="pswr" required />

            <div className="signin">
              <p>Already have an account? <span className="login"><a href="/login"><u>Sign in</u></a>.</span></p>
            </div>
            <div className="button">
              <button onclick="registerUser()"type="submit" className="registerbtn">Register</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
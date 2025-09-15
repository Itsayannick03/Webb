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
    <img className='img1' id='1'  src="hairdresser.png" alt="Mane Attraction text" width={350} />

  <form action="#">
    <div className="registration">
      <div className = "h1">
      
      
      </div>
      <div className = "border">
          <div>
            <label htmlFor="firstname"><b>First Name </b></label>
            <input className='btn'  type="text" placeholder="Enter First Name" name="firstname" id="firstname" required/>
          </div>
          
          <div>
            <label htmlFor="lastname"><b>Last Name </b></label>
            <input className='btn' type="text" placeholder="Enter Last Name" name="lastname" id="lastname" required/>
          </div>
          
          <div>
            <label htmlFor="email"><b>Email </b></label>
            <input className='btn' type="text" placeholder="Enter email" name="email" id="email" required/>
          </div>
          
          <div>
            <label htmlFor="phonenumber"><b>Phone Number </b></label>
            <input className='btn' type="text" placeholder="Enter Phone Number" name="phonenumber" id="phonenumber" required/>
          </div>
          
          <div>
            <label htmlFor="psw"><b>Password </b></label> 
            <input className='btn' type="password" placeholder="Enter Password" name="psw" id="psw" required /> 
          </div>
          
          <div>
            <label htmlFor="psw-repeat"><b>Repeat Password </b></label>
            <input className='btn' type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
          </div>
          <button type="submit" className="registerbtn">Register</button>

        </div>

      <div className="signin">
        <p>Already have an account? <a href="/login">Sign in</a>.</p>
      </div>
    </div>
  </form>
      <img className='img2'  src="hairdresser.png" alt="Mane Attraction text" width={350} />

  </div>
    )
}
import '../login/style.css';
import { FaKey } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import React from "react";



//Function that specifically handles the registration process
export function Registration() {

  const [firstName, setFirstname] = useState<string>();
  const [lastName, setLastname] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phoneNumber, setPhonenumber] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordRepeat, setPasswordRepeat] = useState<string>();

  async function tryRegistration(e: React.FormEvent) {
    e.preventDefault();

    const user = { firstName, lastName, email, phoneNumber, password };

    if (password != passwordRepeat) {
      toast.warning("Passwords do not match"); 
      return;
    }

    const respons = fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
      credentials: 'include'
    })

    respons.then(res => {
      res.json().then(msg => {

        if(msg.status == 500)
          toast.error("Error 500: Internal Server Error");
        else if(msg.error == "Registration Sucessfull")
        {
          toast.success("Registration Sucessfull");
           window.location.href = "/";
        }
          
        else
          toast.warn(msg.error);
      
      })
    })
  }



  //Function that handles the entire process when the button is pressed

  return (
    <div className="registrationpage">
      <form onSubmit={tryRegistration}>
        <div className="registration">
          <div className="h1">
          </div>
          <hr />
          <div className="border">
            <div className="reg">
              <p><b>Registration</b></p>
            </div>
            <label htmlFor="firstname">First Name <div className="first"><FaIdCard /></div></label>
            <input type="text" placeholder="Enter First Name" value={firstName} onChange={e => setFirstname(e.target.value)} name="firstname" id="firstname" required />

            <label htmlFor="lastname">Last Name <div className="user"><FaUser /></div></label>
            <input type="text" placeholder="Enter Last Name" value={lastName} onChange={e => setLastname(e.target.value)} name="lastname" id="lastname" required />

            <label htmlFor="email">Email <div className="mail"><IoMdMail /></div></label>
            <input type="text" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} name="email" id="email" required />

            <label htmlFor="phonenumber">Phone Number <div className="phone"><FaPhone /></div></label>
            <input type="text" placeholder="Enter Phone Number" value={phoneNumber} onChange={e => setPhonenumber(e.target.value)} name="phonenumber" id="phonenumber" required />

            <label htmlFor="psw">Password <div className="icon"><FaKey /></div></label>
            <input type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} name="psw" id="psw" required />

            <label htmlFor="pswr">Repeat Password <div className="icon"><FaKey /></div></label>
            <input type="password" placeholder="Repeat Password" value={passwordRepeat} onChange={e => setPasswordRepeat(e.target.value)} name="pswr" id="pswr" required />

            <div className="signin">
              <p>Already have an account? <span className="login"><a href="/login"><u>Sign in</u></a>.</span></p>
            </div>
            <div className="button">
              <button type="submit" className="registerbtn">Register</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

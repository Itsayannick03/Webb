import '../login/style.css';
import { FaKey } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

async function emailExists()
{
  let email = document.getElementById("email");

  try
  {
    //Sending a json object with the email name to the api to check if it exists in the database
    const res = await fetch('http://localhost:5000/check-email/'+ email);
    //The api will return a exists object that is either true or false
    const data: {exists: boolean} = await res.json();

    //if the returned package i.e. the datas exists value is true we too return true
    if(data.exists)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  catch(err)
  {
    console.error(err);
  }
}

//Function that handles the entire process when the button is pressed
export function buttonPress()
{
  let psw = document.getElementById("psw");
  let pswr = document.getElementById("pswr");

  //Check if the password matches the repeat password, if not alert the user with a popup window
  if (psw != pswr) 
  {
    alert("Password do not match");
    return;
  }

  //Check if the email is already in use and if so tell the user about it
}

//Function that specifically handles the registration process
export function Registration() {
  function registerUser() {
    
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
              <button onClick={buttonPress} type="submit" className="registerbtn">Register</button>
 
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
export function Login()

{
  const name = (document.getElementById("email") as HTMLInputElement).value; // variable som är det usern skriver email
  const password = (document.getElementById("password") as HTMLInputElement).value; // samma men för password 

  async function checkPassword(email: string, password: string) {
    try {
      const response = await fetch(
        `/passwordcheck?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
        {
          method: "GET",
        }
      );
    } catch (err) {
      // optional: hantera fel här
    }
  }


    return(
        
        <div className="wrapper">
            <div className="card">  
            <form action="" >
                <h1 className="Login-title">Login</h1>
                <div className="input-box">
                    <input id="email" type="email" placeholder="Email" required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input id="password" type="password" placeholder="Password" required/>
                    <FaLock className="icon"/>
                </div>
                <div className="register-link">
                     <span>Don't have an account?</span>
                   <a className="registrationLink" href= "registration"> Registration</a>
   
                       </div>

                <button type="submit">Login</button>
                
            </form>
        </div>
    </div>
    )
}
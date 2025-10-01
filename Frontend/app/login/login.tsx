import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import React from "react";



export function Login() 
{
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  
//fetching 
  async function attemptLogin(){  
 
   const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  // read the server body:  error 
  let data: { error?: string } = {};
  try { data = await response.json(); } 
  catch 
  {
    return; // Must do something here!
  }

// Take only the server's message from the parsed JSON body, in this case the controller only sends error .

  const msg = data.error 

switch (msg) {
  case "Login successful":
    toast.success("Login successful", 
      { onClose: () => { window.location.href = "/"},
      autoClose: 1000, 
});
    //
    break;

  case "Missing fields":
    toast.warning("Missing fields")
       // 400 Bad Request – required fields were not provided.
    break;

  case "Invalid password":
    toast.warning("Invalid password")    // 401 Unauthorized – password didn't match.
    break;

  case "User not found":        // 404 Not Found – no user with that email.
    toast.warning("User not found") 
    break;

  default:
    toast.error(`Error ${response.status}` )
       // Fallback for any other message or unexpected response, the server sends
    break;

   
} 
}

  
  return (
    <div className="wrapper">
      <div className="card">
        <div >
          <h1 className="Login-title">Login</h1>
          <div className="input-box">
            <input id="email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input id="password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            <FaLock className="icon" />
          </div>
          <div className="register-link">
            <span>Dont have an account?</span>
            <a className="registrationLink" href="registration"> Registration</a>
        
 
           </div>
          <button onClick={attemptLogin} type="submit">Login</button>
        </div>
      </div>
    </div>
  )

}
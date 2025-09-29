import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { toast } from "react-toastify";


export function Login() 
{
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();
  
//fetching 
  async function attemptLogin(e: React.FormEvent) {
    e.preventDefault();
    
  
 
   const response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  // read the server body:  error 
  let data: { error?: string } = {};
  try { data = await response.json(); } 
  catch {}

// Take only the server's message from the parsed JSON body, in this case the controller only sends error .

  const msg = data.error 

switch (msg) {
  case "Login successful":
    toast.success("Login successful")  
    navigate("/");        // Success path: notify the user and navigate to the homepage.
   // navigate("/", { replace: true });
    break;

  case "Missing fields":
    toast.warning("Missing fields")
       // 400 Bad Request – required fields were not provided.

  case "Invalid password":
    toast.warning("Invalid password")    // 401 Unauthorized – password didn't match.
    break;

  case "User not found":        // 404 Not Found – no user with that email.
    toast.warning("User not found") 
    break;

  default:
    toast.error(`Error ${response.status}` )
       // Fallback for any other message or unexpected response, the server sends

   
} 
}

  
  return (
    <div className="wrapper">
      <div className="card">
        <form onSubmit={attemptLogin} >
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
            <span>Don't have an account?</span>
            <a className="registrationLink" href="registration"> Registration</a>
        
 
           </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )

}
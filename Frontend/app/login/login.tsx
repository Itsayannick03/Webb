import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { Navigate } from "react-router";
export function Login() 

{
const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();



  async function attemptLogin(email: string, password: string) {
  const response = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  // read the server body:  message or error
  let data: { message?: string; error?: string } = {};
  try { data = await response.json(); } 
  catch {}

  
  switch (response.status) {
    case 200:
      alert(data.message || "Login successful"); // message beacuse we will change it to message in the controller. 
// Navigering till Homepage här 
        break;
    case 400:
      alert(data.error || "Missing fields");
      break;
    case 401:
      alert(data.error || "Invalid password");
      break;
    case 404:
      alert(data.error || "User not found");
      break;
    case 500:
      alert(data.error || "Server error");
      break;
    default:
      alert(data.error || `Error ${response.status}`); // Other errors 
  }
}


  return (

    <div className="wrapper">
      <div className="card">
        <form action="" >
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


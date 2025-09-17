import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
export function Login()
{
    return(
        
        <div className="wrapper">
            <div className="card">  
            <form action="" >
                <h1 className="Login-title">Login</h1>
                <div className="input-box">
                    <input type="email" placeholder="Email" required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
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
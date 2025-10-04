import '../styles/profile.css'
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineKey } from "react-icons/md";
import { CgInfinity } from "react-icons/cg";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export function Profile()
{
    const [firstName, setFirstName] = useState("Firstname");
    const [LastName, setLastName] = useState("LastName");
    const [email, setEmail] = useState("Example@email.com");

    async function getData()
    {
        try
        {
            const response = await fetch("http://localhost:5000/name", {
                method: "GET",
                credentials: "include"
            });

            const data = await response.json()

            setFirstName(data.firstName)
            setLastName(data.lastName);
            setEmail(data.email)
        }
        catch
        {}
    }
    async function Logout()
    {
        try
        {
            const response = await fetch("http://localhost:5000/logout", {
            method: "POST",
            credentials: "include"
            
            });
            toast.success("Logged out", 
                  { onClose: () => { window.location.href = "/"},
                  autoClose: 1000, 
            });
        }
        catch(err)
        {
            toast.error("server error");
        }
        
    }

    useEffect(() => {
    getData();
  }, []); // empty dependency array → only run on mount
    return(
        <div className='profile-main'>
            <div className='profile-container' >
                <div className='login-header'>
                    <h1 className='profile-title'>Profile</h1>
                    
                    <FaCircleUser size={60} />
                    <div className='profile-name'>
                        <p >{firstName} </p>
                        <p>{LastName}</p>
                    </div>
                    
                    <p className='profile-email'>{email}</p>
                    
                    <button className='login-picture-button' >Change Picture</button>
                </div>

                <div className='profile-personalInfo'>
                    <p>Personal Information</p>
                    <div className='profile-name-section'>
                        
                        <div>
                            <h1>First Name</h1>
                            <input className='nameField' type="name" />
                        </div>
                        
                        <div className=''>
                            <h1>Last Name</h1>
                            <input className='nameField' type="name" />
                        </div>

                        
                    </div>

                    <div>   
                        <h1>Email</h1>
                        <input className='emailField' type="text" />
                        
                    </div>

                    <div className='iconCard'>
                        <MdOutlineKey />
                        <CgInfinity />
                    </div>

                    <div className='SaveButton'>
                        <button >Save Changes</button>
                    </div>
                    

                </div>

                <div className='password-container'>
                    <p>Password</p>
                    <div className='inputField-container'>
                        <div>
                                <label>Current Password</label>
                                <input className='nameField' type="password" />
                        </div>
                        <div>
                                <label>New Password</label>
                                <input className='nameField' type="password" />
                        </div>
                    </div>

                    <div className='confirm-password-container'>
                            <label>New Password</label>
                            <input className='nameField' type="password" />
                    </div>
                </div>

                <div className='logout-container'>
                    <button onClick={Logout} className='border-button'>Logout</button>
                </div>  
                
            </div>
        </div>
    )
}

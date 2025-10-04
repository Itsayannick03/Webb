import '../styles/profile.css'
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineKey } from "react-icons/md";
import { CgInfinity } from "react-icons/cg";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export function Profile()
{   
    const [firstNameHeader, setFirstNameHeader] = useState("");
    const [lastNameHeader, setLastNameHeader]   = useState("");
     const [emailHeader, setEmailHeader]         = useState("");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName]   = useState("");
    const [email, setEmail]         = useState("");
    const [phoneNumber, setPhoneNumber]         = useState("");


    const [password, setPassword]         = useState("");

    

    async function getData()
    {
        try
        {
            const response = await fetch("http://localhost:5000/name", {
                method: "GET",
                credentials: "include"
            });

            const data = await response.json();

            setFirstNameHeader(data.firstName);
            setLastNameHeader(data.lastName);
            setEmailHeader(data.email);

            setFirstName(data.firstName);
            setLastName(data.lastName);
            setEmail(data.email);
            setPhoneNumber(data.phoneNumber)
       
        }
        catch
        {

        }
    }

    const handleSave = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "Do you want to save your changes?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, save it!",
            cancelButtonText: "Cancel"
        });

        if (!result.isConfirmed) return;
    const res = await fetch("http://localhost:5000/user", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ firstName, lastName, email, phoneNumber })
    });

    const updated = await res.json();
    
    toast.success("Information updated");
    window.location.reload()
  };
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
                        <p >{firstNameHeader} </p>
                        <p>{lastNameHeader}</p>
                    </div>
                    
                    <p className='profile-email'>{emailHeader}</p>
                    
                    <button className='login-picture-button' >Change Picture</button>
                </div>

                <div className='profile-personalInfo'>
                    <p>Personal Information</p>
                    <div className='profile-name-section'>
                        
                        <div>
                            <h1>First Name</h1>
                            <input className='nameField' type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        
                        <div >
                            <h1>Last Name</h1>
                            <input className='nameField' type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>

                        
                    </div>

                    <div>   
                        <h1>Phone Number</h1>
                        <input className='emailField' type="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                        
                    </div>

                    <div>   
                        <h1>Email</h1>
                        <input className='emailField' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        
                    </div>

                    <div className='iconCard'>
                        <MdOutlineKey />
                        <CgInfinity />
                    </div>

                    <div className='SaveButton'>
                        <button onClick={handleSave} >Save Changes</button>
                    </div>
                    

                </div>

                <div className='password-container'>
                    <p>Password</p>
                    <div className='inputField-container'>
                        <div>
                                <label>Current Password</label>
                                <input className='nameField' type="password"/>
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

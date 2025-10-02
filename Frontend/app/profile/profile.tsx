import '../styles/profile.css'
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineKey } from "react-icons/md";
import { CgInfinity } from "react-icons/cg";

export function Profile()
{
    return(
        <div className='profile-main'>
            <div className='profile-container' >
                <div className='login-header'>
                    <h1 className='profile-title'>Profile</h1>
                    
                    <FaCircleUser size={60} />

                    <p className='profile-name'>Yannick Winkler</p>
                    <p className='profile-email'>Jaxterlp@gmail.com</p>
                    
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
                        <button>Save Changes</button>
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
                    <button className='border-button'>Logout</button>
                </div>  
                
            </div>
        </div>
    )
}

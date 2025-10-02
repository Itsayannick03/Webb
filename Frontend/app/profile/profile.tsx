import '../styles/profile.css'
import { FaCircleUser } from "react-icons/fa6";

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
                    <div className='profile-name-section'>
                        <p>Personal Information</p>
                        <input className='profile-input profile-firstName' type="firstName" />
                        <input className='profile-input profile-lastName' type="LastName" />

                    </div>

                </div>
                
            </div>
        </div>
    )
}

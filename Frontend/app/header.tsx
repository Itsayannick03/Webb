

import './styles/header.css'
import { FaCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export function Header()
{
    const [firstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");

    async function getUserCredentials()
    {
        try
        {
            const res = await fetch('http://localhost:5000/name', {
                method: 'GET',
                credentials: "include",
            });

            if( res.status != 200)
                return setFirstName("")
            const data =  await res.json()

            setFirstName(data.firstName);
            setLastName(data.lastName);
            
        }
        catch
        {
            toast.error("Error 500: Internal Server Error");
        }
    }

      useEffect(() => {
    getUserCredentials();
  }, []); // empty dependency array → only run on mount


    return(
        <div className='mainDiv'>
            
            <img className='image'  src="logo.png" alt="Mane Attraction text" width={160} />


            <div className='buttons'>
                <div>
                    <a href="/">Home</a>
                </div>

                 <div >
                    <a href="">About us</a>
                </div>

                <div className='text'>
                    <a href="">Booking</a>
                </div>
                <div >
                    <a href="">Contact</a>
                </div>
                
                <div >
                    <a href="login">Login</a>
                </div>

                
                

                
            </div>

            

            <div className='logo'>
                <a href="">
                    <div className='profile'>
                        <FaCircleUser className='icon' size={38}/>
                        <div className='name'>
                            <p>{firstName ? firstName: "Login"}</p> 
                            <p>{LastName ? LastName: "Now"}</p>
                        </div>
                        
                    </div>
                    
                    
                </a>
            </div>
        </div>
        
        

    )
}
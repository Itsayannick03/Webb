

import './styles/header.css'
import { FaCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";




export function Header()
{
    const [firstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);
    

    async function getUserCredentials()
    {
        try
        {
            
            const res = await fetch('http://localhost:5000/name', {
                method: 'GET',
                credentials: "include",
            });

            if( res.status != 200)
            {
                setLoggedIn(false);
                return setFirstName("")
            }
                
            const data =  await res.json()

            setFirstName(data.firstName);
            setLastName(data.lastName);
            setLoggedIn(true);
            
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
                
                

                
                

                
            </div>

            

            <div className='logo'>
                <div>
                { isLoggedIn?(
                        <div className='profile'>

                            <FaCircleUser className='Icon' size={38}/>
                            <div >
                                
                                <a className='name' href='/'>
                                    <p>{firstName}</p>
                                    <p>{LastName}</p>
                                </a>
                                
                            </div>
                        
                        </div>)
                    :(
                        <a href="/login">
                            <FaCircleUser className='Icon' size={45} />
                            <a className='login' href="/login">Login</a>
                        </a>)
                }
                    
                    
                </div>
            </div>
        </div>
        
        

    )
}
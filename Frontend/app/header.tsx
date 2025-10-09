

import './styles/header.css'
import { FaCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";




export function Header()
{
    const [firstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);
    

    async function getUserCredentials()
    {
        try
        {
            
            const res = await fetch('http://localhost:5000/users', {
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
                    <a href="/service">Booking</a>
                </div>
                <div >
                    <a href="">Contact</a>
                </div>
                
                

                
                

                
            </div>

            

            <div className='logo'>
                <div>
                { isLoggedIn?(
                        <div className='profile'>

                            <a href="/profile">
                                <FaCircleUser className='icon' size={35}/>
                            </a>
                            <a className='name' href='#' >
                                
                                
                                <p>{firstName}</p>
                                <p>{LastName}</p>
                               
                                
                            </a>
                        
                        </div>)
                    :(
                        <a className='profile' href="/login">
                            <CiLogin className='icon' size={30} />
                            <a className='login' href="/login">Login</a>
                        </a>)
                }
                    
                    
                </div>
            </div>
        </div>
        
        

    )
}
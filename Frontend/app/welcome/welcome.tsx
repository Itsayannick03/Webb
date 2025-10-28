import React from "react";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";


import '../styles/homepage.css'

export function Welcome() {
  const [isLoggedIn, setLogin] = useState(false);
  
  function getUser()
  {
    const user = Cookies.get("user");

    if(user)
      setLogin(true);
    else
      setLogin(false);
  }

   useEffect(() => {
    getUser();
      }, []);

  return (

        <div className="homepage">
            <div className="home-container">
                <div className="home-content">
                    <h1 className="home-title">We are <br/>The Mane Attraction</h1>
                    {isLoggedIn ?  <a className="home-button" href="/booking">Book now</a> :  <a className="home-button" href="/login">Book Now</a>}
                   
                    </div>
                 </div>
            </div>

    );
}

import "../styles/confirmation.css"
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


export function Confirmation() 
{
    const [services, setServices] = useState<string[]>([]);
        console.log("test1")

    useEffect(() => {
        console.log("test2");
        const cookieData = document.cookie;
        console.log(document.cookie);


        if(cookieData)
        {
            try
            {
                setServices(JSON.parse(cookieData));
                        console.log("test3")

            }
            catch(err)
            {
                toast.error("Invalid Service cookie")
            }

        }
    }, []);

    return(
        <div className="confirmation-main">
            <div className="conf-main-container">
                <div className="conf-header">
                    <h1>Booking Confirmation</h1>
                    <p>Please review your booking details before confirming.</p>
                </div>
                <div className="conf-data-container">
                    <div className="services-container">
                        <h1>Services</h1>
                        {services.length > 0 ? (services.map((s, i) => <p key={i}>{s}</p>)) : (<p>No Services selected</p>)}
                    </div>

                    <div className="date-container">
                        <h1>Date</h1>
                        <p>19 Oktober   14:00</p>
                    </div>
                    
                </div>
                
                <div className="conf-price-container">
                    <h1>Total</h1>
                    <p>350kr</p>
                </div>
                <div className="conf-button-container">
                    <button className="conf-button-back">Go Back</button>
                    <button className="conf-button-confirm">Confirm Booking</button>
                </div>
               
               
            </div>
        </div>
    )
   
}
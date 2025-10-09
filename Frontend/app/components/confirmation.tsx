
import "../styles/confirmation.css"
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


export function Confirmation() 
{
    const [serviceIDs, setServiceIDs] = useState<string[]>([]);
    const [services, setServices] = useState<string[]>([]);

    async function fetchServiceData()
    {
        try
        {
            serviceIDs.forEach(serviceID => 
            {
                try
                {
                    const res = await fetch("http://localhost:5000/services/data", {
                        method: "GET",
                        credentials: "include",
                        body: serviceID
                    });

                    const service = await res.json();

                    setServices([...services, service]);
                }
                
            });
        }
        catch(err)
        {
            toast.error("error");
        }
    }

    async function fetchServices()
    {
        try
        {
            const res = await fetch("http://localhost:5000/services/cookie", {
                method: 'GET',
                credentials: 'include'
            });

            const data = await res.json();

            if(res.status != 200)
            {
                toast.warning(data.error);
                return;
            }
                

            setServiceIDs(data.services);
            
        }
        catch(err)
        {
            toast.error("internal server error");
        }
    }
    useEffect(() => {
       
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
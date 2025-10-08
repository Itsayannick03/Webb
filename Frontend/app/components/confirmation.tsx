import React from "react";
import confirmation from "../styles/confirmation.css"

export function Confirmation() 
{
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
                        <p>Haircut (30 min)</p>
                        <p>Color (90 min)</p>
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
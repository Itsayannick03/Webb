import '../booking/booking.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiScissorsThin } from "react-icons/pi";
import { PiPaintBrushHouseholdThin } from "react-icons/pi";
import { PiHairDryerThin } from "react-icons/pi";

export function Booking() {




    async function push() {
        let services: Number[] = [];

        //Lägg till en fetch för att få ID nummret av databas service objekten som jag har lagt till.
        //Funktionen nedanför ska sedan lägga till ID nummren i service arrayn.
        //Använd /service/<namn>
        //Namnen är Color, Styling och Cut
        //Se det här som en friendly remeinder och glöm inte bort att du är AWSOME, you got this GIRL!
        if (haircut) {
            const cutResponse = await fetch("http://localhost:5000/services/Cut", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const cutData = await cutResponse.json()

            const cutID = cutData._id;
            services.push(cutID);

        }
        if (color) {
            const colorResponse = await fetch("http://localhost:5000/services/Color", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })

            const colorData = await colorResponse.json()

            const stylingID = colorData._id;
            services.push(stylingID)
        }
        if (styling) {
            const stylingResponse = await fetch("http://localhost:5000/services/Styling", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            const stylingData = await stylingResponse.json()

            const stylingID = stylingData._id;
            services.push(stylingID)
        }
        const response = await fetch('http://localhost:5000/bookings/select-services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ services }),
            credentials: 'include'
        })
        const data = await response.json()

        if (response.ok) {
            navigate('/#');                      // navigate to calendar after waiting for api
        } else {
            alert(data.error || 'Failed to create booking');
        }
    }

    const [haircut, setHaircut] = useState(false);
    const [color, setColor] = useState(false);          //useState tracks if the services are selected
    const [styling, setStyling] = useState(false);
    const navigate = useNavigate();

    const Confirm = haircut || color || styling;        // confirm is true if any of the services are selected

    return (
        <div>
            <div className="header">
                <h1>What do you want to do?</h1>
            </div>

            <div className="bookingsite">
                <div className='button-wrapper'>
                    <div                                                            // ? equivalent to if..else, if haircut true selected
                        className={`button-container ${haircut ? 'selected' : ''}`} // $ equivalent to + in python 
                        //() => equivalent to function(), when clicked setHaircut to not styling
                        onClick={() => setHaircut(!haircut)}>
                        <PiScissorsThin size={50} />
                        <button>Haircut</button>
                    </div>
                    <div
                        className={`button-container ${color ? 'selected' : ''}`}
                        onClick={() => setColor(!color)}>
                        <PiPaintBrushHouseholdThin size={50} />
                        <button>Color</button>
                    </div>
                    <div
                        className={`button-container ${styling ? 'selected' : ''}`}
                        onClick={() => setStyling(!styling)}>
                        <PiHairDryerThin size={50} />
                        <button>Styling</button>
                    </div>
                </div>
            </div>
            <div className="confirm-button">
                <button onClick={push} disabled={!Confirm}>Confirm</button>
            </div>
        </div>   //button is disabled when confirm is false
    )
}
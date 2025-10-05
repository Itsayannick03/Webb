import '../booking/booking.css';
import { useState } from "react";
import { PiScissorsThin } from "react-icons/pi";
import { PiPaintBrushHouseholdThin } from "react-icons/pi";
import { PiHairDryerThin } from "react-icons/pi";

export function Booking() {


    let services: Number[] = [];

    async function push() {
        if (haircut) {
            services.push(1)
        }
        if (color) {
            services.push(2)
        }
        if (styling) {
            services.push(3)
        }
        const response = await fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({services}),
            credentials: 'include'
        })
        const data = await response.json()
        alert(data.error)
    }


    const [haircut, setHaircut] = useState(false);
    const [color, setColor] = useState(false);          //useState tracks if the services are selected
    const [styling, setStyling] = useState(false);

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
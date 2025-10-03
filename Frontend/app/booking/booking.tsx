import '../booking/booking.css';

import { PiScissorsThin } from "react-icons/pi";
import { PiPaintBrushHouseholdThin } from "react-icons/pi";
import { PiHairDryerThin } from "react-icons/pi";
export function Booking() {
    return (
        <div>
            <div className="header">
                <h1>What do you want to do?</h1>
            </div>

            <div className="bookingsite">
                <div className='button-wrapper'>
                    <div className='button-container'>
                        <PiScissorsThin size={50} />
                        <button>Haircut</button>
                    </div>
                    <div className='button-container'>
                        <PiPaintBrushHouseholdThin size={50}/>
                        <button>Color</button>
                    </div>
                    <div className='button-container'>
                        <PiHairDryerThin size={50} />
                       <button>Styling</button>
                    </div>
                </div>
            </div>
            <div className="confirm-button">
                <button id="confirm" disabled>Confirm</button>
            </div>
        </div>
    )
}
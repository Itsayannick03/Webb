import '../booking/booking.css';

import { PiScissorsThin } from "react-icons/pi";
import { PiPaintBrushHouseholdThin } from "react-icons/pi";
import { PiHairDryerThin } from "react-icons/pi";
import { PiOfficeChairThin } from "react-icons/pi";
export function Booking() 
{
    return(
        <div className="bookingsite">
            <div className="head">
            <h1><b>What do you want to do?</b></h1>
            </div>
            <div className="border">
            <div className="button">

            <a href="#">
            <button type="button" className="haircut">
            <div className="icon"><PiScissorsThin /></div>
            <div className="text">Haircut </div>
            </button>
            </a>
            
            <a href="#">
            <button type="button" className="color">
            <div className="icon"><PiPaintBrushHouseholdThin /></div>
            <div className="text">Color </div>
            </button>
            </a>

            <a href="#">
            <button type="button" className="hairandcolor">
            <div className="icon1"><PiOfficeChairThin /></div>
            <div className="text1">Haircut & Color </div>
            </button>
            </a>

            <a href="#">
            <button type="button" className="styling">
            <div className="icon"><PiHairDryerThin /></div>
            <div className="text">Styling </div>
            </button>
            </a>
            </div>
            </div>
        </div>
    )
}
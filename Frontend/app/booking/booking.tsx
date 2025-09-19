import '../booking/booking.css';

import { BsScissors } from "react-icons/bs";
import { LiaBrushSolid } from "react-icons/lia";
import { PiHairDryerBold } from "react-icons/pi";
import { GiComb } from "react-icons/gi";
export function Booking() 
{
    return(
        <div className="bookingsite">
            <div className="head">
            <h1><b>What do you want to do?</b></h1>
            </div>
            <div className="border">
            <div className="button">

            <button type="button" className="haircut">
            <div className="icon"><BsScissors /></div>
            <div className="text">Haircut </div>
            </button>
            
            <button type="button" className="color">
            <div className="icon"><LiaBrushSolid /></div>
            <div className="text">Color </div>
            </button>

            <button type="button" className="hairandcolor">
            <div className="icon1"><GiComb /></div>
            <div className="text1">Haircut & Color </div>
            </button>

            <button type="button" className="styling">
            <div className="icon"><PiHairDryerBold /></div>
            <div className="text">Styling </div>
            </button>
            </div>
            </div>
        </div>
    )
}
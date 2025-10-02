import React from "react";
import "./calender.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useState } from "react";

export function Calender () {

const [cursor, setCursor] = useState(new Date());

const prev = () =>
    setCursor(d => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  const next = () =>
    setCursor(d => new Date(d.getFullYear(), d.getMonth() + 1, 1));



    return (

            <div className="calender-header">
            <header>

                <button type = "button" className="nav-btn" onClick= {prev} aria-label="Previous month">
            <GrPrevious />
        </button>

         <h2 className="month-label">{}</h2>

            <button type = "button" className="nav-btn" onClick={next}  aria-label="Next month">
          <GrNext />
        </button>
            </header>

        <div className="days">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wen</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>






        </div>















        </div>









    ); 




} 




import React, { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./Calendar.css";

export function Calendar() {

  //const [bookingTimes, setbookingTimes] = useState<Date[]>(); //för att den ska kunna nås globalt 
const [date, setdate] = useState<Date[]>();

//fetching
async function confirm () {

const res = await fetch ('http://localhost:5000/bookings/select-date',{
   method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date }),
    credentials: "include"         
})

let data: { error?: string } = {};
  try { data = await res.json(); } 
  catch 
  {
    return; 
  }

if (res.status != 201){

  alert(data.error)
}   

}
  // fetching
async function getAllTimeSlots() {
  const res = await fetch('http://localhost:5000/bookings', { 
    credentials: 'include',
  }); 
  
  const bookedTimes: string[] = await res.json(); // <-- parse the JSON body
  return bookedTimes;
}

// return true if weekend
  const isWeekend = (d: Date) => 
    {
    const n = d.getDay(); // 0 = Sun, 6 = Sat
    return n === 0 || n === 6;
  };


const bookedTimes = getAllTimeSlots();

  //  create slots (09:00–16:00) if Mon–Fri, else nothing weekend 
  const createTimeSlots = (d: Date, bookedTimes: string[] = []): string[] => {
    
    if (isWeekend(d)) return []; // no slots on Sat/Sun
    const times: string[] = [];
    for (let h = 9; h < 17; h++) {
      const label = `${String(h).padStart(2, "0")}:00`;
      if (bookedTimes?.includes(label)) continue; // <-- skip booked  
      times.push(label);
    }
    return times;
  };
    
  // Get the Monday of the week for a given date
    const getMonday = (d: Date): Date => {
    const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const day = (x.getDay() + 6) % 7; // 0=Mon..6=Sun
    x.setDate(x.getDate() - day);
    x.setHours(0, 0, 0, 0);
    return x;
  };
   // Return a new date moved by n days
  const addDays = (d: Date, n: number): Date => {
    const x = new Date(d);
    x.setDate(x.getDate() + n);
    return x;
  };
  
    //  ISO week number (1..52)
  const isoWeekNumber = (d: Date): number => {
    const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dayNum = date.getUTCDay() || 7;
    date.setUTCDate(date.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    const diffDays = (date.getTime() - yearStart.getTime()) / 86_400_000;
    return Math.ceil((diffDays + 1) / 7);
  };
  
  // ISO week-year 
  const isoWeekYear = (d: Date): number => {
    const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dayNum = date.getUTCDay() || 7;
    date.setUTCDate(date.getUTCDate() + 4 - dayNum);
    return date.getUTCFullYear();
  };
  // Show a week range
  const formatWeekRangeNoYear = (start: Date, end: Date, locale = "en-GB"): string => {
    const sameMonth = start.getMonth() === end.getMonth();
    const day = (d: Date) => d.getDate();
    const mon = (d: Date) => d.toLocaleDateString(locale, { month: "short" }).toUpperCase();
    return sameMonth
      ? `${day(start)} – ${day(end)} ${mon(end)}`
      : `${day(start)} ${mon(start)} – ${day(end)} ${mon(end)}`;
  };

// The Monday we are showing (the “anchor” of the view)
  const [anchor, setAnchor] = useState<Date>(getMonday(new Date()));
  
    // Do not allow going earlier than the current week
  const minAnchor = getMonday(new Date()); // do not go earlier than this

  // All 7 dates for the current week (Mon..Sun)
  const days = Array.from({ length: 7 }, (_, i) => addDays(anchor, i));
  const sunday = addDays(anchor, 6);
  
   // Big title line above the grid
  const rangeLabel = formatWeekRangeNoYear(anchor, sunday);
  
  // “WEEK N · YEAR” (year is the ISO week-year)
  const weekNo = isoWeekNumber(anchor);
  const weekYear = isoWeekYear(anchor);
  
  // Labels for the header row
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Are we already at (or before) the minimum week?
  const atMinWeek = anchor.getTime() <= minAnchor.getTime();

   // Go to the previous week (blocked at current week)
  const goPrev = () => {
    if (atMinWeek) return;               
    setAnchor(addDays(anchor, -7));
  };
  
  // Go to the next week
  const goNext = () => setAnchor(addDays(anchor, 7));

  

  return (
  <div className="wk">
    <div className="wk__top">
      <button
        className="wk__link"
        type="button"
        aria-label="Previous week"
        onClick={goPrev}
        disabled={atMinWeek}
      >
        <GrPrevious /> Earlier
      </button>

      <div className="wk__range">
        <div className="wk__title">{rangeLabel}</div>
        <div className="wk__subtitle">WEEK {weekNo} · {weekYear}</div>
      </div>
      <button className="wk__link" type="button" aria-label="Next week" onClick={goNext}
      >
        Later <GrNext />
      </button>
    </div>

    <div className="wk__hdr">
      {weekdays.map((name, i) => (
        <div key={name} className={`wk__colhdr ${i >= 5 ? "is-weekend" : ""}`}>
          <div className="wk__weekday">{name}</div>
          <div className="wk__daynum">{days[i].getDate()}</div>
        </div>
      ))}
    </div>

    {/* GRID WITH TIME SLOTS */}
    <div className="wk__grid">
      {days.map((d, i) => (
        <div key={i} className={`wk__daybox ${i >= 5 ? "is-weekend" : ""}`}>
          {!isWeekend(d) && (
            <div className="slots-col">
              {createTimeSlots(d).map((t) => (
                <button key={t} className="slot">
                  <div className="slot__time">{t}</div>
                  
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    <div className="Confirm-btn">
      <button onClick={Calendar} type="submit">Confirm</button>
    </div>
  </div>
);

}
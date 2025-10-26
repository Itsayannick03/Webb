import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./admin.css";

export function Admin() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      const res = await fetch("http://localhost:5000/admin/bookings", {
        credentials: "include",
      });
      const data = await res.json();
     
      
      if (res.status != 200) {
        toast.warning(data.error);
        return;
        }
        setBookings(data);

    }
    
    fetchBookings();
  }, []);}
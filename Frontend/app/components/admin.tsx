import React, { useEffect, useState } from "react";
import "./admin.css";

export function Admin() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      const response = await fetch("http://localhost:5000/admin/bookings", {
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setBookings(data);
      } else {
        alert(data.error || "Access denied");
      }
    }
    fetchBookings();
  }, []);}
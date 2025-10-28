import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../styles/admin.css";

export function Admin() {
 const [bookings, setBookings] = useState<
  {
    _id: string;
    userID: { firstName: string; lastName: string; email: string };
    date: string;
    services: { name: string }[];
  }[]
>([]);


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
  }, []);


return (
  <div className="Admin">
    <div className="card">
      <h1 className="Title">All Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="bookings-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Date</th>
              <th>Services</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id}>
                <td>
                  {b.userID.firstName} {b.userID.lastName}
                </td>
                <td>{b.userID.email}</td>
                <td>{new Date(b.date).toLocaleString()}</td>
                <td>{b.services.map((s) => s.name).join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
);
};

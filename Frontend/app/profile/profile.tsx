import '../styles/profile.css'
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineKey } from "react-icons/md";
import { CgInfinity } from "react-icons/cg";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import React from "react"

export function Profile() {
    interface Booking {
        _id: string;
        date: string;
        totalPrice: string;
        services: Array<{
            name: string;
            price: number;
            duration: number;
        }>;
    }

    const [firstNameHeader, setFirstNameHeader] = useState("");
    const [lastNameHeader, setLastNameHeader] = useState("");
    const [emailHeader, setEmailHeader] = useState("");


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);


    async function getData() {
        try {
            const response = await fetch("http://localhost:5000/users", {
                method: "GET",
                credentials: "include"
            });

            const data = await response.json();

            setFirstNameHeader(data.firstName);
            setLastNameHeader(data.lastName);
            setEmailHeader(data.email);

            setFirstName(data.firstName);
            setLastName(data.lastName);
            setEmail(data.email);
            setPhoneNumber(data.phoneNumber);

        }
        catch {
            toast.error("Error 500");
        }
    }

    async function fetchBookings() {
        try {
            setLoading(true);
            const res = await fetch("http://localhost:5000/bookings/user", {
                method: 'GET',
                credentials: 'include'
            });
            const data = await res.json();
            if (res.ok) {
                setBookings(data);
            } else {
                toast.error("Failed to fetch test");
            }
        } catch {
            toast.error("Failed to fetch bookings");
        } finally {
            setLoading(false);
        }
    }

    async function deleteBooking(bookingId: string) {
        try {

            const res = await fetch(`http://localhost:5000/bookings/delete/${bookingId}`, {
                method: 'DELETE',
                credentials: 'include',
            });
            const data = await res.json();

            if (res.ok) {
                toast.success("Booking deleted");
                await fetchBookings();

            } else {
                toast.error(data.error);
            }
        } catch {
            toast.error("Failed to delete")
        }
    }

    const handleSave = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "Do you want to save your changes?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, save it!",
            cancelButtonText: "Cancel"
        });

        if (!result.isConfirmed) return;

        const res = await fetch("http://localhost:5000/users", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ firstName, lastName, email, phoneNumber, currentPassword, newPassword })
        });

        const data = await res.json();

        if (res.status != 200)
            return toast.warning(data.error)

        toast.success("Information saved",
            {
                onClose: () => { window.location.reload() },
                autoClose: 500,
            });


    };

    async function Logout() {
        try {
            await fetch("http://localhost:5000/users/logout", {
                method: "POST",
                credentials: "include"
            });
            toast.success("Logged out",
                {
                    onClose: () => { window.location.href = "/" },
                    autoClose: 1000,
                });
        }
        catch {
            toast.error("server error");
        }
    }

    useEffect(() => {
        getData();
        fetchBookings();
    }, []); // empty dependency array → only run on mount


    return (
        <div className='profile-main'>
            <div className='profile-container' >
                <div className='login-header'>
                    <h1 className='profile-title'>Profile</h1>

                    <FaCircleUser size={60} />
                    <div className='profile-name'>
                        <p >{firstNameHeader} </p>
                        <p>{lastNameHeader}</p>
                    </div>

                    <p className='profile-email'>{emailHeader}</p>

                    <button className='login-picture-button' >Change Picture</button>
                </div>

                <div className='bookings-container'>
                    <p><b>My Bookings</b></p>
                    {loading ? (
                        <p>Loading bookings...</p>
                    ) : bookings.length === 0 ? (
                        <p>No bookings found</p>
                    ) : (
                        <div className="bookings-list">
                            {bookings.map((booking) => (
                                <div key={booking._id} className="booking-card">
                                    <div className="booking-info">
                                        <h3><i>Booking Date:</i></h3>
                                        <p>{new Date(booking.date).toLocaleString()}</p>

                                        <h3><i>Services:</i></h3>
                                        {booking.services && booking.services.length > 0 ? (
                                            <ul>
                                                {booking.services.map((service, index) => (
                                                    <li key={index}>
                                                        {service.name} - {service.duration}min - {service.price}kr
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>No services information available</p>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => deleteBooking(booking._id)}
                                        className="delete-booking-btn"><b>Delete Booking</b>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className='profile-personalInfo'>
                    <p>Personal Information</p>
                    <div className='profile-name-section'>

                        <div>
                            <h1>First Name</h1>
                            <input className='nameField' type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>

                        <div >
                            <h1>Last Name</h1>
                            <input className='nameField' type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>


                    </div>

                    <div>
                        <h1>Phone Number</h1>
                        <input className='emailField' type="phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

                    </div>

                    <div>
                        <h1>Email</h1>
                        <input className='emailField' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    </div>

                    <div className='iconCard'>
                        <MdOutlineKey />
                        <CgInfinity />
                    </div>

                    <div className='SaveButton'>
                        <button onClick={handleSave} >Save Changes</button>
                    </div>


                </div>

                <div className='password-container'>
                    <p>Password</p>
                    <div className='inputField-container'>
                        <div>
                            <label>Current Password</label>
                            <input className='nameField' type="password" onChange={(e) => setCurrentPassword(e.target.value)} />
                        </div>

                    </div>

                    <div className='confirm-password-container'>
                        <label>New Password</label>
                        <input className='nameField' type="password" onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                </div>

                <div className='logout-container'>
                    <button onClick={Logout} className='border-button'>Logout</button>
                </div>

            </div>
        </div>
    )
}

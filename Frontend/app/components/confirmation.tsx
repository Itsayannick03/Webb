
import "../styles/confirmation.css"
import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';
import { p } from "node_modules/@react-router/dev/dist/routes-CZR-bKRt";


export function Confirmation() {
    const [serviceIDs, setServiceIDs] = useState<string[]>([]);
    const [services, setServices] = useState<any[]>([]);
    const [date, setDate] = useState<Date>();
    const [price, setPrice] = useState<Number>(0);
    async function parse() {

    }

    async function notification() {
        try {
            const userRes = await fetch("http://localhost:5000/users", {
                method: 'GET',
                credentials: 'include',

            });

            if (!userRes.ok) {
                toast.error("Failed to fetch user data");
                return;
            }

            const userData = await userRes.json();
            const userName = userData.firstName || "Customer";

            var templateParams = {
                name: userName,
                notes: 'Thank You For Booking With Us!',
            };

            emailjs.send('service_5lu0xj8', 'template_dog8kkc', templateParams).then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
        } catch (error) {
            console.log("Error sending email")
        }

        const form = useRef<HTMLFormElement>(null);


        const sendEmail = (e: React.FormEvent) => {
            e.preventDefault();

            if (!form.current) {
                console.error('Form reference is null');
                return;
            }
            emailjs.sendForm('service_5lu0xj8', 'template_dog8kkc', form.current, {
                publicKey: 'pbjfnm0OSx7-UFRZ0',
            })
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Confirmation email sent!');
                })
                .catch((error) => {
                    console.error('FAILED...', error);
                    alert('Failed to send email.');
                });
        };
    }

    async function fetchDate() {
        try {
            const res = await fetch("http://localhost:5000/bookings/getDate", {
                method: 'GET',
                credentials: 'include'
            });
            const data = await res.json();
            if (res.status != 200) {
                toast.error("error");
                return;
            }
            setDate(data.date);
        } catch (err) {
            console.log("test");
            toast.error("error");
            console.log("fuck you", err);
        };
    }
   

    async function fetchServices() {
        try {
            const res = await fetch("http://localhost:5000/services/cookie", {
                method: 'GET',
                credentials: 'include'
            });

            const data = await res.json();

            if (res.status != 200) {
                toast.warning(data.error);
                return;
            }

            setServiceIDs(data.services);

        }
        catch (err) {
            toast.error("internal server error");
        }
    }
    useEffect(() => {
        fetchServices();
        fetchDate();
    }, []);
    useEffect(() => {
        if (serviceIDs.length > 0) {
            fetchServiceData();
        }
    }, [serviceIDs]);

    async function fetchServiceData() {
        try {
            const servicePromises = serviceIDs.map(async (serviceID) => {
                const res = await fetch("http://localhost:5000/services/data", {
                    method: "POST",  
                    credentials: "include",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ serviceID })  
                });

                if (res.ok) {
                    const data = await res.json();
                    return {
                        name: data.Name,
                        price: data.Price,
                        duration: data.Duration,
                    };
                }

                return null;
            });

            const servicesData = await Promise.all(servicePromises);

            setServices(servicesData.filter(service => service !== null));

        } catch (err) {
            toast.error("Could not fetch services");
        }
    }

    return (
        <div className="confirmation-main">
            <div className="conf-main-container">
                <div className="conf-header">
                    <h1>Booking Confirmation</h1>
                    <p>Please review your booking details before confirming.</p>
                </div>
                <div className="conf-data-container">
                    <div className="services-container">
                        <h1>Services</h1>
                        {services.length > 0 ? (services.map((s, i) => <p key={i}>{s.name}</p>)) : (<p>No Services selected</p>)}
                    </div>

                    <div className="date-container">
                        <h1>Date</h1>
                        <p>{date ? new Date(date).toLocaleString() : 'No date selected'}</p>
                    </div>

                </div>

                <div className="conf-price-container">
                    <h1>Total</h1>
                    <p>350kr</p>
                </div>
                <div className="conf-button-container">
                    <button className="conf-button-back">Go Back</button>
                    <button onClick={notification} className="conf-button-confirm">Confirm Booking</button>
                </div>
            </div>
        </div>
    )

}
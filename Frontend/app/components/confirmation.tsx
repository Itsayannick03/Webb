
import "../styles/confirmation.css"
import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';


export function Confirmation() {
    const [serviceIDs, setServiceIDs] = useState<string[]>([]);
    const [services, setServices] = useState<any[]>([]);
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

    }, []);

    async function fetchServiceData() {
        try {
            serviceIDs.forEach(serviceID => {
                try {
                    const res = fetch("http://localhost:5000/services/data", {
                        method: "GET",
                        credentials: "include",
                        body: serviceID
                    });

                    res.then((data) => {
                        const serviceData = {
                            name: (data as any).Name,
                            price: (data as any).Price,
                            duration: (data as any).Duration,
                        };
                        setServices(services => [...services, serviceData]);
                    });
                }
                catch (err) {
                    toast.error("error");
                }
            });
        }
        catch (err) {
            toast.error("error");
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
                        {services.length > 0 ? (services.map((s, i) => <p key={i}>{s}</p>)) : (<p>No Services selected</p>)}
                    </div>

                    <div className="date-container">
                        <h1>Date</h1>
                        <p>19 Oktober   14:00</p>
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
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init('pbjfnm0OSx7-UFRZ0');

export function Notification() {
    const form = useRef<HTMLFormElement>(null);
    

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) {
            console.error('Form reference is null');
            return;
        }
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
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

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Your Name" required />
                <input type="email" name="user_email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message"></textarea>
                <button type="submit">Send Confirmation</button>
            </form>
        </div>
    );
}
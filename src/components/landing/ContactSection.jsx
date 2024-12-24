import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactSection.css';

const ContactSection = () => {
    const form = useRef();
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

        try {
            await emailjs.sendForm(
                'YOUR_SERVICE_ID', // Je EmailJS service ID
                'YOUR_TEMPLATE_ID', // Je EmailJS template ID
                form.current,
                'YOUR_PUBLIC_KEY' // Je EmailJS public key
            );

            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: 'Bericht succesvol verzonden!' }
            });

            // Reset form
            form.current.reset();

            // Reset status after 5 seconds
            setTimeout(() => {
                setStatus({
                    submitted: false,
                    submitting: false,
                    info: { error: false, msg: null }
                });
            }, 5000);

        } catch (error) {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: 'Er is iets misgegaan. Probeer het later opnieuw.' }
            });
        }
    };

    return (
        <section className="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Laten we samenwerken</h3>
                        <p>Heb je een project in gedachten? Ik help je graag verder!</p>
                        <div className="contact-details">
                            <a href="mailto:leverwebdesign@gmail.com" className="contact-item">
                                <i className="fas fa-envelope"></i>
                                leverwebdesign@gmail.com
                            </a>
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                +31 6 39 13 10 17
                            </div>
                        </div>
                    </div>
                    <form ref={form} onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="user_name"
                                placeholder="Naam" 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="user_email"
                                placeholder="Email" 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="message"
                                placeholder="Je bericht" 
                                required
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            disabled={status.submitting}
                        >
                            {status.submitting ? 'Versturen...' : 'Verstuur'}
                        </button>
                        {status.info.msg && (
                            <div className={`form-status ${status.info.error ? 'error' : 'success'}`}>
                                {status.info.msg}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection; 
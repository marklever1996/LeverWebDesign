import React, { useRef, useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
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
                'service_fd7h5h8',
                'template_2yrlkwl',
                form.current,
                'M2c2z4liNUif_gAAl' // Vervang dit met je publieke key van EmailJS
            );

            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: 'Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.' }
            });

            form.current.reset();

            setTimeout(() => {
                setStatus({
                    submitted: false,
                    submitting: false,
                    info: { error: false, msg: null }
                });
            }, 5000);

        } catch (error) {
            console.error('EmailJS error:', error);
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: 'Er is iets misgegaan. Probeer het later opnieuw of neem direct contact op.' }
            });
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contact</h1>
                <p>Heb je een vraag? Ik help je graag verder!</p>
            </div>

            <div className="contact-container">
                <div className="contact-grid">
                    <div className="contact-info-section">
                        <div className="map-container">
                            <iframe
                                title="Locatie Lever Web Design"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2390.689!2d6.5673!3d53.2308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c9cd7e9d9b3d47%3A0x2a0b0fe0c4d4b8e9!2sHyacinthstraat%20198%2C%209713%20XP%20Groningen!5e0!3m2!1snl!2snl!4v1234567890"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="contact-cards">
                            <div className="info-card">
                                <FaEnvelope className="icon" />
                                <a href="mailto:info@leverwebdesign.nl">
                                    info@leverwebdesign.nl
                                </a>
                            </div>

                            <div className="info-card">
                                <FaWhatsapp className="icon" />
                                <a href="https://wa.me/31639131017" target="_blank" rel="noopener noreferrer">
                                    +31 6 39 13 10 17
                                </a>
                            </div>

                            <div className="info-card">
                                <FaLinkedin className="icon" />
                                <a href="https://www.linkedin.com/in/mark-lever-5b2b07121/" target="_blank" rel="noopener noreferrer">
                                    Mark Lever
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-section">
                        <form ref={form} onSubmit={handleSubmit} className="contact-form">
                            <h2>Stuur een bericht</h2>
                            <p>Vul het contactformulier in en ik neem zo snel mogelijk contact met je op.</p>
                            
                            <div className="form-group">
                                <label htmlFor="user_name">Naam</label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    required
                                    placeholder="Naam"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="user_email">Email</label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    required
                                    placeholder="Email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Telefoon</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Telefoonnummer"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Bericht</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="Je bericht..."
                                    rows="5"
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="submit-button"
                                disabled={status.submitting}
                            >
                                {status.submitting ? 'Verzenden...' : 'Verstuur'}
                            </button>

                            {status.info.msg && (
                                <div className={`form-status ${status.info.error ? 'error' : 'success'}`}>
                                    {status.info.msg}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

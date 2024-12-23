import React from 'react';

const ContactSection = () => {
    return (
        <section className="contact">
            <h2>Contact</h2>
            <div className="contact-content">
                <div className="contact-info">
                    <h3>Neem contact op</h3>
                    <p>Heb je een project in gedachten? Laten we erover praten!</p>
                    <div className="contact-details">
                        <p>📧 info@leverwebdesign.nl</p>
                        <p>📱 +31 6 12345678</p>
                        <p>📍 Groningen, Nederland</p>
                    </div>
                </div>
                <form className="contact-form">
                    <input type="text" placeholder="Naam" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Je bericht" required></textarea>
                    <button type="submit">Verstuur</button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection; 
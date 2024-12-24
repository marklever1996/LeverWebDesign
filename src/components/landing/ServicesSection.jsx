import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
    const services = [
        {
            title: "Web Development",
            description: "Custom websites en webapplicaties gebouwd met moderne technologieën",
            icon: "🚀"
        },
        {
            title: "UI/UX Design",
            description: "Gebruiksvriendelijke en aantrekkelijke interfaces die converteren op alle apparaten",
            icon: "🎨"
        },
        {
            title: "Web Optimalisatie", 
            description: "Snelle, geoptimaliseerde websites voor betere prestaties",
            icon: "⚡"
        }
    ];

    return (
        <section className="services">
            <h2>
                <span>Wat</span>{' '}
                <span>ik doe</span>
            </h2>
            <p>Ik ben gespecialiseerd in het ontwerpen en ontwikkelen van websites en webapplicaties voor kleine bedrijven. 
            Met mijn kennis en ervaring in deze vakgebieden, kan ik u helpen bij het creëren van een unieke en functionele online ervaring voor uw bedrijf.</p>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <span className="service-icon">{service.icon}</span>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection; 
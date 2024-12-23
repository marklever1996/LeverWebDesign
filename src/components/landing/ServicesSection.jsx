import React from 'react';

const ServicesSection = () => {
    const services = [
        {
            title: "Web Development",
            description: "Custom websites en webapplicaties gebouwd met moderne technologieën",
            icon: "🚀"
        },
        {
            title: "UI/UX Design",
            description: "Gebruiksvriendelijke en aantrekkelijke interfaces die converteren",
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
            <h2>Diensten</h2>
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
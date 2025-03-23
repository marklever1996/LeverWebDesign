import React, { useEffect, useRef } from 'react';
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

    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const descriptionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe heading
        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        // Observe description
        if (descriptionRef.current) {
            observer.observe(descriptionRef.current);
        }

        // Observe service cards
        cardsRef.current.forEach(card => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="services" ref={sectionRef}>
            <h2 ref={headingRef}>
                <span>Wat</span>{' '}
                <span>ik doe</span>
            </h2>
            <p ref={descriptionRef}>
                Ik ben gespecialiseerd in het ontwerpen en ontwikkelen van websites en webapplicaties voor kleine bedrijven. 
                Met mijn kennis en ervaring in deze vakgebieden, kan ik u helpen bij het creëren van een unieke en functionele online ervaring voor uw bedrijf.
            </p>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div 
                        key={index} 
                        className="service-card"
                        ref={el => cardsRef.current[index] = el}
                    >
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
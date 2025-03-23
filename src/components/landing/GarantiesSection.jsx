import React, { useEffect, useRef } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './GarantiesSection.css';
import SavingsImage from '../../images/SavingsImage.png';

const GarantiesSection = () => {
    const guarantees = [
        {
            title: "Geen knip-en-plak werk",
            description: "Ik maak een unieke website voor jou, niet een template."
        },
        {
            title: "Onbeperkte bewerkingen",
            description: "Verander wat en wanneer je maar wilt tot het einde van het project."
        },
        {
            title: "Webdesign & Ontwikkeling",
            description: "Extensive preciese aan webdesign, webdevelopment en testen."
        },
        {
            title: "SEO-optimalisatie",
            description: "Basis SEO-optimalisatie is inbegrepen."
        }
    ];

    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const imageRef = useRef(null);
    const pricingHeaderRef = useRef(null);
    const checkmarksRef = useRef([]);

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

        // Observe header container
        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        // Observe image
        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        // Observe pricing header
        if (pricingHeaderRef.current) {
            observer.observe(pricingHeaderRef.current);
        }

        // Observe checkmarks
        checkmarksRef.current.forEach(checkmark => {
            if (checkmark) {
                observer.observe(checkmark);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="garanties" ref={sectionRef}>
            <div className="container">
                <div className="garanties-content">
                    <div className="garanties-text">
                        <div className="header-container" ref={headerRef}>
                            <div className="image-wrapper" ref={imageRef}>
                                <img src={SavingsImage} alt="Savings" className="savings-image" />
                            </div>
                            <div className="pricing-header" ref={pricingHeaderRef}>
                                <h3>
                                    <span className="price">50%</span> Aanbetaling,{' '}
                                    <span className="price">50%</span> Achteraf,{' '}
                                    en <span className="price">100%</span> Tevredenheidsgarantie
                                </h3>
                                <p>
                                    Voor een standaard website van 5 pagina's voor kleine bedrijven is er geen aanbetaling nodig. 
                                    Voor grotere projecten stellen we een aangepaste offerte op, afhankelijk van het aantal extra pagina's en de benodigde tijd.
                                </p>
                                <p>
                                    Betaal de helft bij aanvang en de rest na oplevering. Geniet van volledige tevredenheidsgarantie.
                                </p>
                            </div>
                        </div>
                        <div className="checkmarks">
                            {guarantees.map((guarantee, index) => (
                                <div 
                                    key={index} 
                                    className="checkmark"
                                    ref={el => checkmarksRef.current[index] = el}
                                >
                                    <FaCheckCircle className="check-icon" />
                                    <h4>{guarantee.title}</h4>
                                    <p>{guarantee.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GarantiesSection;

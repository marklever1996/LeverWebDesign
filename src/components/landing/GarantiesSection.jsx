import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './GarantiesSection.css';
import SavingsImage from '../../images/SavingsImage.png';

const GarantiesSection = () => {
    const guarantees = [
        {
            title: "Eerlijke Hostingkosten",
            description: "Hostingkosten met een eerlijke prijsgarantie"
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
            title: "Persoonlijke Klantenservice",
            description: "Bel rechtstreeks, geen telefoonmenu's of geautomatiseerde reacties."
        },
        {
            title: "SEO-optimalisatie",
            description: "Basis SEO-optimalisatie is inbegrepen."
        },
        {
            title: "Geen knip-en-plak werk",
            description: "Ik maak een unieke website voor jou, niet een template."
        }
    ];

    return (
        <section className="garanties">
            <div className="container">
                <div className="garanties-content">
                    <div className="garanties-text">
                        <div className="header-container">
                            <img src={SavingsImage} alt="Savings" className="savings-image" />
                            <div className="pricing-header">
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
                                <div key={index} className="checkmark">
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

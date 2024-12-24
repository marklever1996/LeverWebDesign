import React from 'react';
import { Link } from 'react-router-dom';
import './PricingSection.css';

const PricingSection = () => {
    const packages = [
        {
            name: 'Starter',
            price: '699',
            description: 'Perfect voor kleine bedrijven die online willen starten',
            features: [
                'Professionele website',
                'Responsive design',
                'Tot 5 pagina\'s',
                'SEO basis optimalisatie',
                'SSL certificaat',
                '3 maanden gratis onderhoud'
            ],
            popular: false
        },
        {
            name: 'Professional',
            price: '999',
            description: 'Ideaal voor groeiende bedrijven met specifieke wensen',
            features: [
                'Alles van Starter',
                'Tot 10 pagina\'s',
                'Custom design',
                'Uitgebreide SEO basis optimalisatie',
                'Social media integratie',
                '6 maanden gratis onderhoud',
            ],
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Op maat',
            description: 'Voor grote projecten met specifieke eisen',
            features: [
                'Alles van Professional',
                'Ongelimiteerde pagina\'s',
                'Custom functionaliteiten',
                'API integraties',
                'Database ontwikkeling',
                'Premium support',
                'Performance optimalisatie'
            ],
            popular: false
        }
    ];

    return (
        <section className="pricing-section">
            <h2>
                <span className="primary">Scherpe</span>{' '}
                <span className="secondary">Prijzen</span>
            </h2>
            <p className="pricing-description">
                Deze prijzen zijn slechts een indicatie en kunnen variëren afhankelijk van de specifieke eisen van jouw project.
            </p>
            <div className="pricing-grid">
                {packages.map((pkg, index) => (
                    <div 
                        className={`pricing-card ${pkg.popular ? 'popular' : ''}`} 
                        key={index}
                    >
                        {pkg.popular && <div className="popular-badge">Meest gekozen</div>}
                        <h3>{pkg.name}</h3>
                        <div className="price">
                            {pkg.price === 'Op maat' ? (
                                <span className="custom-price">{pkg.price}</span>
                            ) : (
                                <>
                                    <span className="currency">€</span>
                                    <span className="amount">{pkg.price}</span>
                                </>
                            )}
                        </div>
                        <p className="package-description">{pkg.description}</p>
                        <ul className="features">
                            {pkg.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                        <Link to="/contact" className="cta-button">
                            Neem contact op
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PricingSection; 
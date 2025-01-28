import React from 'react';
import { FaDesktop, FaCode, FaMobile, FaSearch, FaRocket, FaTools } from 'react-icons/fa';
import './ServiceSection.css';

const ServiceSection = () => {
    const diensten = [
        {
            icon: <FaDesktop />,
            title: 'Website Design',
            description: 'Modern en gebruiksvriendelijk design dat perfect aansluit bij jouw merk en doelgroep.',
            features: [
                'Aanpasbaar design',
                'Gebruiksvriendelijke interface',
                'Moderne layouts',
                'Brand identity integratie'
            ]
        },
        {
            icon: <FaCode />,
            title: 'Web Development',
            description: 'Professionele websites met een focus op optimale prestaties en gebruiksvriendelijkheid.',
            features: [
                'Websites die nieuwe klanten aantrekt',
                'Online afspraken maken',
                'Dashboards, CRM, en meer',
                'Persoonlijke websites'
            ]
        },
        {
            icon: <FaMobile />,
            title: 'Responsive Design',
            description: 'Websites die perfect werken op alle apparaten, van desktop tot smartphone.',
            features: [
                'Mobile-first approach',
                'Cross-browser compatibiliteit',
                'Snelle laadtijden',
                'Touch-friendly interfaces'
            ]
        },
        {
            icon: <FaSearch />,
            title: 'SEO Optimalisatie',
            description: 'Verbeter je online zichtbaarheid en bereik meer potentiële klanten.',
            features: [
                'On-page optimalisatie',
                'Technische SEO',
                'Google Analytics Setup',
                'Performance optimalisatie'
            ]
        },
        {
            icon: <FaRocket />,
            title: 'Website Hosting',
            description: 'Betrouwbare en snelle hosting oplossingen voor jouw website.',
            features: [
                'Snelle servers',
                'SSL certificaten',
                'Dagelijkse backups',
                'Technisch onderhoud'
            ]
        },
        {
            icon: <FaTools />,
            title: 'Onderhoud & Support',
            description: 'Continue ondersteuning en updates om je website optimaal te laten presteren.',
            features: [
                'Regelmatige updates',
                'Security monitoring',
                'Performance optimalisatie',
                'Technische support'
            ]
        }
    ];

    return (
        <section className="services-section">
            <h2>Een focus op jouw wensen</h2>
            <div className="services-grid">
                {diensten.map((dienst, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">
                            {dienst.icon}
                        </div>
                        <h3>{dienst.title}</h3>
                        <p>{dienst.description}</p>
                        <ul className="features-list">
                            {dienst.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceSection; 
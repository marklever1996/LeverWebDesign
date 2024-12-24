import React from 'react';
import HeroImage from '../../images/hero.png';
import './ServicesHeroSection.css';

const ServicesHeroSection = () => {
    return (
        <section className="services-hero">
            <div className="services-hero-content">
                <div className="hero-text">
                    <h1>
                        <span className="primary">Web Design & Development</span>{' '}
                        <span className="secondary">Met Aandacht</span>
                    </h1>
                    <p className="hero-description">
                        Van moderne websites tot complete webapplicaties. 
                        Ik help je om jouw online aanwezigheid naar het volgende niveau te tillen.
                    </p>
                </div>
                <div className="hero-image">
                    <img src={HeroImage} alt="Web Development" />
                </div>
            </div>
        </section>
    );
};

export default ServicesHeroSection; 
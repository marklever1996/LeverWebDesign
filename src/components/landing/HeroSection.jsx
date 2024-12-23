import React from 'react';
import './HeroSection.css';
import heroImage from '../../images/hero.png';

const HeroSection = () => {
    return (
        <section className="hero">
            <img src={heroImage} alt="Lever Web Design Hero" />
            <div className="hero-content">
                <h1>Lever Web Design</h1>
                <p>Moderne websites & webapplicaties</p>
                <button className="cta-button">Bekijk mijn werk</button>
            </div>
        </section>
    );
};

export default HeroSection; 
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import heroImage from '../../images/hero.png';

const HeroSection = () => {
    const nightSkyRef = useRef(null);

    useEffect(() => {
        // Creëer sterren
        const createStars = () => {
            const nightSky = nightSkyRef.current;
            if (!nightSky) return;

            // Verwijder bestaande sterren
            while (nightSky.firstChild) {
                nightSky.removeChild(nightSky.firstChild);
            }

            // Voeg meer sterren toe
            for (let i = 0; i < 200; i++) { // Verhoog naar 200 sterren
                const star = document.createElement('div');
                star.className = 'star';
                
                // Random posities met betere spreiding
                star.style.left = `${Math.random() * 98 + 1}%`; // Voorkom rand-posities
                star.style.top = `${Math.random() * 98 + 1}%`;
                
                // Varieer de grootte van de sterren
                const size = 1 + Math.random() * 2;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                
                // Random twinkle snelheid tussen 2 en 6 seconden
                star.style.setProperty('--twinkle-duration', `${2 + Math.random() * 4}s`);
                
                // Random vertraging voor meer natuurlijk effect
                star.style.animationDelay = `${Math.random() * 5}s`;
                
                nightSky.appendChild(star);
            }
        };

        createStars();
        window.addEventListener('resize', createStars);

        return () => {
            window.removeEventListener('resize', createStars);
        };
    }, []);

    return (
        <section className="hero">
            <div className="night-sky" ref={nightSkyRef}>
                <div className="moon" />
            </div>
            <img src={heroImage} alt="Lever Web Design Hero" />
            <div className="hero-content">
                <h1>Betaalbare websites en webapplicaties die resultaat boeken</h1>
                <p>Moderne websites & webapplicaties</p>
                <Link to="/contact" className="cta-button">
                    Plan gratis consult
                </Link>
            </div>
        </section>
    );
};

export default HeroSection; 
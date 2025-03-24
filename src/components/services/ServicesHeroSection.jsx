import React, { useEffect, useRef } from 'react';
import HeroSectionImage from '../../images/HeroServices.png';
import './ServicesHeroSection.css';

const ServicesHeroSection = () => {
    const heroTextRef = useRef(null);
    const heroImageRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px'
            }
        );

        if (heroTextRef.current) {
            observer.observe(heroTextRef.current);
        }
        if (heroImageRef.current) {
            observer.observe(heroImageRef.current);
        }

        return () => {
            if (heroTextRef.current) {
                observer.unobserve(heroTextRef.current);
            }
            if (heroImageRef.current) {
                observer.unobserve(heroImageRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;

        const createFloatingShape = () => {
            const shape = document.createElement('div');
            const shapes = ['circle', 'square', 'triangle'];
            const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
            shape.className = `floating-shape ${shapeType}`;
            
            // Better position distribution
            const left = 5 + Math.random() * 90;
            const top = 5 + Math.random() * 90;
            shape.style.left = `${left}%`;
            shape.style.top = `${top}%`;
            
            // Varied animation timing
            const delay = Math.random() * 8;
            const duration = 20 + Math.random() * 15;
            shape.style.animationDelay = `${delay}s`;
            shape.style.animationDuration = `${duration}s`;
            
            containerRef.current.appendChild(shape);
        };

        // Create more initial shapes
        for (let i = 0; i < 8; i++) {
            setTimeout(createFloatingShape, i * 800);
        }

        // Create new shapes more frequently
        const interval = setInterval(createFloatingShape, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="services-hero" ref={containerRef}>
            <div className="services-hero-content">
                <div className="hero-text" ref={heroTextRef}>
                    <h1>
                        <span className="primary">Web Design & Development</span>{' '}
                        <span className="secondary">Met Aandacht</span>
                    </h1>
                    <p className="hero-description">
                        Van moderne websites tot complete webapplicaties. 
                        Ik help je om jouw online aanwezigheid naar het volgende niveau te tillen.
                    </p>
                </div>
                <div className="hero-image" ref={heroImageRef}>
                    <img src={HeroSectionImage} alt="Web Development" />
                </div>
            </div>
        </section>
    );
};

export default ServicesHeroSection; 
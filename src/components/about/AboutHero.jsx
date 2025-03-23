import React, { useEffect, useRef } from 'react';
import SelfieFormal from '../../images/SelfieFormal.jpg';
import SelfieFormalGrey from '../../images/SelfieFormalGrey.jpg';
import './AboutHero.css';

const AboutHero = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

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

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-me" id="about-me">
            <div className="container">
                <div className="about-me-container">
                    {/* <div className="about-me-title">
                        Over <br /> <span className="naam">Mark Lever</span>
                        <div className="title-accent"></div>
                    </div> */}

                    <div className="about-me-flex-container" ref={containerRef}>
                        <div className="about-me-image">
                            <div className="image-container" ref={imageRef}>
                                <div className="back-div"></div>
                                <div className="main-image">
                                    <img src={SelfieFormalGrey} alt="Mark Lever" />
                                </div>
                                <div className="black-image">
                                    <img src={SelfieFormal} alt="Mark Lever zwart-wit" />
                                </div>
                            </div>
                        </div>
                        <div className="about-me-content">
                            <div className="text">
                                <p className="intro">
                                    Als ambitieuze full stack ontwikkelaar en ontwerper neem ik veel trots in de presentatie en kwaliteit van mijn werk.
                                </p>
                                
                                <p className="main-text">
                                    Ik creëer moderne, gebruiksvriendelijke websites en applicaties die niet alleen visueel aantrekkelijk zijn, maar ook technisch sterk in elkaar zitten. Met een scherp oog voor detail en een passie voor innovatie vertaal ik ideeën naar functionele en impactvolle digitale oplossingen.
                                </p>
                                
                                <p className="closing">
                                    Of het nu gaat om een strak ontworpen website of een complexe webapplicatie, ik zorg ervoor dat elk project intuïtief, efficiënt en uniek is.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero; 
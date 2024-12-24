import React from 'react';
import SelfieFormal from '../../images/SelfieFormal.jpg';
import SelfieFormalGrey from '../../images/SelfieFormalGrey.jpg';
import './AboutHero.css';

const AboutHero = () => {
    return (
        <section className="about-me" id="about-me">
            <div className="container">
                <div className="about-me-container">
                    <div className="about-me-title">
                        Over <br /> <span className="naam">Mark Lever</span>
                    </div>

                    <div className="about-me-flex-container">
                        <div className="about-me-image">
                            <div className="back-div"></div>
                            <div className="black-image">
                                <img src={SelfieFormal} alt="Mark Lever zwart-wit" />
                            </div>
                            <div className="main-image">
                                <img src={SelfieFormalGrey} alt="Mark Lever" />
                            </div>
                        </div>
                        <div className="about-me-content">
                            <div className="text">
                                Als een ambitieuze front-end ontwikkelaar en ontwerper, 
                                neem ik veel trots in de presentatie en de kwaliteit van mijn werk.
                                <br /><br />
                                Ik ben iemand die eenvoudige, mooie en gemakkelijk te begrijpen 
                                dingen kan ontwerpen en creëren. Ik ben een expert in het nemen 
                                van ontwerpen en deze in originele, spannende en nieuwe richtingen 
                                te sturen.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero; 
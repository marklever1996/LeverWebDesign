import React from 'react';
import './WhoAmISection.css';
import ProfileImage from '../../images/SelfieFormal.jpg';

const WhoAmISection = () => {
    return (
        <section className="who-am-i">
            <div className="container">
                <h2>
                    <span>Wie</span>{' '}
                    <span>ik ben</span>
                </h2>
                <div className="content-wrapper">
                    <div className="text-content">
                        <p>
                            Ik ben Mark Lever, 28 jaar oud. Ik heb Criminologie gestudeerd aan de Universiteit van Groningen.
                            Zo'n vijf jaar geleden ben ik begonnen met web development als hobby.
                            Ik heb anderhalf jaar lang mezelf de juiste manier van het maken van websites aangeleerd en geleerd om zelf de code te schrijven.
                            In de loop der tijd is deze hobby uitgegroeid tot een ware passie, waarbij ik tientallen websites heb ontwikkeld.
                        </p>
                        <a href="/over-mij" className="read-more">
                            Lees meer
                        </a>
                    </div>
                    <img 
                        src={ProfileImage} 
                        alt="Mark Lever" 
                        className="profile-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhoAmISection;

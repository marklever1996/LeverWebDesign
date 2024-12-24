import React from 'react';
import AboutHero from '../components/about/AboutHero';
import QualitySection from '../components/about/QualitySection';
import MySkills from '../components/about/MySkills';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-page">
            <AboutHero />
            <QualitySection />
            <MySkills />
        </div>
    );
};

export default AboutMe;

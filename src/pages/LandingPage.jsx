import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import ServicesSection from '../components/landing/ServicesSection';
import ProjectsSection from '../components/landing/ProjectsSection';
import ContactSection from '../components/landing/ContactSection';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <HeroSection />
            <ServicesSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
};

export default LandingPage;


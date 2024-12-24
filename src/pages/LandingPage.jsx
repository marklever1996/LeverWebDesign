import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import ServicesSection from '../components/landing/ServicesSection';
import GarantiesSection from '../components/landing/GarantiesSection';
import ProjectsSection from '../components/landing/ProjectsSection';
import ContactSection from '../components/landing/ContactSection';
import WhoAmISection from '../components/landing/WhoAmISection';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <HeroSection />
            <ServicesSection />
            <GarantiesSection />
            <ProjectsSection />
            <WhoAmISection />
            <ContactSection />
        </div>
    );
};

export default LandingPage;


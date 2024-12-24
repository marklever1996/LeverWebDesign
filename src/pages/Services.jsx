import React from 'react';
import ServicesHeroSection from '../components/services/ServicesHeroSection';
import ServiceSection from '../components/services/ServiceSection';
import PricingSection from '../components/services/PricingSection';

const Services = () => {
    return (
        <div className="services-page">
            <ServicesHeroSection />
            <ServiceSection />
            <PricingSection />
        </div>
    );
};

export default Services;

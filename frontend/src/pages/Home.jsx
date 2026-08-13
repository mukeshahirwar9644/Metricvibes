import React from 'react';
import Hero from '../components/sections/Hero';
import TrustedBy from '../components/sections/TrustedBy';
import Services from '../components/sections/Services';
import WhyMetricvibes from '../components/sections/WhyMetricvibes';
import CaseStudies from '../components/sections/CaseStudies';
import TechStack from '../components/sections/TechStack';
import AboutFounder from '../components/sections/AboutFounder';
import OurClients from '../components/sections/OurClients';
import Resources from '../components/sections/Resources';
import AuditCTA from '../components/sections/AuditCTA';

export default function Home() {
    return (
        <main>
            <Hero />
            <TrustedBy />
            <Services />
            <WhyMetricvibes />
            <CaseStudies />
            <TechStack />
            <AboutFounder />
            <OurClients />
            <Resources />
            <AuditCTA />
        </main>
    );
}

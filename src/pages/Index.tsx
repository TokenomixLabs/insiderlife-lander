
import React from 'react';
import Navbar from '@/components/Navbar';
import VideoHero from '@/components/VideoHero';
import AboutSection from '@/components/AboutSection';
import OfferingsSection from '@/components/OfferingsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-insiderDark">
      <VideoHero />
      <div className="relative z-10">
        <Navbar />
        <div className="h-screen"></div> {/* Spacer for hero section */}
        <AboutSection />
        <OfferingsSection />
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

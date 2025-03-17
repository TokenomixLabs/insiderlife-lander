
import React from 'react';
import Navbar from '@/components/Navbar';
import VideoHero from '@/components/VideoHero';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import OfferingsSection from '@/components/OfferingsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-insiderDark">
      {/* Video background */}
      <VideoHero />
      
      {/* Content overlaid on video */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <OfferingsSection />
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;


import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import OfferingsSection from '@/components/OfferingsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-insiderDark">
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Fixed background elements that stay in place during scroll */}
        <div className="absolute top-0 left-0 w-full h-full bg-futuristic-grid opacity-5"></div>
      </div>
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;


import React from 'react';
import Navbar from '@/components/Navbar';
import VideoHeroSection from '@/components/VideoHeroSection';
import AboutSection from '@/components/AboutSection';
import OfferingsSection from '@/components/OfferingsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-insiderDark overflow-x-hidden">
      <Navbar />
      <VideoHeroSection />
      <AboutSection />
      <OfferingsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;


import React from 'react';
import Navbar from '@/components/Navbar';
import VideoHero from '@/components/VideoHero';
import AboutSection from '@/components/AboutSection';
import OfferingsSection from '@/components/OfferingsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-insiderDark overflow-x-hidden">
      <Navbar />
      <VideoHero />
      <AboutSection />
      <OfferingsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;

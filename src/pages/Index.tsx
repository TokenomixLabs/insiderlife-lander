
import React from 'react';
import Navbar from '@/components/Navbar';
import VideoHeroSection from '@/components/VideoHeroSection';
import OfferingsSection from '@/components/OfferingsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-insiderDark overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col">
        <VideoHeroSection />
        <OfferingsSection />
        <CtaSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

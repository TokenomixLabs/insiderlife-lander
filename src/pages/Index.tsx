
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
    <>
      {/* Video background (fixed position) */}
      <VideoHero />
      
      {/* Content that overlays the video */}
      <div className="content-overlay">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <OfferingsSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

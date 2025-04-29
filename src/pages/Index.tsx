
import React from 'react';
import Navbar from '@/components/Navbar';
import VideoHeroSection from '@/components/VideoHeroSection';
import OfferingsSection from '@/components/OfferingsSection';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-insiderDark flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <VideoHeroSection />
        <OfferingsSection />
        <AnnouncementBanner />
        <AboutSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

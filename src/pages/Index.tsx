
import React from 'react';
import Navbar from '@/components/Navbar';
import VideoHero from '@/components/VideoHero';
import HeroForm from '@/components/HeroForm';
import AboutSection from '@/components/AboutSection';
import OfferingsSection from '@/components/OfferingsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-insiderDark">
      <Navbar />
      <VideoHero />
      <HeroForm />
      <main>
        <AboutSection />
        <OfferingsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

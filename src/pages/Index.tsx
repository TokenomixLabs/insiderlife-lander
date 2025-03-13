
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import OfferingsSection from '@/components/OfferingsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-insiderDark-DEFAULT text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <CtaSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;

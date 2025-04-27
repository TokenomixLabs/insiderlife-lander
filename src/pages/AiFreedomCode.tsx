
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/aifreedom/HeroSection';
import OverviewSection from '@/components/aifreedom/OverviewSection';
import ComparisonSection from '@/components/aifreedom/ComparisonSection';
import CtaSection from '@/components/aifreedom/CtaSection';
import AffiliateSection from '@/components/aifreedom/AffiliateSection';

const AiFreedomCode: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-insiderDark">
      <Navbar />
      <main className="flex-grow pt-24">
        <HeroSection />
        <OverviewSection />
        <ComparisonSection />
        <CtaSection />
        <AffiliateSection />
      </main>
      <Footer />
    </div>
  );
};

export default AiFreedomCode;

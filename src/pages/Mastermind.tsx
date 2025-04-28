
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/circle/HeroSection';
import PillarsSection from '@/components/circle/PillarsSection';
import PossibilitiesSection from '@/components/circle/PossibilitiesSection';
import HighTableSection from '@/components/circle/HighTableSection';
import CallToAction from '@/components/circle/CallToAction';
import ClosingSection from '@/components/circle/ClosingSection';

const Mastermind: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-insiderDark">
      <Navbar />
      <main className="flex-grow pt-24">
        <HeroSection showForm={showForm} setShowForm={setShowForm} />
        <PillarsSection />
        <PossibilitiesSection />
        <HighTableSection />
        <CallToAction setShowForm={setShowForm} />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Mastermind;

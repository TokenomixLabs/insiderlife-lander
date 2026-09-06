import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import VideoHeroSection from '@/components/VideoHeroSection';
import Footer from '@/components/Footer';
import MasterThesis from '@/components/home/MasterThesis';
import LifeMasteryBridge from '@/components/home/LifeMasteryBridge';
import GodModeSection from '@/components/home/GodModeSection';
import IntelligenceSection from '@/components/home/IntelligenceSection';
import CommunityDoctrine from '@/components/home/CommunityDoctrine';
import ThreeParts from '@/components/home/ThreeParts';
import IntelligentLayer from '@/components/home/IntelligentLayer';
import Experiences from '@/components/home/Experiences';
import Ascent from '@/components/home/Ascent';
import Ecosystem from '@/components/home/Ecosystem';
import FinalClose from '@/components/home/FinalClose';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-insiderDark flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <VideoHeroSection />
        <MasterThesis />
        <LifeMasteryBridge />
        <GodModeSection />
        <IntelligenceSection />
        <CommunityDoctrine />
        <ThreeParts />
        <IntelligentLayer />
        <Experiences />
        <Ascent />
        <Ecosystem />
        <FinalClose />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

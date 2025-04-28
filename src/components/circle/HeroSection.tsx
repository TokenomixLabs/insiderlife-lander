
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ApplicationForm from './ApplicationForm';

interface HeroSectionProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ showForm, setShowForm }) => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32 text-center">
      <div className="py-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron mb-6 text-gradient pb-4">
          Sovereign Circle
        </h1>
      </div>
      <p className="text-xl md:text-2xl mb-12 text-white/90">
        Private council of visionaries shaping the next evolution of digital society
      </p>
      
      {/* The Invitation */}
      <div className="max-w-3xl mx-auto mb-16 text-lg text-white/80 space-y-8">
        <p className="italic text-white">
          This is not for those seeking another mastermind.
          This is for visionaries, builders, and awakened leaders ready to shape a new reality together.
        </p>
        <p className="text-white">
          The Sovereign Circle is where aligned creators converge to co-create at the highest frequency —
          not through transaction, but through resonance.
        </p>
      </div>

      {/* Form Section */}
      <div id="circle-form" className={cn(
        "max-w-2xl mx-auto transition-all duration-500",
        showForm ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none absolute"
      )}>
        <div className="glass-card p-8 border border-insiderPurple/20">
          <ApplicationForm />
        </div>
      </div>

      {/* Initial CTA */}
      <div className={cn(
        "transition-all duration-500",
        showForm ? "scale-95 opacity-0 pointer-events-none absolute" : "scale-100 opacity-100"
      )}>
        <Button
          onClick={() => setShowForm(true)}
          className={cn(
            "bg-gradient-to-r from-insiderPurple to-insiderBlue",
            "hover:from-insiderPurple-light hover:to-insiderBlue-light",
            "text-white text-lg font-medium py-6 px-8 rounded-lg",
            "shadow-glow transition-all duration-300 hover:scale-105",
            "mb-8"
          )}
          asChild
        >
          <a href="#circle-form">👉 Request Invitation</a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const handleActivateClick = () => {
    window.open('https://go.aifreedomcode.com/start', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 text-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-orbitron mb-6 leading-tight py-2 pb-4 bg-pink-100/10 rounded-lg text-white">
        This AI System Pays You Instantly Even If You're Starting From Scratch.
      </h1>
      <p className="text-2xl md:text-3xl lg:text-4xl mb-6 max-w-4xl mx-auto text-white leading-tight font-orbitron bg-pink-100/5 rounded-lg py-3">
        Plug Into the Hottest New Advanced Intelligence System That Creates Viral Growth While You Sleep
      </p>
      <p className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-3xl mx-auto font-orbitron bg-pink-100/10 rounded-lg py-2 text-white">
        No Guesswork. No Hype. Just Execution.
      </p>
      <div className="flex justify-center">
        <Button 
          onClick={handleActivateClick}
          className={cn(
            "bg-gradient-to-r from-insiderPurple to-insiderBlue",
            "hover:from-insiderPurple-light hover:to-insiderBlue-light",
            "text-white text-lg font-medium py-6 px-8 rounded-lg",
            "shadow-glow transition-all duration-300 hover:scale-105",
            "flex items-center gap-3"
          )}
        >
          <span>Activate AI FREEDOM CODE</span>
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;


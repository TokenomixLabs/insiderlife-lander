
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron mb-6 text-gradient leading-[1.4] py-2 pb-4">
        Forget Courses. This Is a Weapon.
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-4xl mx-auto text-white/90 leading-tight">
        The First AI-Powered System That Builds Wealth, Creates True Freedom, and Helps Us Reclaim What's Been Stolen.
      </p>
      <div className="flex justify-center">
        <Button 
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

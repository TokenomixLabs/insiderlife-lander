
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const CtaSection = () => {
  const handleActivateClick = () => {
    window.open('https://go.aifreedomcode.com/start', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 text-center">
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-2xl md:text-3xl font-semibold text-white/90 max-w-full whitespace-normal">This isn't just another offer. It's the ignition of a Movement.</p>
        <p className="text-xl md:text-2xl text-white/80 mt-8">You're not buying a product — You're joining the rise of a new digital class.</p>
      </div>
      
      <div className="flex justify-center">
        <Button 
          onClick={handleActivateClick}
          className={cn(
            "bg-gradient-to-r from-insiderPurple to-insiderBlue",
            "hover:from-insiderPurple-light hover:to-insiderBlue-light",
            "text-white text-xl font-bold py-8 px-10 rounded-lg",
            "shadow-glow transition-all duration-300 hover:scale-105",
            "flex items-center gap-3"
          )}
        >
          <span>ACTIVATE AI FREEDOM CODE</span>
          <ArrowUpRight className="h-7 w-7" />
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;

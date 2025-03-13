
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-elite-gradient opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-futuristic-grid opacity-5 z-0"></div>
      
      {/* Animated glow elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-insiderBlue/20 rounded-full filter blur-3xl animate-energy-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-insiderPurple-glow/20 rounded-full filter blur-3xl animate-energy-pulse animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 headline-gradient leading-tight">
            Unlock the Future of AI, Business & Digital Monetization
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            InsiderLife is the gateway to the next evolution of success—AI-driven business, powerful strategies, and limitless potential.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className={cn(
                "bg-gradient-to-r from-insiderPurple to-insiderBlue",
                "hover:from-insiderPurple-glow hover:to-insiderBlue-light",
                "text-white font-medium text-lg px-8 py-6 h-auto button-glow",
                "transform transition-all duration-300 hover:scale-105"
              )}
            >
              Join the Movement <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

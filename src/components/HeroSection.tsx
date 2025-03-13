
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-insiderDark-DEFAULT to-insiderDark-light">
      {/* Background elements */}
      <div className="absolute inset-0 bg-futuristic-grid opacity-30"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-insiderBlue-DEFAULT/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-insiderPurple-DEFAULT/20 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-3 px-4 py-1.5 bg-insiderPurple-DEFAULT/10 backdrop-blur-sm border border-insiderPurple-DEFAULT/20 rounded-full">
            <span className="text-insiderPurple-light font-medium text-sm">Welcome to the future</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-insiderBlue-light to-insiderPurple-light bg-clip-text text-transparent animate-gradient-shift">
            Unlock the Future of AI, Business & Digital Monetization
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            InsiderLife is the gateway to the next evolution of success—AI-driven business, powerful strategies, and limitless potential.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-insiderPurple-DEFAULT to-insiderBlue-DEFAULT hover:from-insiderPurple-light hover:to-insiderBlue-light text-white shadow-lg shadow-insiderPurple-DEFAULT/20"
              size="lg"
            >
              Join the Movement <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-insiderBlue-light to-transparent opacity-50"></div>
    </section>
  );
};

export default HeroSection;

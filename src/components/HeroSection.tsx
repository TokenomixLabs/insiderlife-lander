
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ArrowRight, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscription form submitted');
    // You would add actual form handling logic here
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-futuristic-grid opacity-10 z-0"></div>
      
      {/* Animated energy elements */}
      <div className="absolute top-1/4 left-0 w-full">
        <div className="light-streak" style={{ animationDelay: '0s' }}></div>
      </div>
      <div className="absolute top-2/3 left-0 w-full">
        <div className="light-streak" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Glow orbs */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-insiderBlue/20 rounded-full filter blur-3xl opacity-30 animate-energy-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-insiderPurple-glow/20 rounded-full filter blur-3xl opacity-30 animate-energy-pulse animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center p-2 px-4 mb-8 border border-insiderPurple-glow/20 rounded-full bg-insiderDark-lighter/50 backdrop-blur-sm">
              <span className="text-insiderPurple-glow mr-2">
                <Zap size={16} className="animate-pulse" />
              </span>
              <span className="text-sm font-medium text-white/80">The Future of Digital Business is Here</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 headline-gradient leading-tight">
              Unlock the Future of 
              <span className="block text-gradient mt-2">AI, Business & Digital Monetization</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed font-light">
              InsiderLife is the gateway to the next evolution of success—AI-driven business, powerful strategies, and limitless potential.
            </p>
            
            <form onSubmit={handleSubscribe} className="mt-12 w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 focus:border-insiderPurple-glow/50 transition-all duration-300"
                  required
                />
                <Button 
                  type="submit"
                  className={cn(
                    "bg-gradient-to-r from-insiderPurple to-insiderBlue",
                    "hover:from-insiderPurple-glow hover:to-insiderBlue-light",
                    "text-white font-medium h-12 px-6 button-glow",
                    "transition-all duration-300 transform hover:scale-105"
                  )}
                >
                  Join the Movement <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

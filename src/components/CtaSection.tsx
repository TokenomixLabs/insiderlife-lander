
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Zap } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-elite-gradient opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-futuristic-grid opacity-5 z-0"></div>
      
      {/* Animated glow elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-insiderPurple-glow/20 rounded-full filter blur-3xl animate-energy-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-insiderBlue/20 rounded-full filter blur-3xl animate-energy-pulse animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="elite-card p-12 md:p-16 text-center max-w-4xl mx-auto glow-effect">
          <div className="flex justify-center mb-8">
            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-insiderPurple to-insiderBlue shadow-lg shadow-insiderPurple/30 animate-float-subtle">
              <Zap size={28} className="text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 headline-gradient">
            Ready to Transform Your Digital Future?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join InsiderLife today and gain access to our exclusive platform of AI-powered tools, business strategies, and a community of forward-thinking entrepreneurs.
          </p>
          
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
          
          <div className="mt-10 text-sm text-white/50">
            Limited memberships available. Apply now to secure your spot.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

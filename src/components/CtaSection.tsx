
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cta-gradient opacity-10 z-0"></div>
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-insiderPurple/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-insiderBlue/20 rounded-full filter blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card p-10 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Ready to Transform Your Digital Future?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Join InsiderLife today and gain access to our exclusive platform of AI-powered tools, business strategies, and a community of forward-thinking entrepreneurs.
          </p>
          
          <Button 
            className={cn(
              "bg-gradient-to-r from-insiderPurple to-insiderBlue",
              "hover:from-insiderPurple-light hover:to-insiderBlue-light",
              "text-white font-medium text-lg px-8 py-6 h-auto"
            )}
          >
            Join the Movement <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

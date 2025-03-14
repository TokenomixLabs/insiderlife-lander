
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Globe, CheckCircle } from 'lucide-react';
import WaitlistDialog from './WaitlistDialog';

const CtaSection: React.FC = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cta-gradient opacity-10 z-0"></div>
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-insiderPurple/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-insiderBlue/20 rounded-full filter blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card p-10 md:p-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center mb-6">
            <Globe className="h-8 w-8 text-insiderBlue-light mr-3 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-gradient font-orbitron">
              Your Future is Calling. Will You Answer?
            </h2>
          </div>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            This isn't just a membership—it's your passport to the next level of digital wealth, freedom, and influence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-insiderBlue-light mr-2" />
              <span className="text-white">Insider strategies</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-insiderBlue-light mr-2" />
              <span className="text-white">AI-driven automation</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-insiderBlue-light mr-2" />
              <span className="text-white">Top 1% of digital visionaries</span>
            </div>
          </div>
          
          <Button 
            className={cn(
              "bg-gradient-to-r from-insiderPurple to-insiderBlue",
              "hover:from-insiderPurple-light hover:to-insiderBlue-light",
              "text-white font-medium text-lg px-8 py-6 h-auto shadow-glow transition-all duration-300 hover:scale-105"
            )}
            onClick={() => setWaitlistOpen(true)}
          >
            🔥 Join the Movement Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </section>
  );
};

export default CtaSection;

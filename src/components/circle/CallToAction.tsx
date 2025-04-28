
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CallToActionProps {
  setShowForm: (show: boolean) => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ setShowForm }) => {
  return (
    <section className="container mx-auto px-4 py-16 glass-card my-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-orbitron text-gradient">
          🔔 Final Call: Step Into Resonance
        </h2>
        
        <div className="mb-10 text-lg text-white/80 space-y-6">
          <p>
            This isn't an application in the traditional sense.<br />
            It's a signal — that you recognize the field, and you're ready to co-create at a higher octave.
          </p>
          <p>
            Not everyone will be invited.<br />
            That's by sacred design.
          </p>
        </div>
        
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

export default CallToAction;

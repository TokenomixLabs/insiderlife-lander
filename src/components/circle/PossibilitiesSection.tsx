
import React from 'react';

const PossibilitiesSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 my-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 font-orbitron text-gradient">
          🧬 What Becomes Possible
        </h2>
        
        <div className="glass-card p-8 space-y-12 text-white/80">
          <p className="text-xl md:text-2xl font-medium">
            Those who resonate receive more than access.<br />
            They receive activation.
          </p>
          <ul className="space-y-6 text-left max-w-2xl mx-auto text-lg">
            <li className="flex items-center gap-4">
              <span className="h-1 w-1 rounded-full bg-insiderPurple"></span>
              <span>Unfiltered strategy sessions and sacred execution spaces</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-1 w-1 rounded-full bg-insiderPurple"></span>
              <span>Early positioning in sovereign technologies and movements</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-1 w-1 rounded-full bg-insiderPurple"></span>
              <span>Shared creation of the next wave of digital civilization</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="h-1 w-1 rounded-full bg-insiderPurple"></span>
              <span>Real-time collaboration with those who shape timelines</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PossibilitiesSection;

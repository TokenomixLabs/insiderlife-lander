
import React from 'react';
import { cn } from '@/lib/utils';
import { Lightbulb, Zap, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-insiderDark py-12">
      <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Lightbulb className="h-8 w-8 text-insiderBlue-light mr-3 animate-pulse-glow" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient font-orbitron">
            Exclusive Strategies for AI-Powered Domination
          </h2>
        </div>
        <p className="text-center text-lg text-white/90 leading-relaxed">
          InsiderLife is not just a platform—it's a movement. We equip visionary entrepreneurs, creators, and founders with 
          AI-enhanced business intelligence, high-leverage growth systems, and elite networking opportunities to scale exponentially in the digital age.
        </p>
        
        <h3 className="text-xl font-semibold text-center mt-8 mb-6 text-insiderBlue-light font-orbitron">
          🔥 What You Get:
        </h3>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center mb-4",
              "bg-gradient-to-br from-insiderBlue to-insiderBlue-dark shadow-glow-blue"
            )}>
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-orbitron">Fast Impact</h3>
            <p className="text-white/70">Proven strategies for rapid execution & high ROI</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center mb-4",
              "bg-gradient-to-br from-insiderPurple to-insiderPurple-dark shadow-glow-purple"
            )}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-orbitron">AI-Powered</h3>
            <p className="text-white/70">Cutting-edge automation for effortless scalability</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center mb-4",
              "bg-gradient-to-br from-insiderBlue-light to-insiderPurple-light shadow-glow"
            )}>
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-orbitron">Elite Community</h3>
            <p className="text-white/70">Network with top 1% visionaries & disruptors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

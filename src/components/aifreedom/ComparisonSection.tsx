
import React from 'react';

const ComparisonSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <blockquote className="text-xl md:text-2xl font-light italic text-white/70 max-w-3xl mx-auto">
          "While others are learning about AI… you're partnering with it."
        </blockquote>
      </div>
      
      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {[
          { old: "Takes courses", new: "Deploys agents" },
          { old: "Works harder", new: "Automates power" },
          { old: "Builds alone", new: "Builds with a movement" }
        ].map((comparison, index) => (
          <div key={index} className="glass-card p-6 md:p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="border-r border-white/10 pr-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white/80">Everyone Else</h3>
                <p className="text-lg text-white/70">{comparison.old}</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gradient">With AI FREEDOM CODE</h3>
                <p className="text-lg text-white">{comparison.new}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;

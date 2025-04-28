
import React from 'react';

const PillarsSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 glass-card my-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-orbitron text-gradient">
          🜂 Where Frequency Meets Execution
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-white/80">
          <div className="glass-card p-6 space-y-3">
            <h3 className="text-xl font-semibold mb-3 text-white">Strategic Alliance</h3>
            <p>Where aligned power converges to build the new paradigm.</p>
          </div>
          
          <div className="glass-card p-6 space-y-3">
            <h3 className="text-xl font-semibold mb-3 text-white">Activated Intelligence</h3>
            <p>Crystallized frameworks, sovereign playbooks, and direct transmission of code.</p>
          </div>
          
          <div className="glass-card p-6 space-y-3">
            <h3 className="text-xl font-semibold mb-3 text-white">Digital Architecture</h3>
            <p>Infrastructure for digital sovereignty — created by and for the awakened.</p>
          </div>
          
          <div className="glass-card p-6 space-y-3">
            <h3 className="text-xl font-semibold mb-3 text-white">Spiritual Sovereignty</h3>
            <p>Rooted in inner alignment. Guided by divine intelligence. Manifested through action.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;

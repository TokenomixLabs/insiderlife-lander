
import React from 'react';
import { CircleUser } from 'lucide-react';

const HighTableSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 my-8 max-w-4xl">
      <div className="glass-card p-8 border-t-4 border-insiderPurple">
        <div className="flex justify-center mb-6">
          <CircleUser className="h-12 w-12 text-insiderPurple" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 font-orbitron text-gradient">
          🔱 Beyond the Circle: The High Table
        </h3>
        <div className="space-y-6 text-lg text-center text-white/80">
          <p className="font-medium italic">Some will go deeper.</p>
          <p>
            Beyond the Sovereign Circle exists The High Table —<br />
            a private convergence of creators, visionaries, and keyholders<br />
            shaping the next arc of human civilization.
          </p>
          <p className="font-medium">
            This is not an "upgrade."<br />
            It is an initiation into deeper alignment, longer timelines, and legacy-level impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HighTableSection;

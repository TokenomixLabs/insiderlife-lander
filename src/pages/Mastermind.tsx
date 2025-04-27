
import React from 'react';
import { Button } from '@/components/ui/button';
import { CircleUser } from 'lucide-react';
import { cn } from '@/lib/utils';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Mastermind: React.FC = () => {
  const handleRequestInvite = () => {
    window.location.href = "mailto:admin@insiderlife.com?subject=Sovereign Circle Invitation Request";
  };

  return (
    <div className="flex flex-col min-h-screen bg-insiderDark">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron mb-6 text-gradient leading-[1.2]">
            Sovereign Circle
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            Private council of visionaries shaping the next evolution of digital society
          </p>
          
          <div className="max-w-3xl mx-auto mb-16 text-lg text-white/80 space-y-8">
            <p className="italic">
              This is not a course. Not a program. Not an offer.
              It is a convergence of aligned sovereigns, committed to building the new world — from the inside out.
            </p>
            <p>
              We don't gather to learn. We gather to create.
              InsiderLife is the gateway. Societi is the infrastructure.
              The Sovereign Circle is where it all converges.
            </p>
          </div>
        </section>

        {/* Inside the Circle */}
        <section className="container mx-auto px-4 py-16 glass-card my-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-orbitron text-gradient">
              Inside the Circle
            </h2>
            
            <ul className="space-y-6 text-lg text-white/80">
              <li className="flex items-center gap-4 glass-card p-4">
                <span>Private ecosystem of high-frequency creators, founders, and AI-native entrepreneurs</span>
              </li>
              <li className="flex items-center gap-4 glass-card p-4">
                <span>Real-time ideation, feedback, and collaboration</span>
              </li>
              <li className="flex items-center gap-4 glass-card p-4">
                <span>Shared tech, tools, and traction frameworks</span>
              </li>
              <li className="flex items-center gap-4 glass-card p-4">
                <span>Execution blueprints + access to elite playbooks</span>
              </li>
              <li className="flex items-center gap-4 glass-card p-4">
                <span>A seat at the table as we architect the new digital society</span>
              </li>
            </ul>
            
            <p className="text-center text-xl mt-12 text-white/90">
              This is not a mastermind in the traditional sense.
              It's a grid node for those who shape timelines.
            </p>
          </div>
        </section>

        {/* Is This You? */}
        <section className="container mx-auto px-4 py-16 my-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-orbitron text-gradient">
              Is This You?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Founders with fire</h3>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Visionaries aligned with sacred strategy</h3>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Creators who transmit truth, not noise</h3>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Builders of ecosystems, movements, and legacy plays</h3>
              </div>
            </div>

            <p className="text-xl mt-12 text-white/90">
              You've been looking for your people.
              We've been waiting for your frequency.
            </p>
          </div>
        </section>

        {/* Request Invitation */}
        <section className="container mx-auto px-4 py-16 glass-card my-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-orbitron text-gradient">
              Request Invitation
            </h2>
            
            <Button
              onClick={handleRequestInvite}
              className={cn(
                "bg-gradient-to-r from-insiderPurple to-insiderBlue",
                "hover:from-insiderPurple-light hover:to-insiderBlue-light",
                "text-white text-lg font-medium py-6 px-8 rounded-lg",
                "shadow-glow transition-all duration-300 hover:scale-105",
                "mb-8"
              )}
            >
              Request Invite
            </Button>

            <p className="text-lg text-white/80">
              You don't buy into the Sovereign Circle.
              You align into it.
            </p>
          </div>
        </section>

        {/* The High Table */}
        <section className="container mx-auto px-4 py-16 my-8 max-w-4xl">
          <div className="glass-card p-8 border-t-4 border-insiderPurple">
            <div className="flex justify-center mb-6">
              <CircleUser className="h-12 w-12 text-insiderPurple" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 font-orbitron text-gradient">
              The High Table
            </h3>
            <p className="text-lg text-center text-white/80">
              Beyond the Circle exists The High Table —
              a private council of creators, visionaries, and frequency holders building the next era of digital civilization.
            </p>
          </div>
        </section>

        {/* Final Message */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-white/90">
            <p>This is how we rise together.</p>
            <p>This is how we remember who we are.</p>
            <p>This is how we flip the grid.</p>
            <p className="mt-8 text-xl font-orbitron">The Sovereign Circle is live. 🔱</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mastermind;

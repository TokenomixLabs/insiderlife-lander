
import React from 'react';
import { Button } from '@/components/ui/button';
import { CircleUser } from 'lucide-react';
import { cn } from '@/lib/utils';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Mastermind: React.FC = () => {
  const handleRequestInvite = () => {
    window.location.href = "mailto:admin@insiderlife.com?subject=Sovereign Circle Alignment Signal";
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
          
          {/* The Invitation */}
          <div className="max-w-3xl mx-auto mb-16 text-lg text-white/80 space-y-8">
            <p className="italic">
              This is not for those seeking another mastermind.
              This is for visionaries, builders, and awakened leaders ready to shape reality.
            </p>
            <p>
              The Sovereign Circle is where aligned beings converge to co-create at the highest frequency —
              not through transaction, but through resonance.
            </p>
          </div>
        </section>

        {/* What Sovereign Circle Represents */}
        <section className="container mx-auto px-4 py-16 glass-card my-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-orbitron text-gradient">
              Sacred Architecture
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-white/80">
              <div className="glass-card p-6 space-y-3">
                <h3 className="text-xl font-semibold mb-3 text-white">Strategic Alliance</h3>
                <p>Where collective power meets ritualized execution</p>
              </div>
              
              <div className="glass-card p-6 space-y-3">
                <h3 className="text-xl font-semibold mb-3 text-white">Activated Intelligence</h3>
                <p>Access to crystallized wisdom and sovereign frameworks</p>
              </div>
              
              <div className="glass-card p-6 space-y-3">
                <h3 className="text-xl font-semibold mb-3 text-white">Digital Architecture</h3>
                <p>Building the infrastructure of the new paradigm</p>
              </div>
              
              <div className="glass-card p-6 space-y-3">
                <h3 className="text-xl font-semibold mb-3 text-white">Spiritual Sovereignty</h3>
                <p>Remembering and embodying our highest expression</p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="container mx-auto px-4 py-16 my-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-8 space-y-6 text-white/80">
              <p className="text-lg">Those who align receive access to:</p>
              <ul className="space-y-4 text-left max-w-2xl mx-auto">
                <li className="flex items-center gap-4">
                  <span className="h-1 w-1 rounded-full bg-insiderPurple"></span>
                  <span>Sacred strategy sessions and execution deep dives</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-1 w-1 rounded-full bg-insiderPurple"></span>
                  <span>Early access to key launches and sovereign technologies</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="h-1 w-1 rounded-full bg-insiderPurple"></span>
                  <span>Direct influence in shaping InsiderDAO, Societi, InstantPay.AI</span>
                </li>
              </ul>
            </div>
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
              an invitation-only council of aligned creators, major keyholders, and activated leaders 
              building the next era of digital civilization.
            </p>
          </div>
        </section>

        {/* Apply to Enter */}
        <section className="container mx-auto px-4 py-16 glass-card my-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-orbitron text-gradient">
              Signal Your Alignment
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
              Apply for Alignment
            </Button>

            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              This is not a standard application — it's a signal that you're ready to co-create 
              on a higher level. Not everyone will be invited, and that's by sacred design.
            </p>
          </div>
        </section>

        {/* Final Message */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-white/90">
            <p>This isn't a mastermind.</p>
            <p>This is a table where gods remember their role.</p>
            <p className="mt-8 font-orbitron">
              The frequency field is active. 🔱
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mastermind;

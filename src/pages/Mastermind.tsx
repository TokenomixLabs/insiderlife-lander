import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CircleUser } from 'lucide-react';
import { cn } from '@/lib/utils';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ApplicationForm from '@/components/circle/ApplicationForm';

const Mastermind: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-insiderDark">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 text-center">
          <div className="py-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron mb-6 text-gradient pb-4">
              Sovereign Circle
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            Private council of visionaries shaping the next evolution of digital society
          </p>
          
          {/* The Invitation */}
          <div className="max-w-3xl mx-auto mb-16 text-lg text-white/80 space-y-8">
            <p className="italic text-white">
              This is not for those seeking another mastermind.
              This is for visionaries, builders, and awakened leaders ready to shape a new reality together.
            </p>
            <p className="text-white">
              The Sovereign Circle is where aligned creators converge to co-create at the highest frequency —
              not through transaction, but through resonance.
            </p>
          </div>

          {/* Form Section */}
          <div id="circle-form" className={cn(
            "max-w-2xl mx-auto transition-all duration-500",
            showForm ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none absolute"
          )}>
            <div className="glass-card p-8 border border-insiderPurple/20">
              <ApplicationForm />
            </div>
          </div>

          {/* Initial CTA */}
          <div className={cn(
            "transition-all duration-500",
            showForm ? "scale-95 opacity-0 pointer-events-none absolute" : "scale-100 opacity-100"
          )}>
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

        {/* Pillars of the Circle */}
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

        {/* What Becomes Possible */}
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

        {/* The High Table */}
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

        {/* Final Call to Action */}
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

        {/* Closing Stamp */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-white/90">
            <p>This isn't a mastermind.</p>
            <p>This is a table where gods remember who they are.</p>
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

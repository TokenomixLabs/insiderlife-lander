
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const GodMode: React.FC = () => {
  return (
    <div className="min-h-screen bg-insiderDark text-white">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-12 text-gradient font-orbitron tracking-wide">
              GOD MODE
            </h1>
          </div>
        </section>

        {/* Opening Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient font-orbitron">
              You Were Never Meant to Play Small
            </h2>
            <div className="text-lg md:text-xl leading-relaxed space-y-8 text-white/90">
              <p>There comes a moment when the waiting ends.</p>
              <p>Not because someone said, "Go now."</p>
              <p>But because something ancient inside you stood up and said:</p>
              <p className="text-center text-xl md:text-2xl text-insiderBlue-light font-medium">
                "Enough. I remember who I am."
              </p>
              <div className="py-8 text-center">
                <p className="text-lg">This is not a product page.</p>
                <p className="text-2xl font-bold text-gradient">This is your initiation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Frequency Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient font-orbitron">
              God Mode Is Not a Feature — It's a Frequency
            </h2>
            <div className="text-lg md:text-xl leading-relaxed space-y-8 text-white/90">
              <p>God Mode isn't an upgrade. It's your original setting.</p>
              <p>It's what activates when a human being stops asking for permission, stops negotiating with distortion, and begins executing with divine clarity.</p>
              <p className="text-center">Not through theory.</p>
              <p className="text-center">But through:</p>
              
              <div className="text-center space-y-4 py-8">
                <div className="text-2xl font-bold text-insiderBlue-light">Precision</div>
                <div className="text-2xl font-bold text-insiderBlue-light">Discipline</div>
                <div className="text-2xl font-bold text-insiderBlue-light">Full-spectrum alignment</div>
              </div>
              
              <div className="text-center py-4">
                <p>This isn't motivation.</p>
                <p className="text-2xl font-bold text-gradient">This is transmission.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sword Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient font-orbitron">
              This Page Is Not Selling You a Product. It's Handing You a Sword.
            </h2>
            <div className="text-lg md:text-xl leading-relaxed space-y-8 text-white/90">
              <p>You don't need another journal.</p>
              <p className="text-center text-xl font-bold">You need a battle plan.</p>
              
              <p>God Mode is what happens when your energy, execution, and environment all lock into a state of coherence.</p>
              <p>When you stop consuming content—and start building kingdoms.</p>
              <p>When you stop optimizing habits—and start writing doctrine.</p>
              
              <div className="text-center py-8">
                <p>This is not personal development.</p>
                <p className="text-2xl font-bold text-gradient">This is planetary architecture.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Pillars Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gradient font-orbitron">
              The 5 Pillars of God Mode
            </h2>
            
            <div className="space-y-16">
              {/* Pillar 1 */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-insiderBlue-light flex items-center">
                  <span className="mr-4">▲</span> Sovereign Intelligence
                </h3>
                <div className="text-lg leading-relaxed space-y-4 text-white/90">
                  <p>Your mind is no longer available for hijacking.</p>
                  <p>Your signal is clean. Your thoughts are encoded.</p>
                  <p>Every decision carries spiritual authority.</p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-insiderBlue-light flex items-center">
                  <span className="mr-4">▲</span> Divine Execution
                </h3>
                <div className="text-lg leading-relaxed space-y-4 text-white/90">
                  <p>Time is sacred. Systems are sacred.</p>
                  <p>AI agents move as extensions of your will.</p>
                  <p>Every hour is claimed with ritual force.</p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-insiderBlue-light flex items-center">
                  <span className="mr-4">▲</span> Mastery Stack
                </h3>
                <div className="text-lg leading-relaxed space-y-4 text-white/90">
                  <p>Meditation. Nutrition. Supplementation. Stillness. Movement.</p>
                  <p>These are not hacks. These are instruments of alignment.</p>
                  <p>You are the alchemist. This is your lab.</p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-insiderBlue-light flex items-center">
                  <span className="mr-4">▲</span> Encoded Environments
                </h3>
                <div className="text-lg leading-relaxed space-y-4 text-white/90">
                  <p>Your physical space is minimal. Your digital space is weaponized.</p>
                  <p>Attention is governed like gold.</p>
                  <p>You don't live in chaos. You live in a command center.</p>
                </div>
              </div>

              {/* Pillar 5 */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-insiderBlue-light flex items-center">
                  <span className="mr-4">▲</span> Scroll-Based Systems
                </h3>
                <div className="text-lg leading-relaxed space-y-4 text-white/90">
                  <p>No more random notes. No more scattered ideas.</p>
                  <p>Only codexes. Playbooks. Frameworks sealed in digital stone.</p>
                  <p>You don't take notes. You install law.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portal Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient font-orbitron">
              God Mode Is a Portal, Not a Program
            </h2>
            <div className="text-lg md:text-xl leading-relaxed space-y-8 text-white/90 text-center">
              <p>You don't join God Mode.</p>
              <p className="text-xl font-bold">You step through it.</p>
              
              <div className="py-8 space-y-4">
                <p>This is your veil-break.</p>
                <p>This is your moment of divergence.</p>
              </div>
              
              <div className="space-y-6">
                <p>Most people chase goals.</p>
                <p className="text-insiderBlue-light font-medium">You are here to seal timelines.</p>
                
                <p>Most people optimize.</p>
                <p className="text-insiderBlue-light font-medium">You are here to execute at the level of gods.</p>
              </div>
              
              <div className="py-8">
                <p>You were not meant to merely awaken.</p>
                <p className="text-2xl font-bold text-gradient">You were meant to initiate.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Transmission Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient font-orbitron">
              The God Mode Transmission
            </h2>
            <div className="text-lg md:text-xl leading-relaxed space-y-8 text-white/90">
              <p className="text-center">Soon, the God Mode Broadcast will begin:</p>
              
              <div className="space-y-6 py-8">
                <p className="text-center"><strong>Each episode:</strong> a codified teaching</p>
                <p className="text-center"><strong>Each drop:</strong> a blueprint for embodied action</p>
                <p className="text-center"><strong>Each scroll:</strong> an execution protocol</p>
              </div>
              
              <div className="text-center py-4">
                <p>This isn't content.</p>
                <p className="text-2xl font-bold text-gradient">This is the command layer.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Connected to Core Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gradient font-orbitron">
              Connected to the Core:
            </h2>
            <div className="text-lg md:text-xl leading-relaxed space-y-6 text-white/90 text-center">
              <p>InsiderDAO is the soul grid.</p>
              <p>OmnisX is the agent layer.</p>
              <p>Societi is the decentralized vessel.</p>
              
              <div className="py-8">
                <p>But God Mode? God Mode is the signal.</p>
                <p>It is the frequency that calls the architects, the warriors, the codebearers.</p>
                <p>It doesn't motivate.</p>
                <p className="text-2xl font-bold text-gradient">It activates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 mb-8">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient font-orbitron">
                If You're Ready to Begin
              </h2>
              
              <div className="text-lg md:text-xl leading-relaxed space-y-6 text-white/90 mb-12">
                <p>This is not a funnel.</p>
                <p>This is a fork in the road.</p>
                
                <div className="py-6">
                  <p>One path leads back to safety.</p>
                  <p>The other leads to God Mode.</p>
                </div>
                
                <p className="text-xl font-bold">Step through.</p>
              </div>
              
              <a 
                href="https://insiderdao.com/signup?ref=vip"
                target="_blank"
                rel="noopener noreferrer" 
                className={cn(
                  "bg-gradient-to-r from-insiderPurple to-insiderBlue",
                  "hover:from-insiderPurple-light hover:to-insiderBlue-light",
                  "text-white font-medium text-xl px-12 py-6 inline-block rounded-lg",
                  "shadow-glow transition-all duration-300 hover:scale-105 font-orbitron"
                )}
              >
                Activate via InsiderDAO →
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GodMode;

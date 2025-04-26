import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const AiFreedomCode: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-insiderDark">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron mb-6 text-gradient leading-[1.4] py-2 pb-4">
            Forget Courses. This Is a Weapon.
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-4xl mx-auto text-white/90 leading-tight">
            The First AI-Powered System That Builds Wealth, Creates True Freedom, and Helps Us Reclaim What's Been Stolen.
          </p>
          <div className="flex justify-center">
            <Button 
              className={cn(
                "bg-gradient-to-r from-insiderPurple to-insiderBlue",
                "hover:from-insiderPurple-light hover:to-insiderBlue-light",
                "text-white text-lg font-medium py-6 px-8 rounded-lg",
                "shadow-glow transition-all duration-300 hover:scale-105",
                "flex items-center gap-3"
              )}
            >
              <span>Activate AI FREEDOM CODE</span>
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-4 py-16 bg-insiderDark-light/20 backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-orbitron text-gradient pb-4">
            Way More Than A Course
          </h2>
          
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-white/80 mb-10 text-center">
              AI FREEDOM CODE is a weaponized digital system built for speed, power, and leverage.
              It combines automation, duplication, and viral mechanics — so you grow even while offline.
            </p>
            
            <div className="glass-card p-8 w-full">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-insiderBlue mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-white/90 font-semibold block">Instantly deployable funnel</span>
                    <p className="text-sm text-white/70 mt-1">Launch today — no tech headaches, no delays. Just plug in and go.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-insiderBlue mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-white/90 font-semibold block">Built-in referral engine</span>
                    <p className="text-sm text-white/70 mt-1">Turn every user into a promoter and unleash viral growth from Day 1.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-insiderBlue mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-white/90 font-semibold block">Early access to AI agents</span>
                    <p className="text-sm text-white/70 mt-1">Use intelligent systems that scale your reach, automate engagement, and close gaps in your business 24/7.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-insiderBlue mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-white/90 font-semibold block">Passive income layer</span>
                    <p className="text-sm text-white/70 mt-1">Earn even while you sleep — with a built-in revenue system that rewards action and alignment.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-insiderBlue mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg text-white/90 font-semibold block">Community + platform integration</span>
                    <p className="text-sm text-white/70 mt-1">You're not alone — tap into a movement, get support, and grow inside a powerful ecosystem built for sovereignty.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why This Is Different */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <blockquote className="text-xl md:text-2xl font-light italic text-white/70 max-w-3xl mx-auto">
              "While others are learning about AI… you're partnering with it."
            </blockquote>
          </div>
          
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 md:p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="border-r border-white/10 pr-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white/80">Everyone Else</h3>
                  <p className="text-lg text-white/70">Takes courses</p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gradient">With AI FREEDOM CODE</h3>
                  <p className="text-lg text-white">Deploys agents</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="border-r border-white/10 pr-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white/80">Everyone Else</h3>
                  <p className="text-lg text-white/70">Works harder</p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gradient">With AI FREEDOM CODE</h3>
                  <p className="text-lg text-white">Automates power</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="border-r border-white/10 pr-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white/80">Everyone Else</h3>
                  <p className="text-lg text-white/70">Builds alone</p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gradient">With AI FREEDOM CODE</h3>
                  <p className="text-lg text-white">Builds with a movement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing / Call to Action */}
        <section className="container mx-auto px-4 py-16 md:py-24 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
              This isn't just another offer.
              It's the ignition of a movement.
            </p>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              You're not buying a product —
              You're joining the rise of a new digital class.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button 
              className={cn(
                "bg-gradient-to-r from-insiderPurple to-insiderBlue",
                "hover:from-insiderPurple-light hover:to-insiderBlue-light",
                "text-white text-xl font-bold py-8 px-10 rounded-lg",
                "shadow-glow transition-all duration-300 hover:scale-105",
                "flex items-center gap-3"
              )}
            >
              <span>ACTIVATE AI FREEDOM CODE</span>
              <ArrowUpRight className="h-7 w-7" />
            </Button>
          </div>
        </section>

        {/* Affiliate CTA Section */}
        <section className="container mx-auto px-4 py-16 bg-insiderDark-light/20 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center font-orbitron text-gradient pb-4">
              📣 Want to Share This With the World?
            </h2>
            
            <p className="text-xl text-white/80 mb-10">
              Grab ready-made swipe copy, promo assets, and instant activation tools to start sharing the AIFC system today.
            </p>

            <a 
              href="https://insiderlife.com/aifc-swipes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className={cn(
                  "bg-gradient-to-r from-insiderPurple to-insiderBlue",
                  "hover:from-insiderPurple-light hover:to-insiderBlue-light",
                  "text-white text-lg font-medium py-6 px-8 rounded-lg",
                  "shadow-glow transition-all duration-300 hover:scale-105",
                  "flex items-center gap-3"
                )}
              >
                <Flame className="h-5 w-5" />
                <span>Access Affiliate Swipe Hub</span>
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AiFreedomCode;

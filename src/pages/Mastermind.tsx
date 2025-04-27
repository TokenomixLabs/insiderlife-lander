
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Star, Award, CircleUser, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Mastermind: React.FC = () => {
  const applicationRef = useRef<HTMLDivElement>(null);
  
  const scrollToApplication = () => {
    applicationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-insiderDark">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 text-center">
          <div className="flex justify-center mb-8">
            <Rocket className="h-12 w-12 text-insiderBlue animate-pulse-glow" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron mb-6 text-gradient leading-[1.2] py-2">
            The Mastermind for Those Who Move the Grid
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-4xl mx-auto text-white/90 leading-tight">
            This is not a course. This is where the elite gather, strategize, and activate.
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
              onClick={scrollToApplication}
            >
              <span>Apply Now</span>
              <ArrowDown className="h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* What It Is */}
        <section className="container mx-auto px-4 py-16 glass-card my-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center font-orbitron text-gradient">
              The Access That Matters
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Small Group, High-Frequency Access</h3>
                <p className="text-white/80">
                  Direct connection with a carefully selected cohort of visionaries, creators and leaders who understand what's really happening.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Direct Alignment with Jamison Palmer</h3>
                <p className="text-white/80">
                  Regular strategic guidance and AI collaboration from someone positioned at the intersection of technology, capital, and future trends.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Private Strategy Development</h3>
                <p className="text-white/80">
                  Wealth creation, digital sovereignty, and AI mastery frameworks that aren't shared in any public forum or mainstream platform.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Systems That Shape the Future</h3>
                <p className="text-white/80">
                  Access to emerging models, technologies, and strategies — months or years before they reach public awareness and saturation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="container mx-auto px-4 py-16 my-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-orbitron text-gradient">
              Who Belongs Here
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 flex flex-col items-center">
                <Star className="h-10 w-10 text-insiderBlue mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Top 1% Creators</h3>
                <p className="text-white/80">
                  Founders, visionaries, and builders who aren't afraid to shape reality rather than just respond to it.
                </p>
              </div>
              
              <div className="glass-card p-6 flex flex-col items-center">
                <Star className="h-10 w-10 text-insiderPurple mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Sovereign Entrepreneurs</h3>
                <p className="text-white/80">
                  Those who understand that true wealth comes from owning your models, not renting access to someone else's.
                </p>
              </div>
              
              <div className="glass-card p-6 flex flex-col items-center">
                <Star className="h-10 w-10 text-insiderBlue mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">The Called</h3>
                <p className="text-white/80">
                  Individuals who feel an inexplicable pull to step beyond mainstream success into something that resonates at a deeper level.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="container mx-auto px-4 py-16 glass-card my-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-orbitron text-gradient">
              The Advantage
            </h2>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Award className="h-6 w-6 text-insiderBlue mt-1 flex-shrink-0" />
                <div>
                  <span className="text-lg text-white font-semibold block">Hidden Frameworks & Scalable Plays</span>
                  <p className="text-white/80 mt-1">Access strategic models and executable systems that create asymmetric returns — not theoretical concepts.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Award className="h-6 w-6 text-insiderBlue mt-1 flex-shrink-0" />
                <div>
                  <span className="text-lg text-white font-semibold block">Direct Feedback & Strategic Guidance</span>
                  <p className="text-white/80 mt-1">Private calls, personalized guidance, and direct access to experience that clarifies your path forward.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Award className="h-6 w-6 text-insiderBlue mt-1 flex-shrink-0" />
                <div>
                  <span className="text-lg text-white font-semibold block">Private Opportunity Network</span>
                  <p className="text-white/80 mt-1">Deals, collaborations, and possibilities that aren't discussed in public forums or mainstream channels.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Award className="h-6 w-6 text-insiderBlue mt-1 flex-shrink-0" />
                <div>
                  <span className="text-lg text-white font-semibold block">Early Positioning</span>
                  <p className="text-white/80 mt-1">Get established in emerging markets and models before they become saturated — and while the returns are still extraordinary.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Optional Upgrade Invitation */}
        <section className="container mx-auto px-4 py-16 my-8 max-w-4xl">
          <div className="glass-card p-8 border-t-4 border-insiderPurple">
            <div className="flex justify-center mb-6">
              <CircleUser className="h-10 w-10 text-insiderPurple" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 font-orbitron text-gradient">
              The High Table
            </h3>
            <p className="text-lg text-center text-white/80 max-w-2xl mx-auto">
              Those who show alignment and results may be invited into the inner circle — where generational strategy is discussed and implemented.
            </p>
          </div>
        </section>

        {/* Application Section */}
        <section ref={applicationRef} className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-orbitron text-gradient">
            Ready to Step Forward?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            The Mastermind is invitation-only. Submit your application for consideration, and we'll contact you within 48 hours if there's alignment.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://forms.gle/A1B2C3D4E5F6G7H8" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className={cn(
                  "bg-gradient-to-r from-insiderPurple to-insiderBlue",
                  "hover:from-insiderPurple-light hover:to-insiderBlue-light",
                  "text-white text-lg font-medium py-8 px-10 rounded-lg",
                  "shadow-glow transition-all duration-300 hover:scale-105"
                )}
              >
                Apply Now
              </Button>
            </a>
          </div>
          <p className="text-sm text-white/50 mt-4">
            Applications are reviewed personally. Responses sent to admin@insiderlife.com
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mastermind;

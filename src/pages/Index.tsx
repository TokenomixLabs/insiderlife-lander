
import React from 'react';
import Navbar from '@/components/Navbar';
import VideoHeroSection from '@/components/VideoHeroSection';
import OfferingsSection from '@/components/OfferingsSection';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-insiderDark flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <VideoHeroSection />
        <OfferingsSection />
        <AboutSection />
        <AnnouncementBanner />
        
        {/* The Final CTA Section - Last section before footer */}
        <section className="relative bg-insiderDark z-20 py-16 mb-8">
          <div className="container mx-auto px-4">
            <div 
              className="glass-card p-10 md:p-16 text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient font-orbitron">
                  Your Future is Calling. Will You Answer?
                </h2>
              </div>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                This isn't just a membership—it's your passport to the next level of digital wealth, freedom, and influence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <div className="flex items-center justify-center md:justify-start">
                  <span className="text-insiderBlue-light mr-2">•</span>
                  <span className="text-white">Insider strategies</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <span className="text-insiderBlue-light mr-2">•</span>
                  <span className="text-white">AI-driven automation</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <span className="text-insiderBlue-light mr-2">•</span>
                  <span className="text-white">Top 1% of digital visionaries</span>
                </div>
              </div>
              
              <a 
                href="https://insiderdao.com/signup?ref=vip"
                target="_blank"
                rel="noopener noreferrer" 
                className={cn(
                  "bg-gradient-to-r from-insiderPurple to-insiderBlue",
                  "hover:from-insiderPurple-light hover:to-insiderBlue-light",
                  "text-white font-medium text-lg px-8 py-6 inline-block rounded-md",
                  "shadow-glow transition-all duration-300 hover:scale-105"
                )}
              >
                🔥 Join the Community <ArrowRight className="ml-2 h-5 w-5 inline" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

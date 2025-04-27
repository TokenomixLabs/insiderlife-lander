
import React from 'react';
import { Button } from '@/components/ui/button';
import { Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const AffiliateSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 bg-insiderDark-light/20 backdrop-blur-sm text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center font-orbitron text-gradient pb-4">
          📣 Want to Share This With the World?
        </h2>
      
        <p className="text-xl text-white/80 mb-10 text-center">
          Grab ready-made swipe copy, promo assets, and instant activation tools to start sharing the AIFC system today.
        </p>

        <div className="flex justify-center">
          <Link to="/affiliate-swipe-hub">
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AffiliateSection;


import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-insiderDark/80 backdrop-blur-md border-b border-insiderPurple-glow/20">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-insiderBlue via-insiderPurple-glow to-insiderPurple bg-clip-text text-transparent">
            InsiderLife
          </h1>
        </div>
        
        <div className="hidden md:flex space-x-10 text-sm font-medium tracking-wide">
          <a href="#about" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">About</a>
          <a href="#offerings" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">What We Offer</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105">Contact</a>
        </div>
        
        <Button
          className={cn(
            "bg-gradient-to-r from-insiderPurple to-insiderBlue",
            "hover:from-insiderPurple-glow hover:to-insiderBlue-light",
            "text-white font-medium rounded-lg transform transition-all duration-300 hover:scale-105",
            "button-glow animate-glow-pulse"
          )}
          size="sm"
        >
          Join Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

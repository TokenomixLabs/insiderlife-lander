
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-insiderDark/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/567b2d9a-c6b3-4294-ae0c-e912ea1c90b6.png" 
            alt="InsiderLife Logo" 
            className="h-6 md:h-8"
          />
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#about" className="text-white/80 hover:text-white transition-colors duration-200">About</a>
          <a href="#offerings" className="text-white/80 hover:text-white transition-colors duration-200">What We Offer</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-200">Contact</a>
        </div>
        
        <Button
          className={cn(
            "bg-gradient-to-r from-insiderPurple to-insiderBlue",
            "hover:from-insiderPurple-light hover:to-insiderBlue-light",
            "text-white font-medium rounded-lg shadow-glow transition-all duration-300 hover:scale-105"
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

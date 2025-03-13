
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/5 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-insiderBlue-light to-insiderPurple-light bg-clip-text text-transparent">InsiderLife</h1>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="text-foreground/80 hover:text-insiderBlue-light transition-colors">About</a>
          <a href="#offerings" className="text-foreground/80 hover:text-insiderBlue-light transition-colors">What We Offer</a>
          <a href="#contact" className="text-foreground/80 hover:text-insiderBlue-light transition-colors">Contact</a>
        </div>
        
        <Button 
          variant="default" 
          size="sm"
          className="bg-gradient-to-r from-insiderPurple-DEFAULT to-insiderBlue-DEFAULT hover:from-insiderPurple-light hover:to-insiderBlue-light border border-white/10"
        >
          Join Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

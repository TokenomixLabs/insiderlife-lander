
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">InsiderLife</h1>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
          <a href="#offerings" className="text-foreground/80 hover:text-foreground transition-colors">What We Offer</a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
        </div>
        
        <Button variant="default" size="sm">
          Join Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

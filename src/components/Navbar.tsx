
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import WaitlistDialog from './WaitlistDialog';

export function Navbar() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center bg-insiderDark/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/fe4a3c75-e706-4c9e-9a22-d0dd85c0f199.png" 
              alt="InsiderLife Logo" 
              className="h-6 md:h-8" 
            />
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#about" className="text-white/80 hover:text-white transition-colors duration-200">About</a>
          <Link to="/aifreedomcode" className="text-white/80 hover:text-white transition-colors duration-200">AI FREEDOM CODE</Link>
          <Link to="/circle" className="text-white/80 hover:text-white transition-colors duration-200">Sovereign Circle</Link>
          <a href="https://insiderdao.com/signup?ref=vip" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors duration-200">Community</a>
          <Link to="/support" className="text-white/80 hover:text-white transition-colors duration-200">Contact</Link>
        </div>
        
        <Button
          className={cn(
            "bg-gradient-to-r from-insiderPurple to-insiderBlue",
            "hover:from-insiderPurple-light hover:to-insiderBlue-light",
            "text-white font-medium rounded-lg shadow-glow transition-all duration-300 hover:scale-105"
          )}
          size="sm"
          onClick={() => setWaitlistOpen(true)}
        >
          Join Now
        </Button>
      </div>
      
      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </nav>
  );
}

export default Navbar;

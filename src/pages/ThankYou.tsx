
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-insiderDark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex flex-col items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/fe4a3c75-e706-4c9e-9a22-d0dd85c0f199.png" 
              alt="InsiderLife Logo" 
              className="h-8 mb-8"
            />
          </Link>
          
          <div className="bg-insiderDark-light/30 rounded-xl p-8 border border-white/10 shadow-glow">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2 font-orbitron">Thank You for Subscribing!</h1>
            <p className="text-white/80 mb-6">
              You're now part of the InsiderLife community. We'll keep you updated with the latest insider advantages and opportunities.
            </p>
            <Link to="/">
              <Button 
                className="bg-gradient-to-r from-insiderPurple to-insiderBlue hover:from-insiderPurple-light hover:to-insiderBlue-light text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

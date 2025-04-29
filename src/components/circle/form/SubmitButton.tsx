
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const SubmitButton: React.FC = () => {
  return (
    <Button 
      type="submit"
      className={cn(
        "bg-gradient-to-r from-insiderPurple to-insiderBlue",
        "hover:from-insiderPurple-light hover:to-insiderBlue-light",
        "text-white text-lg font-medium py-6 px-8 rounded-lg w-full",
        "shadow-glow transition-all duration-300 hover:scale-105"
      )}
    >
      Send Application
    </Button>
  );
};

export default SubmitButton;

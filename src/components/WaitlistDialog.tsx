
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistDialog: React.FC<WaitlistDialogProps> = ({ open, onOpenChange }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call to store email
    try {
      // In production, replace with actual API call to your CRM/storage
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. Thank you!",
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setEmail('');
        setIsSuccess(false);
        onOpenChange(false);
      }, 2000);
      
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Unable to join waitlist. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-insiderDark border border-white/10 p-6 md:p-8 overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-gradient font-orbitron flex gap-2 items-center">
            🚀 The Movement is About to Begin... Are You In?
          </DialogTitle>
          <DialogDescription className="text-base text-white/80 mt-3">
            You're on the cutting edge. Be the first to get notified when InsiderLife launches.
            This is your chance to secure early access to the next level of digital wealth, influence, and AI-powered automation.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 gap-4 my-4">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-insiderBlue-light mr-2 shrink-0" />
            <span className="text-white">Priority access for early adopters</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-insiderBlue-light mr-2 shrink-0" />
            <span className="text-white">Exclusive perks & insights</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-insiderBlue-light mr-2 shrink-0" />
            <span className="text-white">Limited spots available – don't miss out!</span>
          </div>
        </div>
        
        <p className="text-white/80 mb-4">📩 Enter your best email below to secure your spot.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-insiderDark-light/30 border-white/20 text-white placeholder:text-white/50"
            disabled={isSubmitting || isSuccess}
            required
          />
          
          <Button 
            type="submit"
            className={cn(
              "w-full bg-gradient-to-r from-insiderPurple to-insiderBlue",
              "hover:from-insiderPurple-light hover:to-insiderBlue-light",
              "text-white font-medium rounded-lg shadow-glow transition-all duration-300 hover:scale-105"
            )}
            disabled={isSubmitting || isSuccess}
          >
            {isSubmitting ? 'Submitting...' : isSuccess ? 'Success! ✅' : '🔥 Join the Waitlist'}
          </Button>
          
          <p className="text-white/60 text-sm text-center">💡 No spam. Just exclusive access to what's next.</p>
        </form>
        
        <div className="mt-4 text-center">
          <button 
            onClick={() => onOpenChange(false)} 
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            Maybe Later
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;

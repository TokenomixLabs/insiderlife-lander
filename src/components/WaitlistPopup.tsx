
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, Mail, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface WaitlistPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistPopup: React.FC<WaitlistPopupProps> = ({ open, onOpenChange }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. Thank you!",
      });
      
      // Reset after 3 seconds
      setTimeout(() => {
        setEmail('');
        setIsSuccess(false);
        onOpenChange(false);
      }, 3000);
    }, 1500);
  };

  const handleDismiss = () => {
    if (!isSubmitting) {
      setEmail('');
      setIsSuccess(false);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-insiderDark-light/95 border border-white/10 backdrop-blur-md p-6 md:p-8 text-white">
        <DialogHeader className="space-y-3">
          <button 
            onClick={handleDismiss}
            className="absolute right-4 top-4 rounded-sm opacity-70 text-white hover:opacity-100 transition-opacity disabled:pointer-events-none"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
          
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="text-3xl mb-1">🚀</span>
            <DialogTitle className="text-2xl md:text-3xl font-orbitron text-gradient">
              The Movement is About to Begin... Are You In?
            </DialogTitle>
          </div>
          
          <p className="text-white/80 text-center">
            You're on the cutting edge. Be the first to get notified when InsiderLife launches.
            This is your chance to secure early access to the next level of digital wealth, influence, and AI-powered automation.
          </p>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-insiderBlue-light" />
              <span>Priority access for early adopters</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-insiderBlue-light" />
              <span>Exclusive perks & insights</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-insiderBlue-light" />
              <span>Limited spots available</span>
            </div>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 bg-insiderDark/50 border-white/20 focus-visible:ring-insiderBlue text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                className={cn(
                  "w-full bg-gradient-to-r from-insiderPurple to-insiderBlue",
                  "hover:from-insiderPurple-light hover:to-insiderBlue-light",
                  "text-white font-medium py-6 h-auto shadow-glow transition-all duration-300",
                  "flex items-center justify-center space-x-2",
                  isSubmitting && "opacity-80 cursor-not-allowed"
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Processing...</span>
                  </>
                ) : (
                  <>
                    <span className="mr-1">🔥</span> Join the Waitlist
                  </>
                )}
              </Button>
              
              <p className="text-center text-white/50 text-xs pt-2">
                No spam. Just exclusive access to what's next.
              </p>
            </form>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-insiderBlue/20 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-insiderBlue-light animate-pulse" />
              </div>
              <p className="text-xl font-medium">You're on the list!</p>
              <p className="text-white/70">We'll be in touch soon with exclusive updates.</p>
            </div>
          )}
          
          {!isSuccess && (
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={handleDismiss}
                className="text-white/50 text-sm hover:text-white transition-colors"
                disabled={isSubmitting}
              >
                Maybe Later
              </button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistPopup;

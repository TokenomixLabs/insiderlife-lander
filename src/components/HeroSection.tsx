
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ArrowRight, Rocket } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const HeroSection: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscription form submitted');
    toast({
      title: "Success!",
      description: "You're now subscribed to InsiderLife updates.",
    });
    // You would add actual form handling logic here
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-insiderBlue/20 rounded-full filter blur-3xl opacity-30 animate-pulse-glow"></div>
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-insiderPurple/20 rounded-full filter blur-3xl opacity-30 animate-pulse-glow animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 font-orbitron">
              <Rocket className="inline-block mr-2 h-8 w-8 text-insiderBlue animate-float" />
              Unlock the <span className="text-insiderBlue">Insider</span> Advantage:
              <span className="block text-gradient mt-2">AI-Powered Wealth, Influence & Freedom</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl">
              Dominate the digital economy with next-level AI automation, high-impact monetization systems, and elite community access.
            </p>
            
            <form onSubmit={handleSubscribe} className="mt-10 w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
                  required
                />
                <Button 
                  type="submit"
                  className={cn(
                    "bg-gradient-to-r from-insiderPurple to-insiderBlue",
                    "hover:from-insiderPurple-light hover:to-insiderBlue-light",
                    "text-white font-medium h-12 px-6 shadow-glow transition-all duration-300 hover:scale-105"
                  )}
                >
                  Join the Movement <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

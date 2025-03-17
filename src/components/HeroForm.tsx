
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const HeroForm: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the email to your backend or email service
      console.log('Subscription form submitted with email:', email);
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "You're now subscribed to InsiderLife updates.",
      });
      
      // Redirect to thank you page
      navigate('/thank-you');
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-4 bg-insiderDark bg-opacity-95">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 font-orbitron">
            <span className="text-insiderBlue">Insider</span> Advantage
            <span className="block text-gradient mt-2">AI-Powered Wealth & Freedom</span>
          </h1>
          <p className="mt-4 text-xl text-white/80 max-w-2xl">
            Dominate the digital economy with next-level AI automation, high-impact monetization systems, and elite community access.
          </p>
        </div>
        
        <form onSubmit={handleSubscribe} className="w-full max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            <Button 
              type="submit"
              className={cn(
                "bg-gradient-to-r from-insiderPurple to-insiderBlue",
                "hover:from-insiderPurple-light hover:to-insiderBlue-light",
                "text-white font-medium h-12 px-6 shadow-glow transition-all duration-300 hover:scale-105"
              )}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : (
                <>Join the Movement <ArrowRight className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroForm;


import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Lightbulb, Zap, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const AboutSection: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Subscription form submitted with email:', email);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "You're now subscribed to InsiderLife updates.",
      });
      
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
    <section id="about" className="pt-0 relative bg-insiderDark">
      <div className="w-full max-w-md mx-auto">
        <form onSubmit={handleSubscribe} className="w-full py-4 px-4">
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

      <div className="glass-card p-8 md:p-12 max-w-3xl mx-auto mb-8">
        <div className="flex items-center justify-center mb-6">
          <Lightbulb className="h-8 w-8 text-insiderBlue-light mr-3 animate-pulse-glow" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient font-orbitron">
            Exclusive Strategies for AI-Powered Domination
          </h2>
        </div>
        <p className="text-center text-lg text-white/90 leading-relaxed">
          InsiderLife is not just a platform—it's a movement. We equip visionary entrepreneurs, creators, and founders with 
          AI-enhanced business intelligence, high-leverage growth systems, and elite networking opportunities to scale exponentially in the digital age.
        </p>
        
        <h3 className="text-xl font-semibold text-center mt-8 mb-6 text-insiderBlue-light font-orbitron">
          🔥 What You Get:
        </h3>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center mb-4",
              "bg-gradient-to-br from-insiderBlue to-insiderBlue-dark shadow-glow-blue"
            )}>
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-orbitron">Fast Impact</h3>
            <p className="text-white/70">Proven strategies for rapid execution & high ROI</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center mb-4",
              "bg-gradient-to-br from-insiderPurple to-insiderPurple-dark shadow-glow-purple"
            )}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-orbitron">AI-Powered</h3>
            <p className="text-white/70">Cutting-edge automation for effortless scalability</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center mb-4",
              "bg-gradient-to-br from-insiderBlue-light to-insiderPurple-light shadow-glow"
            )}>
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-orbitron">Elite Community</h3>
            <p className="text-white/70">Network with top 1% visionaries & disruptors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

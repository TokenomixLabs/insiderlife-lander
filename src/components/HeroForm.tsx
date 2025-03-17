
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
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
    <div className="hero-form-container">
      <form onSubmit={handleSubscribe} className="hero-form">
        <Input 
          type="email" 
          placeholder="Enter your email address" 
          className="hero-input"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
        />
        <button 
          type="submit"
          className="join-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : (
            <>Join the Movement <ArrowRight className="ml-2 h-4 w-4" /></>
          )}
        </button>
      </form>
    </div>
  );
};

export default HeroForm;

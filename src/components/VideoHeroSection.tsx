
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';

const VideoPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        muted={isMuted}
        className="w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-lines-and-shapes-in-digital-space-4148-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-insiderDark/70 z-10"></div>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMuted(!isMuted)}
        className="absolute z-50 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center bottom-8 right-8"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </Button>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

const VideoHeroSection: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

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
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center">
      {/* Video Background */}
      <VideoPlayer />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-24 md:py-36 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 font-orbitron">
            Unlock the <span className="text-insiderBlue">Insider</span> Advantage:
            <span className="block text-gradient mt-2">AI-Powered Wealth, Influence & Freedom</span>
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Dominate the digital economy with next-level AI automation, high-impact monetization systems, and elite community access.
          </p>
          
          <form onSubmit={handleSubscribe} className="mt-10 w-full max-w-md mx-auto">
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
      </div>
    </section>
  );
};

export default VideoHeroSection;

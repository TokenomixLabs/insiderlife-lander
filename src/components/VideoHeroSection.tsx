import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const VideoPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const playerInstanceRef = useRef<any>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!playerRef.current) return;

    const script = document.querySelector('script[src="https://player.vimeo.com/api/player.js"]');
    if (!script) {
      const vimeoScript = document.createElement('script');
      vimeoScript.src = 'https://player.vimeo.com/api/player.js';
      vimeoScript.onload = initializePlayer;
      document.head.appendChild(vimeoScript);
    } else {
      initializePlayer();
    }

    return () => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (playerInstanceRef.current) {
      if (isMuted) {
        playerInstanceRef.current.setVolume(0);
      } else {
        playerInstanceRef.current.setVolume(1);
      }
    }
  }, [isMuted]);

  const initializePlayer = () => {
    if (!window.Vimeo || !playerRef.current) {
      setTimeout(initializePlayer, 100);
      return;
    }

    const options = {
      id: 1066410334,
      loop: true,
      autoplay: true,
      muted: isMuted,
      background: true,
      responsive: true,
      controls: false
    };

    playerInstanceRef.current = new window.Vimeo.Player(playerRef.current, options);
    
    playerInstanceRef.current.on('loaded', () => {
      if (isMuted) {
        playerInstanceRef.current.setVolume(0);
      }
      playerInstanceRef.current.play();
    });
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="w-full h-full">
        <div ref={playerRef} className="w-full h-full"></div>
      </div>
      
      <div className="absolute inset-0 bg-insiderDark/70 z-10"></div>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMuted(!isMuted)}
        className="absolute z-50 top-4 right-4 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center"
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
    <section className="relative w-full flex flex-col pt-16">
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <VideoPlayer />
      </div>
      
      <div className="relative z-20 container mx-auto px-4 py-12 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <form onSubmit={handleSubscribe} className="w-full max-w-md mx-auto mb-8">
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

declare global {
  interface Window {
    Vimeo: any;
  }
}

export default VideoHeroSection;

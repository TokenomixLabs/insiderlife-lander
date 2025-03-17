
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';
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
      
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMuted(!isMuted)}
        className="absolute z-50 top-4 right-4 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </Button>
    </div>
  );
};

const VideoHeroSection: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col pt-16">
      <div className="relative w-full h-[60vh] md:h-[70vh] mb-0">
        <VideoPlayer />
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

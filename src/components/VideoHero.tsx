
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, VideoOff } from 'lucide-react';

interface VimeoPlayer {
  on: (event: string, callback: Function) => void;
  setVolume: (volume: number) => void;
  play: () => Promise<void>;
}

declare global {
  interface Window {
    Vimeo?: {
      Player: new (element: HTMLIFrameElement, options?: any) => VimeoPlayer;
    };
  }
}

const VideoHero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const vimeoPlayer = useRef<VimeoPlayer | null>(null);

  // Load the Vimeo Player API
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    script.onload = () => {
      console.log('Vimeo API loaded');
      initializePlayer();
    };
    script.onerror = () => {
      console.error('Failed to load Vimeo API');
      setHasError(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializePlayer = () => {
    try {
      if (iframeRef.current && window.Vimeo) {
        console.log('Initializing Vimeo player');
        vimeoPlayer.current = new window.Vimeo.Player(iframeRef.current, {
          background: true,
          muted: true,
          loop: true
        });
        
        vimeoPlayer.current.on('loaded', () => {
          console.log('Vimeo player loaded');
          setIsLoading(false);
          vimeoPlayer.current?.setVolume(0); // Start muted
          vimeoPlayer.current?.play().catch(err => {
            console.error('Vimeo playback error:', err);
          });
        });

        vimeoPlayer.current.on('error', (error: any) => {
          console.error('Vimeo player error:', error);
          setHasError(true);
        });
      }
    } catch (error) {
      console.error('Error initializing Vimeo player:', error);
      setHasError(true);
    }
  };

  const toggleMute = () => {
    if (vimeoPlayer.current) {
      if (isMuted) {
        vimeoPlayer.current.setVolume(1);
      } else {
        vimeoPlayer.current.setVolume(0);
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="hero-video-wrapper">
      {hasError ? (
        <div className="video-fallback">
          <VideoOff size={48} className="text-gray-500 mb-2" />
          <p className="text-gray-300">Video could not be loaded</p>
        </div>
      ) : (
        <div className="vimeo-wrapper">
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1066410334?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className="video-element"
            title="Background Video"
          ></iframe>
          {isLoading && (
            <div className="video-fallback">
              <div className="animate-pulse">
                <p className="text-gray-300">Loading video...</p>
              </div>
            </div>
          )}
        </div>
      )}
      
      {!isLoading && !hasError && (
        <button
          onClick={toggleMute}
          className="mute-toggle-button"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      )}
      
      <div className="hero-content-overlay">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="text-insiderBlue">Insider</span> Advantage
          </h1>
          <h2 className="hero-subtitle">AI-Powered Wealth <span className="text-insiderPurple">&</span> Freedom</h2>
          <p className="hero-description">
            Dominate the digital economy with next-level AI automation, high-impact monetization systems, and elite community access.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;

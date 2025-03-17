
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

const VideoHero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Ensure video plays on mount with more robust error handling
  useEffect(() => {
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
          console.log("Video started playing successfully");
        } catch (error) {
          console.error("Video playback failed:", error);
          // Try again with a slight delay (sometimes helps with browser issues)
          setTimeout(() => {
            videoRef.current?.play().catch(e => 
              console.error("Second attempt to play video failed:", e)
            );
          }, 1000);
        }
      };
      
      playVideo();
    }
    
    // Add event listeners to debug video issues
    const video = videoRef.current;
    if (video) {
      video.addEventListener('error', (e) => console.error('Video error:', e));
      video.addEventListener('canplay', () => console.log('Video can play'));
      video.addEventListener('playing', () => console.log('Video is playing'));
    }
    
    return () => {
      if (video) {
        video.removeEventListener('error', (e) => console.error('Video error:', e));
        video.removeEventListener('canplay', () => console.log('Video can play'));
        video.removeEventListener('playing', () => console.log('Video is playing'));
      }
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover"
        preload="auto"
      >
        <source src="/video-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Mute Toggle Button */}
      <button
        onClick={toggleMute}
        className={cn(
          "fixed bottom-8 right-8 z-50",
          "w-12 h-12 rounded-full flex items-center justify-center",
          "bg-black/30 backdrop-blur-sm",
          "text-white hover:bg-black/50 transition-all duration-300"
        )}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default VideoHero;

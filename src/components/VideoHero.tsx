
import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

const VideoHero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Video container that fills the entire viewport */}
      <div className="fixed inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video-background.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

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
    </>
  );
};

export default VideoHero;

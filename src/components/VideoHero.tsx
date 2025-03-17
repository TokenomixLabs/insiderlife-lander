
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, VideoOff } from 'lucide-react';

const VideoHero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      console.log("Setting up video element...");
      
      const videoElement = videoRef.current;
      
      const handleError = (e: Event) => {
        console.error('Video error:', e);
        setVideoError(true);
      };
      
      const handleCanPlay = () => {
        console.log('Video can now play');
        setVideoError(false);
      };
      
      videoElement.addEventListener('error', handleError);
      videoElement.addEventListener('canplay', handleCanPlay);
      
      // Try to play the video
      videoElement.play().catch(error => {
        console.error("Video playback failed:", error);
        setVideoError(true);
      });
      
      return () => {
        videoElement.removeEventListener('error', handleError);
        videoElement.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="video-container">
      {videoError ? (
        <div className="video-fallback">
          <VideoOff size={48} className="text-gray-500 mb-2" />
          <p className="text-gray-300">Video could not be loaded</p>
        </div>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="video-element"
        >
          <source src="/video-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Dark overlay for better text visibility */}
      <div className="video-overlay"></div>
      
      {/* Mute Toggle Button (only show if video is not in error state) */}
      {!videoError && (
        <button
          onClick={toggleMute}
          className="mute-toggle-button"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      )}
    </div>
  );
};

export default VideoHero;

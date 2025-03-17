
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const VideoHero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      console.log("Attempting to play video...");
      
      // Explicitly set the source for the video
      const videoElement = videoRef.current;
      
      // Add event listeners to debug video issues
      const handleError = (e: Event) => console.error('Video error:', e);
      const handleCanPlay = () => console.log('Video can now play');
      const handlePlaying = () => console.log('Video is now playing');
      const handleStalled = () => console.log('Video playback stalled');
      const handleWaiting = () => console.log('Video is waiting for more data');
      
      videoElement.addEventListener('error', handleError);
      videoElement.addEventListener('canplay', handleCanPlay);
      videoElement.addEventListener('playing', handlePlaying);
      videoElement.addEventListener('stalled', handleStalled);
      videoElement.addEventListener('waiting', handleWaiting);
      
      // Try to play the video after a short delay to ensure DOM is ready
      setTimeout(() => {
        console.log("Video source before play:", videoElement.src);
        console.log("Video element status:", {
          width: videoElement.clientWidth,
          height: videoElement.clientHeight,
          networkState: videoElement.networkState,
          readyState: videoElement.readyState
        });
        
        videoElement.play().then(() => {
          console.log("Video started playing successfully");
        }).catch(error => {
          console.error("Video playback failed:", error);
          
          // Try again with a longer delay
          setTimeout(() => {
            console.log("Attempting to play video again...");
            videoElement.play().catch(e => 
              console.error("Second attempt to play video failed:", e)
            );
          }, 2000);
        });
      }, 500);
      
      return () => {
        videoElement.removeEventListener('error', handleError);
        videoElement.removeEventListener('canplay', handleCanPlay);
        videoElement.removeEventListener('playing', handlePlaying);
        videoElement.removeEventListener('stalled', handleStalled);
        videoElement.removeEventListener('waiting', handleWaiting);
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
    <div className="video-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 }}>
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src="/video-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text visibility */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>
      
      {/* Mute Toggle Button */}
      <button
        onClick={toggleMute}
        style={{ 
          position: 'absolute', 
          bottom: '20px', 
          right: '20px', 
          zIndex: 2, 
          background: 'rgba(0,0,0,0.5)', 
          border: 'none', 
          color: '#fff', 
          padding: '10px', 
          cursor: 'pointer', 
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
};

export default VideoHero;

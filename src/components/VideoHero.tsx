
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const VideoHero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      // Log that we're trying to play the video
      console.log("Attempting to play video...");
      
      // Make sure the video source is valid and accessible
      console.log("Video source:", videoRef.current.src);
      
      // Log video element properties
      console.log("Video element:", {
        width: videoRef.current.clientWidth,
        height: videoRef.current.clientHeight,
        networkState: videoRef.current.networkState,
        readyState: videoRef.current.readyState
      });
      
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
          console.log("Video started playing successfully");
        } catch (error) {
          console.error("Video playback failed:", error);
          
          // Try again with a slight delay
          setTimeout(() => {
            console.log("Attempting to play video again...");
            videoRef.current?.play().catch(e => 
              console.error("Second attempt to play video failed:", e)
            );
          }, 1000);
        }
      };
      
      playVideo();
      
      // Add event listeners to debug video issues
      const video = videoRef.current;
      
      const handleError = (e: Event) => console.error('Video error:', e);
      const handleCanPlay = () => console.log('Video can play');
      const handlePlaying = () => console.log('Video is playing');
      const handleStalled = () => console.log('Video playback stalled');
      const handleWaiting = () => console.log('Video is waiting for more data');
      
      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('playing', handlePlaying);
      video.addEventListener('stalled', handleStalled);
      video.addEventListener('waiting', handleWaiting);
      
      return () => {
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('playing', handlePlaying);
        video.removeEventListener('stalled', handleStalled);
        video.removeEventListener('waiting', handleWaiting);
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
    <section className="hero" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
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
    </section>
  );
};

export default VideoHero;

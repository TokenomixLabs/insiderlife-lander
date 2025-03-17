
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const VideoHero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
          console.log("Video started playing successfully");
        } catch (error) {
          console.error("Video playback failed:", error);
          // Try again with a slight delay
          setTimeout(() => {
            videoRef.current?.play().catch(e => 
              console.error("Second attempt to play video failed:", e)
            );
          }, 1000);
        }
      };
      
      playVideo();
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="hero" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'cover', zIndex: 0 }}
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
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </section>
  );
};

export default VideoHero;


import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, VideoOff } from 'lucide-react';

const VideoHero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current) {
      console.log("Setting up video element...");
      
      const videoElement = videoRef.current;
      
      // Handle video loading errors
      const handleError = () => {
        console.error('Video failed to load');
        setVideoError(true);
      };
      
      // Handle successful video loading
      const handleLoadedData = () => {
        console.log('Video loaded successfully');
        setVideoLoaded(true);
        setVideoError(false);
      };
      
      videoElement.addEventListener('error', handleError);
      videoElement.addEventListener('loadeddata', handleLoadedData);
      
      // Initial play attempt
      const playVideo = async () => {
        try {
          await videoElement.play();
          console.log('Video playback started');
        } catch (error) {
          console.error('Video playback failed:', error);
          // We'll try again in 2 seconds
          setTimeout(() => {
            console.log('Attempting to play video again...');
            videoElement.play().catch(e => {
              console.error('Second play attempt failed:', e);
              setVideoError(true);
            });
          }, 2000);
        }
      };
      
      playVideo();
      
      return () => {
        videoElement.removeEventListener('error', handleError);
        videoElement.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Check if the video file exists
  useEffect(() => {
    const checkVideoFile = async () => {
      try {
        const response = await fetch('/video-background.mp4', { method: 'HEAD' });
        if (!response.ok) {
          console.error('Video file not found or inaccessible:', response.status);
          setVideoError(true);
        }
      } catch (error) {
        console.error('Error checking video file:', error);
        setVideoError(true);
      }
    };
    
    checkVideoFile();
  }, []);

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
          poster="/placeholder.svg"
        >
          <source src="/video-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Dark overlay for better text visibility */}
      <div className="video-overlay"></div>
      
      {/* Mute Toggle Button (only show if video is loaded and not in error state) */}
      {videoLoaded && !videoError && (
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

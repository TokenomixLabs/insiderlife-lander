
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

const VideoHero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to post messages to the Vimeo iframe
  const postVimeoMessage = (action: string) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        method: action
      }, '*');
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      postVimeoMessage('setVolume(1)');
    } else {
      postVimeoMessage('setVolume(0)');
    }
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    // Initialize the video when component mounts
    if (isLoaded) {
      postVimeoMessage('play');
      if (isMuted) {
        postVimeoMessage('setVolume(0)');
      }
    }

    // Event listener for messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.event === 'ready') {
        setIsLoaded(true);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [isLoaded, isMuted]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1066410334?background=1&autoplay=1&loop=1&byline=0&title=0"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Background Video"
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        ></iframe>
      </div>

      {/* Mute Toggle Button */}
      <button
        onClick={toggleMute}
        className={cn(
          "absolute bottom-8 right-8 z-10",
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
    </section>
  );
};

export default VideoHero;

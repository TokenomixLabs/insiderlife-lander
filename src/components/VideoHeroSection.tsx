
import { useRef, useEffect } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

const VideoPlayer = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const vimeoPlayerRef = useRef<any>(null);

  useEffect(() => {
    let isLoaded = false;

    const loadVimeoPlayer = async () => {
      try {
        const VimeoPlayer = (await import('@vimeo/player')).default;
        
        if (iframeRef.current && !isLoaded) {
          vimeoPlayerRef.current = new VimeoPlayer(iframeRef.current);
          isLoaded = true;
          
          vimeoPlayerRef.current.setVolume(0).catch(err => {
            console.error('Error setting volume:', err);
          });
        }
      } catch (error) {
        console.error('Error loading Vimeo player:', error);
      }
    };

    loadVimeoPlayer();

    return () => {
      if (vimeoPlayerRef.current) {
        try {
          vimeoPlayerRef.current.destroy();
        } catch (err) {
          console.error('Error destroying player:', err);
        }
      }
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Aspect Ratio Container */}
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1066410334?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&background=1&muted=1&loop=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          title="InsiderLife Hero Video"
        />
      </div>
    </div>
  );
};

const VideoHeroSection = () => (
  <ErrorBoundary>
    <section className="relative w-full overflow-hidden bg-black pt-[68px]">
      <VideoPlayer />
    </section>
  </ErrorBoundary>
);

export default VideoHeroSection;

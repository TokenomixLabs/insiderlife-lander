import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import ErrorBoundary from "@/components/ErrorBoundary";

const VideoPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    import('@vimeo/player').catch(error => {
      console.error('Error loading Vimeo player:', error);
    });
  }, []);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.contentWindow?.postMessage({
        method: 'setVolume',
        value: isMuted ? 0 : 1
      }, '*');
    }
  }, [isMuted]);

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

      {/* Mute Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMuted(!isMuted)}
        className="absolute z-[9999] bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center bottom-8 right-8 border-2 border-white/30"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={28} className="text-white" /> : <Volume2 size={28} className="text-white" />}
      </Button>
    </div>
  );
};

const VideoHeroSection = () => (
  <ErrorBoundary>
    <section className="relative w-full overflow-hidden bg-black pt-[80px]">
      <VideoPlayer />
    </section>
  </ErrorBoundary>
);

export default VideoHeroSection;


import React, { useRef, useEffect, useState } from 'react';
import Player from '@vimeo/player';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

// Force fresh content with dynamic timestamp
const BUILD_TIMESTAMP = new Date().getTime();
console.log("SovereignAccess component loading, timestamp:", BUILD_TIMESTAMP);

const VimeoPlayer = ({ videoId, onEnded, autoplay = false, className = "" }: { 
  videoId: string | number, 
  onEnded?: () => void, 
  autoplay?: boolean,
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const instanceId = useRef(`player-${Math.random().toString(36).substring(2, 9)}`);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    console.log(`Creating player for video ${videoId} with instance ${instanceId.current}`);
    
    // Clean up any existing player
    if (playerRef.current) {
      playerRef.current.destroy();
    }
    
    // Force clean the container element
    containerRef.current.innerHTML = '';
    
    // Create the player with a small delay to ensure DOM is ready
    setTimeout(() => {
      if (!containerRef.current) return;
      
      try {
        // Create the player
        const player = new Player(containerRef.current, {
          id: typeof videoId === 'string' ? parseInt(videoId, 10) : videoId,
          autoplay: autoplay,
          loop: false,
          muted: autoplay, // Autoplay requires muted
          responsive: true,
          background: false,
          dnt: false, // Disable do-not-track to prevent caching
        });
        
        playerRef.current = player;
        
        if (onEnded) {
          player.on('ended', onEnded);
        }
        
        // Force load video
        player.loadVideo(videoId).catch(err => 
          console.error(`Error loading video ${videoId}:`, err)
        );
      } catch (error) {
        console.error("Error initializing Vimeo player:", error);
      }
    }, 100);
    
    return () => {
      if (playerRef.current) {
        if (onEnded) playerRef.current.off('ended', onEnded);
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.error("Error destroying player:", e);
        }
      }
    };
  }, [videoId, onEnded, autoplay]);
  
  return (
    <div 
      key={`vimeo-container-${videoId}-${BUILD_TIMESTAMP}`}
      ref={containerRef} 
      className={`relative w-full overflow-hidden aspect-video ${className}`}
      data-timestamp={BUILD_TIMESTAMP}
    ></div>
  );
};

const SovereignAccess: React.FC = () => {
  const [playBridgeVideo, setPlayBridgeVideo] = useState(false);
  const pageLoadTime = useRef(new Date().getTime());
  
  // Log component mount to verify fresh load
  useEffect(() => {
    console.log("SovereignAccess mounted with timestamp:", pageLoadTime.current);
    
    // Force refresh after mount
    const timer = setTimeout(() => {
      console.log("Forcing refresh of content");
      setPlayBridgeVideo(false); // Reset state to force re-render
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-insiderDark flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Section 1: Intro Video */}
        <section className="w-full mb-16 mt-8">
          <div className="container mx-auto px-4">
            <h1 className="font-orbitron text-4xl md:text-5xl text-gradient text-center mb-8">
              Sovereign Access
            </h1>
            <div className="max-w-4xl mx-auto glass-card p-6">
              <VimeoPlayer 
                videoId="1080452974"
                className="shadow-lg rounded-lg"
                key={`intro-video-${BUILD_TIMESTAMP}`}
              />
            </div>
          </div>
        </section>
        
        <Separator className="bg-white/10 max-w-4xl mx-auto" />
        
        {/* Section 2: AI Freedom Code Video */}
        <section className="w-full py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-orbitron text-3xl md:text-4xl text-gradient text-center mb-8">
              Watch the AI Freedom Code Video
            </h2>
            <div className="max-w-4xl mx-auto glass-card p-6">
              <VimeoPlayer 
                videoId="1080443373" 
                onEnded={() => setPlayBridgeVideo(true)} 
                className="shadow-lg rounded-lg"
                key={`freedom-code-${BUILD_TIMESTAMP}`}
              />
              
              {playBridgeVideo && (
                <div className="mt-8">
                  <h3 className="font-orbitron text-xl text-white/90 mb-4">
                    A Deeper Journey Awaits
                  </h3>
                  <VimeoPlayer 
                    videoId="1080443373" 
                    autoplay={true}
                    className="shadow-lg rounded-lg"
                    key={`bridge-video-${BUILD_TIMESTAMP}`}
                  />
                  <p className="text-white/80 mt-4 text-center">
                    While the video above is designed for mass activation, you are here for something deeper.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <Separator className="bg-white/10 max-w-4xl mx-auto" />
        
        {/* Section 3: Societi Videos */}
        <section className="w-full py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-orbitron text-3xl md:text-4xl text-gradient text-center mb-12">
              Watch These 5 Societi Videos
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-12">
              {[
                { id: "1036230113", title: "Societi VSL 1" },
                { id: "1036234553", title: "Societi VSL 2" },
                { id: "1037558717", title: "Societi VSL 3" },
                { id: "1036245610", title: "Societi VSL 4" },
                { id: "1075027764", title: "Societi VSL 5" }
              ].map((video, index) => (
                <Card key={`${index}-${BUILD_TIMESTAMP}`} className="glass-card overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="font-orbitron text-xl text-white/90 mb-4">
                      {video.title}
                    </h3>
                    <VimeoPlayer 
                      videoId={video.id} 
                      className="shadow-lg rounded-lg"
                      key={`societi-${index}-${BUILD_TIMESTAMP}`}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <Separator className="bg-white/10 max-w-4xl mx-auto" />
        
        {/* Section 4: Final Message */}
        <section className="w-full py-16 mb-8">
          <div className="container mx-auto px-4">
            <h2 className="font-orbitron text-3xl md:text-4xl text-gradient text-center mb-8">
              Final Message
            </h2>
            <div className="max-w-4xl mx-auto glass-card p-6">
              <VimeoPlayer 
                videoId="1080449117"
                className="shadow-lg rounded-lg mb-8"
                key={`final-message-${BUILD_TIMESTAMP}`}
              />
              
              <div className="text-center">
                <h3 className="font-orbitron text-xl text-white/90 mb-6">
                  Message Jamison Directly for the Scroll
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SovereignAccess;

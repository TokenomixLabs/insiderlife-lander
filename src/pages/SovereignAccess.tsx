
import React, { useRef, useEffect, useState } from 'react';
import Player from '@vimeo/player';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const VimeoPlayer = ({ videoId, onEnded, autoplay = false, className = "" }: { 
  videoId: string | number, 
  onEnded?: () => void, 
  autoplay?: boolean,
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clean up any existing player
    if (playerRef.current) {
      playerRef.current.destroy();
    }
    
    // Create the player
    const player = new Player(containerRef.current, {
      id: videoId,
      autoplay: autoplay,
      loop: false,
      muted: autoplay, // Autoplay requires muted
      responsive: true,
      background: false,
    });
    
    playerRef.current = player;
    
    if (onEnded) {
      player.on('ended', onEnded);
    }
    
    return () => {
      if (playerRef.current) {
        if (onEnded) playerRef.current.off('ended', onEnded);
        playerRef.current.destroy();
      }
    };
  }, [videoId, onEnded, autoplay]);
  
  return (
    <div 
      ref={containerRef} 
      className={`relative w-full overflow-hidden aspect-video ${className}`}
    ></div>
  );
};

const SovereignAccess: React.FC = () => {
  const [playBridgeVideo, setPlayBridgeVideo] = useState(false);
  
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
                <Card key={index} className="glass-card overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="font-orbitron text-xl text-white/90 mb-4">
                      {video.title}
                    </h3>
                    <VimeoPlayer 
                      videoId={video.id} 
                      className="shadow-lg rounded-lg"
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
              />
              
              <div className="text-center">
                <h3 className="font-orbitron text-xl text-white/90 mb-6">
                  Message Jamison Directly for the Scroll
                </h3>
                <Button 
                  className="bg-gradient-to-r from-insiderPurple to-insiderBlue hover:from-insiderPurple-light hover:to-insiderBlue-light text-white px-6 py-6 rounded-md shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="mr-2" />
                  Contact Jamison
                </Button>
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

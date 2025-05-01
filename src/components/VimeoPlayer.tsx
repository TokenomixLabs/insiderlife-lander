
import React, { useRef, useEffect, useState } from "react";
import Player from '@vimeo/player';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface VimeoPlayerProps {
  videoId: number;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
}

const VimeoPlayer: React.FC<VimeoPlayerProps> = ({
  videoId,
  autoplay = false,
  muted = false,
  loop = false,
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const initializePlayer = async () => {
      try {
        if (containerRef.current && !playerRef.current) {
          const options = {
            id: videoId,
            autoplay,
            muted,
            loop,
            responsive: true,
            dnt: true, // Do not track
          };
          
          playerRef.current = new Player(containerRef.current, options);
          
          if (isMounted) {
            setIsLoaded(true);
          }
        }
      } catch (error) {
        console.error("Error initializing Vimeo player:", error);
      }
    };

    initializePlayer();

    return () => {
      isMounted = false;
      
      if (playerRef.current) {
        playerRef.current.destroy().catch((err) => {
          console.error("Error destroying Vimeo player:", err);
        });
        playerRef.current = null;
      }
    };
  }, [videoId, autoplay, muted, loop]);

  return (
    <div className={cn("w-full", className)}>
      <AspectRatio ratio={16 / 9} className="bg-black/20">
        <div 
          ref={containerRef}
          className="w-full h-full"
          data-vimeo-id={videoId}
          data-vimeo-autoplay={autoplay ? "true" : "false"}
        />
      </AspectRatio>
    </div>
  );
};

export default VimeoPlayer;

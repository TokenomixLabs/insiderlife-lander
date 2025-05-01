
import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

interface VimeoPlayerProps {
  videoId: number;
  aspectRatio?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  background?: boolean;
  controls?: boolean;
}

const VimeoPlayer = ({
  videoId,
  aspectRatio = "16:9",
  autoplay = false,
  loop = false,
  muted = false,
  background = false,
  controls = true,
}: VimeoPlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<Player | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Calculate padding based on aspect ratio
  const getPadding = () => {
    if (!aspectRatio) return "56.25%"; // Default 16:9
    
    const [width, height] = aspectRatio.split(":");
    return `${(Number(height) / Number(width)) * 100}%`;
  };

  useEffect(() => {
    let vimeoPlayer: Player | null = null;

    const loadVimeoPlayer = async () => {
      try {
        // Create new player instance
        if (containerRef.current) {
          vimeoPlayer = new Player(containerRef.current, {
            id: videoId,
            autoplay,
            loop,
            muted,
            background,
            controls,
            responsive: true,
            dnt: true, // Do not track
          });

          setPlayer(vimeoPlayer);
          
          // Set up event listeners
          vimeoPlayer.on('loaded', () => {
            setIsLoaded(true);
          });
          
          vimeoPlayer.on('error', (error) => {
            console.error('Vimeo player error:', error);
          });
        }
      } catch (error) {
        console.error("Error initializing Vimeo player:", error);
      }
    };

    loadVimeoPlayer();

    // Clean up on unmount
    return () => {
      if (vimeoPlayer) {
        try {
          vimeoPlayer.destroy();
        } catch (error) {
          console.error("Error destroying Vimeo player:", error);
        }
      }
    };
  }, [videoId, autoplay, loop, muted, background, controls]);

  return (
    <div className="vimeo-player-container">
      <div
        style={{
          position: "relative",
          padding: `0 0 ${getPadding()} 0`,
          height: 0,
          overflow: "hidden",
        }}
      >
        <div
          ref={containerRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          className={`${isLoaded ? "" : "bg-insiderDark-light animate-pulse"}`}
        />
      </div>
    </div>
  );
};

export default VimeoPlayer;

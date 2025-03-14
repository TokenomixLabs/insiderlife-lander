
import { useState, useEffect } from 'react';

interface UseExitIntentOptions {
  threshold?: number;
  onExit?: () => void;
  active?: boolean;
  limitToOnce?: boolean;
}

export default function useExitIntent(options: UseExitIntentOptions = {}) {
  const { threshold = 100, onExit, active = true, limitToOnce = true } = options;
  const [isExiting, setIsExiting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!active || (limitToOnce && hasTriggered)) {
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= threshold) {
        setIsExiting(true);
        setHasTriggered(true);
        onExit?.();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [threshold, onExit, active, limitToOnce, hasTriggered]);

  return { isExiting, setIsExiting, hasTriggered };
}


import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import WaitlistDialog from "./WaitlistDialog";
import useExitIntent from "../hooks/useExitIntent";

const ExitIntentWrapper = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    setShowExitIntent(false);
  }, [location.pathname]);
  
  useExitIntent({
    onExit: () => {
      if (location.pathname === '/' && !localStorage.getItem('exitIntentShown')) {
        setShowExitIntent(true);
        localStorage.setItem('exitIntentShown', 'true');
      }
    },
    active: location.pathname === '/'
  });
  
  return <WaitlistDialog open={showExitIntent} onOpenChange={setShowExitIntent} />;
};

export default ExitIntentWrapper;

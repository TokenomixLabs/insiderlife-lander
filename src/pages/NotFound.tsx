
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isRefresh, setIsRefresh] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);

  // More aggressive route restoration
  useEffect(() => {
    console.log("NotFound component mounted at path:", location.pathname);
    
    // If we're at the root path but seeing 404, something's wrong with routing
    if (location.pathname === "/") {
      console.error("Root path showing 404 - critical routing issue detected");
      // Force direct navigation to index
      window.location.href = "/";
      return;
    }
    
    // Check if the path matches a valid route
    const validRoutes = [
      "/",
      "/privacy-policy",
      "/terms-of-service",
      "/thank-you",
      "/support",
      "/aifreedomcode",
      "/circle",
      "/mastermind",
      "/affiliate-swipe-hub",
      "/sovereign-access"
    ];

    // If the current path is a valid route but we got a 404, it's likely a refresh
    if (validRoutes.includes(location.pathname)) {
      setIsRefresh(true);
      console.log("Detected refresh on valid route:", location.pathname);
      
      // Store the route for restoration after refresh
      localStorage.setItem("lastValidRoute", location.pathname);
      
      // Try immediately navigating to the correct route with replace: true
      navigate(location.pathname, { replace: true });
      
      // Set up a fallback in case the first attempt fails
      const timeout = setTimeout(() => {
        console.log("Attempting fallback navigation");
        setAttemptCount(prev => prev + 1);
        
        // If we've tried multiple times, go to homepage as fallback
        if (attemptCount > 1) {
          navigate("/", { replace: true });
        } else {
          window.history.replaceState({}, document.title, location.pathname);
          navigate(location.pathname, { replace: true });
        }
      }, 500);
      
      return () => clearTimeout(timeout);
    } else {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
      );
    }
  }, [location.pathname, navigate, attemptCount]);

  // Get the stored route or default to home
  const lastValidRoute = localStorage.getItem("lastValidRoute") || "/";
  
  // Force refresh function
  const handleForceRefresh = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-insiderDark">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-white/80 mb-6">
          {isRefresh 
            ? "Attempting to restore your session..." 
            : "Oops! The page you're looking for doesn't exist."}
        </p>
        
        <div className="space-y-4">
          {isRefresh ? (
            <>
              <Button
                className="bg-gradient-to-r from-insiderPurple to-insiderBlue hover:from-insiderPurple-light hover:to-insiderBlue-light text-white"
                onClick={handleForceRefresh}
              >
                <Home className="mr-2 h-4 w-4" />
                Go to Homepage
              </Button>
              <div className="pt-2">
                <Button
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10"
                  onClick={handleForceRefresh}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Force Reload
                </Button>
              </div>
            </>
          ) : (
            <Link to="/">
              <Button
                className="bg-gradient-to-r from-insiderPurple to-insiderBlue hover:from-insiderPurple-light hover:to-insiderBlue-light text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;


import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Automatically try to recover from 404
  useEffect(() => {
    console.log("NotFound rendered at path:", location.pathname);
    
    // If we're at the root path but showing 404, refresh the page
    if (location.pathname === "/") {
      console.log("Detected 404 on root path - attempting recovery");
      window.location.href = "/";
      return;
    }
    
    // Known valid routes
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
    
    // Handle route recovery
    if (validRoutes.includes(location.pathname)) {
      console.log("Valid route detected but 404 shown - attempting recovery");
      // Try to navigate using React Router first
      navigate(location.pathname, { replace: true });
      
      // If that doesn't work, try a direct browser navigation
      setTimeout(() => {
        window.location.href = location.pathname;
      }, 200);
    }
  }, [location.pathname, navigate]);

  // Force a full page refresh
  const handleForceRefresh = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-insiderDark">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-white/80 mb-6">
          Attempting to restore your session...
        </p>
        
        <div className="space-y-4">
          <Link to="/">
            <Button
              className="bg-gradient-to-r from-insiderPurple to-insiderBlue hover:from-insiderPurple-light hover:to-insiderBlue-light text-white"
            >
              <Home className="mr-2 h-4 w-4" />
              Return to Homepage
            </Button>
          </Link>
          
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
        </div>
      </div>
    </div>
  );
};

export default NotFound;

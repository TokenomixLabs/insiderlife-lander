
import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("NotFound rendered at path:", location.pathname);
    
    // If on root path but seeing 404, try to force a direct reload
    if (location.pathname === "/") {
      console.log("Root path with 404 - trying to recover");
      // Wait a moment before redirecting to avoid immediate loops
      const timer = setTimeout(() => {
        window.location.href = "/?nocache=" + Date.now();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Force a hard refresh with timestamp to break cache
  const handleForceRefresh = () => {
    console.log("Force refresh initiated");
    window.location.href = "/?forcereload=" + Date.now();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-insiderDark">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-white/80 mb-6">
          We couldn't find the page you're looking for.
        </p>
        
        {location.pathname === "/" && (
          <div className="mb-6">
            <p className="text-white/70 mb-2">Attempting to recover...</p>
            <Progress value={60} className="h-2 mb-4" />
          </div>
        )}
        
        <div className="space-y-4">
          <Button
            className="bg-gradient-to-r from-insiderPurple to-insiderBlue hover:from-insiderPurple-light hover:to-insiderBlue-light text-white"
            onClick={handleForceRefresh}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Reload Application
          </Button>
          
          {location.pathname !== "/" && (
            <Button
              variant="outline"
              className="ml-2 border-white/20 text-white hover:bg-white/10"
              onClick={() => navigate("/")}
            >
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;

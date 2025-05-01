
import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("NotFound rendered at path:", location.pathname);
    
    // If on root path but seeing 404, try to force a direct reload
    if (location.pathname === "/") {
      console.log("Root path with 404 - trying to recover");
      window.location.href = "/";
      return;
    }
  }, [location.pathname]);

  // Force a hard refresh
  const handleForceRefresh = () => {
    console.log("Force refresh initiated");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-insiderDark">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-white/80 mb-6">
          We couldn't find the page you're looking for.
        </p>
        
        <div className="space-y-4">
          <Button
            className="bg-gradient-to-r from-insiderPurple to-insiderBlue hover:from-insiderPurple-light hover:to-insiderBlue-light text-white"
            onClick={handleForceRefresh}
          >
            <Home className="mr-2 h-4 w-4" />
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

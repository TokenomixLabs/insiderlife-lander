
import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    // Check if the path matches a valid route
    const validRoutes = [
      "/",
      "/privacy-policy",
      "/terms-of-service",
      "/thank-you",
      "/support",
      "/aifreedomcode"
    ];

    // If the current path is a valid route but we got a 404, it's likely a refresh
    if (validRoutes.includes(location.pathname)) {
      setIsRefresh(true);
      console.log("Detected refresh on valid route:", location.pathname);
      
      // Store the route for restoration after refresh
      localStorage.setItem("lastValidRoute", location.pathname);
      
      // If we're in production, attempt to redirect to the correct route
      if (import.meta.env.PROD) {
        // Wait a moment to ensure the app is fully loaded
        setTimeout(() => {
          window.location.replace(location.pathname);
        }, 100);
      }
    } else {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
      );
    }
  }, [location.pathname]);

  // Get the stored route or default to home
  const lastValidRoute = localStorage.getItem("lastValidRoute") || "/";

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
            <Button
              className="bg-gradient-to-r from-insiderPurple to-insiderBlue hover:from-insiderPurple-light hover:to-insiderBlue-light text-white"
              onClick={() => window.location.replace(lastValidRoute)}
            >
              Click here if not redirected
            </Button>
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

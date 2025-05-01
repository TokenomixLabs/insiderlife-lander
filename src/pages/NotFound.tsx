
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    // Check if the path matches a valid route
    const validRoutes = [
      "/",
      "/privacy-policy",
      "/terms-of-service",
      "/thank-you",
      "/support",
      "/aifreedomcode",
      "/affiliate-swipe-hub",
      "/circle",
      "/mastermind", // Include the old route as well
      "/sovereign-access"
    ];

    // If the current path is a valid route but we got a 404, it's likely a refresh
    if (validRoutes.includes(location.pathname)) {
      setIsRefresh(true);
      console.log("Detected refresh on valid route:", location.pathname);
      
      // Store the route for restoration after refresh
      localStorage.setItem("lastValidRoute", location.pathname);
      
      // Try immediately navigating to the correct route
      setTimeout(() => {
        navigate(location.pathname, { replace: true });
      }, 100);
      
      // Show a toast notification
      toast.info("Restoring your session...", {
        duration: 3000,
        position: "top-center"
      });
    } else {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
      );
    }
  }, [location.pathname, navigate]);

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
              onClick={() => navigate(lastValidRoute, { replace: true })}
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

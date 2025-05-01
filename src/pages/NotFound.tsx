
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
            onClick={() => window.location.href = "/?reload=" + Date.now()}
          >
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

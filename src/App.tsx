
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ThankYou from "./pages/ThankYou";
import Support from "./pages/Support";
import AiFreedomCode from "./pages/AiFreedomCode";
import AffiliateSwipeHub from "./pages/AffiliateSwipeHub";
import Mastermind from "./pages/Mastermind";
import WaitlistDialog from "./components/WaitlistDialog";
import useExitIntent from "./hooks/useExitIntent";

const queryClient = new QueryClient();

const ExitIntentWrapper = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const location = useLocation();
  
  // Reset exit intent when route changes
  useEffect(() => {
    setShowExitIntent(false);
  }, [location.pathname]);
  
  useExitIntent({
    onExit: () => {
      // Only show on main page and not if already shown
      if (location.pathname === '/' && !localStorage.getItem('exitIntentShown')) {
        setShowExitIntent(true);
        localStorage.setItem('exitIntentShown', 'true');
      }
    },
    // Disable on pages other than the homepage
    active: location.pathname === '/'
  });
  
  return <WaitlistDialog open={showExitIntent} onOpenChange={setShowExitIntent} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/support" element={<Support />} />
          <Route path="/aifreedomcode" element={<AiFreedomCode />} />
          <Route path="/affiliate-swipe-hub" element={<AffiliateSwipeHub />} />
          <Route path="/mastermind" element={<Mastermind />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ExitIntentWrapper />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

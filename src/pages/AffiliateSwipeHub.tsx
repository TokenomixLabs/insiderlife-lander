
import { Image } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SwipeSection from "@/components/affiliate/SwipeSection";
import CreativeAssets from "@/components/affiliate/CreativeAssets";
import ExecutionTips from "@/components/affiliate/ExecutionTips";
import SoftInvite from "@/components/affiliate/SoftInvite";

const AffiliateSwipeHub = () => {
  return (
    <div className="min-h-screen bg-insiderDark text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            🔥 Promote the System That Pays Instantly
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            Plug into the offer that's built for momentum, optimized for conversion, and aligned with the future.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-insiderPurple to-insiderBlue hover:from-insiderPurple-light hover:to-insiderBlue-light text-white"
          >
            Copy Swipe Below
          </Button>
        </div>
      </section>

      <SwipeSection />
      <CreativeAssets />
      <ExecutionTips />
      <SoftInvite />
    </div>
  );
};

export default AffiliateSwipeHub;


import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VimeoPlayer from "@/components/VimeoPlayer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const SovereignAccess = () => {
  useEffect(() => {
    // Set title when component mounts
    document.title = "Sovereign Access | InsiderLife";
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-insiderDark pb-24 pt-[80px]">
        {/* Section 1: Full-width intro video */}
        <section className="w-full">
          <div className="container mx-auto max-w-6xl px-4 py-12">
            <h1 className="mb-12 pb-4 text-center text-3xl font-bold text-gradient font-orbitron md:text-4xl lg:text-5xl">
              Sovereign Access
            </h1>
            <div className="overflow-hidden rounded-lg border border-white/10 shadow-lg">
              <VimeoPlayer videoId={1080452974} aspectRatio="16:9" />
            </div>
          </div>
        </section>

        <Separator className="mx-auto my-12 w-1/2 bg-white/10" />

        {/* Section 2: AI Freedom Code Video */}
        <section className="w-full">
          <div className="container mx-auto max-w-5xl px-4 py-12">
            <h2 className="mb-12 pb-2 text-center text-2xl font-bold text-gradient font-orbitron md:text-3xl">
              Watch the AI Freedom Code Video
            </h2>
            <Card className="glass-card overflow-hidden">
              <CardContent className="p-0">
                <VimeoPlayer videoId={1080443373} aspectRatio="16:9" />
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="mx-auto my-12 w-1/2 bg-white/10" />

        {/* Section 3: Societi Videos */}
        <section className="w-full">
          <div className="container mx-auto max-w-5xl px-4 py-12">
            <h2 className="mb-12 pb-2 text-center text-2xl font-bold text-gradient font-orbitron md:text-3xl">
              Watch These 5 Societi Videos
            </h2>
            <div className="space-y-12">
              {[
                { id: 1036230113, title: "VSL 1" },
                { id: 1036234553, title: "VSL 2" },
                { id: 1037558717, title: "VSL 3" },
                { id: 1036245610, title: "VSL 4" },
                { id: 1075027764, title: "VSL 5" }
              ].map((video, index) => (
                <Card key={index} className="glass-card overflow-hidden">
                  <CardContent className="p-0">
                    <h3 className="p-6 text-xl font-medium text-gradient font-orbitron">
                      {video.title}
                    </h3>
                    <VimeoPlayer videoId={video.id} aspectRatio="16:9" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator className="mx-auto my-12 w-1/2 bg-white/10" />

        {/* Section 4: Final Message */}
        <section className="w-full">
          <div className="container mx-auto max-w-5xl px-4 py-12">
            <h2 className="mb-12 pb-2 text-center text-2xl font-bold text-gradient font-orbitron md:text-3xl">
              Final Message
            </h2>
            <Card className="glass-card mb-12 overflow-hidden">
              <CardContent className="p-0">
                <VimeoPlayer videoId={1080449117} aspectRatio="16:9" />
              </CardContent>
            </Card>
            
            <div className="mt-12 text-center">
              <h3 className="mb-8 pb-2 text-xl font-bold text-gradient font-orbitron">
                Message Jamison Directly for the Scroll
              </h3>
              <Button 
                className="bg-gradient-to-r from-insiderPurple to-insiderBlue px-8 py-6 text-lg"
                onClick={() => window.location.href = "mailto:jamison@insiderlife.io"}
              >
                <Mail className="mr-2" />
                Contact Jamison
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SovereignAccess;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Image } from "lucide-react";

const CreativeAssets = () => {
  const assets = [
    { title: "Logo Pack", description: "Download PNG/SVG versions" },
    { title: "Promotional Graphics", description: "High-converting banners & posts" },
    { title: "Headline + Hook Combos", description: "Ready-to-use copy combinations" },
    { title: "Funnel Preview", description: "See the conversion path" }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Creative Assets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assets.map((asset, index) => (
            <Card key={index} className="glass-card hover:shadow-glow-purple transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-insiderPurple/20 p-3">
                    <Image className="h-6 w-6 text-insiderPurple" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{asset.title}</h3>
                    <p className="text-white/60 text-sm">{asset.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeAssets;

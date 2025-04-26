
import { FileText, Link } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CreativeAssets = () => {
  const resources = [
    {
      title: "Affiliate Quickstart",
      description: "How to get started fast",
      icon: FileText,
      url: "https://github.com/TokenomixLabs/insiderlife-vault/blob/main/aifc-affiliate-quickstart.pdf"
    },
    {
      title: "Affiliate Playbook",
      description: "Learn the ecosystem + tools",
      icon: FileText,
      url: "https://github.com/TokenomixLabs/insiderlife-vault/blob/main/aifc-affiliate-playbook.pdf"
    },
    {
      title: "Visibility Templates",
      description: "Proven frameworks to go viral",
      icon: FileText,
      url: "https://github.com/TokenomixLabs/insiderlife-vault/blob/main/aifc-visibility-templates.pdf"
    },
    {
      title: "Funnel Preview",
      description: "Preview the InstantPay funnel",
      icon: Link,
      url: "https://go.aifreedomcode.com/start"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-2 text-center text-gradient">🔧 Updated Affiliate Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {resources.map((resource, index) => (
            <a 
              key={index} 
              href={resource.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-[1.02]"
            >
              <Card className="glass-card hover:shadow-glow-purple transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-insiderPurple/20 p-3">
                      <resource.icon className="h-6 w-6 text-insiderPurple" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{resource.title}</h3>
                      <p className="text-white/60 text-sm">{resource.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeAssets;

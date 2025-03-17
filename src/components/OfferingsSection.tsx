
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Key, Users } from 'lucide-react';

const OfferingsSection: React.FC = () => {
  const offerings = [
    {
      title: "AI-Powered Business Strategies",
      description: "Leverage cutting-edge AI to develop business strategies that scale rapidly and outperform the competition.",
      icon: <Brain className="h-10 w-10" />
    },
    {
      title: "High-Leverage Monetization Systems",
      description: "Implement proven monetization systems designed to maximize revenue and create sustainable business models.",
      icon: <Key className="h-10 w-10" />
    },
    {
      title: "Community & Collaboration",
      description: "Join a powerful network of entrepreneurs and creators who are shaping the future of the digital economy.",
      icon: <Users className="h-10 w-10" />
    }
  ];

  return (
    <section id="offerings" className="relative bg-insiderDark z-20">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-16 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient font-orbitron">
            Awaken Power, Freedom & Mastery
          </h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-white/80">
            InsiderLife delivers the strategies, tools, and AI-driven systems to dominate life, business,<br />
            and the new economy—while building true sovereignty and an unstoppable mindset.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <Card key={index} className="bg-insiderDark-light/40 border border-white/10 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <CardHeader>
                <div className={cn(
                  "mb-5 text-insiderBlue",
                  index === 1 ? "text-insiderPurple" : "",
                  index === 2 ? "text-insiderBlue-light" : ""
                )}>
                  {offering.icon}
                </div>
                <CardTitle className="text-xl font-semibold font-orbitron">{offering.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 text-base">{offering.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;

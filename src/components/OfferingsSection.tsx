
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, TrendingUp, Users } from 'lucide-react';

const OfferingsSection: React.FC = () => {
  const offerings = [
    {
      title: "AI-Powered Business Strategies",
      description: "Leverage cutting-edge AI to develop business strategies that scale rapidly and outperform the competition.",
      icon: <Brain className="h-10 w-10" />,
      delay: "0s"
    },
    {
      title: "High-Leverage Monetization Systems",
      description: "Implement proven monetization systems designed to maximize revenue and create sustainable business models.",
      icon: <TrendingUp className="h-10 w-10" />,
      delay: "0.2s"
    },
    {
      title: "Community & Collaboration",
      description: "Join a powerful network of entrepreneurs and creators who are shaping the future of the digital economy.",
      icon: <Users className="h-10 w-10" />,
      delay: "0.4s"
    }
  ];

  return (
    <section id="offerings" className="py-28 relative">
      <div className="absolute inset-0 bg-elite-gradient opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-futuristic-grid opacity-5 z-0"></div>
      
      {/* Animated light streaks */}
      <div className="absolute top-1/4 left-0 w-full">
        <div className="light-streak" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="absolute bottom-1/4 left-0 w-full">
        <div className="light-streak" style={{ animationDelay: '5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            What We Offer
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/80 leading-relaxed">
            Our comprehensive platform provides everything you need to thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <Card 
              key={index} 
              className={cn(
                "bg-insiderDark-lighter/40 border border-insiderPurple-glow/20 backdrop-blur-sm",
                "transform transition-all duration-500 hover:scale-105 hover:shadow-xl",
                "hover:shadow-insiderPurple-glow/10 group"
              )}
              style={{ animationDelay: offering.delay }}
            >
              <CardHeader>
                <div className={cn(
                  "mb-5 text-insiderBlue-light group-hover:text-insiderPurple-glow transition-all duration-300",
                  index === 1 ? "text-insiderPurple-glow group-hover:text-insiderBlue-light" : "",
                  index === 2 ? "text-insiderBlue group-hover:text-insiderPurple-glow" : ""
                )}>
                  {offering.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-white group-hover:text-gradient transition-all duration-300">
                  {offering.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70 text-base leading-relaxed">
                  {offering.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;

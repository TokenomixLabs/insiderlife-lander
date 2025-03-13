
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, TrendingUp, Users } from 'lucide-react';

const OfferingsSection: React.FC = () => {
  const offerings = [
    {
      title: "AI-Powered Business Strategies",
      description: "Leverage cutting-edge AI to develop business strategies that scale rapidly and outperform the competition.",
      icon: <Brain className="h-10 w-10" />,
    },
    {
      title: "High-Leverage Monetization Systems",
      description: "Implement proven monetization systems designed to maximize revenue and create sustainable business models.",
      icon: <TrendingUp className="h-10 w-10" />,
    },
    {
      title: "Community & Collaboration",
      description: "Join a powerful network of entrepreneurs and creators who are shaping the future of the digital economy.",
      icon: <Users className="h-10 w-10" />,
    }
  ];

  return (
    <section id="offerings" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What We Offer
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Our comprehensive platform provides everything you need to thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-md">
              <CardHeader>
                <div className="mb-5 text-primary">
                  {offering.icon}
                </div>
                <CardTitle className="text-xl font-semibold">
                  {offering.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
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

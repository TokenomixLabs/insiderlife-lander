import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Key, Users, BarChart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import WaitlistDialog from './WaitlistDialog';

const OfferingsSection: React.FC = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  
  const offerings = [
    {
      title: "AI-Powered Business Strategies",
      description: "Leverage cutting-edge AI to develop business strategies that scale rapidly and outperform the competition.",
      icon: <Brain className="h-10 w-10" />,
      delay: 0.1
    },
    {
      title: "High-Leverage Monetization Systems",
      description: "Implement proven monetization systems designed to maximize revenue and create sustainable business models.",
      icon: <Key className="h-10 w-10" />,
      delay: 0.2
    },
    {
      title: "Community & Collaboration",
      description: "Join a powerful network of entrepreneurs and creators who are shaping the future of the digital economy.",
      icon: <Users className="h-10 w-10" />,
      delay: 0.3
    },
    {
      title: "Data-Driven Insights",
      description: "Unlock powerful analytics and insights to make informed decisions and optimize your business performance.",
      icon: <BarChart className="h-10 w-10" />,
      delay: 0.4
    }
  ];

  return (
    <section id="offerings" className="relative bg-insiderDark z-20 py-24">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient font-orbitron">
            Activate Power, Freedom & Mastery
          </h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-white/80">
            Unlock the AI-driven frameworks and elite strategies to dominate life, business,<br />
            and the new economy—while building sovereignty, wealth, and unstoppable momentum.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: offering.delay }}
              viewport={{ once: true }}
            >
              <Card className="bg-insiderDark-light/40 border border-white/10 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-glow h-full">
                <CardHeader>
                  <div className={cn(
                    "mb-5 text-insiderBlue",
                    index === 1 ? "text-insiderPurple" : "",
                    index === 2 ? "text-insiderBlue-light" : "",
                    index === 3 ? "text-insiderPurple-light" : ""
                  )}>
                    {offering.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold font-orbitron">{offering.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70 text-base">{offering.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center flex flex-col items-center"
        >
          <p className="text-white/70 italic text-lg mb-6">
            "Join the top 1% of digital entrepreneurs leveraging AI to build wealth and freedom."
          </p>
          
          <Button
            className={cn(
              "bg-gradient-to-r from-insiderPurple to-insiderBlue",
              "hover:from-insiderPurple-light hover:to-insiderBlue-light",
              "text-white font-medium px-8 py-6 h-auto shadow-glow transition-all duration-300 hover:scale-105"
            )}
            onClick={() => setWaitlistOpen(true)}
          >
            Get Started Now <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
      
      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </section>
  );
};

export default OfferingsSection;

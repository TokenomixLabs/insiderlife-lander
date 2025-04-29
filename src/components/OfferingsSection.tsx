
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Broadcast, Code, Circle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import WaitlistDialog from './WaitlistDialog';

const OfferingsSection: React.FC = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  
  const pillars = [
    {
      title: "The Broadcast",
      description: "Raw, unfiltered signal transmission. Show up, tune in, and tap into the next-level frequency of execution and alignment.",
      icon: <Broadcast className="h-10 w-10" />,
      delay: 0.1
    },
    {
      title: "The Code",
      description: "AI Freedom Code isn't a course. It's a complete digital weapon system — designed for sovereign scale, instant monetization, and unstoppable digital presence.",
      icon: <Code className="h-10 w-10" />,
      delay: 0.2
    },
    {
      title: "The Circle",
      description: "Private alliance of awakened creators. Collaboration, expansion, strategy, and sovereign wealth creation from the inside out.",
      icon: <Circle className="h-10 w-10" />,
      delay: 0.3
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
        
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-orbitron">
            Inside the Movement
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: pillar.delay }}
              viewport={{ once: true }}
            >
              <Card className="bg-insiderDark-light/40 border border-white/10 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-glow h-full">
                <CardHeader>
                  <div className={cn(
                    "mb-5 text-insiderBlue",
                    index === 1 ? "text-insiderPurple" : "",
                    index === 2 ? "text-insiderBlue-light" : "",
                  )}>
                    {pillar.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold font-orbitron">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70 text-base">{pillar.description}</CardDescription>
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
          <p className="text-white/80 font-semibold text-xl mb-8 max-w-2xl mx-auto">
            "The digital frontier rewards the prepared. Join the elite using AI to build unprecedented wealth and true freedom."
          </p>
          
          <Button
            className={cn(
              "bg-gradient-to-r from-insiderPurple to-insiderBlue",
              "hover:from-insiderPurple-light hover:to-insiderBlue-light",
              "text-white font-semibold px-8 py-6 h-auto text-lg shadow-glow transition-all duration-300 hover:scale-105"
            )}
            onClick={() => setWaitlistOpen(true)}
          >
            GET STARTED NOW <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
      
      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </section>
  );
};

export default OfferingsSection;

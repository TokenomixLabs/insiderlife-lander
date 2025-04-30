
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Radio, Code, Circle, ArrowRight, Lock } from 'lucide-react';
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
      icon: <Radio className="h-10 w-10" />,
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
        
        {/* InsiderDAO VIP Invitation Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 glass-card p-8 md:p-10 border border-white/10 shadow-glow-purple relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-insiderPurple/20 to-insiderBlue/20 opacity-50 z-0"></div>
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-insiderPurple/20 rounded-full filter blur-3xl opacity-30 animate-pulse-glow"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-insiderBlue/20 rounded-full filter blur-3xl opacity-30 animate-pulse-glow animation-delay-1000"></div>
          
          <div className="relative z-10 text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="md:max-w-2xl">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Lock className="h-6 w-6 text-insiderPurple mr-2" />
                <h3 className="text-2xl md:text-3xl font-bold text-gradient font-orbitron">
                  🔐 InsiderDAO Is Now Open
                </h3>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Private access to our inner-circle hub — where aligned visionaries connect, collaborate, and accelerate together.
              </h4>
              <p className="text-white/80 mb-6 md:mb-0">
                This is your VIP invitation to enter the private command center behind InsiderLife.<br />
                Not a forum. Not a feed.<br />
                A living DAO of sovereign builders and digital dominators.<br />
                If you feel the resonance, step inside — and take your seat.
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:ml-6 flex justify-center md:justify-end">
              <a 
                href="https://insiderdao.com/signup?ref=vip" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  "bg-gradient-to-r from-insiderPurple to-insiderBlue",
                  "hover:from-insiderPurple-light hover:to-insiderBlue-light",
                  "text-white font-semibold px-8 py-4 rounded-md",
                  "shadow-glow transition-all duration-300 hover:scale-105",
                  "inline-flex items-center"
                )}
              >
                🔥 Join the Community <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* The Final CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 glass-card p-10 md:p-16 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient font-orbitron">
              Your Future is Calling. Will You Answer?
            </h2>
          </div>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            This isn't just a membership—it's your passport to the next level of digital wealth, freedom, and influence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-insiderBlue-light mr-2">•</span>
              <span className="text-white">Insider strategies</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-insiderBlue-light mr-2">•</span>
              <span className="text-white">AI-driven automation</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-insiderBlue-light mr-2">•</span>
              <span className="text-white">Top 1% of digital visionaries</span>
            </div>
          </div>
          
          <a 
            href="https://insiderdao.com/signup?ref=vip"
            target="_blank"
            rel="noopener noreferrer" 
            className={cn(
              "bg-gradient-to-r from-insiderPurple to-insiderBlue",
              "hover:from-insiderPurple-light hover:to-insiderBlue-light",
              "text-white font-medium text-lg px-8 py-6 inline-block rounded-md",
              "shadow-glow transition-all duration-300 hover:scale-105"
            )}
          >
            🔥 Join the Community <ArrowRight className="ml-2 h-5 w-5 inline" />
          </a>
        </motion.div>
      </div>
      
      <WaitlistDialog open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </section>
  );
};

export default OfferingsSection;

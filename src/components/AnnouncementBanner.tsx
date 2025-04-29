
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AnnouncementBanner: React.FC = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-r from-insiderDark-light to-insiderDark">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-insiderBlue/10 rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-insiderPurple/10 rounded-full filter blur-3xl animate-pulse-glow animation-delay-2000"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="glass-card p-8 md:p-10 text-center max-w-5xl mx-auto border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-orbitron">
            🔱 The Sovereign Circle Is Now Open
          </h3>
          
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            Private council of visionaries shaping the next evolution of digital society. Entry by resonance only.
          </p>
          
          <Link to="/circle">
            <Button 
              className={cn(
                "bg-gradient-to-r from-insiderPurple to-insiderBlue",
                "hover:from-insiderPurple-light hover:to-insiderBlue-light",
                "text-white font-medium text-lg px-8 py-6 h-auto shadow-glow transition-all duration-300 hover:scale-105"
              )}
            >
              Explore the Circle <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default AnnouncementBanner;

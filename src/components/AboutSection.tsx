
import React from 'react';
import { cn } from '@/lib/utils';
import { Zap, Globe, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-futuristic-grid opacity-5 z-0"></div>
      
      {/* Animated light streak */}
      <div className="absolute top-1/3 left-0 w-full">
        <div className="light-streak" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="elite-card p-10 md:p-14 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-gradient">
            About InsiderLife
          </h2>
          <p className="text-center text-lg text-white/90 leading-relaxed mb-10">
            We provide cutting-edge education, business strategies, and AI-powered tools to help you scale fast. 
            Our platform gives entrepreneurs and creators an unfair advantage in the digital economy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center mb-5",
                "bg-gradient-to-br from-insiderBlue to-insiderBlue-dark",
                "shadow-lg shadow-insiderBlue/20 animate-float-subtle"
              )}>
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Impact</h3>
              <p className="text-white/70">Strategies designed for rapid results and immediate business impact</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center mb-5",
                "bg-gradient-to-br from-insiderPurple to-insiderPurple-dark",
                "shadow-lg shadow-insiderPurple/20 animate-float-subtle",
                "animation-delay-300"
              )}>
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
              <p className="text-white/70">Cutting-edge AI tools and technologies to maximize your business potential</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center mb-5",
                "bg-gradient-to-br from-insiderBlue-light to-insiderPurple-light",
                "shadow-lg shadow-insiderPurple-light/20 animate-float-subtle",
                "animation-delay-600"
              )}>
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Elite Community</h3>
              <p className="text-white/70">Connect with a network of visionaries and industry leaders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

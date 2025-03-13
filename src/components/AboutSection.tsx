
import React from 'react';
import { Zap, Globe, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="bg-background rounded-lg p-10 max-w-3xl mx-auto shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About InsiderLife
          </h2>
          <p className="text-center text-lg text-muted-foreground leading-relaxed mb-10">
            We provide cutting-edge education, business strategies, and AI-powered tools to help you scale fast. 
            Our platform gives entrepreneurs and creators an unfair advantage in the digital economy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Impact</h3>
              <p className="text-muted-foreground">Strategies designed for rapid results and immediate business impact</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
              <p className="text-muted-foreground">Cutting-edge AI tools and technologies to maximize your business potential</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Elite Community</h3>
              <p className="text-muted-foreground">Connect with a network of visionaries and industry leaders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="bg-card p-12 text-center max-w-4xl mx-auto rounded-lg shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Join InsiderLife today and gain access to our exclusive platform of AI-powered tools, business strategies, and a community of forward-thinking entrepreneurs.
          </p>
          
          <Button size="lg" className="text-lg px-8 py-6 h-auto">
            Join the Movement <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <div className="mt-10 text-sm text-muted-foreground">
            Limited memberships available. Apply now to secure your spot.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

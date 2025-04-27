
import React from 'react';
import { Check } from 'lucide-react';

const FeatureItem = ({ title, description }: { title: string; description: string }) => (
  <li className="flex items-start gap-4">
    <Check className="h-6 w-6 text-insiderBlue mt-1 flex-shrink-0" />
    <div>
      <span className="text-lg text-white/90 font-semibold block">{title}</span>
      <p className="text-sm text-white/70 mt-1">{description}</p>
    </div>
  </li>
);

const OverviewSection = () => {
  const features = [
    {
      title: "Instantly deployable funnel",
      description: "Launch today — no tech headaches, no delays. Just plug in and go."
    },
    {
      title: "Built-in referral engine",
      description: "Turn every user into a promoter and unleash viral growth from Day 1."
    },
    {
      title: "Early access to AI agents",
      description: "Use intelligent systems that scale your reach, automate engagement, and close gaps in your business 24/7."
    },
    {
      title: "Passive income layer",
      description: "Earn even while you sleep — with a built-in revenue system that rewards action and alignment."
    },
    {
      title: "Community + platform integration",
      description: "You're not alone — tap into a movement, get support, and grow inside a powerful ecosystem built for sovereignty."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 bg-insiderDark-light/20 backdrop-blur-sm">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-orbitron text-gradient pb-4">
        Way More Than A Course
      </h2>
      
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        <p className="text-lg md:text-xl leading-relaxed text-white/80 mb-10 text-center">
          AI FREEDOM CODE is a weaponized digital system built for speed, power, and leverage.
          It combines automation, duplication, and viral mechanics — so you grow even while offline.
        </p>
        
        <div className="glass-card p-8 w-full">
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;

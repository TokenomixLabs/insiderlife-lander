import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionShell from './SectionShell';
import Reveal from './Reveal';

const FinalClose: React.FC = () => (
  <SectionShell id="enter" className="border-t border-white/5 overflow-hidden py-28 md:py-44">
    <div className="pointer-events-none absolute inset-0 veil" aria-hidden="true" />
    <div className="relative max-w-4xl">
      <Reveal>
        <p className="font-orbitron text-sm md:text-base tracking-[0.24em] uppercase text-white/60 pb-1">
          Who you move with changes how far you go.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-8 display text-energy text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Upgrade Your Reality.
        </h2>
        <p className="mt-5 font-orbitron text-xl md:text-2xl text-white/85 tracking-wide pb-1">
          Your Path to Life Mastery.
        </p>
      </Reveal>

      <Reveal delay={180}>
        <Link
          to="/circle"
          className="mt-12 inline-flex items-center gap-3 bg-energy text-white font-orbitron text-sm md:text-base tracking-[0.2em] uppercase px-9 py-5 rounded-md transition-transform duration-300 hover:scale-[1.03]"
        >
          Enter InsiderLife
          <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="mt-8 font-orbitron text-xs tracking-[0.32em] uppercase text-white/40">
          People Ahead Together.
        </p>
      </Reveal>
    </div>
  </SectionShell>
);

export default FinalClose;

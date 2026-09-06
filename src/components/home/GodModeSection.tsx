import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionShell, { Eyebrow } from './SectionShell';
import Reveal from './Reveal';

const spans = ['Mind', 'Body', 'Energy', 'Wealth', 'Mission', 'Identity', 'Relationships', 'Time'];

const GodModeSection: React.FC = () => (
  <SectionShell id="godmode" className="border-t border-white/5 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 veil opacity-80" aria-hidden="true" />
    <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-16 items-start">
      <div className="lg:col-span-7">
        <Reveal>
          <Eyebrow>GODMODE</Eyebrow>
          <h2 className="display text-energy text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.14]">
            Play the Game of Life at the Highest Possible Level.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 space-y-6 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
            <p>
              GODMODE is the life-mastery operating system inside InsiderLife — a way of running your
              reality with intent instead of reacting to it.
            </p>
            <p className="text-white/90">
              It is not a course. It is how the game is played.
            </p>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <Link
            to="/godmode"
            className="mt-10 inline-flex items-center gap-3 font-orbitron text-sm tracking-[0.2em] uppercase text-white border border-white/20 px-7 py-4 rounded-md transition-all duration-300 hover:border-white/50 hover:bg-white/5"
          >
            Explore GODMODE
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <div className="lg:col-span-5">
        <Reveal delay={140}>
          <div className="rule-energy" />
          <ul className="mt-8 grid grid-cols-2 gap-x-6">
            {spans.map((s) => (
              <li
                key={s}
                className="border-b border-white/10 py-4 font-orbitron text-sm md:text-base tracking-[0.15em] uppercase text-white/70"
              >
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/45 leading-relaxed">
            Eight dimensions, one operator. GODMODE spans all of them.
          </p>
        </Reveal>
      </div>
    </div>
  </SectionShell>
);

export default GodModeSection;

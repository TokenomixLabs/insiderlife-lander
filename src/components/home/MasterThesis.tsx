import React from 'react';
import SectionShell, { Eyebrow } from './SectionShell';
import Reveal from './Reveal';

const MasterThesis: React.FC = () => (
  <SectionShell id="why" className="pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 veil" aria-hidden="true" />
    <div className="relative">
      <Reveal>
        <Eyebrow>InsiderLife</Eyebrow>
      </Reveal>

      <Reveal delay={80}>
        <h1 className="display text-energy text-4xl sm:text-6xl md:text-7xl lg:text-[5.1rem] max-w-7xl break-words">
          Upgrade Your Reality.
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-6 md:mt-8 font-orbitron text-xl sm:text-2xl md:text-3xl text-white/90 tracking-wide pb-1">
          Your Path to Life Mastery.
        </p>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-10 md:mt-12 grid gap-8 md:grid-cols-12 items-start">
          <div className="md:col-span-1 hidden md:block">
            <div className="rule-energy mt-4" />
          </div>
          <div className="md:col-span-7 space-y-6 text-base md:text-lg text-white/70 leading-relaxed">
            <p>
              InsiderLife is not a course library and not a feed. It is a life-mastery ecosystem for
              people who intend to play at a higher level — in mind, work, wealth, health, relationships
              and freedom.
            </p>
            <p className="text-white/90">
              Better tools are not the point. A better life is.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </SectionShell>
);

export default MasterThesis;

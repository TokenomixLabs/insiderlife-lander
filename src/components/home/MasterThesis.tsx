import React from 'react';
import SectionShell, { Eyebrow } from './SectionShell';
import Reveal from './Reveal';
import SovereignCircle from './SovereignCircle';

const MasterThesis: React.FC = () => (
  <SectionShell id="why" className="pt-16 sm:pt-20 lg:pt-24 pb-16 md:pb-24 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 veil" aria-hidden="true" />
    <div className="relative grid items-start gap-x-8 gap-y-12 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
      <div className="lg:col-span-7 xl:col-span-8">
        <Reveal>
          <Eyebrow className="mb-5 md:mb-6">InsiderLife</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="display text-energy text-4xl sm:text-6xl md:text-7xl lg:text-[4.35rem] xl:text-[4.8rem] max-w-5xl break-words">
            Upgrade Your Reality.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-4 md:mt-5 font-orbitron text-xl sm:text-2xl md:text-3xl text-white/90 tracking-wide leading-relaxed pb-1">
            Your Path to Life Mastery.
          </p>
        </Reveal>
      </div>

      <Reveal delay={180} className="lg:col-span-5 xl:col-span-4 lg:row-span-2 lg:col-start-8 xl:col-start-9 lg:row-start-1">
        <SovereignCircle className="mx-auto lg:ml-auto lg:mr-0" />
      </Reveal>


      <Reveal delay={240} className="lg:col-span-7 xl:col-span-8">
        <div className="grid gap-6 md:grid-cols-[minmax(3rem,5rem)_minmax(0,1fr)] md:items-start lg:pr-4 xl:pr-12">
          <div className="hidden md:block pt-3">
            <div className="rule-energy" />
          </div>
          <div className="space-y-5 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
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

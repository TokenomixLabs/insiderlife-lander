import React from 'react';
import SectionShell, { Eyebrow } from './SectionShell';
import Reveal from './Reveal';

const values = [
  { title: 'Better Signal', copy: 'What reaches you decides what you consider. Fewer takes, more truth.' },
  { title: 'Better People', copy: 'Standards are contagious. Move with people already operating higher.' },
  { title: 'Better Opportunity', copy: 'Access travels through relationships long before it reaches a feed.' },
];

const CommunityDoctrine: React.FC = () => (
  <SectionShell id="community" className="border-t border-white/5 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 veil opacity-70" aria-hidden="true" />
    <div className="relative">
      <Reveal>
        <Eyebrow>Community Doctrine</Eyebrow>
        <h2 className="display text-energy text-3xl sm:text-4xl md:text-5xl">
          People Ahead Together.
        </h2>
        <p className="mt-5 font-orbitron text-lg md:text-2xl text-white/85 tracking-wide pb-1">
          Proximity Changes Possibility.
        </p>
      </Reveal>

      <div className="mt-16 md:mt-20 relative">
        <div className="hidden md:block absolute top-[14px] left-0 right-0 rule-energy" />
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 110}>
              <div className="relative md:pt-10">
                <span className="hidden md:block absolute top-[9px] left-0 h-[11px] w-[11px] rounded-full bg-energy" />
                <h3 className="font-orbitron text-base md:text-lg tracking-[0.18em] uppercase text-white leading-relaxed pb-[0.1em]">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed max-w-sm">{v.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={200}>
        <blockquote className="mt-20 md:mt-24 border-l-2 border-white/20 pl-6 md:pl-10 max-w-3xl">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Your feed should not be the most valuable thing about your network. The people should be.
          </p>
          <footer className="mt-5 text-sm text-white/45">
            InsiderLife is not an audience. It is a living network.
          </footer>
        </blockquote>
      </Reveal>
    </div>
  </SectionShell>
);

export default CommunityDoctrine;

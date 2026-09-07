import React from 'react';
import { RadioTower, UsersRound, Waypoints } from 'lucide-react';
import SectionShell, { Eyebrow } from './SectionShell';
import Reveal from './Reveal';

const values = [
  { title: 'Better Signal', copy: 'What reaches you decides what you consider. Fewer takes, more truth.', Icon: RadioTower },
  { title: 'Better People', copy: 'Standards are contagious. Move with people already operating higher.', Icon: UsersRound },
  { title: 'Better Opportunity', copy: 'Access travels through relationships long before it reaches a feed.', Icon: Waypoints },
];

const CommunityDoctrine: React.FC = () => (
  <SectionShell id="community" className="border-t border-white/10">
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

      <div className="mt-10 md:mt-12 relative">
        <div className="hidden md:block absolute top-5 left-[16.666%] right-[16.666%] w-auto rule-energy" />
        <div className="grid gap-7 md:grid-cols-3 md:gap-8">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 110} className="min-w-0">
              <div className="relative min-w-0 border border-white/10 bg-insiderDark-light/35 px-6 py-7 md:pt-16 md:min-h-[220px]">
                <span className="absolute top-4 left-6 md:left-1/2 md:-translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-primary/50 bg-insiderDark shadow-[0_0_20px_hsl(var(--energy-blue)/0.18)]">
                  <v.Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mt-10 md:mt-0 font-orbitron text-sm lg:text-base uppercase text-white leading-relaxed pb-[0.1em] break-words">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">{v.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={200}>
        <blockquote className="mt-10 md:mt-12 border-l-2 border-primary/50 pl-6 md:pl-8 max-w-3xl">
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

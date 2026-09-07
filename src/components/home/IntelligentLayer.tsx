import React from 'react';
import SectionShell, { Eyebrow } from './SectionShell';
import Reveal from './Reveal';

const points = [
  { k: 'Discover faster', v: 'Signal surfaces because someone credible already found it.' },
  { k: 'Understand more', v: 'Context travels with the information, not separately from it.' },
  { k: 'Act with context', v: 'Decisions get made with the room, not alone at midnight.' },
];

const IntelligentLayer: React.FC = () => (
  <SectionShell id="intelligent-layer" className="border-t border-white/10 bg-insiderDark-light/25">
    <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
      <div className="min-w-0 lg:col-span-6">
        <Reveal>
          <Eyebrow>The Intelligent Layer</Eyebrow>
          <h2 className="display text-white text-2xl sm:text-3xl md:text-[2.6rem] leading-[1.22]">
            More people should create more intelligence —
            <span className="text-energy"> not more noise.</span>
          </h2>
        </Reveal>
      </div>
      <div className="min-w-0 lg:col-span-6">
        <Reveal delay={120}>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            A community should get sharper as it grows. That is the standard InsiderLife is being
            built to hold: participation that compounds into clarity.
          </p>
          <ul className="mt-7 grid gap-0 sm:grid-cols-3 border-t border-white/10">
            {points.map((p) => (
              <li key={p.k} className="min-w-0 py-5 sm:px-4 sm:first:pl-0 sm:border-r sm:last:border-r-0 border-white/10">
                <p className="font-orbitron text-xs uppercase text-white/90 pb-[0.1em]">{p.k}</p>
                <p className="mt-2 text-sm md:text-base text-white/60 leading-relaxed">{p.v}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </SectionShell>
);

export default IntelligentLayer;

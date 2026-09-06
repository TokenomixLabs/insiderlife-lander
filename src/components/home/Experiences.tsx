import React from 'react';
import SectionShell, { Eyebrow } from './SectionShell';
import Reveal from './Reveal';
import ridge from '@/assets/experiences-ridge.jpg';

const facets = ['Adventure', 'Health & Energy', 'Relationships', 'Freedom', 'Presence'];

const Experiences: React.FC = () => (
  <SectionShell id="experiences" className="border-t border-white/5">
    <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 items-center">
      <div className="lg:col-span-6">
        <Reveal>
          <Eyebrow>Experiences</Eyebrow>
          <h2 className="display text-white text-3xl sm:text-4xl md:text-[2.9rem] leading-[1.2]">
            Don't just learn about a better life.
            <span className="text-energy"> Live one.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
            The life part of InsiderLife is literal. Time in the real world with people who move the
            way you do — rooms, tables, trips, training and the kind of hours you actually remember.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {facets.map((f) => (
              <li key={f} className="font-orbitron text-xs md:text-sm tracking-[0.2em] uppercase text-white/55">
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="lg:col-span-6">
        <Reveal delay={160}>
          <div className="relative overflow-hidden rounded-sm border border-white/10">
            <img
              src={ridge}
              alt="A lone figure standing on a high ridge beneath aurora light at night"
              loading="lazy"
              width={1600}
              height={1000}
              className="w-full h-auto object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-insiderDark via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </div>
  </SectionShell>
);

export default Experiences;

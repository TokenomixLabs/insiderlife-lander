import React from 'react';
import { Link } from 'react-router-dom';
import SectionShell, { Eyebrow } from './SectionShell';
import Reveal from './Reveal';

const surfaces = [
  { name: 'GODMODE', copy: 'The life-mastery operating system.', to: '/godmode' },
  { name: 'AI Freedom Code', copy: 'Command intelligence and keep authority.', to: '/aifreedomcode' },
  { name: 'The Circle', copy: 'Smaller rooms, deeper relationships.', to: '/circle' },
];

const Ecosystem: React.FC = () => (
  <SectionShell id="ecosystem" className="border-t border-white/5">
    <Reveal>
      <Eyebrow>Ecosystem</Eyebrow>
      <h2 className="display text-white text-3xl sm:text-4xl md:text-5xl max-w-6xl">
        One Community. <span className="text-energy">A Much Larger World.</span>
      </h2>
      <p className="mt-6 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
        InsiderLife is the home. Everything connected to it exists to deepen the same promise, not to
        scatter your attention.
      </p>
    </Reveal>

    <div className="mt-12 grid gap-0 md:grid-cols-3 border-t border-white/10">
      {surfaces.map((s, i) => (
        <Reveal key={s.name} delay={i * 100} className="h-full">
          <Link
            to={s.to}
            className="group block h-full border-b md:border-b-0 border-white/10 md:border-r md:last:border-r-0 py-8 md:px-8 md:first:pl-0 md:last:pr-0 transition-colors hover:bg-white/[0.03]"
          >
            <h3 className="font-orbitron text-base md:text-lg tracking-[0.18em] uppercase text-white leading-relaxed pb-[0.1em]">
              {s.name}
            </h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">{s.copy}</p>
            <span className="mt-5 inline-block h-px w-10 bg-energy transition-all duration-500 group-hover:w-20" />
          </Link>
        </Reveal>
      ))}
    </div>

    <Reveal delay={220}>
      <p className="mt-12 text-sm text-white/40">Originated within the Magus Labs ecosystem.</p>
    </Reveal>
  </SectionShell>
);

export default Ecosystem;

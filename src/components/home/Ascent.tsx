import React from 'react';
import SectionShell, { Eyebrow } from './SectionShell';
import Reveal from './Reveal';

const steps = [
  { label: 'Enter', copy: 'Step inside and get oriented.' },
  { label: 'Connect', copy: 'Meet people operating at your level or above.' },
  { label: 'Contribute', copy: 'Add signal. Standing is earned, not bought.' },
  { label: 'Build', copy: 'Turn access into work that compounds.' },
  { label: 'Rise', copy: 'Move into rooms that were not previously open.' },
];

const Ascent: React.FC = () => (
  <SectionShell id="ascent" className="border-t border-white/5">
    <Reveal>
      <Eyebrow>Participation</Eyebrow>
      <h2 className="display text-white text-3xl sm:text-4xl md:text-5xl max-w-3xl">
        Membership Has <span className="text-energy">Direction.</span>
      </h2>
      <p className="mt-6 max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
        Nobody gets dumped into a feed. There is a path, and it goes upward.
      </p>
    </Reveal>

    <div className="mt-16 md:mt-24 relative">
      <div className="hidden md:block absolute left-0 right-0 top-[7px] rule-energy" />
      <ol className="grid gap-10 md:grid-cols-5 md:gap-6">
        {steps.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <li className="relative md:pt-10 pl-6 md:pl-0 border-l md:border-l-0 border-white/10">
              <span className="absolute md:top-0 top-1 left-[-5px] md:left-0 h-[10px] w-[10px] rounded-full bg-energy" />
              <span className="font-orbitron text-[11px] tracking-[0.3em] text-white/35">0{i + 1}</span>
              <h3 className="mt-3 font-orbitron text-base md:text-lg tracking-[0.18em] uppercase text-white leading-relaxed pb-[0.1em]">
                {s.label}
              </h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{s.copy}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  </SectionShell>
);

export default Ascent;

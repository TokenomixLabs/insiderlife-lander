import React from 'react';
import SectionShell, { Eyebrow } from './SectionShell';
import Reveal from './Reveal';

const parts = [
  {
    label: 'The Broadcast',
    line: 'Live signal.',
    copy: 'Conversations, live intelligence, interviews, presentations and developments worth paying attention to — as they happen.',
  },
  {
    label: 'The Code',
    line: 'Knowledge you can use.',
    copy: 'Frameworks, playbooks, training and AI Freedom Code: executable intelligence, not theory you file away.',
  },
  {
    label: 'The Circle',
    line: 'People worth knowing.',
    copy: 'Smaller groups, deeper relationships, collaboration and higher-trust rooms where real moves get made.',
  },
];

const ThreeParts: React.FC = () => (
  <SectionShell id="system" className="border-t border-white/5" innerClassName="max-w-6xl">
    <Reveal>
      <Eyebrow>Inside InsiderLife</Eyebrow>
      <h2 className="display text-white text-3xl sm:text-4xl md:text-5xl max-w-3xl">
        Three Parts. <span className="text-energy">One System.</span>
      </h2>
    </Reveal>

    <div className="mt-16 md:mt-20 grid gap-0 md:grid-cols-3 border-t border-white/10">
      {parts.map((p, i) => (
        <Reveal key={p.label} delay={i * 110} className="h-full">
          <article className="group h-full relative border-b md:border-b-0 border-white/10 md:border-r md:last:border-r-0 px-0 md:px-8 md:first:pl-0 md:last:pr-0 py-10 md:py-12">
            <div className="absolute left-0 top-0 h-px w-0 bg-energy transition-all duration-700 group-hover:w-full" />
            <span className="font-orbitron text-[11px] tracking-[0.32em] uppercase text-white/35">
              0{i + 1}
            </span>
            <h3 className="mt-5 font-orbitron text-xl md:text-2xl text-white tracking-wide leading-relaxed pb-[0.1em]">
              {p.label}
            </h3>
            <p className="mt-2 font-orbitron text-sm tracking-[0.15em] uppercase text-energy pb-[0.1em]">
              {p.line}
            </p>
            <p className="mt-5 text-sm md:text-base text-white/65 leading-relaxed">{p.copy}</p>
          </article>
        </Reveal>
      ))}
    </div>
  </SectionShell>
);

export default ThreeParts;

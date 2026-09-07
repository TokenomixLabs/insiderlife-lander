import React from 'react';
import SectionShell, { Eyebrow } from './SectionShell';
import Reveal from './Reveal';
import ridge from '@/assets/experiences-ridge.jpg';

const parts = [
  {
    label: 'The Broadcast',
    line: 'Live signal.',
    copy: 'Conversations, live intelligence, interviews, presentations and developments worth paying attention to — as they happen.',
    image: ridge,
    position: 'object-left',
  },
  {
    label: 'The Code',
    line: 'Knowledge you can use.',
    copy: 'Frameworks, playbooks, training and AI Freedom Code: executable intelligence, not theory you file away.',
    image: ridge,
    position: 'object-center',
  },
  {
    label: 'The Circle',
    line: 'People worth knowing.',
    copy: 'Smaller groups, deeper relationships, collaboration and higher-trust rooms where real moves get made.',
    image: ridge,
    position: 'object-right',
  },
];

const ThreeParts: React.FC = () => (
  <SectionShell id="system" className="border-t border-white/10">
    <Reveal>
      <Eyebrow>Inside InsiderLife</Eyebrow>
      <h2 className="display text-white text-3xl sm:text-4xl md:text-5xl max-w-5xl">
        Three Parts. <span className="text-energy">One System.</span>
      </h2>
    </Reveal>

    <div className="mt-10 md:mt-12 grid gap-4 md:grid-cols-3">
      {parts.map((p, i) => (
        <Reveal key={p.label} delay={i * 110} className="h-full">
          <article className="group h-full min-h-[340px] relative overflow-hidden border border-white/10 bg-insiderDark-light">
            <img src={p.image} alt="" loading="lazy" className={`absolute inset-0 h-full w-full object-cover ${p.position} opacity-35 saturate-75 transition-transform duration-700 group-hover:scale-[1.03]`} />
            <div className="panel-atmosphere absolute inset-0" />
            <div className="absolute inset-x-0 top-0 h-px bg-energy opacity-70" />
            <div className="relative flex h-full min-h-[340px] flex-col justify-end p-6 lg:p-8">
            <span className="font-orbitron text-[11px] tracking-[0.24em] uppercase text-white/45">
              0{i + 1}
            </span>
            <h3 className="mt-4 font-orbitron text-xl lg:text-2xl text-white leading-relaxed pb-[0.1em]">
              {p.label}
            </h3>
            <p className="mt-2 font-orbitron text-sm tracking-[0.15em] uppercase text-energy pb-[0.1em]">
              {p.line}
            </p>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">{p.copy}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </SectionShell>
);

export default ThreeParts;

import React from 'react';
import SectionShell, { Eyebrow } from './SectionShell';
import Reveal from './Reveal';

const dimensions = [
  { n: '01', title: 'Master Yourself', copy: 'Identity, discipline, stillness and inner authority — the operator behind every result.' },
  { n: '02', title: 'Command Intelligence', copy: 'Use AI as leverage without surrendering judgment, taste or direction.' },
  { n: '03', title: 'Forge Powerful Allies', copy: 'Relationships that raise your standard, your context and your access.' },
  { n: '04', title: 'Create Opportunity', copy: 'Wealth and mission built on signal, timing and executed advantage.' },
  { n: '05', title: 'Live Your Adventure', copy: 'Health, energy and real experience — a life that is actually lived.' },
  { n: '06', title: 'Command Your Freedom', copy: 'Time, mobility and choice held as design, not as luck.' },
];

const LifeMasteryBridge: React.FC = () => (
  <SectionShell id="mastery" className="border-t border-white/5">
    <Reveal>
      <Eyebrow>The Wider Game</Eyebrow>
      <h2 className="display text-energy text-3xl sm:text-4xl md:text-5xl max-w-3xl">
        The Game Is Bigger Than AI.
      </h2>
    </Reveal>

    <Reveal delay={100}>
      <p className="mt-8 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
        AI can expand what you can do. The right people can expand what becomes possible.
        But the point is not better tools. The point is a better life.
      </p>
    </Reveal>

    <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {dimensions.map((d, i) => (
        <Reveal key={d.n} delay={i * 70}>
          <div className="group relative h-full border-t border-white/10 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:border-r lg:[&:nth-child(3n)]:border-r-0 border-white/10 py-8 pr-6 md:pr-10 pl-0 sm:pl-0">
            <div className="absolute left-0 top-0 h-px w-0 bg-energy transition-all duration-700 group-hover:w-full" />
            <span className="font-orbitron text-xs tracking-[0.3em] text-white/35">{d.n}</span>
            <h3 className="mt-4 font-orbitron text-lg md:text-xl text-white tracking-wide leading-relaxed pb-[0.1em]">
              {d.title}
            </h3>
            <p className="mt-3 text-sm md:text-base text-white/60 leading-relaxed max-w-xs">{d.copy}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </SectionShell>
);

export default LifeMasteryBridge;

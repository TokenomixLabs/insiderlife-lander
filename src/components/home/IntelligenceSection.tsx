import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionShell, { Eyebrow } from './SectionShell';
import Reveal from './Reveal';

const IntelligenceSection: React.FC = () => (
  <SectionShell id="intelligence" className="border-t border-white/5">
    <Reveal>
      <Eyebrow>Intelligence</Eyebrow>
      <h2 className="display text-white text-2xl sm:text-3xl md:text-[2.75rem] leading-[1.22] max-w-4xl">
        Powerful tools do not create a powerful life.
        <br className="hidden sm:block" />
        <span className="text-energy"> Powerful operators do.</span>
      </h2>
    </Reveal>

    <div className="mt-10 md:mt-12 grid gap-10 md:grid-cols-12">
      <div className="min-w-0 md:col-span-6 lg:col-span-5">
        <Reveal delay={80}>
          <p className="font-orbitron text-lg md:text-xl tracking-wide text-white/90 pb-1">
            AI amplifies the player.
          </p>
          <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed">
            Intelligence is leverage — not the life. Used well it compresses time, sharpens judgment
            and multiplies output. Used badly it makes you faster at the wrong things.
          </p>
        </Reveal>
      </div>

      <div className="min-w-0 md:col-span-6 lg:col-span-6 lg:col-start-7">
        <Reveal delay={160}>
          <div className="rule-energy" />
          <h3 className="mt-8 font-orbitron text-xl md:text-2xl text-white tracking-wide leading-relaxed pb-[0.1em]">
            AI Freedom Code
          </h3>
          <p className="mt-4 text-base text-white/70 leading-relaxed">
            The capability track inside InsiderLife for commanding AI while retaining authority:
            systems, workflows and executable frameworks that keep you the one deciding.
          </p>
          <Link
            to="/aifreedomcode"
            className="mt-8 inline-flex items-center gap-3 font-orbitron text-sm tracking-[0.2em] uppercase text-white/90 hover:text-white transition-colors"
          >
            Enter AI Freedom Code
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </div>
  </SectionShell>
);

export default IntelligenceSection;

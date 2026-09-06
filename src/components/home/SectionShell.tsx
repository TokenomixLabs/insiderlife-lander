import React from 'react';
import { cn } from '@/lib/utils';

interface SectionShellProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

const SectionShell: React.FC<SectionShellProps> = ({ id, children, className, innerClassName }) => (
  <section
    id={id}
    className={cn('relative w-full scroll-mt-24 py-24 md:py-36 px-6 md:px-10', className)}
  >
    <div className={cn('mx-auto w-full max-w-6xl', innerClassName)}>{children}</div>
  </section>
);

export const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <p className={cn('font-orbitron text-[11px] md:text-xs tracking-[0.35em] uppercase text-primary/80 mb-6', className)}>
    {children}
  </p>
);

export default SectionShell;

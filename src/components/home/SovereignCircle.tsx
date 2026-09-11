import React from 'react';
import { cn } from '@/lib/utils';
import markSrc from '@/assets/insiderlife-mark.png';

/**
 * Sovereign Circle — orbital brand emblem.
 * Layered SVG geometry + the transparent people-rising symbol only.
 * No rectangle, no raster background, no wordmark, no tagline box.
 */
const NODES = [
  { angle: -64, r: 168, color: 'var(--energy-cyan)', size: 2.6 },
  { angle: 18, r: 186, color: 'var(--energy-blue)', size: 2 },
  { angle: 104, r: 168, color: 'var(--energy-violet)', size: 2.4 },
  { angle: 158, r: 150, color: 'var(--energy-magenta)', size: 1.8 },
  { angle: 232, r: 186, color: 'var(--energy-cyan)', size: 2 },
];

const polar = (angle: number, r: number) => {
  const rad = (angle * Math.PI) / 180;
  return { x: 200 + r * Math.cos(rad), y: 200 + r * Math.sin(rad) };
};

const SovereignCircle: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={cn(
      'relative aspect-square w-[290px] sm:w-[340px] md:w-[400px] lg:w-[400px] xl:w-[470px] 2xl:w-[520px]',
      className,
    )}
  >
    <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
      <defs>
        <radialGradient id="sc-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--energy-blue))" stopOpacity="0.20" />
          <stop offset="45%" stopColor="hsl(var(--energy-violet))" stopOpacity="0.07" />
          <stop offset="100%" stopColor="hsl(var(--energy-violet))" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sc-arc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--energy-cyan))" stopOpacity="0.55" />
          <stop offset="60%" stopColor="hsl(var(--energy-blue))" stopOpacity="0.35" />
          <stop offset="100%" stopColor="hsl(var(--energy-magenta))" stopOpacity="0.5" />
        </linearGradient>
        <path id="sc-arc-top" d="M 200 200 m -156 0 a 156 156 0 0 1 312 0" fill="none" />
        <path id="sc-arc-bottom" d="M 200 200 m -166 0 a 166 166 0 0 0 332 0" fill="none" />
      </defs>

      {/* halo */}
      <circle cx="200" cy="200" r="150" fill="url(#sc-halo)" />

      {/* concentric rings */}
      <circle cx="200" cy="200" r="196" fill="none" stroke="hsl(var(--energy-violet) / 0.10)" strokeWidth="0.6" />
      <circle cx="200" cy="200" r="176" fill="none" stroke="hsl(var(--energy-cyan) / 0.13)" strokeWidth="0.6" />
      <circle cx="200" cy="200" r="122" fill="none" stroke="hsl(var(--energy-blue) / 0.16)" strokeWidth="0.7" />
      <circle
        cx="200"
        cy="200"
        r="104"
        fill="none"
        stroke="hsl(var(--energy-violet) / 0.14)"
        strokeWidth="0.6"
        strokeDasharray="1.5 7"
      />

      {/* partial arcs */}
      <path
        d="M 200 200 m -186 0 a 186 186 0 0 1 120 -173"
        fill="none"
        stroke="url(#sc-arc)"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M 200 200 m 186 0 a 186 186 0 0 1 -108 168"
        fill="none"
        stroke="url(#sc-arc)"
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      {/* axis lines */}
      <line x1="200" y1="12" x2="200" y2="66" stroke="hsl(var(--energy-cyan) / 0.18)" strokeWidth="0.6" />
      <line x1="200" y1="334" x2="200" y2="388" stroke="hsl(var(--energy-violet) / 0.16)" strokeWidth="0.6" />
      <line x1="12" y1="200" x2="58" y2="200" stroke="hsl(var(--energy-blue) / 0.14)" strokeWidth="0.6" />
      <line x1="342" y1="200" x2="388" y2="200" stroke="hsl(var(--energy-magenta) / 0.14)" strokeWidth="0.6" />

      {/* illuminated nodes */}
      {NODES.map((n, i) => {
        const p = polar(n.angle, n.r);
        return (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={n.size * 3.4} fill={`hsl(${n.color} / 0.10)`} />
            <circle cx={p.x} cy={p.y} r={n.size} fill={`hsl(${n.color} / 0.85)`} />
          </g>
        );
      })}

      {/* arc typography */}
      <text
        className="font-orbitron"
        fill="hsl(var(--foreground) / 0.42)"
        fontSize="8.4"
        letterSpacing="4.6"
      >
        <textPath href="#sc-arc-top" startOffset="50%" textAnchor="middle">
          PEOPLE AHEAD TOGETHER
        </textPath>
      </text>
      <text
        className="font-orbitron"
        fill="hsl(var(--foreground) / 0.26)"
        fontSize="7"
        letterSpacing="3.4"
      >
        <textPath href="#sc-arc-bottom" startOffset="50%" textAnchor="middle">
          HIGHER THINKERS • BRIGHTER TOMORROWS
        </textPath>
      </text>
    </svg>

    <img
      src={markSrc}
      alt=""
      className="absolute left-1/2 top-1/2 w-[38%] -translate-x-1/2 -translate-y-1/2 object-contain"
      style={{ filter: 'drop-shadow(0 0 26px hsl(var(--energy-blue) / 0.35))' }}
    />
  </div>
);

export default SovereignCircle;

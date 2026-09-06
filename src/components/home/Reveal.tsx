import React from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0 }) => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: '900ms' }}
      className={cn(
        'transition-all ease-out will-change-transform',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Reveal;

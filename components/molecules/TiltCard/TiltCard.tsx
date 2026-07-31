'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTiltDegrees?: number;
  glowColor?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className,
  maxTiltDegrees = 8,
  glowColor = 'rgba(96, 165, 250, 0.4)',
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTiltDegrees;
    const rotateY = ((x - centerX) / centerX) * maxTiltDegrees;

    cardRef.current.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
    cardRef.current.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);

    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
      className={cn(
        'tilt-card rounded-xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md transition-transform duration-200 ease-out hover:shadow-2xl hover:shadow-blue-500/10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

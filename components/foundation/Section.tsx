import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'sunken' | 'dark';
}

export function Section({ variant = 'default', className, children, ...props }: SectionProps) {
  const variantClasses = {
    default: 'bg-transparent text-white',
    sunken: 'bg-slate-950/60 text-white',
    dark: 'bg-slate-950 text-white',
  };

  return (
    <section
      className={cn('py-12 sm:py-16 lg:py-20', variantClasses[variant], className)}
      {...props}
    >
      {children}
    </section>
  );
}

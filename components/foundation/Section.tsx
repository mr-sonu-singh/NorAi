import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'sunken' | 'dark';
}

export function Section({
  variant = 'default',
  className,
  children,
  ...props
}: SectionProps) {
  const variantClasses = {
    default: 'bg-bg-page text-primary-800',
    sunken: 'bg-bg-sunken text-primary-800',
    dark: 'bg-bg-dark text-white',
  };

  return (
    <section className={cn('py-12 sm:py-16 lg:py-20', variantClasses[variant], className)} {...props}>
      {children}
    </section>
  );
}

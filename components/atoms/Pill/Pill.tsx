import React from 'react';
import { cn } from '@/lib/utils';
import { BadgeVariant, BadgeSize } from '../Badge/Badge.types';
import { PillProps } from './Pill.types';

const variantClasses: Record<BadgeVariant, string> = {
  neutral: 'bg-primary-100 text-primary-800 border-primary-200',
  accent: 'bg-accent-100 text-accent-700 border-accent-200',
  success: 'bg-success-100 text-success-700 border-success-200',
  warning: 'bg-warning-100 text-warning-700 border-warning-200',
  error: 'bg-error-100 text-error-700 border-error-200',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-body-xs rounded-full',
  md: 'px-3 py-1 text-body-sm rounded-full',
};

export function Pill({
  variant = 'neutral',
  size = 'md',
  className,
  children,
  ...props
}: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center font-sans font-medium border border-[var(--border-width-default)] select-none',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

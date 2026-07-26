import React from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '../Icon';
import { StatusDot } from '../StatusDot';
import { BadgeProps, BadgeVariant, BadgeSize } from './Badge.types';

const variantClasses: Record<BadgeVariant, string> = {
  neutral: 'bg-primary-100 text-primary-800 border-primary-200',
  accent: 'bg-accent-100 text-accent-700 border-accent-200',
  success: 'bg-success-100 text-success-700 border-success-200',
  warning: 'bg-warning-100 text-warning-700 border-warning-200',
  error: 'bg-error-100 text-error-700 border-error-200',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-body-xs rounded gap-1',
  md: 'px-2.5 py-1 text-body-sm rounded-md gap-1.5',
};

export function Badge({
  variant = 'neutral',
  size = 'md',
  leadingIcon,
  showStatusDot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-sans font-medium border border-[var(--border-width-default)] select-none',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {showStatusDot && <StatusDot status={variant} size={size} />}
      {leadingIcon && <Icon name={leadingIcon} size={size === 'sm' ? 'xs' : 'sm'} />}
      <span>{children}</span>
    </span>
  );
}

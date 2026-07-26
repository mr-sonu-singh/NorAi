'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { FocusRing } from '../FocusRing';
import { Icon } from '../Icon';
import { BadgeSize } from '../Badge/Badge.types';
import { ChipProps } from './Chip.types';

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'h-7 px-2.5 text-body-xs rounded-full gap-1 min-w-[44px]',
  md: 'h-9 px-3.5 text-body-sm rounded-full gap-1.5 min-w-[44px]',
};

export function Chip({
  selected = false,
  disabled = false,
  variant = 'neutral',
  size = 'md',
  leadingIcon,
  removable = false,
  className,
  children,
  onSelect,
  onClick,
  ...props
}: ChipProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onSelect?.();
    onClick?.(e);
  };

  const chipElement = (
    <button
      type="button"
      disabled={disabled}
      aria-pressed={selected}
      aria-disabled={disabled}
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center font-sans font-medium transition-[transform,opacity,color,background-color,border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-smooth)] border border-[var(--border-width-default)] select-none cursor-pointer',
        sizeClasses[size],
        selected
          ? 'bg-accent-600 border-accent-600 text-white'
          : variant === 'accent'
            ? 'bg-accent-50 border-accent-200 text-accent-700 hover:bg-accent-100'
            : 'bg-primary-100 border-primary-200 text-primary-800 hover:bg-primary-200',
        disabled &&
          'opacity-[var(--opacity-disabled)] bg-bg-sunken border-primary-200 cursor-not-allowed',
        className,
      )}
      {...props}
    >
      {leadingIcon && <Icon name={leadingIcon} size={size === 'sm' ? 'xs' : 'sm'} />}
      <span>{children}</span>
      {removable && <Icon name="X" size="xs" className="ml-0.5" />}
    </button>
  );

  return <FocusRing>{chipElement}</FocusRing>;
}

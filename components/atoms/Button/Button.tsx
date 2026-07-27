'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';
import { FocusRing } from '../FocusRing';
import { ButtonProps, ButtonVariant, ButtonSize } from './Button.types';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent-600 text-white hover:bg-accent-700 active:scale-[0.98]',
  secondary: 'bg-primary-100 text-primary-800 hover:bg-primary-200 active:scale-[0.98]',
  ghost: 'bg-transparent text-primary-800 hover:bg-primary-100 active:scale-[0.98]',
  dark: 'bg-bg-dark text-white hover:bg-primary-800 active:scale-[0.98]',
  danger: 'bg-error-600 text-white hover:bg-error-700 active:scale-[0.98]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 min-w-[44px] text-body-sm font-medium rounded-md gap-1.5',
  md: 'h-11 px-4 min-w-[44px] text-body-md font-medium rounded-md gap-2',
  lg: 'h-12 px-6 min-w-[44px] text-body-lg font-semibold rounded-md gap-2.5',
};

const iconSizeMap: Record<ButtonSize, 'sm' | 'md' | 'lg'> = {
  sm: 'sm',
  md: 'md',
  lg: 'md',
};

export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  loading = false,
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  className,
  children,
  onClick,
  'aria-label': ariaLabel,
  ...props
}: ButtonProps) {
  const isInteractive = !disabled && !loading;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isInteractive) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const buttonElement = (
    <button
      type={type}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center font-sans transition-[transform,opacity,color,background-color,border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-smooth)] select-none',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        (disabled || loading) &&
          'opacity-[var(--opacity-disabled)] pointer-events-none cursor-not-allowed transform-none',
        className,
      )}
      {...props}
    >
      {loading ? (
        <Spinner size={iconSizeMap[size]} aria-label="Loading" />
      ) : (
        <>
          {leadingIcon && <Icon name={leadingIcon} size={iconSizeMap[size]} />}
          {children && <span>{children}</span>}
          {trailingIcon && <Icon name={trailingIcon} size={iconSizeMap[size]} />}
        </>
      )}
    </button>
  );

  return <FocusRing>{buttonElement}</FocusRing>;
}

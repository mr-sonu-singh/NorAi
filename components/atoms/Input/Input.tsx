import React from 'react';
import { cn } from '@/lib/utils';
import { FocusRing } from '../FocusRing';
import { Icon } from '../Icon';
import { InputProps, InputSize } from './Input.types';

const sizeClasses: Record<InputSize, string> = {
  sm: 'h-9 px-3 text-body-sm rounded-md',
  md: 'h-11 px-4 text-body-md rounded-md',
  lg: 'h-12 px-4 text-body-lg rounded-md',
};

const iconSizeMap: Record<InputSize, 'sm' | 'md' | 'lg'> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export function Input({
  type = 'text',
  size = 'md',
  invalid = false,
  disabled = false,
  readOnly = false,
  leadingIcon,
  trailingIcon,
  className,
  id,
  name,
  'aria-describedby': ariaDescribedby,
  ...props
}: InputProps) {
  const inputElement = (
    <div className="relative flex items-center w-full">
      {leadingIcon && (
        <div className="absolute left-3 pointer-events-none text-primary-400">
          <Icon name={leadingIcon} size={iconSizeMap[size]} />
        </div>
      )}
      <input
        type={type}
        id={id}
        name={name}
        disabled={disabled}
        readOnly={readOnly}
        aria-invalid={invalid}
        aria-describedby={ariaDescribedby}
        className={cn(
          'w-full bg-bg-elevated font-sans text-primary-800 placeholder:text-primary-400 border border-[var(--border-width-default)] border-primary-200 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-smooth)]',
          sizeClasses[size],
          leadingIcon && 'pl-10',
          trailingIcon && 'pr-10',
          invalid && 'border-error-600 focus:border-error-600',
          disabled && 'opacity-[var(--opacity-disabled)] bg-bg-sunken cursor-not-allowed',
          readOnly && 'bg-bg-sunken cursor-default',
          className,
        )}
        {...props}
      />
      {trailingIcon && (
        <div className="absolute right-3 pointer-events-none text-primary-400">
          <Icon name={trailingIcon} size={iconSizeMap[size]} />
        </div>
      )}
    </div>
  );

  return <FocusRing>{inputElement}</FocusRing>;
}

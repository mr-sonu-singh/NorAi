import React from 'react';
import { cn } from '@/lib/utils';
import { FocusRing } from '../FocusRing';
import { InputSize } from '../Input/Input.types';
import { TextareaProps, TextareaResize } from './Textarea.types';

const sizeClasses: Record<InputSize, string> = {
  sm: 'p-2.5 text-body-sm rounded-md min-h-[80px]',
  md: 'p-3 text-body-md rounded-md min-h-[120px]',
  lg: 'p-4 text-body-lg rounded-md min-h-[160px]',
};

const resizeClasses: Record<TextareaResize, string> = {
  none: 'resize-none',
  vertical: 'resize-y',
  both: 'resize',
};

export function Textarea({
  size = 'md',
  invalid = false,
  disabled = false,
  readOnly = false,
  resize = 'vertical',
  rows = 4,
  className,
  id,
  name,
  'aria-describedby': ariaDescribedby,
  ...props
}: TextareaProps) {
  const textareaElement = (
    <textarea
      id={id}
      name={name}
      rows={rows}
      disabled={disabled}
      readOnly={readOnly}
      aria-invalid={invalid}
      aria-describedby={ariaDescribedby}
      className={cn(
        'w-full bg-bg-elevated font-sans text-primary-800 placeholder:text-primary-400 border border-[var(--border-width-default)] border-primary-200 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-smooth)]',
        sizeClasses[size],
        resizeClasses[resize],
        invalid && 'border-error-600 focus:border-error-600',
        disabled && 'opacity-[var(--opacity-disabled)] bg-bg-sunken cursor-not-allowed',
        readOnly && 'bg-bg-sunken cursor-default',
        className,
      )}
      {...props}
    />
  );

  return <FocusRing>{textareaElement}</FocusRing>;
}

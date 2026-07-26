import React from 'react';
import { Input } from '@/components/atoms/Input';
import { cn } from '@/lib/utils';
import { InputGroupProps } from './InputGroup.types';

export function InputGroup({
  leading,
  trailing,
  className,
  disabled,
  invalid,
  ...props
}: InputGroupProps) {
  if (!leading && !trailing) {
    return <Input className={className} disabled={disabled} invalid={invalid} {...props} />;
  }

  return (
    <div
      className={cn(
        'relative inline-flex items-center w-full',
        className,
      )}
      data-testid="input-group-molecule"
    >
      {leading && (
        <div className="absolute left-3 z-10 flex items-center pointer-events-none text-primary-400">
          {leading}
        </div>
      )}
      <Input
        disabled={disabled}
        invalid={invalid}
        className={cn(
          leading && 'pl-10',
          trailing && 'pr-10',
        )}
        {...props}
      />
      {trailing && (
        <div className="absolute right-3 z-10 flex items-center text-primary-400">
          {trailing}
        </div>
      )}
    </div>
  );
}

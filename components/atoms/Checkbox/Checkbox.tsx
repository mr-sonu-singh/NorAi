import React from 'react';
import { cn } from '@/lib/utils';
import { FocusRing } from '../FocusRing';
import { Icon } from '../Icon';
import { CheckboxProps, CheckboxSize } from './Checkbox.types';

const sizeClasses: Record<CheckboxSize, string> = {
  sm: 'w-4 h-4 rounded-sm',
  md: 'w-5 h-5 rounded',
};

const iconSizeMap: Record<CheckboxSize, 'xs' | 'sm'> = {
  sm: 'xs',
  md: 'sm',
};

export function Checkbox({
  size = 'md',
  checked,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  invalid = false,
  className,
  id,
  name,
  onChange,
  'aria-describedby': ariaDescribedby,
  'aria-label': ariaLabel,
  ...props
}: CheckboxProps) {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false);
  const isChecked = checked !== undefined ? checked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (checked === undefined) {
      setInternalChecked(e.target.checked);
    }
    onChange?.(e);
  };

  const ariaCheckedValue = indeterminate ? 'mixed' : isChecked;

  const checkboxElement = (
    <div className="relative inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        disabled={disabled}
        aria-checked={ariaCheckedValue}
        aria-invalid={invalid}
        aria-describedby={ariaDescribedby}
        aria-label={ariaLabel}
        onChange={handleChange}
        className="sr-only peer"
        {...props}
      />
      <div
        className={cn(
          'inline-flex items-center justify-center border border-[var(--border-width-default)] border-primary-300 bg-bg-elevated transition-colors duration-[var(--duration-fast)] ease-[var(--ease-smooth)] select-none cursor-pointer',
          sizeClasses[size],
          (isChecked || indeterminate) && 'bg-accent-600 border-accent-600 text-white',
          invalid && 'border-error-600',
          disabled &&
            'opacity-[var(--opacity-disabled)] bg-bg-sunken border-primary-200 cursor-not-allowed',
          className,
        )}
      >
        {indeterminate ? (
          <Icon name="Minus" size={iconSizeMap[size]} />
        ) : isChecked ? (
          <Icon name="Check" size={iconSizeMap[size]} />
        ) : null}
      </div>
    </div>
  );

  return <FocusRing>{checkboxElement}</FocusRing>;
}

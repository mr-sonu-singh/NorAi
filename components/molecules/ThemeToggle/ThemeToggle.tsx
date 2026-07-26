'use client';

import React from 'react';
import { Switch } from '@/components/atoms/Switch';
import { Icon } from '@/components/atoms/Icon';
import { Stack } from '@/components/foundation/Stack';
import { cn } from '@/lib/utils';
import { ThemeToggleProps } from './ThemeToggle.types';

export function ThemeToggle({
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  'aria-label': ariaLabel = 'Toggle theme',
  className,
  ...props
}: ThemeToggleProps) {
  return (
    <Stack
      direction="row"
      gap="2"
      align="center"
      className={cn('inline-flex', className)}
      data-testid="theme-toggle-molecule"
      {...props}
    >
      <Icon name="sun" size="sm" className="text-primary-400" aria-hidden="true" />
      <Switch
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        aria-label={ariaLabel}
        data-testid="theme-toggle-switch"
      />
      <Icon name="moon" size="sm" className="text-primary-400" aria-hidden="true" />
    </Stack>
  );
}

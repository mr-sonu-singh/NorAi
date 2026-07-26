import React from 'react';

export type CheckboxSize = 'sm' | 'md';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: CheckboxSize;
  indeterminate?: boolean;
  invalid?: boolean;
  'aria-describedby'?: string;
}

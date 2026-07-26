import React from 'react';
import { InputSize } from '../Input/Input.types';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'size' | 'onChange'
> {
  options: SelectOption[];
  size?: InputSize;
  placeholder?: string;
  invalid?: boolean;
  'aria-describedby'?: string;
  onChange?: (value: string) => void;
}

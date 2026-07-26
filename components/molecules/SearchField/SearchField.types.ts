import React from 'react';
import { InputSize } from '@/components/atoms/Input/Input.types';

export interface SearchFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'onSubmit'> {
  size?: InputSize;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  onSubmit?: (value: string) => void;
  className?: string;
}

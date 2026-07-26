import React from 'react';
import { InputSize } from '@/components/atoms/Input/Input.types';

export interface PasswordFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: InputSize;
  showToggle?: boolean;
  className?: string;
}

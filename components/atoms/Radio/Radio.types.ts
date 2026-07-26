import React from 'react';
import { CheckboxSize } from '../Checkbox/Checkbox.types';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  name: string; // Required per spec §5.8
  size?: CheckboxSize;
  invalid?: boolean;
  'aria-describedby'?: string;
}

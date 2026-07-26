import React from 'react';
import { CheckboxSize } from '../Checkbox/Checkbox.types';

export interface SwitchProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'size' | 'onChange'
> {
  size?: CheckboxSize;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  name?: string;
  id?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  onChange?: (checked: boolean) => void;
}

import React from 'react';
import { BadgeSize } from '../Badge/Badge.types';

export type ChipVariant = 'neutral' | 'accent';

export interface ChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  selected?: boolean;
  disabled?: boolean;
  variant?: ChipVariant;
  size?: BadgeSize;
  leadingIcon?: string;
  removable?: boolean;
  onSelect?: () => void;
}

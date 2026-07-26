import React from 'react';
import { BadgeVariant, BadgeSize } from '../Badge/Badge.types';

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

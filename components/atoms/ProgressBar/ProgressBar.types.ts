import React from 'react';

export type ProgressBarSize = 'sm' | 'md';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: ProgressBarSize;
  'aria-label'?: string;
}

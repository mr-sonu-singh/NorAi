import React from 'react';

export type StatusDotStatus = 'neutral' | 'accent' | 'success' | 'warning' | 'error';
export type StatusDotSize = 'sm' | 'md' | 'lg';

export interface StatusDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: StatusDotStatus;
  size?: StatusDotSize;
  pulse?: boolean;
  'aria-label'?: string;
}

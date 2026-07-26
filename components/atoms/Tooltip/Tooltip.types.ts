import React from 'react';

export type TooltipSide = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
  content: React.ReactNode;
  side?: TooltipSide;
  delay?: number;
  disabled?: boolean;
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
}

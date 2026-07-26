import React from 'react';

export type FocusRingOffset = 'none' | 'sm' | 'md';
export type FocusRingRadius = 'sm' | 'default' | 'md' | 'lg' | 'xl' | 'full';

export interface FocusRingProps {
  children: React.ReactElement<{ className?: string }>;
  inset?: boolean;
  offset?: FocusRingOffset;
  radius?: FocusRingRadius;
}

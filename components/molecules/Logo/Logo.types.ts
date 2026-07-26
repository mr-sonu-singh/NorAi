import React from 'react';

export type LogoVariant = 'full' | 'symbol' | 'wordmark';
export type LogoSize = 'S' | 'M' | 'L';

export interface LogoProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'size'> {
  variant?: LogoVariant;
  size?: LogoSize;
  href?: string;
  'aria-label'?: string;
  className?: string;
}

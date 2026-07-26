import React from 'react';
import { Logo } from '../Logo';
import { BrandLogoProps } from './BrandLogo.types';

export function BrandLogo(props: BrandLogoProps) {
  return <Logo data-testid="brand-logo-molecule" {...props} />;
}

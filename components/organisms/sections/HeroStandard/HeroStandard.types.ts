import React from 'react';
import { BreadcrumbItem } from '@/components/molecules/Breadcrumb/Breadcrumb.types';

export interface HeroCTAConfig {
  label: string;
  href: string;
  onClick?: () => void;
  external?: boolean;
}

export type HeroStandardVariant = 'textOnly' | 'withMedia';

export interface HeroStandardProps {
  headline: string;
  subhead: string;
  eyebrow?: string;
  breadcrumb?: BreadcrumbItem[];
  primaryCta?: HeroCTAConfig;
  secondaryCta?: HeroCTAConfig;
  media?: React.ReactNode;
  isMediaLoading?: boolean;
  variant?: HeroStandardVariant;
  className?: string;
}

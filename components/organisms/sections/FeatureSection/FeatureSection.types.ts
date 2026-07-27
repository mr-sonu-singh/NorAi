import React from 'react';
import { FeatureCardProps } from '@/components/molecules/FeatureCard/FeatureCard.types';

export interface FeatureSectionCTAConfig {
  label: string;
  href: string;
  external?: boolean;
  onClick?: () => void;
}

export type FeatureSectionVariant = 'textLeftMediaRight' | 'mediaLeftTextRight' | 'textOnly';

export interface FeatureSectionProps {
  heading: string;
  body: string;
  feature?: FeatureCardProps;
  media?: React.ReactNode;
  cta?: FeatureSectionCTAConfig;
  align?: 'mediaLeft' | 'mediaRight';
  variant?: FeatureSectionVariant;
  className?: string;
}

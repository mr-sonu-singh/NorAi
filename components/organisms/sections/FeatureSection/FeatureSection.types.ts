import React from 'react';

export interface FeatureSectionFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface FeatureSectionCTAConfig {
  label: string;
  href: string;
  external?: boolean;
  onClick?: () => void;
}

export interface FeatureSectionProps {
  heading: string;
  body: string;
  feature?: FeatureSectionFeature;
  media?: React.ReactNode;
  cta?: FeatureSectionCTAConfig;
  align?: 'mediaLeft' | 'mediaRight';
}

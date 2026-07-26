import React from 'react';

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: string;
  cta?: React.ReactNode;
  className?: string;
}

export type FeatureCardBodyProps = FeatureCardProps;

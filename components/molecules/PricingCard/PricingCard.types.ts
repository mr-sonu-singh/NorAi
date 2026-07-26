import React from 'react';

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  tierName: string;
  price: string;
  interval?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  cta?: React.ReactNode;
  badgeText?: string;
  className?: string;
}

export type PricingCardBodyProps = PricingCardProps;

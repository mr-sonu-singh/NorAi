export interface CTAConfig {
  label: string;
  href: string;
  external?: boolean;
  onClick?: () => void;
}

export type CTASurface = 'page' | 'dark';

export interface CTASectionProps {
  heading: string;
  body?: string;
  primaryCta: CTAConfig;
  secondaryCta?: CTAConfig;
  surface?: CTASurface;
}

export interface PricingTierCTAConfig {
  label: string;
  onClick?: () => void;
}

export interface PricingTierConfig {
  name: string;
  price: string;
  interval?: string;
  features: string[];
  highlighted?: boolean;
  cta: PricingTierCTAConfig;
}

export interface PricingSectionProps {
  heading: string;
  tiers: PricingTierConfig[];
  intro?: string;
}

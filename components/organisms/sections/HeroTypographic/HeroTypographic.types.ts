export interface HeroTypographicCTAConfig {
  label: string;
  href: string;
  onClick?: () => void;
  external?: boolean;
}

export interface HeroTypographicProps {
  headline: string;
  subhead: string;
  primaryCta: HeroTypographicCTAConfig;
  eyebrow?: string;
  secondaryCta?: HeroTypographicCTAConfig;
  className?: string;
}

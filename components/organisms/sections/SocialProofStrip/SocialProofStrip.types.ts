export interface SocialProofLogo {
  name: string;
  logoUrl?: string;
  icon?: string;
  href?: string;
}

export interface SocialProofTrustIndicator {
  label: string;
  value: string;
  status?: 'active' | 'verified' | 'neutral';
}

export type SocialProofStripVariant = 'logoCloud' | 'trustIndicators' | 'combined';

export interface SocialProofStripProps {
  eyebrow?: string;
  logos?: SocialProofLogo[];
  trustIndicators?: SocialProofTrustIndicator[];
  variant?: SocialProofStripVariant;
  className?: string;
}

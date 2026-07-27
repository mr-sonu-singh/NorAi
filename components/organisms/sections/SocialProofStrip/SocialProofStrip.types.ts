export interface SocialProofLogo {
  name: string;
  logoUrl?: string;
  href?: string;
}

export interface SocialProofTrustIndicator {
  label: string;
  value: string;
}

export interface SocialProofStripProps {
  eyebrow?: string;
  logos?: SocialProofLogo[];
  trustIndicators?: SocialProofTrustIndicator[];
}

import { SocialLinkItem } from '@/components/molecules/SocialLinks/SocialLinks.types';

export interface TeamMember {
  name: string;
  role: string;
  photoSrc?: string;
  socials?: SocialLinkItem[];
  bio?: string;
}

export interface TeamCareersLink {
  label: string;
  href: string;
}

export type TeamSectionVariant = 'FullGrid' | 'Preview';

export interface TeamSectionProps {
  heading: string;
  members: TeamMember[];
  careersLink: TeamCareersLink;
  variant?: TeamSectionVariant;
}

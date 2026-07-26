import React from 'react';
import { SocialLinkItem } from '../SocialLinks/SocialLinks.types';

export interface TeamMemberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  photoSrc?: string;
  bio?: string;
  socials?: SocialLinkItem[];
  className?: string;
}

export type TeamMemberCardBodyProps = TeamMemberCardProps;

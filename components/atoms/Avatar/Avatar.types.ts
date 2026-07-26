import React from 'react';
import { StatusDotStatus } from '../StatusDot/StatusDot.types';

export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  fallback?: string;
  status?: StatusDotStatus;
}

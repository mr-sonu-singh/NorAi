import React from 'react';

export interface NavigationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
  icon?: string;
  badge?: string;
  external?: boolean;
  disabled?: boolean;
  className?: string;
}

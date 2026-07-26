import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  badge?: string;
  external?: boolean;
  disabled?: boolean;
  children?: NavItem[];
}

export type NavigationGroupOrientation = 'horizontal' | 'vertical';

export interface NavigationGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  items: NavItem[];
  orientation?: NavigationGroupOrientation;
  collapsible?: boolean;
  className?: string;
}

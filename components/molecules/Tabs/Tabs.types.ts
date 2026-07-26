import React from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export type TabsOrientation = 'horizontal' | 'vertical';

export interface TabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'dir'> {
  tabs: TabItem[];
  defaultTab?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: TabsOrientation;
  dir?: 'ltr' | 'rtl';
  className?: string;
}

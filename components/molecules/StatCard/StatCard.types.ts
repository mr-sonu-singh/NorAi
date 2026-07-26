import React from 'react';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  icon?: string;
  emphasis?: boolean;
  className?: string;
}

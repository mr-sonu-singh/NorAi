import React from 'react';

export type MetricTrend = 'up' | 'down' | 'neutral';

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  change?: string;
  trend?: MetricTrend;
  icon?: string;
  className?: string;
}

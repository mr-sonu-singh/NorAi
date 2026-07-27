export interface StatItem {
  value: string;
  label: string;
  icon?: string;
  emphasis?: boolean;
}

export type StatisticsSectionVariant = 'twoUp' | 'threeUp' | 'fourUp';

export interface StatisticsSectionProps {
  stats: StatItem[];
  heading?: string;
  variant?: StatisticsSectionVariant;
  className?: string;
}

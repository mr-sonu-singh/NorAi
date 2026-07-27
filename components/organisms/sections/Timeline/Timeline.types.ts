export interface TimelineItem {
  title: string;
  description: string;
  date?: string;
  icon?: string;
}

export type TimelineVariant = 'Vertical' | 'Alternating';

export interface TimelineProps {
  heading?: string;
  items: TimelineItem[];
  variant?: TimelineVariant;
}

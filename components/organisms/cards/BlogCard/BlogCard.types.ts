export type BlogCardVariant = 'Default' | 'Compact';

export interface BlogCardProps {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  meta: string;
  category?: string;
  variant?: BlogCardVariant;
  pending?: boolean;
}

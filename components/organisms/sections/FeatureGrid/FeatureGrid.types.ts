import { FeatureCardProps } from '@/components/molecules/FeatureCard/FeatureCard.types';

export type FeatureGridVariant = 'twoUp' | 'threeUp';

export interface FeatureGridProps {
  heading: string;
  features: FeatureCardProps[];
  intro?: string;
  variant?: FeatureGridVariant;
  className?: string;
}

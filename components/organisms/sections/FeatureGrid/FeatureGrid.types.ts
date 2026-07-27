export interface FeatureGridItem {
  title: string;
  description: string;
  icon?: string;
}

export interface FeatureGridProps {
  heading: string;
  features: FeatureGridItem[];
  intro?: string;
}

export interface UseCaseCTAConfig {
  label: string;
  href: string;
  external?: boolean;
  onClick?: () => void;
}

export interface UseCase {
  icon?: string;
  title: string;
  description: string;
}

export interface UseCasesSectionProps {
  heading: string;
  useCases: UseCase[];
  cta?: UseCaseCTAConfig;
}

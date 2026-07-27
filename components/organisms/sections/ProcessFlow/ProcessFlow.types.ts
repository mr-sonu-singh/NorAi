export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

export type ProcessFlowVariant = 'Horizontal' | 'Vertical';

export interface ProcessFlowProps {
  heading?: string;
  steps: [ProcessStep, ProcessStep, ProcessStep];
  variant?: ProcessFlowVariant;
}

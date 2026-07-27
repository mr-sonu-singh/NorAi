import React from 'react';
import { ProcessFlow } from './ProcessFlow';
import { ProcessStep } from './ProcessFlow.types';

const meta = {
  title: 'Organisms/Sections/ProcessFlow',
  component: ProcessFlow,
};

export default meta;

const mockSteps: [ProcessStep, ProcessStep, ProcessStep] = [
  {
    icon: 'upload-cloud',
    title: 'Raw Workload Input',
    description: 'Ingest raw neural model prompts or dataset payloads via secure TLS stream.',
  },
  {
    icon: 'cpu',
    title: 'Deterministic AI Execution',
    description: 'Execute payload on verified hardware nodes and generate ZK-STARK proofs.',
  },
  {
    icon: 'check-circle',
    title: 'Verified Proof Output',
    description: 'Receive cryptographically audited response with cryptographic guarantees.',
  },
];

export const Horizontal = () => (
  <ProcessFlow
    heading="How NorAI Operates"
    steps={mockSteps}
    variant="Horizontal"
  />
);

export const Vertical = () => (
  <ProcessFlow
    heading="3-Step Verification Model"
    steps={mockSteps}
    variant="Vertical"
  />
);

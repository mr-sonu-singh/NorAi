import React from 'react';
import { Timeline } from './Timeline';

const meta = {
  title: 'Organisms/Sections/Timeline',
  component: Timeline,
};

export default meta;

const mockItems = [
  {
    title: 'Zero-Knowledge Research Paper',
    description: 'Published core mathematical proofs for deterministic inference verification.',
    date: 'Q1 2024',
    icon: 'file-text',
  },
  {
    title: 'Testnet Alpha Launch',
    description: 'Deployed first verifiable compute nodes across 5 enterprise cloud partners.',
    date: 'Q3 2024',
    icon: 'zap',
  },
  {
    title: 'Mainnet V1 Release',
    description: 'Guaranteed sub-10ms latency SLA for enterprise production AI workloads.',
    date: 'Q1 2025',
    icon: 'check',
  },
];

export const Vertical = () => (
  <Timeline
    heading="Development Milestones"
    items={mockItems}
    variant="Vertical"
  />
);

export const Alternating = () => (
  <Timeline
    heading="Company History"
    items={mockItems}
    variant="Alternating"
  />
);

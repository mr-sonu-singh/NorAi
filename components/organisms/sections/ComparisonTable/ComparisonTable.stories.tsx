import React from 'react';
import { ComparisonTable } from './ComparisonTable';

const meta = {
  title: 'Organisms/Sections/ComparisonTable',
  component: ComparisonTable,
};

export default meta;

const mockColumns = [
  { id: 'starter', label: 'Starter' },
  { id: 'pro', label: 'Pro', highlighted: true },
  { id: 'enterprise', label: 'Enterprise' },
];

const mockRows = [
  {
    id: 'throughput',
    label: 'Inference Throughput',
    values: { starter: '100 req/s', pro: '1,000 req/s', enterprise: 'Unlimited' },
  },
  {
    id: 'zkp',
    label: 'ZKP Cryptographic Audit',
    values: { starter: false, pro: true, enterprise: true },
  },
  {
    id: 'sla',
    label: 'Guaranteed Sub-10ms SLA',
    values: { starter: false, pro: false, enterprise: true },
  },
];

export const FeatureComparison = () => (
  <ComparisonTable
    heading="Compare Capabilities"
    columns={mockColumns}
    rows={mockRows}
    variant="FeatureComparison"
  />
);

export const PlanComparison = () => (
  <ComparisonTable
    heading="Compare Plans"
    columns={mockColumns}
    rows={mockRows}
    variant="PlanComparison"
  />
);

export const Empty = () => (
  <ComparisonTable
    heading="Compare Plans"
    columns={mockColumns}
    rows={[]}
  />
);

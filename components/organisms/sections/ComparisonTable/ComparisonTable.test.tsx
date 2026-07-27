/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { ComparisonTable } from './ComparisonTable';

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
];

describe('ComparisonTable Organism', () => {
  it('defines ComparisonTable component correctly', () => {
    expect(ComparisonTable).toBeDefined();
  });

  it('renders table headers, sticky row headers, and cell values', () => {
    const { getByRole, getByText } = render(
      <ComparisonTable heading="Feature Matrix" columns={mockColumns} rows={mockRows} />,
    );

    expect(getByRole('heading', { level: 2 }).textContent).toBe('Feature Matrix');
    expect(getByText('Starter')).toBeTruthy();
    expect(getByText('Pro')).toBeTruthy();
    expect(getByText('Enterprise')).toBeTruthy();

    expect(getByText('Inference Throughput')).toBeTruthy();
    expect(getByText('100 req/s')).toBeTruthy();
    expect(getByText('Unlimited')).toBeTruthy();
    expect(getByText('Included')).toBeTruthy();
    expect(getByText('Not included')).toBeTruthy();
  });

  it('renders EmptyState when rows array is empty', () => {
    const { getByText } = render(
      <ComparisonTable heading="Empty Comparison" columns={mockColumns} rows={[]} />,
    );

    expect(getByText('No Comparison Features')).toBeTruthy();
  });

  it('passes variant correctly', () => {
    const { getByTestId } = render(
      <ComparisonTable
        heading="Plan Matrix"
        columns={mockColumns}
        rows={mockRows}
        variant="PlanComparison"
      />,
    );

    const section = getByTestId('comparison-table-organism');
    expect(section.getAttribute('data-variant')).toBe('PlanComparison');
  });
});

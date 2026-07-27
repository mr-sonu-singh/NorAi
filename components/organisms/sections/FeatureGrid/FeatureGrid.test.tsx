/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { FeatureGrid } from './FeatureGrid';

const mockFeatures = [
  { title: 'Verifiable Inference', description: 'Cryptographic proof for every response.', icon: 'shield' },
  { title: 'Scalable Compute', description: 'Dynamic autoscaling across multi-region clusters.', icon: 'cpu' },
  { title: 'Sub-10ms Latency', description: 'Optimized memory layers for low latency.', icon: 'zap' },
  { title: 'Enterprise SLA', description: '99.99% uptime guarantee with 24/7 support.', icon: 'check-circle' },
];

describe('FeatureGrid Organism', () => {
  it('defines FeatureGrid component correctly', () => {
    expect(FeatureGrid).toBeDefined();
  });

  it('renders heading, intro, and feature cards', () => {
    const { getByRole, getByText } = render(
      <FeatureGrid
        heading="Platform Capabilities"
        intro="Everything you need to deploy enterprise-grade AI."
        features={mockFeatures}
      />,
    );

    const h2 = getByRole('heading', { level: 2 });
    expect(h2).toBeTruthy();
    expect(h2.textContent).toBe('Platform Capabilities');
    expect(getByText('Everything you need to deploy enterprise-grade AI.')).toBeTruthy();

    expect(getByText('Verifiable Inference')).toBeTruthy();
    expect(getByText('Scalable Compute')).toBeTruthy();
    expect(getByText('Sub-10ms Latency')).toBeTruthy();
    expect(getByText('Enterprise SLA')).toBeTruthy();
  });

  it('renders twoUp variant when features count <= 4', () => {
    const { getByTestId } = render(
      <FeatureGrid heading="Four Features" features={mockFeatures} />,
    );
    const container = getByTestId('feature-grid-organism');
    expect(container.getAttribute('data-variant')).toBe('twoUp');
  });

  it('renders threeUp variant when features count > 4', () => {
    const sixFeatures = [
      ...mockFeatures,
      { title: 'Zero-Knowledge Proofs', description: 'ZK Engine built-in.', icon: 'lock' },
      { title: 'Audit Logs', description: 'Immutable transaction records.', icon: 'file-text' },
    ];
    const { getByTestId, getByText } = render(
      <FeatureGrid heading="Six Features" features={sixFeatures} />,
    );
    const container = getByTestId('feature-grid-organism');
    expect(container.getAttribute('data-variant')).toBe('threeUp');
    expect(getByText('Zero-Knowledge Proofs')).toBeTruthy();
  });
});

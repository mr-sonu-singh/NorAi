/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { UseCasesSection } from './UseCasesSection';

const mockUseCases = [
  { title: 'Financial Intelligence', description: 'Cryptographic fraud detection.', icon: 'shield' },
  { title: 'Healthcare AI', description: 'Privacy-focused diagnostic models.', icon: 'cpu' },
  { title: 'Autonomous Logistics', description: 'Real-time telemetry and control.', icon: 'zap' },
];

describe('UseCasesSection Organism', () => {
  it('defines UseCasesSection component correctly', () => {
    expect(UseCasesSection).toBeDefined();
  });

  it('renders heading and use cases', () => {
    const { getByRole, getByText } = render(
      <UseCasesSection heading="Built for Critical Industries" useCases={mockUseCases} />,
    );

    const h2 = getByRole('heading', { level: 2 });
    expect(h2).toBeTruthy();
    expect(h2.textContent).toBe('Built for Critical Industries');

    expect(getByText('Financial Intelligence')).toBeTruthy();
    expect(getByText('Healthcare AI')).toBeTruthy();
    expect(getByText('Autonomous Logistics')).toBeTruthy();
  });

  it('renders EmptyState when useCases array is empty', () => {
    const { getByText } = render(
      <UseCasesSection heading="Empty Section" useCases={[]} />,
    );
    expect(getByText('No Use Cases Available')).toBeTruthy();
  });

  it('renders CTA when provided', () => {
    const { getByText } = render(
      <UseCasesSection
        heading="With CTA"
        useCases={mockUseCases}
        cta={{ label: 'Explore All Solutions', href: '/solutions' }}
      />,
    );
    expect(getByText('Explore All Solutions')).toBeTruthy();
  });
});

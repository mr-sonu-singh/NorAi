/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { PricingSection } from './PricingSection';

const mockTiers = [
  {
    name: 'Developer',
    price: '$49',
    interval: '/mo',
    features: ['10k Inferences/mo', 'Community Support', '99.9% SLA'],
    cta: { label: 'Start Free Trial' },
  },
  {
    name: 'Enterprise',
    price: 'Contact Sales',
    features: ['Unlimited Inferences', 'Dedicated Support', '99.99% SLA', 'ZK Proofs'],
    highlighted: true,
    cta: { label: 'Contact Enterprise Sales' },
  },
];

describe('PricingSection Organism', () => {
  it('defines PricingSection component correctly', () => {
    expect(PricingSection).toBeDefined();
  });

  it('renders heading, intro, and pricing tiers', () => {
    const { getByRole, getByText } = render(
      <PricingSection
        heading="Flexible Enterprise Pricing"
        intro="Predictable costs scaled for growing AI workloads."
        tiers={mockTiers}
      />,
    );

    const h2 = getByRole('heading', { level: 2 });
    expect(h2).toBeTruthy();
    expect(h2.textContent).toBe('Flexible Enterprise Pricing');
    expect(getByText('Predictable costs scaled for growing AI workloads.')).toBeTruthy();

    expect(getByText('Developer')).toBeTruthy();
    expect(getByText('$49')).toBeTruthy();
    expect(getByText('Enterprise')).toBeTruthy();
    expect(getByText('Contact Sales')).toBeTruthy();
  });

  it('renders tiers properly', () => {
    const { getByTestId } = render(
      <PricingSection heading="Two Tiers" tiers={mockTiers} />,
    );
    const container = getByTestId('pricing-section-organism');
    expect(container).toBeTruthy();
  });
});

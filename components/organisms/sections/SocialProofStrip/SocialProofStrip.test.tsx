/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { SocialProofStrip } from './SocialProofStrip';

const mockLogos = [
  { name: 'Acme Corp', logoUrl: '/logos/acme.svg' },
  { name: 'Globex', href: 'https://globex.com' },
];

const mockTrustIndicators = [
  { label: 'Uptime', value: '99.99%' },
  { label: 'SOC2', value: 'Certified' },
];

describe('SocialProofStrip Organism', () => {
  it('defines SocialProofStrip component correctly', () => {
    expect(SocialProofStrip).toBeDefined();
  });

  it('renders eyebrow and logos', () => {
    const { getByText } = render(
      <SocialProofStrip eyebrow="Trusted by industry leaders" logos={mockLogos} />,
    );

    expect(getByText('TRUSTED BY INDUSTRY LEADERS')).toBeTruthy();
    expect(getByText('Globex')).toBeTruthy();
  });

  it('renders trust indicators variant', () => {
    const { getByText, getByTestId } = render(
      <SocialProofStrip trustIndicators={mockTrustIndicators} />,
    );

    const container = getByTestId('social-proof-strip-organism');
    expect(container.getAttribute('data-variant')).toBe('trustIndicators');
    expect(getByText('Uptime:')).toBeTruthy();
    expect(getByText('99.99%')).toBeTruthy();
  });
});

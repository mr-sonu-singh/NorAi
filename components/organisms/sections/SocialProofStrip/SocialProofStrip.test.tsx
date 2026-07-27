/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { SocialProofStrip } from './SocialProofStrip';

const mockLogos = [
  { name: 'Acme Corp', icon: 'shield' },
  { name: 'TechScale', icon: 'check-circle' },
  { name: 'GlobalNet', icon: 'zap' },
];

const mockTrustIndicators = [
  { label: 'SOC2 Type II', value: 'Certified', status: 'verified' },
  { label: 'Uptime', value: '99.99%', status: 'active' },
];

describe('SocialProofStrip Organism', () => {
  it('defines SocialProofStrip component correctly', () => {
    expect(SocialProofStrip).toBeDefined();
  });

  it('renders logo cloud correctly', () => {
    const { getByText } = render(<SocialProofStrip logos={mockLogos} />);
    expect(getByText('Acme Corp')).toBeTruthy();
    expect(getByText('TechScale')).toBeTruthy();
    expect(getByText('GlobalNet')).toBeTruthy();
  });

  it('renders eyebrow text when provided', () => {
    const { getByText } = render(
      <SocialProofStrip eyebrow="TRUSTED BY INDUSTRY LEADERS" logos={mockLogos} />,
    );
    expect(getByText('TRUSTED BY INDUSTRY LEADERS')).toBeTruthy();
  });

  it('renders trust indicators correctly', () => {
    const { getByText } = render(
      <SocialProofStrip trustIndicators={mockTrustIndicators} />,
    );
    expect(getByText('SOC2 Type II:')).toBeTruthy();
    expect(getByText('Certified')).toBeTruthy();
    expect(getByText('Uptime:')).toBeTruthy();
    expect(getByText('99.99%')).toBeTruthy();
  });

  it('renders combined variant when both logos and trust indicators are provided', () => {
    const { getByTestId } = render(
      <SocialProofStrip logos={mockLogos} trustIndicators={mockTrustIndicators} />,
    );
    const container = getByTestId('social-proof-strip-organism');
    expect(container.getAttribute('data-variant')).toBe('combined');
  });
});

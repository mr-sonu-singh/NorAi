/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { FeatureSection } from './FeatureSection';

describe('FeatureSection Organism', () => {
  it('defines FeatureSection component correctly', () => {
    expect(FeatureSection).toBeDefined();
  });

  it('renders heading and body copy', () => {
    const { getByRole, getByText } = render(
      <FeatureSection
        heading="Real-Time Model Auditability"
        body="Track every inference request with cryptographic verification logs."
      />,
    );

    const h2 = getByRole('heading', { level: 2 });
    expect(h2).toBeTruthy();
    expect(h2.textContent).toBe('Real-Time Model Auditability');
    expect(
      getByText('Track every inference request with cryptographic verification logs.'),
    ).toBeTruthy();
  });

  it('renders CTA button when provided', () => {
    const { getByText } = render(
      <FeatureSection
        heading="Feature Heading"
        body="Feature Body"
        cta={{ label: 'Explore Feature', href: '/feature' }}
      />,
    );
    expect(getByText('Explore Feature')).toBeTruthy();
  });

  it('renders textOnly variant when no media or feature card is provided', () => {
    const { getByTestId } = render(
      <FeatureSection heading="Text Only" body="Body content" />,
    );
    const container = getByTestId('feature-section-organism');
    expect(container.getAttribute('data-variant')).toBe('textOnly');
  });

  it('renders FeatureCard molecule when feature prop is provided', () => {
    const { getByTestId, getByText } = render(
      <FeatureSection
        heading="Feature with Card"
        body="Body content"
        feature={{ title: 'Card Title', description: 'Card Description', icon: 'shield' }}
      />,
    );
    const container = getByTestId('feature-section-organism');
    expect(container.getAttribute('data-variant')).toBe('textLeftMediaRight');
    expect(getByText('Card Title')).toBeTruthy();
    expect(getByText('Card Description')).toBeTruthy();
  });

  it('renders mediaLeftTextRight variant when align="mediaLeft"', () => {
    const { getByTestId } = render(
      <FeatureSection
        heading="Left Aligned Media"
        body="Body content"
        align="mediaLeft"
        media={<div data-testid="media-slot">Media</div>}
      />,
    );
    const container = getByTestId('feature-section-organism');
    expect(container.getAttribute('data-variant')).toBe('mediaLeftTextRight');
    expect(getByTestId('media-slot')).toBeTruthy();
  });
});

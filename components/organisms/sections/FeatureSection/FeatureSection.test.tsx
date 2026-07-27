/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { FeatureSection } from './FeatureSection';

describe('FeatureSection Organism', () => {
  it('defines FeatureSection component correctly', () => {
    expect(FeatureSection).toBeDefined();
  });

  it('renders text content, heading, and body', () => {
    const { getByRole, getByText } = render(
      <FeatureSection
        heading="Real-Time Verifiable Inference"
        body="Execute model inferences with sub-10ms latency."
      />,
    );

    const h2 = getByRole('heading', { level: 2 });
    expect(h2).toBeTruthy();
    expect(h2.textContent).toBe('Real-Time Verifiable Inference');
    expect(getByText('Execute model inferences with sub-10ms latency.')).toBeTruthy();
  });

  it('renders textOnly variant when media or feature are omitted', () => {
    const { getByTestId } = render(
      <FeatureSection
        heading="Text Only Title"
        body="Text only body copy."
      />,
    );
    const container = getByTestId('feature-section-organism');
    expect(container.getAttribute('data-variant')).toBe('textOnly');
  });

  it('renders mediaLeft alignment correctly', () => {
    const { getByTestId } = render(
      <FeatureSection
        heading="Media Left Title"
        body="Media left description."
        media={<div data-testid="custom-media">Media</div>}
        align="mediaLeft"
      />,
    );
    const container = getByTestId('feature-section-organism');
    expect(container.getAttribute('data-variant')).toBe('mediaLeftTextRight');
  });
});

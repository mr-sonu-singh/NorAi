/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { CTASection } from './CTASection';

describe('CTASection Organism', () => {
  it('defines CTASection component correctly', () => {
    expect(CTASection).toBeDefined();
  });

  it('renders heading, body, and primary CTA on page surface', () => {
    const { getByRole, getByText, getByTestId } = render(
      <CTASection
        heading="Ready to Deploy?"
        body="Start building with cryptographic privacy today."
        primaryCta={{ label: 'Get Started', href: '/signup' }}
      />,
    );

    const h2 = getByRole('heading', { level: 2 });
    expect(h2).toBeTruthy();
    expect(h2.textContent).toBe('Ready to Deploy?');
    expect(getByText('Start building with cryptographic privacy today.')).toBeTruthy();
    expect(getByText('Get Started')).toBeTruthy();

    const section = getByTestId('cta-section-organism');
    expect(section.getAttribute('data-surface')).toBe('page');
  });

  it('renders secondary CTA when provided and supports dark surface', () => {
    const { getByText, getByTestId } = render(
      <CTASection
        heading="Transform Your Infrastructure"
        primaryCta={{ label: 'Schedule Demo', href: '/demo' }}
        secondaryCta={{ label: 'Read Documentation', href: '/docs' }}
        surface="dark"
      />,
    );

    expect(getByText('Schedule Demo')).toBeTruthy();
    expect(getByText('Read Documentation')).toBeTruthy();

    const section = getByTestId('cta-section-organism');
    expect(section.getAttribute('data-surface')).toBe('dark');
  });
});

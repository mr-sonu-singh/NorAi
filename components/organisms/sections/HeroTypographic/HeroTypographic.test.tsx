/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { HeroTypographic } from './HeroTypographic';

// Mock next/navigation for usePathname
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('HeroTypographic Organism', () => {
  it('defines HeroTypographic component correctly', () => {
    expect(HeroTypographic).toBeDefined();
  });

  it('renders single H1 headline, subhead, and primary CTA', () => {
    const { getByRole, getByText } = render(
      <HeroTypographic
        headline="Architecting the Future of AI"
        subhead="Verifiable intelligence for mission-critical enterprise systems."
        primaryCta={{ label: 'Explore Platform', href: '/products' }}
      />,
    );

    const h1 = getByRole('heading', { level: 1 });
    expect(h1).toBeTruthy();
    expect(h1.textContent).toBe('Architecting the Future of AI');
    expect(getByText('Verifiable intelligence for mission-critical enterprise systems.')).toBeTruthy();
    expect(getByText('Explore Platform')).toBeTruthy();
  });

  it('renders eyebrow badge when provided', () => {
    const { getByText } = render(
      <HeroTypographic
        headline="Homepage Statement"
        subhead="Subhead text"
        primaryCta={{ label: 'Action', href: '/action' }}
        eyebrow="Announcing NorAI 2.0"
      />,
    );
    expect(getByText('Announcing NorAI 2.0')).toBeTruthy();
  });

  it('renders secondary CTA when provided', () => {
    const { getByText } = render(
      <HeroTypographic
        headline="Dual CTA Hero"
        subhead="Dual CTA subhead"
        primaryCta={{ label: 'Primary Action', href: '/primary' }}
        secondaryCta={{ label: 'Read Whitepaper', href: '/whitepaper' }}
      />,
    );
    expect(getByText('Primary Action')).toBeTruthy();
    expect(getByText('Read Whitepaper')).toBeTruthy();
  });

  it('renders container with correct data-testid', () => {
    const { getByTestId } = render(
      <HeroTypographic
        headline="Hero Test"
        subhead="Hero Test Subhead"
        primaryCta={{ label: 'Test', href: '/test' }}
      />,
    );
    expect(getByTestId('hero-typographic-organism')).toBeTruthy();
  });
});

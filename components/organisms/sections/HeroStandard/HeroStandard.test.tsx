/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { HeroStandard } from './HeroStandard';

// Mock next/navigation for usePathname
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('HeroStandard Organism', () => {
  it('defines HeroStandard component correctly', () => {
    expect(HeroStandard).toBeDefined();
  });

  it('renders single H1 headline and subhead', () => {
    const { getByRole, getByText } = render(
      <HeroStandard headline="Enterprise AI Platform" subhead="Accelerate your workflow with verifiable AI." />,
    );

    const h1 = getByRole('heading', { level: 1 });
    expect(h1).toBeTruthy();
    expect(h1.textContent).toBe('Enterprise AI Platform');
    expect(getByText('Accelerate your workflow with verifiable AI.')).toBeTruthy();
  });

  it('renders eyebrow badge when provided', () => {
    const { getByText } = render(
      <HeroStandard
        headline="Product Overview"
        subhead="Subhead text"
        eyebrow="New Release v2.0"
      />,
    );
    expect(getByText('New Release v2.0')).toBeTruthy();
  });

  it('renders breadcrumb molecule when provided', () => {
    const breadcrumb = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
    ];
    const { getByRole, getByText } = render(
      <HeroStandard
        headline="Products Hub"
        subhead="Explore our platform"
        breadcrumb={breadcrumb}
      />,
    );
    expect(getByRole('navigation', { name: /breadcrumb/i })).toBeTruthy();
    expect(getByText('Home')).toBeTruthy();
    expect(getByText('Products')).toBeTruthy();
  });

  it('renders primary and secondary CTA buttons', () => {
    const { getByText } = render(
      <HeroStandard
        headline="Get Started Today"
        subhead="Try our vision model"
        primaryCta={{ label: 'Start Free Trial', href: '/signup' }}
        secondaryCta={{ label: 'Book Demo', href: '/demo' }}
      />,
    );

    expect(getByText('Start Free Trial')).toBeTruthy();
    expect(getByText('Book Demo')).toBeTruthy();
  });

  it('renders textOnly variant by default when no media is provided', () => {
    const { getByTestId } = render(
      <HeroStandard headline="Text Only Hero" subhead="No media provided" />,
    );
    const container = getByTestId('hero-standard-organism');
    expect(container.getAttribute('data-variant')).toBe('textOnly');
  });

  it('renders withMedia variant and media content when media slot is provided', () => {
    const { getByTestId, getByText } = render(
      <HeroStandard
        headline="With Media Hero"
        subhead="Media slot provided"
        media={<div data-testid="custom-media">Media Screenshot</div>}
      />,
    );
    const container = getByTestId('hero-standard-organism');
    expect(container.getAttribute('data-variant')).toBe('withMedia');
    expect(getByTestId('hero-media-content')).toBeTruthy();
    expect(getByText('Media Screenshot')).toBeTruthy();
  });

  it('renders LoadingState in media slot when isMediaLoading is true', () => {
    const { getByTestId } = render(
      <HeroStandard
        headline="Loading Media Hero"
        subhead="Media pending"
        isMediaLoading
      />,
    );
    const container = getByTestId('hero-standard-organism');
    expect(container.getAttribute('data-variant')).toBe('withMedia');
    expect(getByTestId('hero-media-loading')).toBeTruthy();
  });
});

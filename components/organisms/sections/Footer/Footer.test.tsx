/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './Footer';

// Mock next/navigation for usePathname
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Footer Organism', () => {
  it('defines Footer component correctly', () => {
    expect(Footer).toBeDefined();
  });

  it('renders footer organism container with landmark role', () => {
    const { getByTestId, getByRole } = render(<Footer />);
    expect(getByTestId('footer-organism')).toBeTruthy();
    expect(getByRole('contentinfo')).toBeTruthy();
  });

  it('renders Logo molecule in brand section', () => {
    const { getAllByRole } = render(<Footer />);
    const logoLinks = getAllByRole('link', { name: /norai/i });
    expect(logoLinks.length > 0).toBeTruthy();
  });

  it('renders navigation columns and titles', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Products')).toBeTruthy();
    expect(getByText('Company')).toBeTruthy();
    expect(getByText('Resources')).toBeTruthy();
    expect(getByText('Legal')).toBeTruthy();
  });

  it('renders mandatory Contact link', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Contact')).toBeTruthy();
  });

  it('renders SocialLinks molecule', () => {
    const { getByRole } = render(<Footer />);
    // SocialLinks uses navigation landmark or aria-label
    expect(getByRole('navigation', { name: /social links/i })).toBeTruthy();
  });

  it('renders legal text line', () => {
    const { getByText } = render(<Footer legalText="© 2026 NorAI Test Legal Line" />);
    expect(getByText('© 2026 NorAI Test Legal Line')).toBeTruthy();
  });
});

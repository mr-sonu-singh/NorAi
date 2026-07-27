/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Header } from './Header';

// Mock next/navigation for usePathname
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Header Organism', () => {
  it('defines Header component correctly', () => {
    expect(Header).toBeDefined();
  });

  it('renders Logo molecule', () => {
    const { getAllByRole } = render(<Header />);
    // There might be multiple links containing 'norai' if the mobile menu renders duplicates,
    // so we use getAllByRole and check the first one.
    const logoLinks = getAllByRole('link', { name: /norai/i });
    expect(logoLinks.length > 0).toBeTruthy();
  });

  it('renders NavigationGroup items', () => {
    const { getAllByText } = render(<Header />);
    // DEFAULT_HEADER_NAV_ITEMS includes 'Products', 'About', 'Blog', 'Team'
    expect(getAllByText('Products').length > 0).toBeTruthy();
    expect(getAllByText('About').length > 0).toBeTruthy();
    expect(getAllByText('Blog').length > 0).toBeTruthy();
    expect(getAllByText('Team').length > 0).toBeTruthy();
  });

  it('renders primary CTA', () => {
    const { getAllByText } = render(<Header />);
    // DEFAULT_HEADER_PRIMARY_CTA includes 'Get Started'
    const ctas = getAllByText('Get Started');
    expect(ctas.length > 0).toBeTruthy();
  });

  it('renders secondary CTA when provided', () => {
    const { getAllByText } = render(
      <Header secondaryCta={{ label: 'Learn More', href: '/about' }} />
    );
    const secondaryCtas = getAllByText('Learn More');
    expect(secondaryCtas.length > 0).toBeTruthy();
  });

  it('renders header organism container', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header-organism')).toBeTruthy();
  });

  it('renders mobile menu toggle button', () => {
    const { getByTestId } = render(<Header />);
    const toggle = getByTestId('mobile-menu-toggle');
    expect(toggle).toBeTruthy();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });

  it('opens mobile menu on toggle button click', () => {
    const { getByTestId } = render(<Header />);
    const toggle = getByTestId('mobile-menu-toggle');
    fireEvent.click(toggle);

    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(getByTestId('mobile-menu-panel')).toBeTruthy();
  });

  it('closes mobile menu on Esc key press', () => {
    const { getByTestId, queryByTestId } = render(<Header />);
    const toggle = getByTestId('mobile-menu-toggle');
    fireEvent.click(toggle);

    expect(getByTestId('mobile-menu-panel')).toBeTruthy();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(queryByTestId('mobile-menu-panel')).toBeFalsy();
  });

  it('applies sticky data attribute when sticky prop is true', () => {
    const { getByTestId } = render(<Header sticky />);
    const header = getByTestId('header-organism');
    expect(header.getAttribute('data-sticky')).toBe('true');
  });
});

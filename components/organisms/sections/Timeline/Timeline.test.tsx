/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { Timeline } from './Timeline';

const mockItems = [
  {
    title: 'Zero-Knowledge Research Paper',
    description: 'Published core mathematical proofs for deterministic inference verification.',
    date: 'Q1 2024',
    icon: 'file-text',
  },
  {
    title: 'Testnet Alpha Launch',
    description: 'Deployed first verifiable compute nodes across 5 enterprise cloud partners.',
    date: 'Q3 2024',
    icon: 'zap',
  },
];

describe('Timeline Organism', () => {
  it('defines Timeline component correctly', () => {
    expect(Timeline).toBeDefined();
  });

  it('renders heading, ordered items, dates, and descriptions', () => {
    const { getByRole, getByText } = render(
      <Timeline heading="Company Roadmap" items={mockItems} />,
    );

    expect(getByRole('heading', { level: 2 }).textContent).toBe('Company Roadmap');
    expect(getByText('Zero-Knowledge Research Paper')).toBeTruthy();
    expect(getByText('Q1 2024')).toBeTruthy();
    expect(getByText('Testnet Alpha Launch')).toBeTruthy();
    expect(getByText('Q3 2024')).toBeTruthy();
  });

  it('preserves ordered list semantics and aria-hidden markers for keyboard accessibility', () => {
    const { container, getAllByRole } = render(
      <Timeline heading="Roadmap" items={mockItems} />,
    );

    const list = container.querySelector('ol');
    expect(list).toBeTruthy();

    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(2);

    const decorativeMarkers = container.querySelectorAll('[aria-hidden="true"]');
    expect(decorativeMarkers.length).toBeGreaterThan(0);
  });

  it('verifies responsive layout assumptions for Vertical vs Alternating variants', () => {
    const { getByTestId, rerender, container } = render(
      <Timeline heading="Timeline" items={mockItems} variant="Vertical" />,
    );

    let section = getByTestId('timeline-organism');
    expect(section.getAttribute('data-variant')).toBe('Vertical');

    let rail = container.querySelector('.absolute.top-0');
    expect(rail.className).toContain('left-4');
    expect(rail.className).not.toContain('md:left-1/2');

    rerender(<Timeline heading="Timeline" items={mockItems} variant="Alternating" />);
    section = getByTestId('timeline-organism');
    expect(section.getAttribute('data-variant')).toBe('Alternating');

    rail = container.querySelector('.absolute.top-0');
    expect(rail.className).toContain('md:left-1/2');
  });
});

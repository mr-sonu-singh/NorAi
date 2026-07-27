/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { FAQSection } from './FAQSection';

const mockItems = [
  {
    question: 'How does cryptographic verification work?',
    answer: 'Every inference produces a zero-knowledge proof logged on-chain.',
  },
  {
    question: 'What is the standard response SLA?',
    answer: 'Sub-10ms response times guaranteed across all production tiers.',
  },
];

describe('FAQSection Organism', () => {
  it('defines FAQSection component correctly', () => {
    expect(FAQSection).toBeDefined();
  });

  it('renders heading and FAQ accordion items', () => {
    const { getByRole, getByText } = render(
      <FAQSection heading="Frequently Asked Questions" items={mockItems} />,
    );

    const h2 = getByRole('heading', { level: 2 });
    expect(h2).toBeTruthy();
    expect(h2.textContent).toBe('Frequently Asked Questions');

    expect(getByText('How does cryptographic verification work?')).toBeTruthy();
    expect(getByText('What is the standard response SLA?')).toBeTruthy();
  });

  it('renders EmptyState when items array is empty', () => {
    const { getByText } = render(
      <FAQSection heading="Empty FAQ" items={[]} />,
    );
    expect(getByText('No FAQs Available')).toBeTruthy();
  });

  it('passes expandMode correctly', () => {
    const { getByTestId } = render(
      <FAQSection heading="Multi Expand FAQ" items={mockItems} expandMode="multiple" />,
    );
    const container = getByTestId('faq-section-organism');
    expect(container.getAttribute('data-expand-mode')).toBe('multiple');
  });
});

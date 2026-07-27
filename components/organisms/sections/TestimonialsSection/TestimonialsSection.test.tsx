/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { TestimonialsSection } from './TestimonialsSection';

const mockTestimonials = [
  {
    quote: 'NorAI transformed our auditing pipeline.',
    authorName: 'Sarah Jenkins',
    authorRole: 'VP of Engineering',
  },
  {
    quote: 'Sub-10ms response times with verifiable compliance.',
    authorName: 'David Chen',
    authorRole: 'Chief Architect',
  },
];

describe('TestimonialsSection Organism', () => {
  it('defines TestimonialsSection component correctly', () => {
    expect(TestimonialsSection).toBeDefined();
  });

  it('renders heading and testimonial cards', () => {
    const { getByRole, getByText } = render(
      <TestimonialsSection heading="What Leaders Say" testimonials={mockTestimonials} />,
    );

    const h2 = getByRole('heading', { level: 2 });
    expect(h2).toBeTruthy();
    expect(h2.textContent).toBe('What Leaders Say');

    expect(getByText('Sarah Jenkins')).toBeTruthy();
    expect(getByText('David Chen')).toBeTruthy();
  });

  it('renders EmptyState when testimonials array is empty', () => {
    const { getByText } = render(
      <TestimonialsSection heading="Empty Testimonials" testimonials={[]} />,
    );
    expect(getByText('No Testimonials Available')).toBeTruthy();
  });

  it('renders single variant when single testimonial is provided', () => {
    const { getByTestId, getByText } = render(
      <TestimonialsSection
        heading="Single Highlight"
        testimonials={[mockTestimonials[0]]}
      />,
    );
    const container = getByTestId('testimonials-section-organism');
    expect(container.getAttribute('data-variant')).toBe('single');
    expect(getByText('Sarah Jenkins')).toBeTruthy();
  });
});

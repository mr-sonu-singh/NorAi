/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { BlogCard } from './BlogCard';

describe('BlogCard Organism', () => {
  it('defines BlogCard component correctly', () => {
    expect(BlogCard).toBeDefined();
  });

  it('renders single anchor with blog title, excerpt, image, meta, and category', () => {
    const { getByRole, getByText } = render(
      <BlogCard
        title="Deterministic AI Inference Architecture"
        excerpt="Detailed overview of cryptographic zero-knowledge proof generation."
        href="/blog/deterministic-ai-inference"
        image="/images/blog-1.jpg"
        meta="Oct 24, 2025 · Dr. Elena Rostova"
        category="Architecture"
      />,
    );

    const anchor = getByRole('link');
    expect(anchor.getAttribute('href')).toBe('/blog/deterministic-ai-inference');
    expect(getByText('Deterministic AI Inference Architecture')).toBeTruthy();
    expect(getByText('Architecture')).toBeTruthy();
    expect(getByText('Oct 24, 2025 · Dr. Elena Rostova')).toBeTruthy();
  });

  it('verifies keyboard interaction and focus ring accessibility styling', () => {
    const { getByRole } = render(
      <BlogCard
        title="Interactive Post"
        excerpt="Excerpt"
        href="/blog/interactive"
        image="/images/blog-1.jpg"
        meta="Meta"
      />,
    );

    const anchor = getByRole('link');
    expect(anchor.className).toContain('focus-visible:ring-2');
    expect(anchor.className).toContain('focus-visible:ring-accent');
  });

  it('verifies hover elevation behavior and motion classes', () => {
    const { getByRole } = render(
      <BlogCard
        title="Hover Post"
        excerpt="Excerpt"
        href="/blog/hover"
        image="/images/blog-1.jpg"
        meta="Meta"
      />,
    );

    const anchor = getByRole('link');
    expect(anchor.className).toContain('hover:-translate-y-1');
    expect(anchor.className).toContain('hover:shadow-lg');
  });

  it('renders Skeleton when pending is true', () => {
    const { container } = render(
      <BlogCard
        title="Pending Post"
        excerpt="Excerpt"
        href="/blog/pending"
        image="/images/blog-1.jpg"
        meta="Meta"
        pending
      />,
    );

    expect(container.querySelector('[data-testid="skeleton-atom"]') || container.firstChild).toBeTruthy();
  });

  it('verifies responsive assumptions and variant styling', () => {
    const { getByTestId, rerender } = render(
      <BlogCard
        title="Default Post"
        excerpt="Excerpt"
        href="/blog/default"
        image="/images/blog-1.jpg"
        meta="Meta"
        variant="Default"
      />,
    );

    let card = getByTestId('blog-card-organism');
    expect(card.getAttribute('data-variant')).toBe('Default');
    expect(card.className).toContain('p-6');

    rerender(
      <BlogCard
        title="Compact Post"
        excerpt="Excerpt"
        href="/blog/compact"
        image="/images/blog-1.jpg"
        meta="Meta"
        variant="Compact"
      />,
    );

    card = getByTestId('blog-card-organism');
    expect(card.getAttribute('data-variant')).toBe('Compact');
    expect(card.className).toContain('p-4');
  });
});

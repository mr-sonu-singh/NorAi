/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { BlogPreviewSection } from './BlogPreviewSection';

const mockPosts = [
  {
    title: 'Deterministic AI Inference Architecture',
    excerpt: 'Detailed overview of cryptographic zero-knowledge proof generation.',
    href: '/blog/deterministic-ai-inference',
    meta: 'Oct 24, 2025 · Dr. Elena Rostova',
    category: 'Architecture',
  },
  {
    title: 'Sub-10ms Inference Latency at Scale',
    excerpt: 'How NorAI optimizes hardware pipelines for high-throughput enterprise workloads.',
    href: '/blog/sub-10ms-inference-latency',
    meta: 'Nov 12, 2025 · Marcus Vance',
    category: 'Performance',
  },
];

describe('BlogPreviewSection Organism', () => {
  it('defines BlogPreviewSection component correctly', () => {
    expect(BlogPreviewSection).toBeDefined();
  });

  it('renders heading and blog cards', () => {
    const { getByRole, getByText } = render(
      <BlogPreviewSection heading="Latest Research & Updates" posts={mockPosts} />,
    );

    const h2 = getByRole('heading', { level: 2 });
    expect(h2).toBeTruthy();
    expect(h2.textContent).toBe('Latest Research & Updates');

    expect(getByText('Deterministic AI Inference Architecture')).toBeTruthy();
    expect(getByText('Sub-10ms Inference Latency at Scale')).toBeTruthy();
  });

  it('renders EmptyState when posts array is empty', () => {
    const { getByText } = render(
      <BlogPreviewSection heading="Empty Blog" posts={[]} />,
    );

    expect(getByText('No Articles Found')).toBeTruthy();
  });

  it('renders LoadingState when pending is true', () => {
    const { getByText } = render(
      <BlogPreviewSection heading="Loading Blog" posts={[]} pending />,
    );

    expect(getByText('Loading blog posts...')).toBeTruthy();
  });

  it('renders SearchField and Pagination when in Hub variant', () => {
    const onPageChange = jest.fn();
    const { getByPlaceholderText, getByRole } = render(
      <BlogPreviewSection
        heading="Blog Hub"
        posts={mockPosts}
        variant="Hub"
        showSearch
        pagination={{ currentPage: 1, totalPages: 5, onPageChange }}
      />,
    );

    expect(getByPlaceholderText(/Search articles/i)).toBeTruthy();
    expect(getByRole('navigation', { name: /pagination/i })).toBeTruthy();
  });
});

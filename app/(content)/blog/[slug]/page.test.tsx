/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { render } from '@testing-library/react';
import BlogArticlePage, { generateStaticParams, generateMetadata } from './page';

describe('Blog Article Page (/blog/[slug])', () => {
  it('generates static params for all known blog posts', () => {
    const params = generateStaticParams();
    expect(params.length).toBeGreaterThan(0);
    expect(params).toContainEqual({ slug: 'sub-10ms-neural-compute' });
  });

  it('generates metadata for a valid article slug', async () => {
    const meta = await generateMetadata({ params: Promise.resolve({ slug: 'sub-10ms-neural-compute' }) });
    expect(meta).toBeDefined();
    expect(meta.title).toContain('Achieving Sub-10ms Latency');
  });

  it('renders article page correctly', async () => {
    const Component = await BlogArticlePage({ params: Promise.resolve({ slug: 'sub-10ms-neural-compute' }) });
    const { getByRole, getByText } = render(Component);

    const h1 = getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Achieving Sub-10ms Latency in Deterministic Neural Compute');
    expect(getByText('The Determinism Challenge in Neural Execution')).toBeTruthy();
  });
});

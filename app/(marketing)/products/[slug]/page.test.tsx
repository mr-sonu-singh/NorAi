/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import ProductDetailPage, { generateStaticParams, generateMetadata } from './page';
import MarketingLayout from '../../layout';

describe('Product Detail Page (/products/[slug])', () => {
  it('exports valid static params for all products', () => {
    const params = generateStaticParams();
    expect(params).toEqual([
      { slug: 'core' },
      { slug: 'vision' },
      { slug: 'security' },
    ]);
  });

  it('generates product-specific metadata', async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ slug: 'core' }) });
    expect(metadata.title).toContain('NorAI Core');
    expect(metadata.description).toBeDefined();
  });

  it('renders NorAI Core detail page with single H1 and correct composition tree', async () => {
    const pageComponent = await ProductDetailPage({
      params: Promise.resolve({ slug: 'core' }),
    });

    const { getByRole, getAllByRole, getByTestId, getByText } = render(
      <MarketingLayout>{pageComponent}</MarketingLayout>,
    );

    expect(getByTestId('header-organism')).toBeTruthy();
    expect(getByRole('main')).toBeTruthy();
    expect(getByTestId('footer-organism')).toBeTruthy();

    const h1Elements = getAllByRole('heading', { level: 1 });
    expect(h1Elements).toHaveLength(1);
    expect(h1Elements[0].textContent).toContain('Sub-10ms Deterministic Neural Compute Engine');

    expect(getByText('Eliminate Neural Execution Uncertainty')).toBeTruthy();
    expect(getByText('Engineered Compute Capabilities')).toBeTruthy();
    expect(getByText('3-Step Execution Model')).toBeTruthy();
    expect(getByText('Flexible Execution Plans')).toBeTruthy();
  });

  it('renders Product JSON-LD script', async () => {
    const pageComponent = await ProductDetailPage({
      params: Promise.resolve({ slug: 'core' }),
    });

    const { container } = render(pageComponent);
    const script = container.querySelector('script[type="application/ld+json"]');

    expect(script).toBeTruthy();
    const parsed = JSON.parse(script?.textContent || '{}');
    expect(parsed['@type']).toBe('Product');
    expect(parsed.name).toBe('NorAI Core');
  });
});

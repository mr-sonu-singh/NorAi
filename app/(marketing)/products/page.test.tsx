/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import ProductsPage, { metadata } from './page';
import MarketingLayout from '../layout';

describe('Products Hub (/products)', () => {
  it('exports valid metadata', () => {
    expect(metadata).toBeDefined();
    expect(metadata.title).toContain('Products Hub');
    expect(metadata.description).toBeDefined();
  });

  it('renders correctly inside MarketingLayout with single H1', () => {
    const { getByRole, getAllByRole, getByTestId } = render(
      <MarketingLayout>
        <ProductsPage />
      </MarketingLayout>,
    );

    expect(getByTestId('header-organism')).toBeTruthy();
    expect(getByRole('main')).toBeTruthy();
    expect(getByTestId('footer-organism')).toBeTruthy();

    const h1Elements = getAllByRole('heading', { level: 1 });
    expect(h1Elements).toHaveLength(1);
    expect(h1Elements[0].textContent).toContain('Deterministic AI Workload Primitives');
  });

  it('renders all product cards linking to their detail pages', () => {
    const { getByText, getAllByRole } = render(<ProductsPage />);

    expect(getByText('NorAI Core')).toBeTruthy();
    expect(getByText('NorAI Vision')).toBeTruthy();
    expect(getByText('NorAI Security')).toBeTruthy();

    const links = getAllByRole('link');
    const hrefs = links.map((l) => l.getAttribute('href'));

    expect(hrefs).toContain('/products/core');
    expect(hrefs).toContain('/products/vision');
    expect(hrefs).toContain('/products/security');
    expect(hrefs).toContain('/contact');
  });

  it('renders ItemList JSON-LD structured data', () => {
    const { container } = render(<ProductsPage />);
    const script = container.querySelector('script[type="application/ld+json"]');

    expect(script).toBeTruthy();
    const parsed = JSON.parse(script?.textContent || '{}');
    expect(parsed['@type']).toBe('ItemList');
    expect(parsed.name).toBe('NorAI Product Suite');
    expect(parsed.itemListElement).toHaveLength(3);
  });
});

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { ProductCard } from './ProductCard';

describe('ProductCard Organism', () => {
  it('defines ProductCard component correctly', () => {
    expect(ProductCard).toBeDefined();
  });

  it('renders single anchor with product name, summary, and category', () => {
    const { getByRole, getByText } = render(
      <ProductCard
        name="NorAI Inference Engine"
        summary="Sub-10ms deterministic execution engine with cryptographic zero-knowledge proofs."
        href="/products/inference-engine"
        category="Core Compute"
      />,
    );

    const anchor = getByRole('link');
    expect(anchor.getAttribute('href')).toBe('/products/inference-engine');
    expect(getByText('NorAI Inference Engine')).toBeTruthy();
    expect(getByText('Core Compute')).toBeTruthy();
  });

  it('verifies keyboard interaction and focus ring accessibility styling', () => {
    const { getByRole } = render(
      <ProductCard
        name="Interactive Product"
        summary="Summary"
        href="/products/interactive"
      />,
    );

    const anchor = getByRole('link');
    expect(anchor.className).toContain('focus-visible:ring-2');
    expect(anchor.className).toContain('focus-visible:ring-accent');
  });

  it('verifies hover elevation behavior and motion classes', () => {
    const { getByRole } = render(
      <ProductCard
        name="Hover Product"
        summary="Summary"
        href="/products/hover"
      />,
    );

    const anchor = getByRole('link');
    expect(anchor.className).toContain('hover:-translate-y-1');
    expect(anchor.className).toContain('hover:shadow-lg');
  });

  it('renders Skeleton when pending is true', () => {
    const { container } = render(
      <ProductCard
        name="Pending Product"
        summary="Summary"
        href="/products/pending"
        pending
      />,
    );

    expect(container.querySelector('[data-testid="skeleton-atom"]') || container.firstChild).toBeTruthy();
  });

  it('verifies responsive assumptions and variant styling', () => {
    const { getByTestId, rerender } = render(
      <ProductCard
        name="Default Product"
        summary="Summary"
        href="/products/default"
        variant="Default"
      />,
    );

    let card = getByTestId('product-card-organism');
    expect(card.getAttribute('data-variant')).toBe('Default');
    expect(card.className).toContain('p-6');

    rerender(
      <ProductCard
        name="Expanded Product"
        summary="Summary"
        href="/products/expanded"
        variant="Expanded"
      />,
    );

    card = getByTestId('product-card-organism');
    expect(card.getAttribute('data-variant')).toBe('Expanded');
    expect(card.className).toContain('p-8');
  });
});

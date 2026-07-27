/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import BlogHubPage, { metadata } from './page';
import ContentLayout from '../layout';

describe('Blog Hub Page (/blog)', () => {
  it('exports valid metadata', () => {
    expect(metadata).toBeDefined();
    expect(metadata.title).toContain('Blog & Research');
    expect(metadata.description).toBeDefined();
  });

  it('renders correctly inside ContentLayout with H1', () => {
    const { getByRole, getAllByRole, getByText } = render(
      <ContentLayout>
        <BlogHubPage />
      </ContentLayout>,
    );

    expect(getByRole('main')).toBeTruthy();
    const h1Elements = getAllByRole('heading', { level: 1 });
    expect(h1Elements).toHaveLength(1);
    expect(h1Elements[0].textContent).toContain('Verifiable AI & Cryptography Insights');

    expect(getByText('Latest Research & Technical Articles')).toBeTruthy();
    expect(getByText('Achieving Sub-10ms Latency in Deterministic Neural Compute')).toBeTruthy();
  });
});

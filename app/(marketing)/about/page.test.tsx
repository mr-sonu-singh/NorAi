/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import AboutPage, { metadata } from './page';
import MarketingLayout from '../layout';

describe('About Page (/about)', () => {
  it('exports valid metadata', () => {
    expect(metadata).toBeDefined();
    expect(metadata.title).toContain('About NorAI');
    expect(metadata.description).toBeDefined();
  });

  it('renders correctly inside MarketingLayout with single H1', () => {
    const { getByRole, getAllByRole, getByTestId, getByText } = render(
      <MarketingLayout>
        <AboutPage />
      </MarketingLayout>,
    );

    expect(getByTestId('header-organism')).toBeTruthy();
    expect(getByRole('main')).toBeTruthy();

    const h1Elements = getAllByRole('heading', { level: 1 });
    expect(h1Elements).toHaveLength(1);
    expect(h1Elements[0].textContent).toContain('Architecting Verifiable Intelligence');

    expect(getByText('Our Origin Story')).toBeTruthy();
    expect(getByText('Engineering Milestones')).toBeTruthy();
    expect(getByText('Led by Cryptographers & AI Pioneers')).toBeTruthy();
  });

  it('includes verifiable trust indicators (CIN and address)', () => {
    const { getByText } = render(<AboutPage />);

    expect(getByText('CIN: U72900MH2025PTC123456')).toBeTruthy();
    expect(getByText('Zurich Tech Park & Singapore AI Hub')).toBeTruthy();
  });

  it('renders AboutPage JSON-LD structured data', () => {
    const { container } = render(<AboutPage />);
    const script = container.querySelector('script[type="application/ld+json"]');

    expect(script).toBeTruthy();
    const parsed = JSON.parse(script?.textContent || '{}');
    expect(parsed['@type']).toBe('AboutPage');
    expect(parsed.name).toBe('About NorAI Technologies');
    expect(parsed.publisher.identifier).toBe('CIN: U72900MH2025PTC123456');
  });
});

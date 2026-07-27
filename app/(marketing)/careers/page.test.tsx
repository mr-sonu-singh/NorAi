/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import CareersPage, { metadata } from './page';
import MarketingLayout from '../layout';

describe('Careers Page (/careers)', () => {
  it('exports valid metadata', () => {
    expect(metadata).toBeDefined();
    expect(metadata.title).toContain('Careers');
    expect(metadata.description).toBeDefined();
  });

  it('renders correctly inside MarketingLayout with single H1', () => {
    const { getByRole, getAllByRole, getByTestId, getByText } = render(
      <MarketingLayout>
        <CareersPage />
      </MarketingLayout>,
    );

    expect(getByTestId('header-organism')).toBeTruthy();
    expect(getByRole('main')).toBeTruthy();

    const h1Elements = getAllByRole('heading', { level: 1 });
    expect(h1Elements).toHaveLength(1);
    expect(h1Elements[0].textContent).toContain('Build Verifiable AI Infrastructure at Scale');

    expect(getByText('Open Engineering Positions')).toBeTruthy();
    expect(getByText('Principal Cryptographer — ZK-STARKs')).toBeTruthy();
    expect(getByText('Senior Systems Engineer — FPGA Acceleration')).toBeTruthy();
  });

  it('links to /contact and email route', () => {
    const { getAllByRole } = render(<CareersPage />);

    const links = getAllByRole('link');
    const hrefs = links.map((l) => l.getAttribute('href'));

    expect(hrefs).toContain('/contact');
    expect(hrefs).toContain('mailto:careers@norai.asia');
  });
});

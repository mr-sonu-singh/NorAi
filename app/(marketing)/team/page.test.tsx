/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import TeamPage, { metadata } from './page';
import MarketingLayout from '../layout';

describe('Team Page (/team)', () => {
  it('exports valid metadata', () => {
    expect(metadata).toBeDefined();
    expect(metadata.title).toContain('Our Team');
    expect(metadata.description).toBeDefined();
  });

  it('renders correctly inside MarketingLayout with single H1', () => {
    const { getByRole, getAllByRole, getByTestId, getByText } = render(
      <MarketingLayout>
        <TeamPage />
      </MarketingLayout>,
    );

    expect(getByTestId('header-organism')).toBeTruthy();
    expect(getByRole('main')).toBeTruthy();

    const h1Elements = getAllByRole('heading', { level: 1 });
    expect(h1Elements).toHaveLength(1);
    expect(h1Elements[0].textContent).toContain('World-Class Cryptographers & AI Researchers');

    expect(getByText('Engineering & Research Team')).toBeTruthy();
    expect(getByText('Dr. Elena Rostova')).toBeTruthy();
    expect(getByText('Marcus Vance')).toBeTruthy();
    expect(getByText('Sarah Jenkins')).toBeTruthy();
    expect(getByText('Tariq Al-Mansoor')).toBeTruthy();
  });

  it('links to /careers and /contact', () => {
    const { getAllByRole } = render(<TeamPage />);

    const links = getAllByRole('link');
    const hrefs = links.map((l) => l.getAttribute('href'));

    expect(hrefs).toContain('/careers');
    expect(hrefs).toContain('/contact');
  });
});

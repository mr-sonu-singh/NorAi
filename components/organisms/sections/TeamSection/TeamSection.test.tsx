/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import { TeamSection } from './TeamSection';

const mockMembers = [
  {
    name: 'Dr. Elena Rostova',
    role: 'Chief AI Architect',
    bio: 'Pioneered decentralized neural network verification systems.',
  },
  {
    name: 'Marcus Vance',
    role: 'VP of Infrastructure',
    bio: 'Former Distributed Systems Lead at CloudScale.',
  },
];

const mockCareersLink = {
  label: 'Join Our Team',
  href: '/careers',
};

describe('TeamSection Organism', () => {
  it('defines TeamSection component correctly', () => {
    expect(TeamSection).toBeDefined();
  });

  it('renders heading, member cards, and careers link', () => {
    const { getByRole, getByText } = render(
      <TeamSection
        heading="Meet Our Engineering Team"
        members={mockMembers}
        careersLink={mockCareersLink}
      />,
    );

    const h2 = getByRole('heading', { level: 2 });
    expect(h2).toBeTruthy();
    expect(h2.textContent).toBe('Meet Our Engineering Team');

    expect(getByText('Dr. Elena Rostova')).toBeTruthy();
    expect(getByText('Marcus Vance')).toBeTruthy();
    expect(getByText('Join Our Team')).toBeTruthy();
  });

  it('renders EmptyState when members array is empty', () => {
    const { getByText } = render(
      <TeamSection
        heading="Empty Team"
        members={[]}
        careersLink={mockCareersLink}
      />,
    );

    expect(getByText('No Team Members Found')).toBeTruthy();
    expect(getByText('Join Our Team')).toBeTruthy();
  });

  it('passes variant correctly', () => {
    const { getByTestId } = render(
      <TeamSection
        heading="Preview Team"
        members={mockMembers}
        careersLink={mockCareersLink}
        variant="Preview"
      />,
    );

    const section = getByTestId('team-section-organism');
    expect(section.getAttribute('data-variant')).toBe('Preview');
  });
});

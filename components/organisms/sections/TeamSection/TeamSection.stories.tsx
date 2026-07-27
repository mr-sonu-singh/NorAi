import React from 'react';
import { TeamSection } from './TeamSection';

const meta = {
  title: 'Organisms/Sections/TeamSection',
  component: TeamSection,
};

export default meta;

const mockMembers = [
  {
    name: 'Dr. Elena Rostova',
    role: 'Chief AI Architect',
    bio: 'Pioneered decentralized neural network verification systems.',
    socials: [{ label: 'GitHub', href: 'https://github.com', icon: 'github' }],
  },
  {
    name: 'Marcus Vance',
    role: 'VP of Infrastructure',
    bio: 'Former Distributed Systems Lead at CloudScale.',
    socials: [{ label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' }],
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Product Security',
    bio: 'Specialist in zero-knowledge cryptography.',
  },
];

const mockCareersLink = {
  label: 'Explore Open Roles',
  href: '/careers',
};

export const FullGrid = () => (
  <TeamSection
    heading="Leadership & Engineering"
    members={mockMembers}
    careersLink={mockCareersLink}
    variant="FullGrid"
  />
);

export const Preview = () => (
  <TeamSection
    heading="Core Contributors"
    members={mockMembers}
    careersLink={mockCareersLink}
    variant="Preview"
  />
);

export const Empty = () => (
  <TeamSection
    heading="Our Team"
    members={[]}
    careersLink={mockCareersLink}
  />
);

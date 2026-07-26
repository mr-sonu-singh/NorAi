import { TeamMemberCard } from './TeamMemberCard';

const meta = {
  title: 'Molecules/TeamMemberCard',
  component: TeamMemberCard,
};

export default meta;

export const Default = {
  args: {
    name: 'Elena Rostova',
    role: 'Head of AI Research',
    bio: 'Pioneering distributed neural architecture models for high-concurrency systems.',
    socials: [
      { label: 'GitHub', href: 'https://github.com', icon: 'github' },
      { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    ],
  },
};

import { SocialLinks } from './SocialLinks';

const meta = {
  title: 'Molecules/SocialLinks',
  component: SocialLinks,
};

export default meta;

const links = [
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
];

export const Horizontal = {
  args: {
    links,
    orientation: 'horizontal',
  },
};

export const Vertical = {
  args: {
    links,
    orientation: 'vertical',
  },
};

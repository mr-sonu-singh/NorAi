import { NavigationLink } from './NavigationLink';

const meta = {
  title: 'Molecules/NavigationLink',
  component: NavigationLink,
};

export default meta;

export const Default = {
  args: {
    href: '/about',
    label: 'About Us',
  },
};

export const Active = {
  args: {
    href: '/',
    label: 'Home',
  },
};

export const WithIcon = {
  args: {
    href: '/services',
    label: 'Services',
    icon: 'server',
  },
};

export const WithBadge = {
  args: {
    href: '/careers',
    label: 'Careers',
    badge: 'Hiring',
  },
};

export const Disabled = {
  args: {
    href: '/portal',
    label: 'Client Portal',
    disabled: true,
  },
};

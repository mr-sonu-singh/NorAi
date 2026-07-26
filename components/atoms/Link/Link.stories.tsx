import { Link } from './Link';

const meta = {
  title: 'Atoms/Link',
  component: Link,
};

export default meta;

export const Inline = {
  args: {
    href: '/products',
    variant: 'inline',
    children: 'Explore products',
  },
};

export const ExternalStandalone = {
  args: {
    href: 'https://github.com',
    variant: 'standalone',
    external: true,
    children: 'View Documentation',
  },
};

import { NavigationGroup } from './NavigationGroup';

const meta = {
  title: 'Molecules/NavigationGroup',
  component: NavigationGroup,
};

export default meta;

const items = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'AI Platform', href: '/products/platform' },
      { label: 'Cloud Solutions', href: '/products/cloud' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Company', href: '/about' },
];

export const Horizontal = {
  args: {
    items,
    orientation: 'horizontal',
  },
};

export const Vertical = {
  args: {
    items,
    orientation: 'vertical',
  },
};

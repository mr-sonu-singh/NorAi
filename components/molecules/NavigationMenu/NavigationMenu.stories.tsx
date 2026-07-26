import { NavigationMenu } from './NavigationMenu';

const meta = {
  title: 'Molecules/NavigationMenu',
  component: NavigationMenu,
};

export default meta;

export const Default = {
  args: {
    items: [{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }],
  },
};

import { Header } from './Header';

const meta = {
  title: 'Organisms/Sections/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default = {
  args: {
    sticky: false,
  },
};

export const Sticky = {
  args: {
    sticky: true,
  },
};

export const WithSecondaryCTA = {
  args: {
    sticky: false,
    secondaryCta: {
      label: 'Documentation',
      href: '/docs',
    },
    primaryCta: {
      label: 'Get Started',
      href: '/contact',
    },
  },
};

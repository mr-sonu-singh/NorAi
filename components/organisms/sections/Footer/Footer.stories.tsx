import { Footer } from './Footer';

const meta = {
  title: 'Organisms/Sections/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default = {
  args: {},
};

export const CustomColumns = {
  args: {
    columns: [
      {
        title: 'Platform',
        links: [
          { label: 'Overview', href: '/overview' },
          { label: 'Features', href: '/features' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    legalText: '© 2026 NorAI Technologies. All rights reserved.',
  },
};

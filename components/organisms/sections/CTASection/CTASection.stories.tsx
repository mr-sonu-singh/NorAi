import { CTASection } from './CTASection';

const meta = {
  title: 'Organisms/Sections/CTASection',
  component: CTASection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const OnLight = {
  args: {
    heading: 'Ready to Accelerate Your AI Workloads?',
    body: 'Join leading engineering teams deploying zero-knowledge verifiable AI models.',
    surface: 'page',
    primaryCta: {
      label: 'Start Free Trial',
      href: '/signup',
    },
    secondaryCta: {
      label: 'Talk to Sales',
      href: '/contact',
    },
  },
};

export const OnDark = {
  args: {
    heading: 'Empower Your Enterprise Infrastructure Today',
    body: 'Contact our solutions architecture team for custom GPU cluster deployment and SLA guarantees.',
    surface: 'dark',
    primaryCta: {
      label: 'Request Enterprise Demo',
      href: '/contact',
    },
    secondaryCta: {
      label: 'Explore Architecture Docs',
      href: '/docs',
    },
  },
};

export const PrimaryOnly = {
  args: {
    heading: 'Experience Verifiable Computation',
    body: 'Instant sandbox access. No credit card required.',
    surface: 'page',
    primaryCta: {
      label: 'Launch Developer Console',
      href: '/console',
    },
  },
};

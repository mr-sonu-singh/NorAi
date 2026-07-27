import { HeroTypographic } from './HeroTypographic';

const meta = {
  title: 'Organisms/Sections/HeroTypographic',
  component: HeroTypographic,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default = {
  args: {
    eyebrow: 'Introducing NorAI Platform v1.0',
    headline: 'Verifiable Artificial Intelligence for Enterprise',
    subhead:
      'Empowering mission-critical systems with scalable compute, cryptographic proofing, and real-time model auditability.',
    primaryCta: {
      label: 'Explore Platform',
      href: '/products',
    },
    secondaryCta: {
      label: 'Read Architecture Specs',
      href: '/docs',
    },
  },
};

export const SingleCTA = {
  args: {
    headline: 'The Next Era of Scalable AI Infrastructure',
    subhead:
      'Build, deploy, and operate high-assurance intelligent applications at global scale.',
    primaryCta: {
      label: 'Get Started Free',
      href: '/signup',
    },
  },
};

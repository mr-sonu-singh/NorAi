import { UseCasesSection } from './UseCasesSection';

const meta = {
  title: 'Organisms/Sections/UseCasesSection',
  component: UseCasesSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default = {
  args: {
    heading: 'Industry Solutions',
    useCases: [
      {
        title: 'Financial Services & Banking',
        description: 'Automated fraud detection with cryptographic proof for regulatory compliance.',
        icon: 'shield',
      },
      {
        title: 'Healthcare & Life Sciences',
        description: 'Secure, privacy-preserving patient data processing and diagnostic models.',
        icon: 'cpu',
      },
      {
        title: 'Autonomous Supply Chain',
        description: 'Real-time telemetry, predictive maintenance, and route optimization.',
        icon: 'zap',
      },
    ],
    cta: {
      label: 'Schedule Industry Consultation',
      href: '/contact',
    },
  },
};

export const Empty = {
  args: {
    heading: 'Industry Solutions',
    useCases: [],
  },
};

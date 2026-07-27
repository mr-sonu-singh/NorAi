import { SocialProofStrip } from './SocialProofStrip';

const meta = {
  title: 'Organisms/Sections/SocialProofStrip',
  component: SocialProofStrip,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const LogoCloud = {
  args: {
    eyebrow: 'Trusted by innovative teams worldwide',
    logos: [
      { name: 'Acme Corp' },
      { name: 'Globex Corporation', href: 'https://example.com' },
      { name: 'Soylent Corp' },
      { name: 'Initech' },
      { name: 'Umbrella Corp' },
    ],
  },
};

export const TrustIndicators = {
  args: {
    eyebrow: 'Enterprise Grade Compliance',
    trustIndicators: [
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Security Certification', value: 'SOC 2 Type II' },
      { label: 'Data Privacy', value: 'GDPR Compliant' },
    ],
  },
};

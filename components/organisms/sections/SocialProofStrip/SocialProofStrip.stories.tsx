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
      { name: 'Apex AI', icon: 'zap' },
      { name: 'QuantumData', icon: 'layers' },
      { name: 'VeriCore', icon: 'shield' },
      { name: 'CloudScale', icon: 'cpu' },
    ],
  },
};

export const TrustIndicators = {
  args: {
    eyebrow: 'Security & Compliance Standards',
    trustIndicators: [
      { label: 'SOC2 Type II', value: 'Certified', status: 'verified' },
      { label: 'ISO 27001', value: 'Compliant', status: 'verified' },
      { label: 'Global SLA', value: '99.99%', status: 'active' },
    ],
  },
};

export const Combined = {
  args: {
    eyebrow: 'Enterprise-grade Security & Trusted Partners',
    logos: [
      { name: 'Apex AI', icon: 'zap' },
      { name: 'VeriCore', icon: 'shield' },
    ],
    trustIndicators: [
      { label: 'SOC2 Type II', value: 'Certified', status: 'verified' },
      { label: 'Data Encryption', value: '256-bit AES', status: 'active' },
    ],
  },
};

import { PricingSection } from './PricingSection';

const meta = {
  title: 'Organisms/Sections/PricingSection',
  component: PricingSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const ThreeTierDefault = {
  args: {
    heading: 'Transparent, Scalable Pricing',
    intro: 'Choose the plan that fits your production workload and compliance requirements.',
    tiers: [
      {
        name: 'Developer',
        price: '$49',
        interval: '/month',
        features: [
          'Up to 50,000 Inferences/mo',
          'Standard Model Caching',
          'Community Discord Support',
          '99.9% Uptime SLA',
        ],
        cta: {
          label: 'Start Free Trial',
        },
      },
      {
        name: 'Professional',
        price: '$299',
        interval: '/month',
        features: [
          'Up to 500,000 Inferences/mo',
          'Priority GPU Cluster Allocation',
          'Real-time Cryptographic Audit Logs',
          '99.95% Uptime SLA',
          '24/7 Email Support',
        ],
        highlighted: true,
        cta: {
          label: 'Get Started with Pro',
        },
      },
      {
        name: 'Enterprise',
        price: 'Contact Sales',
        features: [
          'Unlimited Custom Inferences',
          'Dedicated GPU Hardware Cluster',
          'Custom ZK Proof Verification',
          '99.99% Guaranteed SLA',
          'Dedicated Solutions Architect',
        ],
        cta: {
          label: 'Talk to Enterprise Sales',
        },
      },
    ],
  },
};

export const TwoTier = {
  args: {
    heading: 'Simple Pay-as-you-Scale Tiers',
    tiers: [
      {
        name: 'Starter',
        price: '$99',
        interval: '/month',
        features: ['100,000 Inferences/mo', 'Standard API Keys', 'Email Support'],
        cta: { label: 'Start Now' },
      },
      {
        name: 'Enterprise',
        price: 'Contact Sales',
        features: ['Unlimited Scale', 'Dedicated Nodes', '24/7 Phone Support'],
        highlighted: true,
        cta: { label: 'Contact Us' },
      },
    ],
  },
};

import { FeatureGrid } from './FeatureGrid';

const meta = {
  title: 'Organisms/Sections/FeatureGrid',
  component: FeatureGrid,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const TwoUpFourItems = {
  args: {
    heading: 'Core Platform Capabilities',
    intro: 'Built to empower high-growth engineering teams with enterprise-grade infrastructure.',
    features: [
      {
        title: 'Cryptographic Proofs',
        description: 'Automatic verification certificates generated for all model outputs.',
        icon: 'shield',
      },
      {
        title: 'Auto-scaling Clusters',
        description: 'Dynamically scale GPU nodes based on real-time inference concurrency.',
        icon: 'cpu',
      },
      {
        title: 'Sub-15ms Latency',
        description: 'Optimized model caching layers ensuring minimal global response times.',
        icon: 'zap',
      },
      {
        title: '99.99% Availability',
        description: 'Multi-region failover protection guaranteed by strict enterprise SLAs.',
        icon: 'check-circle',
      },
    ],
  },
};

export const ThreeUpSixItems = {
  args: {
    heading: 'End-to-End Enterprise Suite',
    intro: 'Discover the full ecosystem of tools designed for verifiable AI deployments.',
    features: [
      {
        title: 'Cryptographic Proofs',
        description: 'Automatic verification certificates generated for all model outputs.',
        icon: 'shield',
      },
      {
        title: 'Auto-scaling Clusters',
        description: 'Dynamically scale GPU nodes based on real-time inference concurrency.',
        icon: 'cpu',
      },
      {
        title: 'Sub-15ms Latency',
        description: 'Optimized model caching layers ensuring minimal global response times.',
        icon: 'zap',
      },
      {
        title: 'Zero-Knowledge Privacy',
        description: 'Execute inference over sensitive data without exposing model inputs.',
        icon: 'lock',
      },
      {
        title: 'Immutable Audit Logs',
        description: 'Comprehensive telemetry logs stored in high-assurance ledgers.',
        icon: 'file-text',
      },
      {
        title: '24/7 Priority Support',
        description: 'Direct engineering support and dedicated solution architects.',
        icon: 'headphones',
      },
    ],
  },
};

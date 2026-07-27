import React from 'react';
import { FeatureSection } from './FeatureSection';

const meta = {
  title: 'Organisms/Sections/FeatureSection',
  component: FeatureSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const TextLeftMediaRight = {
  args: {
    heading: 'High-Throughput Cryptographic Engine',
    body: 'Designed from the ground up to verify machine learning outputs without compromising throughput or introducing latency.',
    feature: {
      title: 'Zero-Knowledge Proof Generation',
      description: 'Generates succinct ZK proofs for model inputs and outputs in parallel.',
      icon: 'shield',
    },
    cta: {
      label: 'Read Technical Whitepaper',
      href: '/whitepaper',
    },
  },
};

export const MediaLeftTextRight = {
  args: {
    heading: 'Enterprise Observability & Control',
    body: 'Monitor cluster performance, telemetry logs, and compliance verification in real-time.',
    align: 'mediaLeft',
    media: (
      <div className="p-8 bg-neutral-900 text-neutral-100 rounded-lg font-mono text-sm">
        <p className="text-accent-400">$ norai cluster status --verify</p>
        <p className="mt-2 text-neutral-400">✓ All 12 GPU Nodes Operational</p>
        <p className="text-neutral-400">✓ SLA Target: 99.99% (Current: 100%)</p>
      </div>
    ),
    cta: {
      label: 'Explore Telemetry Dashboard',
      href: '/dashboard',
    },
  },
};

export const TextOnly = {
  args: {
    heading: 'Uncompromising Security Architecture',
    body: 'Our infrastructure ensures that data privacy is maintained at every step of the inference pipeline.',
    cta: {
      label: 'Learn More About Our Security Model',
      href: '/security',
    },
  },
};

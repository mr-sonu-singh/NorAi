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
    heading: 'Cryptographic Model Auditability',
    body: 'Provide immutable proof for every AI response with automatically generated verification certificates stored on-chain or in high-assurance ledgers.',
    cta: {
      label: 'Read Architecture Whitepaper',
      href: '/docs/whitepaper',
    },
    media: (
      <div className="w-full aspect-video bg-accent/10 flex items-center justify-center p-8 text-accent font-semibold text-body-md">
        [ Model Auditability Dashboard Visual ]
      </div>
    ),
  },
};

export const MediaLeftTextRight = {
  args: {
    heading: 'High-Concurrency Compute Pipelines',
    body: 'Scale your inference throughput dynamically without compromising latency or system availability.',
    align: 'mediaLeft',
    cta: {
      label: 'Explore Compute Engine',
      href: '/products/core',
    },
    media: (
      <div className="w-full aspect-video bg-primary-100 flex items-center justify-center p-8 text-primary-700 font-semibold text-body-md">
        [ Compute Pipeline Monitoring Visual ]
      </div>
    ),
  },
};

export const WithFeatureCard = {
  args: {
    heading: 'Zero-Knowledge Privacy Proofs',
    body: 'Execute private inference workloads over sensitive user data without exposing model weights or raw inputs.',
    feature: {
      title: 'Privacy Guaranteed',
      description: 'Built-in ZK-SNARK verifier engine operating at sub-millisecond speeds.',
      icon: 'shield',
    },
    cta: {
      label: 'View Privacy Benchmarks',
      href: '/privacy',
    },
  },
};

export const TextOnly = {
  args: {
    heading: 'Built for High-Assurance AI Engineering',
    body: 'Designed from the ground up to support critical enterprise applications where compliance, auditability, and deterministic performance are mandatory requirements.',
  },
};

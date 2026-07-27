import React from 'react';
import { HeroStandard } from './HeroStandard';

const meta = {
  title: 'Organisms/Sections/HeroStandard',
  component: HeroStandard,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const TextOnly = {
  args: {
    eyebrow: 'Products Hub',
    headline: 'Next-Generation AI Infrastructure',
    subhead:
      'Deploy, scale, and verify enterprise-grade artificial intelligence models with uncompromised security.',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
    ],
    primaryCta: {
      label: 'Get Started',
      href: '/contact',
    },
    secondaryCta: {
      label: 'View Documentation',
      href: '/docs',
    },
  },
};

export const WithMedia = {
  args: {
    eyebrow: 'NorAI Core',
    headline: 'Scalable Compute Engine for Enterprise AI',
    subhead:
      'Empower your dev teams with custom inference pipelines and real-time observability dashboards.',
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Core Engine', href: '/products/core' },
    ],
    primaryCta: {
      label: 'Request Access',
      href: '/contact',
    },
    secondaryCta: {
      label: 'Explore Features',
      href: '/products/core#features',
    },
    media: (
      <div className="w-full aspect-video bg-accent-900/10 flex items-center justify-center p-8 text-accent font-semibold text-body-lg">
        [ Product Dashboard Interface Screenshot ]
      </div>
    ),
  },
};

export const MediaLoading = {
  args: {
    headline: 'Loading Product Preview',
    subhead: 'Please wait while we prepare your dashboard preview.',
    isMediaLoading: true,
  },
};

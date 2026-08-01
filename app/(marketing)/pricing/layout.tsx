import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  path: '/pricing',
  title: 'Transparent Pricing & Monthly Tiers — NorAI Technologies',
  description: 'Predictable monthly pricing for self-serve micro-tools (Starter, Pro, Scale) and custom enterprise AI compute options with zero hidden fees.',
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

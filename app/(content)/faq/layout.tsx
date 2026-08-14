import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  path: '/faq',
  title: 'Frequently Asked Questions — NorAi Technologies',
  description: 'Searchable knowledge base and answers regarding NorAi self-serve micro-tools, custom enterprise AI services, and billing structures.',
});

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

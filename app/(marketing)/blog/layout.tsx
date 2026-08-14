import React from 'react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  path: '/blog',
  title: 'Engineering Journal & Architecture Write-Ups — NorAi Technologies',
  description: 'Practical notes on AI orchestration patterns, vector search retrieval, MCP developer tooling, and workflow automation engineering.',
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

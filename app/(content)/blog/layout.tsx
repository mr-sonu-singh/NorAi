import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  path: '/blog',
  title: 'Engineering & AI Research Journal — NorAI Technologies',
  description: 'Technical insights, AI agent orchestration breakdowns, spatial computing research, and system engineering articles by NorAI founders.',
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

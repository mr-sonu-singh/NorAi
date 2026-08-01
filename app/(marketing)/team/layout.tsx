import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  path: '/team',
  title: 'Founding Engineering Team — NorAI Technologies',
  description: 'Meet the founding engineering team at NorAI Technologies combining military discipline, spatial computing, strategic marketing, UI/UX design, and AI orchestration.',
});

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

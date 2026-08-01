import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  path: '/products',
  title: 'Self-Serve AI Micro-Tools — NorAI Technologies',
  description: 'Explore instant-deploy self-serve AI micro-tools for resume shortlisting, course note-taking, community chat digests, and smart news aggregation.',
});

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

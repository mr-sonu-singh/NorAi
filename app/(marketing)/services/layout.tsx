import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  path: '/services',
  title: 'AI Services & Enterprise Automation — NorAi Technologies',
  description: 'Explore NorAi AI services: Pre-built micro-SaaS tools, custom AI chatbots, AI web applications, synthetic video ads, and business automation pipelines.',
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Suspense } from 'react';

export const metadata: Metadata = buildMetadata({
  path: '/contact',
  title: 'Contact Us & Technical Scoping — NorAI Technologies',
  description: 'Get in touch with NorAI Technologies engineering and sales teams for micro-SaaS deployment and custom AI automation pipelines.',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div className="min-h-screen bg-[#0B0F17]" />}>{children}</Suspense>;
}

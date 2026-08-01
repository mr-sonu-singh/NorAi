import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  path: '/privacy',
  title: 'Privacy Policy — NorAI Technologies',
  description: 'Understand how NorAI Technologies processes, protects, and respects user data with zero persistent logging and AES-256 encryption.',
});

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

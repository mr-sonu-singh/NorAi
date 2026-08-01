import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  path: '/about',
  title: 'About Us — NorAI Technologies',
  description: 'Learn about NorAI Technologies: Our regional startup hub in Uttar Pradesh, India, building accessible micro-SaaS utilities and verifiable AI infrastructure.',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

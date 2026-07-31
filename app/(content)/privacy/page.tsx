import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { TiltCard } from '@/components/molecules/TiltCard';
import {
  Lock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileCheck,
} from 'lucide-react';

export const metadata = buildMetadata({
  path: '/privacy',
  title: 'Privacy Policy — NorAI Technologies',
  description: 'Understand how NorAI Technologies processes, protects, and respects user data with zero persistent logging and AES-256 encryption.',
});

const PRIVACY_SECTIONS = [
  {
    id: 'collection',
    title: '1. Information We Collect',
    content: [
      'We collect minimal information necessary to deliver our Services: account registration data (name, email address, company name) and technical API metadata (timestamp, request volume, status codes).',
      'We do NOT store or log the text content of your uploaded resumes, lecture audio, community chat messages, or news queries after inference completion.',
    ],
  },
  {
    id: 'ephemeral',
    title: '2. Ephemeral In-Memory Processing',
    content: [
      'All AI inferences run in ephemeral RAM containers. Input payloads are parsed, evaluated by our LLM pipeline, and immediately flushed from system memory once output JSON is returned.',
      'NorAI does NOT retain your proprietary data to train or fine-tune public foundation models.',
    ],
  },
  {
    id: 'encryption',
    title: '3. Data Security & Encryption Standards',
    content: [
      'All data transmitted between your application and NorAI API endpoints is encrypted in transit using Transport Layer Security (TLS 1.3).',
      'Account data and billing records are encrypted at rest using AES-256 cryptographic standards with hardware security module key management.',
    ],
  },
  {
    id: 'subprocessors',
    title: '4. Subprocessors & Infrastructure',
    content: [
      'We partner with tier-1 cloud infrastructure providers (Vercel, AWS, Cloudflare) that comply with SOC2 Type II, ISO 27001, and GDPR security frameworks.',
      'Our subprocessors process encrypted data payloads strictly under our direction and bound by strict Data Processing Agreements (DPAs).',
    ],
  },
  {
    id: 'rights',
    title: '5. User Rights & Data Deletion',
    content: [
      'You have the right to request access to, correction of, or complete deletion of your account data at any time.',
      'To request account deletion or export your billing history, email contact@norai.asia.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      {/* Hero Section */}
      <Section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <Lock className="w-3.5 h-3.5 text-blue-400" />
              <span>Privacy & Security Standard</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-extrabold tracking-tight text-white leading-tight"
            >
              Privacy{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Policy
              </span>
            </Heading>

            {/* Subhead */}
            <Text variant="body-lg" className="text-slate-300 font-normal leading-relaxed">
              Effective Date: January 1, 2026 • NorAI Technologies Pvt. Ltd.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Privacy Body Section */}
      <Section className="py-12 border-t border-white/10">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sidebar Table of Contents */}
            <div className="lg:col-span-4 sticky top-24 space-y-4 hidden lg:block">
              <TiltCard className="p-6 bg-slate-900/70 border border-white/10 space-y-4">
                <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  Policy Index
                </div>
                <nav className="space-y-2 text-sm text-slate-300 font-medium">
                  {PRIVACY_SECTIONS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block py-1 hover:text-blue-400 transition-colors"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </TiltCard>
            </div>

            {/* Right Main Content */}
            <div className="lg:col-span-8 space-y-12">
              {PRIVACY_SECTIONS.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-28 space-y-4 border-b border-white/10 pb-8">
                  <Heading as="h2" variant="heading-lg" className="font-extrabold text-white">
                    {section.title}
                  </Heading>

                  {section.content.map((p, idx) => (
                    <Text key={idx} variant="body-md" className="text-slate-300 leading-relaxed">
                      {p}
                    </Text>
                  ))}
                </div>
              ))}

              {/* Contact DPO Banner */}
              <div className="p-8 rounded-2xl bg-blue-500/10 border border-blue-500/30 space-y-4">
                <Heading as="h3" variant="heading-md" className="font-bold text-white">
                  Data Protection Officer (DPO) Inquiry
                </Heading>
                <Text variant="body-sm" className="text-slate-300">
                  For privacy requests, GDPR compliance inquiries, or custom DPA agreements, reach out to our privacy officer at <strong className="text-white">contact@norai.asia</strong>.
                </Text>
                <div className="pt-2">
                  <Link href="/contact">
                    <Button variant="primary" size="md" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2.5 rounded-lg">
                      Contact Privacy Team <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

import React from 'react';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import {
  Lock,
  ArrowRight,
  ShieldCheck,
  Activity,
  FileText,
} from 'lucide-react';

const PRIVACY_SECTIONS = [
  {
    id: 'collection',
    num: '01',
    title: '1. Information We Collect',
    content: [
      'We collect minimal information necessary to deliver our Services: account registration data (name, email address, company name) and technical API metadata (timestamp, request volume, status codes).',
      'We do NOT store or log the text content of your uploaded resumes, lecture audio, community chat messages, or news queries after inference completion.',
    ],
  },
  {
    id: 'ephemeral',
    num: '02',
    title: '2. Ephemeral In-Memory Processing',
    content: [
      'All AI inferences run in ephemeral RAM containers. Input payloads are parsed, evaluated by our LLM pipeline, and immediately flushed from system memory once output JSON is returned.',
      'NorAI does NOT retain your proprietary data to train or fine-tune public foundation models.',
    ],
  },
  {
    id: 'encryption',
    num: '03',
    title: '3. Data Security & Encryption Standards',
    content: [
      'All data transmitted between your application and NorAI API endpoints is encrypted in transit using Transport Layer Security (TLS 1.3).',
      'Account data and billing records are encrypted at rest using AES-256 cryptographic standards with hardware security module key management.',
    ],
  },
  {
    id: 'subprocessors',
    num: '04',
    title: '4. Subprocessors & Infrastructure',
    content: [
      'We partner with tier-1 cloud infrastructure providers (Vercel, AWS, Cloudflare) that comply with SOC2 Type II, ISO 27001, and GDPR security frameworks.',
      'Our subprocessors process encrypted data payloads strictly under our direction and bound by strict Data Processing Agreements (DPAs).',
    ],
  },
  {
    id: 'rights',
    num: '05',
    title: '5. User Rights & Data Deletion',
    content: [
      'You have the right to request access to, correction of, or complete deletion of your account data at any time.',
      'To request account deletion or export your billing history, email contact@norai.asia.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-[#0CCAB1] selection:text-[#0B0F17]">
      {/* Hero Section */}
      <Section className="relative pt-12 pb-14 md:pt-20 md:pb-16 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-[#131924] text-slate-300 text-xs font-mono tracking-wide uppercase">
              <Lock className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
              <span>Privacy &amp; Security Standard</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Privacy{' '}
              <span className="text-[#0CCAB1] underline decoration-[#0CCAB1]/40 underline-offset-8">
                Policy
              </span>
            </Heading>

            {/* Subhead */}
            <Text variant="body-lg" className="text-slate-300 font-mono text-sm leading-relaxed">
              Effective Date: January 1, 2026 • NorAI Technologies Pvt. Ltd. • Uttar Pradesh, India
            </Text>
          </div>
        </Container>
      </Section>

      {/* Signature Element: Governance Telemetry Bar */}
      <Section className="py-4 border-y border-white/10 bg-[#131924]/60">
        <Container size="default">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <Activity className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" />
              <span className="font-bold text-white uppercase tracking-wider">NORAI_GOVERNANCE:</span>
              <span className="text-[#45F7D6]">● TLS 1.3 &amp; AES-256 GUARANTEED</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#45F7D6] bg-[#0B0F17] px-3 py-1 rounded border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
                ZERO PERSISTENT LOGGING IN EFFECT
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Privacy Body Section */}
      <Section className="py-12">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sidebar Table of Contents */}
            <div className="lg:col-span-4 sticky top-24 space-y-4 hidden lg:block">
              <div className="p-6 bg-[#131924] border border-white/10 rounded-xl space-y-4 shadow-xl">
                <div className="text-xs font-mono font-bold text-[#0CCAB1] uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4" aria-hidden="true" />
                  Policy Index
                </div>
                <nav className="space-y-2 text-xs font-mono">
                  {PRIVACY_SECTIONS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="flex items-center gap-3 py-1.5 px-2 rounded text-slate-300 hover:text-white hover:bg-[#0B0F17] transition-all group"
                    >
                      <span className="text-[#0CCAB1] font-bold">{sec.num}</span>
                      <span className="truncate group-hover:text-[#0CCAB1]">{sec.title.replace(/^\d+\.\s*/, '')}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right Main Content */}
            <div className="lg:col-span-8 space-y-10">
              {PRIVACY_SECTIONS.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-28 space-y-4 border-b border-white/10 pb-8">
                  <div className="flex items-center gap-3 font-mono text-xs text-[#0CCAB1]">
                    <span className="px-2 py-0.5 rounded bg-[#0B0F17] border border-white/10 font-bold">
                      SECTION_{section.num}
                    </span>
                  </div>

                  <Heading as="h2" variant="heading-lg" className="font-display font-bold text-white">
                    {section.title}
                  </Heading>

                  {section.content.map((p, idx) => (
                    <Text key={idx} variant="body-md" className="text-slate-300 leading-relaxed font-normal">
                      {p}
                    </Text>
                  ))}
                </div>
              ))}

              {/* Contact DPO Banner */}
              <div className="p-8 rounded-xl bg-[#131924] border border-[#0CCAB1]/40 space-y-4 shadow-xl">
                <Heading as="h3" variant="heading-md" className="font-display font-bold text-white">
                  Data Protection Officer (DPO) Inquiry
                </Heading>
                <Text variant="body-sm" className="text-slate-300">
                  For privacy requests, GDPR compliance inquiries, or custom DPA agreements, reach out to our privacy officer at <strong className="text-[#0CCAB1] font-mono">contact@norai.asia</strong>.
                </Text>
                <div className="pt-2">
                  <Link href="/contact">
                    <Button variant="primary" size="md" className="bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold px-6 py-2.5 rounded-lg shadow-lg shadow-[#0CCAB1]/20">
                      Contact Privacy Team <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
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

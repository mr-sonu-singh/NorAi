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
      'All data transmitted between your application and NorAi API endpoints is encrypted in transit using Transport Layer Security (TLS 1.3).',
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
      'To request account deletion or export your billing history, email noraitechnologies@gmail.com.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div
      className="
        text-primary-800
        min-h-screen
        font-sans
        selection:bg-[var(--accent-500)]
        selection:text-[var(--bg-page)]

        bg-[linear-gradient(180deg,#F4F7FF_0%,#EEF2FF_25%,#F5F0FF_55%,#F4F7FF_100%)]
      "
    >
      {/* Hero Section */}
      <Section className="relative pt-12 pb-14 md:pt-20 md:pb-16 overflow-hidden isolate">
        {/* Cover Image — place your file at /public/images/hero-bg.jpg */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundColor: 'var(--primary-900)',
          }}
        />

        {/* Tinted overlay so text stays readable over the image */}
        <div aria-hidden="true" className="absolute inset-0 bg-[var(--bg-page)]/20" />

        {/* AI Neural Network Animation */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div
            className="
              absolute
              -left-20
              top-1/2
              w-72
              h-72
              rounded-full
              bg-cyan-400/10
              blur-[100px]
              animate-pulse
            "
          />

          <div
            className="
              absolute
              -right-20
              top-1/3
              w-80
              h-80
              rounded-full
              bg-blue-500/10
              blur-[110px]
              animate-pulse
            "
            style={{ animationDelay: '1200ms' }}
          />

          {/* AI Node - Left */}
          <div className="absolute left-[15%] top-[30%]">
            <span
              className="
                block
                w-2
                h-2
                rounded-full
                bg-cyan-300
                shadow-[0_0_18px_rgba(103,232,249,0.9)]
                animate-pulse
              "
            />
            <span
              className="
                absolute
                -inset-3
                rounded-full
                border
                border-cyan-300/20
                animate-ping
              "
            />
          </div>

          {/* AI Node - Right */}
          <div className="absolute right-[22%] top-[25%]">
            <span
              className="
                block
                w-1.5
                h-1.5
                rounded-full
                bg-cyan-200
                shadow-[0_0_15px_rgba(103,232,249,0.8)]
                animate-pulse
              "
              style={{ animationDelay: '500ms' }}
            />
          </div>

          {/* AI Node - Bottom Left */}
          <div className="absolute left-[27%] bottom-[18%]">
            <span
              className="
                block
                w-1.5
                h-1.5
                rounded-full
                bg-blue-200
                shadow-[0_0_14px_rgba(147,197,253,0.8)]
                animate-pulse
              "
              style={{ animationDelay: '900ms' }}
            />
          </div>

          {/* AI Node - Bottom Right */}
          <div className="absolute right-[13%] bottom-[25%]">
            <span
              className="
                block
                w-2
                h-2
                rounded-full
                bg-cyan-300
                shadow-[0_0_18px_rgba(103,232,249,0.8)]
                animate-pulse
              "
              style={{ animationDelay: '1400ms' }}
            />
          </div>

          {/* Neural Connection Lines */}
          <div
            className="
              absolute
              left-[15.5%]
              top-[30.5%]
              w-32
              h-px
              origin-left
              rotate-[18deg]
              bg-gradient-to-r
              from-cyan-300/40
              to-transparent
              animate-pulse
            "
          />

          <div
            className="
              absolute
              right-[22%]
              top-[25%]
              w-28
              h-px
              origin-right
              -rotate-[20deg]
              bg-gradient-to-l
              from-cyan-300/30
              to-transparent
              animate-pulse
            "
            style={{ animationDelay: '700ms' }}
          />

          {/* Tiny Data Particles */}
          <span className="absolute left-[9%] top-[45%] w-1 h-1 rounded-full bg-cyan-200/70 animate-pulse" />
          <span
            className="absolute left-[35%] top-[20%] w-1 h-1 rounded-full bg-blue-200/70 animate-pulse"
            style={{ animationDelay: '300ms' }}
          />
          <span
            className="absolute right-[32%] top-[45%] w-1 h-1 rounded-full bg-cyan-200/70 animate-pulse"
            style={{ animationDelay: '800ms' }}
          />
          <span
            className="absolute right-[8%] top-[40%] w-1 h-1 rounded-full bg-cyan-300/70 animate-pulse"
            style={{ animationDelay: '1100ms' }}
          />
        </div>

        <Container size="default" className="relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-xs font-mono tracking-wide uppercase">
              <Lock className="w-3.5 h-3.5 text-[#DDF7FF]" aria-hidden="true" />
              <span>Privacy &amp; Security Standard</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold text-white tracking-[-0.03em] leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
            >
              Privacy{' '}
              <span className="text-[#DDF7FF] underline decoration-[color:var(--accent-mono)/0.6] underline-offset-8">
                Policy
              </span>
            </Heading>

            {/* Subhead */}
            <Text
              variant="body-lg"
              className="font-mono text-sm text-[#E8F7FF] leading-relaxed drop-shadow-[0_1px_6px_rgba(0,20,50,0.35)]"
            >
              Effective Date: January 1, 2026 • NorAi Technologies Pvt. Ltd. • Uttar Pradesh, India
            </Text>
          </div>
        </Container>
      </Section>

      {/* Signature Element: Governance Telemetry Bar */}
      <Section
        className="
          py-4
          border-y
          border-blue-400/10
          bg-white/30
          backdrop-blur-md
        "
      >
        <Container size="default">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-primary-700">
              <Activity className="w-4 h-4 text-[var(--accent-500)]" aria-hidden="true" />
              <span className="font-bold text-primary-800 uppercase tracking-wider">NORAI_GOVERNANCE:</span>
              <span className="text-[var(--accent-mono)]">● TLS 1.3 &amp; AES-256 GUARANTEED</span>
            </div>

            <div className="flex items-center gap-2 text-primary-700">
              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  text-xs
                  text-blue-600
                  bg-white/40
                  backdrop-blur-sm
                  px-3
                  py-1
                  rounded-lg
                  border
                  border-blue-400/15
                "
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-500)]" aria-hidden="true" />
                ZERO PERSISTENT LOGGING IN EFFECT
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Privacy Body Section */}
      <Section
        className="
          relative
          py-16
          overflow-hidden
          bg-[radial-gradient(circle_at_8%_20%,rgba(59,130,246,0.06),transparent_32%),radial-gradient(circle_at_92%_70%,rgba(139,92,246,0.06),transparent_34%)]
        "
      >
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sidebar Table of Contents */}
            <div className="lg:col-span-4 sticky top-24 space-y-4 hidden lg:block">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  p-6
                  space-y-4

                  bg-white/50
                  backdrop-blur-xl

                  border
                  border-blue-400/15

                  shadow-[0_10px_40px_rgba(59,130,246,0.06)]
                "
              >
                <div className="text-xs font-mono font-bold text-[var(--accent-500)] uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4" aria-hidden="true" />
                  Policy Index
                </div>
                <nav className="space-y-1 text-xs font-mono">
                  {PRIVACY_SECTIONS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="
                        flex items-center gap-3 py-1.5 px-2 rounded-lg
                        text-primary-700
                        hover:text-blue-600 hover:bg-white/60
                        transition-all group
                      "
                    >
                      <span className="text-blue-600 font-bold">{sec.num}</span>
                      <span className="truncate group-hover:text-blue-600">{sec.title.replace(/^\d+\.\s*/, '')}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right Main Content */}
            <div className="lg:col-span-8 space-y-10">
              {PRIVACY_SECTIONS.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-28 space-y-4 border-b border-blue-400/10 pb-8">
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded-lg bg-blue-500/10 border border-blue-400/20 text-[var(--accent-mono)] font-bold">
                      SECTION_{section.num}
                    </span>
                  </div>

                  <Heading as="h2" variant="heading-lg" className="font-display font-bold text-primary-800">
                    {section.title}
                  </Heading>

                  {section.content.map((p, idx) => (
                    <Text key={idx} variant="body-md" className="text-primary-700 leading-relaxed font-normal">
                      {p}
                    </Text>
                  ))}
                </div>
              ))}

              {/* Contact DPO Banner */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  p-8
                  space-y-4

                  bg-white/50
                  backdrop-blur-xl

                  border
                  border-blue-400/30

                  shadow-[0_15px_50px_rgba(59,130,246,0.08)]
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute -top-20 -right-20 w-48 h-48 rounded-full
                    bg-blue-500/10 blur-[80px] pointer-events-none
                  "
                />
                <Heading as="h3" variant="heading-md" className="relative z-10 font-display font-bold text-primary-800">
                  Data Protection Officer (DPO) Inquiry
                </Heading>
                <Text variant="body-sm" className="relative z-10 text-primary-700">
                  For privacy requests, GDPR compliance inquiries, or custom DPA agreements, reach out to our privacy officer at <strong className="text-blue-600 font-mono">noraitechnologies@gmail.com</strong>.
                </Text>
                <div className="relative z-10 pt-2">
                  <Link href="/contact">
                    <Button
                      variant="primary"
                      size="md"
                      className="
                        bg-gradient-to-r from-blue-600 to-indigo-600
                        hover:from-blue-700 hover:to-violet-600
                        text-white font-semibold px-6 py-2.5 rounded-lg
                        shadow-lg shadow-blue-500/20
                        hover:shadow-blue-500/30
                        transition-all duration-300
                      "
                    >
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
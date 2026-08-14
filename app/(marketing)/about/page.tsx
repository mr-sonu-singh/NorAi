import React from 'react';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import {
  Zap,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Code2,
  Lock,
  HelpCircle,
  ChevronDown,
  Users,
  Quote,
  Sparkles,
} from 'lucide-react';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/about',
  title: 'About Us & Regional AI Engineering Hub — NorAI Technologies',
  description: 'Operating out of Uttar Pradesh, India, NorAI Technologies builds accessible, modular AI infrastructure and high-frequency micro-SaaS utilities.',
});

const METRICS_DATA = [
  { value: '5+', label: 'Core Micro-Tools', desc: 'Pre-built SaaS agents ready to deploy' },
  { value: '< 1s', label: 'Average Processing', desc: 'Sub-second response time guarantee' },
  { value: '100%', label: 'Automated Pipelines', desc: 'Zero manual intervention required' },
  { value: '24/7', label: 'API Availability', desc: 'Enterprise reliability & 99.9% SLA' },
];

const VALUES_DATA = [
  {
    title: 'Zero Friction',
    desc: 'We build micro-tools that integrate in minutes via simple REST endpoints and zero-configuration dashboards.',
    icon: Zap,
  },
  {
    title: 'Deterministic Precision',
    desc: 'Every neural output is processed through optimized LLM pipelines with strict JSON schemas and verifiable accuracy.',
    icon: ShieldCheck,
  },
  {
    title: 'Architectural Restraint',
    desc: 'No fluff, no bloat. We eliminate unused UI complexity, focusing purely on high-speed execution and reliable outputs.',
    icon: Code2,
  },
  {
    title: 'Developer Trust',
    desc: 'Transparent pricing, predictable API response times, and clear data privacy standards engineered for developers.',
    icon: Lock,
  },
];

const TIMELINE_DATA = [
  {
    phase: '01',
    year: 'Q1 2024',
    title: 'Startup Foundation in UP, India',
    desc: 'NorAI Technologies was founded with a mission to simplify daily digital workflows using lightweight AI micro-tools.',
  },
  {
    phase: '02',
    year: 'Q3 2024',
    title: 'Sub-Second LLM Inference Pipeline',
    desc: 'Achieved sub-1s latency benchmark for document parsing, resume shortlisting, and automated text summarization.',
  },
  {
    phase: '03',
    year: 'Q1 2025',
    title: 'Micro-SaaS Product Suite Launch',
    desc: 'Rolled out AI Resume Shortlister, Course Note-Taker, Community Chat Digest, and Smart Government Job News to business users.',
  },
];

const ABOUT_FAQ = [
  {
    question: 'Where is NorAI Technologies located?',
    answer: 'NorAI Technologies operates out of our regional startup hub in Uttar Pradesh, India, serving global customers across hiring, education, community management, and media sectors.',
  },
  {
    question: 'What makes NorAI different from generic AI wrapper tools?',
    answer: 'We build specialized, lightweight LLM pipelines optimized for specific tasks (like soft-skill resume scoring or lecture note extraction) returning structured JSON with sub-second response times.',
  },
  {
    question: 'Can teams hire NorAI for custom AI development?',
    answer: 'Yes! Beyond our pre-built micro-tools, our engineering team designs custom AI agents, web applications, and enterprise automation pipelines tailored to custom data sources.',
  },
];

export default function AboutPage() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About NorAI Technologies',
    description: 'Engineering accessible, modular AI infrastructure and micro-SaaS utilities.',
    publisher: {
      '@type': 'Organization',
      name: 'NorAI Technologies Pvt. Ltd.',
      url: 'https://norai-c8yy.onrender.com',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'India',
      },
    },
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* Hero Section */}
      <Section className="relative pt-12 pb-14 md:pt-20 md:pb-20 overflow-hidden isolate">
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
            {/* Signature Element: Editorial Location Credit Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-xs font-mono tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-[#DDF7FF]" aria-hidden="true" />
              <span>Founded in Uttar Pradesh, India • Regional AI Innovation</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold text-white tracking-[-0.03em] leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
            >
              Engineering Accessible,{' '}
              <span className="text-[#DDF7FF] underline decoration-[color:var(--accent-mono)/0.6] underline-offset-8">
                Modular AI Infrastructure
              </span>
            </Heading>

            {/* Subhead */}
            <Text
              variant="body-lg"
              className="font-sans font-medium text-[#E8F7FF] max-w-2xl mx-auto leading-[1.8] tracking-[-0.01em] drop-shadow-[0_1px_6px_rgba(0,20,50,0.35)]"
            >
              We specialize in building micro-SaaS utilities and automated pipelines that deliver maximum intelligence with minimal operational friction.
            </Text>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="
                    w-full sm:w-auto
                    bg-[var(--accent-500)]
                    hover:bg-[var(--accent-mono)]
                    text-white
                    font-semibold
                    px-8 py-3.5
                    rounded-lg
                    shadow-lg shadow-[color:var(--accent-500)/0.3]
                    hover:shadow-[color:var(--accent-mono)/0.4]
                    transition-all duration-200
                  "
                >
                  Explore AI Services <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Origin Story & Editorial Pull-Quote */}
      <Section className="py-16 border-y border-blue-400/10 bg-white/30 backdrop-blur-md">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Authentic Story Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[var(--accent-500)] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[var(--accent-500)]" aria-hidden="true" />
                <span>Our Regional Startup Story</span>
              </div>

              <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800 leading-tight">
                High-Frequency AI Utilities for Daily Workflows
              </Heading>

              <Text variant="body-md" className="text-primary-700 leading-relaxed">
                Operating out of Uttar Pradesh, India, NorAI Technologies was established to solve a fundamental problem: modern artificial intelligence is powerful, but often buried inside bloated, complex enterprise software.
              </Text>

              <Text variant="body-md" className="text-primary-700 leading-relaxed">
                We leverage lightweight, highly-optimized text LLM pipelines to provide fast, cost-effective, and highly accurate structured data extraction, candidate shortlisting, note generation, and news briefings.
              </Text>

              <div className="pt-2">
                <Link href="/contact" className="inline-flex items-center text-sm font-mono font-bold text-[var(--accent-500)] hover:text-[var(--accent-mono)]">
                  Talk to Our Regional Team <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Quiet Editorial Pull-Quote Block */}
            <div className="lg:col-span-5">
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  p-8
                  space-y-6

                  bg-white/50
                  backdrop-blur-xl

                  border
                  border-blue-400/20

                  shadow-[0_15px_50px_rgba(59,130,246,0.08)]

                  hover:border-blue-400/35
                  hover:shadow-[0_20px_60px_rgba(59,130,246,0.14)]

                  transition-all
                  duration-500
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute -top-20 -right-20 w-48 h-48 rounded-full
                    bg-blue-500/10 blur-[80px]
                    opacity-60 group-hover:opacity-100
                    transition-opacity duration-500 pointer-events-none
                  "
                />

                <Quote className="relative z-10 w-8 h-8 text-blue-500/40" aria-hidden="true" />
                <p className="relative z-10 text-base text-primary-600 leading-relaxed italic font-serif">
                  &ldquo;Artificial intelligence shouldn&apos;t require complex enterprise contracts or bloated software. Every micro-tool we release must save at least <strong className="text-primary-800 font-sans font-semibold not-italic">10 hours per week</strong> for users while running with sub-second latency.&rdquo;
                </p>
                <div className="relative z-10 pt-4 border-t border-blue-400/10 flex items-center justify-between text-xs font-mono text-primary-700">
                  <span className="font-bold text-primary-800 uppercase tracking-wider">— NorAI Founding Team</span>
                  <span className="text-[var(--accent-mono)]">UP, India</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Metrics Row */}
      <Section className="py-12">
        <Container size="default">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {METRICS_DATA.map((metric, index) => (
              <div
                key={index}
                className="
                  bg-gradient-to-br from-white via-[#F8FBFF] to-[#EEF5FF]
                  border border-blue-400/10
                  rounded-xl p-5 text-center space-y-1.5
                  hover:border-blue-400/30
                  hover:shadow-[0_12px_35px_rgba(46,91,255,0.10)]
                  transition-all duration-300
                "
              >
                <div className="text-3xl md:text-4xl font-extrabold text-blue-600 font-mono">
                  {metric.value}
                </div>
                <div className="text-sm font-display font-bold text-primary-800">
                  {metric.label}
                </div>
                <div className="text-xs text-primary-700 font-mono">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Core Engineering Values */}
      <Section
        className="
          relative
          py-20
          overflow-hidden
          bg-[radial-gradient(circle_at_8%_35%,rgba(59,130,246,0.10),transparent_32%),radial-gradient(circle_at_92%_65%,rgba(139,92,246,0.10),transparent_34%)]
        "
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="
              absolute -left-32 top-20 w-[420px] h-[420px] rounded-full
              bg-blue-500/15 blur-[90px] animate-pulse
            "
            style={{ animationDuration: '4s' }}
          />
          <div
            className="
              absolute -right-32 bottom-10 w-[460px] h-[460px] rounded-full
              bg-violet-500/15 blur-[95px] animate-pulse
            "
            style={{ animationDuration: '5s', animationDelay: '1s' }}
          />
        </div>

        <Container size="default" className="relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
              Core Engineering Values
            </Heading>
            <Text variant="body-md" className="text-primary-700">
              The foundational principles guiding every line of code we ship.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES_DATA.map((val, index) => {
              const IconComp = val.icon;
              return (
                <div
                  key={index}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    p-6
                    space-y-4

                    bg-white/45
                    backdrop-blur-xl

                    border
                    border-blue-400/15

                    hover:-translate-y-1
                    hover:border-blue-400/30
                    hover:shadow-[0_16px_45px_rgba(59,130,246,0.10)]

                    transition-all
                    duration-300
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      absolute -top-16 -right-16 w-32 h-32 rounded-full
                      bg-blue-400/10 blur-3xl
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500 pointer-events-none
                    "
                  />

                  <div
                    className="
                      relative z-10
                      p-3
                      w-fit
                      rounded-xl
                      bg-white/40
                      backdrop-blur-md
                      border
                      border-blue-400/20
                      text-blue-600

                      group-hover:bg-blue-500/10
                      group-hover:border-blue-400/40
                      group-hover:scale-110
                      group-hover:rotate-2

                      transition-all
                      duration-300
                    "
                  >
                    <IconComp className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <Heading
                    as="h4"
                    variant="heading-md"
                    className="relative z-10 font-display font-bold text-primary-800 group-hover:text-blue-600 transition-colors"
                  >
                    {val.title}
                  </Heading>
                  <Text variant="body-xs" className="relative z-10 text-primary-700 leading-relaxed">
                    {val.desc}
                  </Text>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Milestones & Journey Pipeline */}
      <Section className="py-20 border-y border-blue-400/10 bg-white/20 backdrop-blur-sm">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
              NorAI Engineering Journey
            </Heading>
            <Text variant="body-md" className="text-primary-700">
              Key technical milestones on our path to building micro-SaaS AI tools.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIMELINE_DATA.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  p-6
                  space-y-4

                  bg-white/45
                  backdrop-blur-xl

                  border
                  border-blue-400/15

                  hover:-translate-y-1
                  hover:border-blue-400/30
                  hover:shadow-[0_16px_45px_rgba(59,130,246,0.10)]

                  transition-all
                  duration-300
                "
              >
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-[var(--accent-mono)] border border-blue-400/25 font-bold">
                    {item.year}
                  </span>
                  <span className="text-primary-700 font-bold">MILESTONE_{item.phase}</span>
                </div>
                <Heading as="h3" variant="heading-md" className="font-display font-bold text-primary-800 pt-1">
                  {item.title}
                </Heading>
                <Text variant="body-sm" className="text-primary-700 leading-relaxed">
                  {item.desc}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* About FAQ Accordion */}
      <Section className="relative py-20 overflow-hidden bg-[#F3F1FF]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="
              absolute -left-32 top-10 w-[420px] h-[420px] rounded-full
              bg-blue-500/20 blur-[110px] animate-[floatBlue_8s_ease-in-out_infinite]
            "
          />
          <div
            className="
              absolute -right-32 bottom-0 w-[460px] h-[460px] rounded-full
              bg-violet-500/20 blur-[120px] animate-[floatPurple_10s_ease-in-out_infinite]
            "
          />
        </div>

        <Container size="narrow" className="relative z-10">
          <div className="text-center space-y-4 mb-12">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
              About NorAI FAQ
            </Heading>
            <Text variant="body-md" className="text-primary-700">
              Common questions about our organization, mission, and technology.
            </Text>
          </div>

          <div className="space-y-4">
            {ABOUT_FAQ.map((faq, index) => (
              <details
                key={index}
                className="
                  group relative overflow-hidden rounded-xl
                  border border-white/70
                  bg-white/75 backdrop-blur-md
                  p-5
                  shadow-[0_8px_30px_rgba(59,130,246,0.04)]
                  hover:bg-white/85 hover:border-blue-300/40 hover:shadow-[0_15px_40px_rgba(59,130,246,0.10)]
                  transition-all duration-500
                  [&_summary::-webkit-details-marker]:hidden
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute -top-16 -right-16 w-32 h-32 rounded-full
                    bg-blue-400/15 blur-3xl
                    opacity-0 group-open:opacity-100 group-hover:opacity-100
                    transition-opacity duration-500 pointer-events-none
                  "
                />
                <summary className="relative z-10 flex items-center justify-between cursor-pointer font-semibold text-primary-800 text-base">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[var(--accent-500)] flex-shrink-0" aria-hidden="true" />
                    {faq.question}
                  </span>
                  <ChevronDown className="w-4 h-4 text-primary-700 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="relative z-10 mt-4 text-sm text-primary-700 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Conversion Banner */}
      <Section className="py-20 relative overflow-hidden bg-transparent">
        <Container size="default">
          <div className="rounded-2xl border border-blue-400/15 bg-gradient-to-br from-white via-[#F8FAFF] to-[#EEF5FF] p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <Heading as="h2" variant="display-lg" className="font-display font-extrabold text-primary-800">
                Want to Build the Future of AI Tools With Us?
              </Heading>
              <Text variant="body-lg" className="text-primary-700">
                Meet our founding engineering team or explore open positions at NorAI Technologies.
              </Text>
            </div>

            <div className="relative z-10 pt-2 flex justify-center gap-4">
              <Link href="/team">
                <Button
                  variant="primary"
                  size="lg"
                  className="
                    bg-gradient-to-r from-blue-600 to-indigo-600
                    hover:from-blue-700 hover:to-violet-600
                    text-white font-semibold px-10 py-4 rounded-lg
                    shadow-xl shadow-blue-500/20
                    hover:shadow-blue-500/30
                    hover:-translate-y-0.5
                    transition-all duration-300
                  "
                >
                  Meet the Team <Users className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
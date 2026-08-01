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
    desc: 'Rolled out AI Resume Shortlister, Course Note-Taker, Community Chat Digest, and Smart Dainik News to business users.',
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
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-[#0CCAB1] selection:text-[#0B0F17]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* Hero Section */}
      <Section className="relative pt-12 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Signature Element: Editorial Location Credit Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-[#131924] text-slate-300 text-xs font-mono tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
              <span>Founded in Uttar Pradesh, India • Regional AI Innovation</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Engineering Accessible,{' '}
              <span className="text-[#0CCAB1] underline decoration-[#0CCAB1]/40 underline-offset-8">
                Modular AI Infrastructure
              </span>
            </Heading>

            {/* Subhead */}
            <Text variant="body-lg" className="text-slate-300 font-normal leading-relaxed">
              We specialize in building micro-SaaS utilities and automated pipelines that deliver maximum intelligence with minimal operational friction.
            </Text>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/services" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold px-8 py-3.5 rounded-lg shadow-lg shadow-[#0CCAB1]/20 transition-all">
                  Explore AI Services <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/team" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg backdrop-blur-md">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Origin Story & Editorial Pull-Quote */}
      <Section className="py-16 bg-[#131924]/40 border-y border-white/10">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Authentic Story Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#0CCAB1] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" />
                <span>Our Regional Startup Story</span>
              </div>

              <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white leading-tight">
                High-Frequency AI Utilities for Daily Workflows
              </Heading>

              <Text variant="body-md" className="text-slate-300 leading-relaxed">
                Operating out of Uttar Pradesh, India, NorAI Technologies was established to solve a fundamental problem: modern artificial intelligence is powerful, but often buried inside bloated, complex enterprise software.
              </Text>

              <Text variant="body-md" className="text-slate-300 leading-relaxed">
                We leverage lightweight, highly-optimized text LLM pipelines to provide fast, cost-effective, and highly accurate structured data extraction, candidate shortlisting, note generation, and news briefings.
              </Text>

              <div className="pt-2">
                <Link href="/contact" className="inline-flex items-center text-sm font-mono font-bold text-[#0CCAB1] hover:text-[#45F7D6]">
                  Talk to Our Regional Team <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Quiet Editorial Pull-Quote Block */}
            <div className="lg:col-span-5">
              <div className="p-8 bg-[#131924] border border-white/10 rounded-xl space-y-6 relative">
                <Quote className="w-8 h-8 text-[#0CCAB1]/40" aria-hidden="true" />
                <p className="text-base text-slate-200 leading-relaxed italic font-serif">
                  &ldquo;Artificial intelligence shouldn&apos;t require complex enterprise contracts or bloated software. Every micro-tool we release must save at least <strong className="text-white font-sans font-semibold not-italic">10 hours per week</strong> for users while running with sub-second latency.&rdquo;
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="font-bold text-white uppercase tracking-wider">— NorAI Founding Team</span>
                  <span className="text-[#45F7D6]">UP, India</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Metrics Row */}
      <Section className="py-12 border-b border-white/10 bg-[#0B0F17]">
        <Container size="default">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {METRICS_DATA.map((metric, index) => (
              <div key={index} className="bg-[#131924] border border-white/10 rounded-lg p-5 text-center space-y-1.5">
                <div className="text-3xl md:text-4xl font-extrabold text-[#0CCAB1] font-mono">
                  {metric.value}
                </div>
                <div className="text-sm font-display font-bold text-white">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Core Engineering Values */}
      <Section className="py-20">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Core Engineering Values
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              The foundational principles guiding every line of code we ship.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES_DATA.map((val, index) => {
              const IconComp = val.icon;
              return (
                <div key={index} className="bg-[#131924] border border-white/10 rounded-xl p-6 space-y-4 hover:border-[#0CCAB1]/40 transition-all">
                  <div className="p-3 w-fit rounded-lg bg-[#0CCAB1]/10 border border-[#0CCAB1]/20 text-[#0CCAB1]">
                    <IconComp className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <Heading as="h4" variant="heading-md" className="font-display font-bold text-white">
                    {val.title}
                  </Heading>
                  <Text variant="body-xs" className="text-slate-300 leading-relaxed">
                    {val.desc}
                  </Text>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Milestones & Journey Pipeline */}
      <Section className="py-20 bg-[#131924]/40 border-y border-white/10">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              NorAI Engineering Journey
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Key technical milestones on our path to building micro-SaaS AI tools.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIMELINE_DATA.map((item, index) => (
              <div key={index} className="bg-[#131924] border border-white/10 rounded-xl p-6 space-y-4 hover:border-[#0CCAB1]/40 transition-all">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="px-2.5 py-1 rounded bg-[#0CCAB1]/10 text-[#45F7D6] border border-[#0CCAB1]/20 font-bold">
                    {item.year}
                  </span>
                  <span className="text-slate-500 font-bold">MILESTONE_{item.phase}</span>
                </div>
                <Heading as="h3" variant="heading-md" className="font-display font-bold text-white pt-1">
                  {item.title}
                </Heading>
                <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                  {item.desc}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* About FAQ Accordion */}
      <Section className="py-20">
        <Container size="narrow">
          <div className="text-center space-y-4 mb-12">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              About NorAI FAQ
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Common questions about our organization, mission, and technology.
            </Text>
          </div>

          <div className="space-y-4">
            {ABOUT_FAQ.map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-white/10 bg-[#131924] p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-base">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#0CCAB1] flex-shrink-0" aria-hidden="true" />
                    {faq.question}
                  </span>
                  <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-4 text-sm text-slate-300 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Conversion Banner */}
      <Section className="py-20 relative overflow-hidden">
        <Container size="default">
          <div className="rounded-2xl border border-white/10 bg-[#131924] p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <Heading as="h2" variant="display-lg" className="font-display font-extrabold text-white">
                Want to Build the Future of AI Tools With Us?
              </Heading>
              <Text variant="body-lg" className="text-slate-300">
                Meet our founding engineering team or explore open positions at NorAI Technologies.
              </Text>
            </div>

            <div className="relative z-10 pt-2 flex justify-center gap-4">
              <Link href="/team">
                <Button variant="primary" size="lg" className="bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold px-10 py-4 rounded-lg shadow-xl shadow-[#0CCAB1]/20">
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

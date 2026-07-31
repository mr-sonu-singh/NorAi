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
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Cpu,
  Code2,
  Lock,
  Layers,
  HelpCircle,
  ChevronDown,
  Building2,
  Users,
} from 'lucide-react';

export const metadata = buildMetadata({
  path: '/about',
  title: 'About Us — NorAI Technologies',
  description: 'Learn about NorAI Technologies: Our regional startup hub in Uttar Pradesh, India, building accessible micro-SaaS utilities and verifiable AI infrastructure.',
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
    year: 'Q1 2024',
    title: 'Startup Foundation in UP, India',
    desc: 'NorAI Technologies was founded with a mission to simplify daily digital workflows using lightweight AI micro-tools.',
  },
  {
    year: 'Q3 2024',
    title: 'Sub-Second LLM Inference Pipeline',
    desc: 'Achieved sub-1s latency benchmark for document parsing, resume shortlisting, and automated text summarization.',
  },
  {
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
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* Hero Section */}
      <Section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>About NorAI Technologies</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-extrabold tracking-tight text-white leading-tight"
            >
              Engineering Accessible,{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
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
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30">
                  Explore AI Services <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </Button>
              </Link>
              <Link href="/team" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-xl backdrop-blur-md">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Origin Story & Regional Hub Card */}
      <Section className="py-16 bg-slate-950/40 border-y border-white/10">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Story Text Column */}
            <div className="md:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Regional Startup Hub • Uttar Pradesh, India</span>
              </div>

              <Heading as="h2" variant="display-md" className="font-extrabold text-white">
                High-Frequency AI Utilities for Daily Workflows
              </Heading>

              <Text variant="body-md" className="text-slate-300 leading-relaxed">
                Operating out of Uttar Pradesh, India, NorAI Technologies was established to solve a fundamental problem: modern artificial intelligence is powerful, but often buried inside bloated, complex enterprise software.
              </Text>

              <Text variant="body-md" className="text-slate-300 leading-relaxed">
                We leverage lightweight, highly-optimized text LLM pipelines to provide fast, cost-effective, and highly accurate structured data extraction, candidate shortlisting, note generation, and news briefings.
              </Text>

              <div className="pt-2">
                <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300">
                  Talk to Our Regional Team <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

            {/* Impact Highlights Card */}
            <div className="md:col-span-5">
              <TiltCard className="p-8 space-y-6 bg-slate-900/80 border border-blue-500/30">
                <Heading as="h3" variant="heading-lg" className="font-bold text-white">
                  The NorAI Philosophy
                </Heading>
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                  <p>
                    Every micro-tool we release must save at least <strong className="text-white">10 hours per week</strong> for users while running with sub-second latency.
                  </p>
                  <p>
                    We believe in transparent pricing, clean API contracts, and non-intrusive data privacy standards.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs font-mono text-blue-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>100% Verifiable & Automated Pipelines</span>
                </div>
              </TiltCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* Metrics Section */}
      <Section className="py-12 border-b border-white/10 bg-slate-950/60">
        <Container size="default">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {METRICS_DATA.map((metric, index) => (
              <div key={index} className="text-center space-y-1">
                <div className="text-3xl md:text-4xl font-extrabold text-blue-400 font-mono">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-white">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-400">
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
            <Heading as="h2" variant="display-md" className="font-extrabold text-white">
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
                <TiltCard key={index} className="space-y-4 p-6 bg-slate-900/60">
                  <div className="p-3 w-fit rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <Heading as="h4" variant="heading-md" className="font-bold text-white">
                    {val.title}
                  </Heading>
                  <Text variant="body-xs" className="text-slate-300 leading-relaxed">
                    {val.desc}
                  </Text>
                </TiltCard>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Milestones & Journey Timeline */}
      <Section className="py-20 bg-slate-950/60 border-y border-white/10">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-extrabold text-white">
              NorAI Engineering Journey
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Key technical milestones on our path to building micro-SaaS AI tools.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TIMELINE_DATA.map((item, index) => (
              <TiltCard key={index} className="space-y-4 p-8 bg-slate-900/70 border border-white/10">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  {item.year}
                </span>
                <Heading as="h3" variant="heading-md" className="font-bold text-white pt-2">
                  {item.title}
                </Heading>
                <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                  {item.desc}
                </Text>
              </TiltCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* About FAQ Accordion */}
      <Section className="py-20">
        <Container size="narrow">
          <div className="text-center space-y-4 mb-12">
            <Heading as="h2" variant="display-md" className="font-extrabold text-white">
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
                className="group rounded-xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-base">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" />
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
          <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-950/60 to-slate-900/80 p-12 text-center space-y-6 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-blue-500/10">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <Heading as="h2" variant="display-lg" className="font-extrabold text-white">
                Want to Build the Future of AI Tools With Us?
              </Heading>
              <Text variant="body-lg" className="text-slate-300">
                Meet our founding engineering team or explore open positions at NorAI Technologies.
              </Text>
            </div>

            <div className="relative z-10 pt-2 flex justify-center gap-4">
              <Link href="/team">
                <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-xl shadow-xl shadow-blue-600/40">
                  Meet the Team <Users className="w-4 h-4 ml-2 inline-block" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

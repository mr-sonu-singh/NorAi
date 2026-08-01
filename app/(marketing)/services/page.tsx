'use client';

import React, { useState } from 'react';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import {
  Sparkles,
  Zap,
  ArrowRight,
  Bot,
  Globe,
  Video,
  Workflow,
  Cpu,
  Layers,
  HelpCircle,
  ChevronDown,
  Clock,
  Lock,
  Terminal,
  Activity,
  CheckCircle2,
} from 'lucide-react';

const MICRO_TOOLS_DATA = [
  {
    id: 'AGENT_01',
    title: 'AI Resume Shortlister',
    badge: 'Recruitment AI',
    desc: 'Parse, score, and rank candidate resumes against job requirements with automated skill extraction and qualification matching.',
    icon: Sparkles,
    latency: '< 0.35s',
  },
  {
    id: 'AGENT_02',
    title: 'Course Note-Taker',
    badge: 'EdTech AI',
    desc: 'Convert YouTube lectures, audio recordings, and slides into structured study notes, flashcards, key takeaways, and quizzes.',
    icon: Zap,
    latency: '< 0.41s',
  },
  {
    id: 'AGENT_03',
    title: 'Community Chat Digest',
    badge: 'Community AI',
    desc: 'Digest noisy Telegram, Discord, and Slack channels into executive daily briefs highlighting customer feedback and action items.',
    icon: Cpu,
    latency: '< 0.28s',
  },
  {
    id: 'AGENT_04',
    title: 'Smart Dainik News',
    badge: 'Media AI',
    desc: 'Curate hyper-local regional news and market updates filtered by sentiment, relevance, and interest categories.',
    icon: Layers,
    latency: '< 0.45s',
  },
];

const CUSTOM_SERVICES_DATA = [
  {
    id: 'ENTERPRISE_01',
    title: 'Custom AI Chatbots & Agents',
    badge: 'Enterprise AI',
    featured: true,
    desc: 'Deploy autonomous conversational agents trained on your proprietary docs, CRM records, and internal knowledge bases with strict RAG context validation and grounded source citations.',
    icon: Bot,
    highlights: ['Strict RAG Context Validation', 'Enterprise CRM & Vector DB Sync', 'Grounded Source Citations'],
  },
  {
    id: 'ENTERPRISE_02',
    title: 'AI Web Applications',
    badge: 'Full-Stack Web',
    featured: false,
    desc: 'Build modern Next.js and React web applications powered by sub-second neural inference, dynamic UI generation, and deterministic workflow engines.',
    icon: Globe,
    highlights: ['Next.js 15 & React 19 Stack', 'Sub-100ms Inference Endpoints'],
  },
  {
    id: 'ENTERPRISE_03',
    title: 'AI Video & Product Ads',
    badge: 'Synthetic Media',
    featured: false,
    desc: 'Generate automated product showcase videos, localized AI voiceovers, and high-converting visual ad creatives at 10x lower cost than traditional studios.',
    icon: Video,
    highlights: ['Multi-Lingual Voice Synthesis', 'Automated Rendering Pipelines'],
  },
  {
    id: 'ENTERPRISE_04',
    title: 'Business Automation Pipelines',
    badge: 'Workflow Engineering',
    featured: false,
    desc: 'Automate manual data entry, ERP ingestion, compliance auditing, and multi-app sync with fault-tolerant background workers and webhooks.',
    icon: Workflow,
    highlights: ['Fault-Tolerant Worker Queues', 'Webhook & REST Orchestration'],
  },
];

const ENGAGEMENT_STEPS = [
  {
    step: '01',
    title: 'Workflow Audit & Scope',
    desc: 'We analyze your data bottlenecks, latency targets, and integration requirements during an initial technical deep-dive.',
  },
  {
    step: '02',
    title: 'Rapid Prototype & SLA Benchmark',
    desc: 'We build a functional AI pipeline prototype in days to validate accuracy, processing speed, and cost efficiency.',
  },
  {
    step: '03',
    title: 'Production Deploy & Monitoring',
    desc: 'We plug the solution into your stack with 24/7 automated uptime monitoring, redundancy failover, and SLA guarantees.',
  },
];

const SERVICES_FAQ = [
  {
    question: 'What is the difference between your pre-built micro-tools and custom services?',
    answer: 'Pre-built micro-tools (Resume Shortlister, Note-Taker, Chat Digest, Smart News) are ready to use immediately via API or dashboard. Custom services involve engineering bespoke AI pipelines, agents, or web applications tailored to your proprietary data.',
  },
  {
    question: 'How fast can a custom AI service be deployed?',
    answer: 'Prototypes are usually delivered within 3-5 days. Full enterprise production deployments with webhooks and SLA guarantees typically take 1 to 2 weeks.',
  },
  {
    question: 'Can we run NorAI models on our private cloud or on-premise?',
    answer: 'Yes! For enterprise clients with strict data residency requirements, we offer private cloud deployments (AWS, Azure, GCP) and dedicated isolated clusters.',
  },
  {
    question: 'How do you handle data privacy and security?',
    answer: 'All data is encrypted using AES-256 at rest and TLS 1.3 in transit. We enforce strict data isolation policies and never use customer data for public LLM training.',
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'micro' | 'custom'>('all');

  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-[#0CCAB1] selection:text-[#0B0F17]">
      {/* Hero Section */}
      <Section className="relative pt-12 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0CCAB1]/30 bg-[#0CCAB1]/10 text-[#45F7D6] text-xs font-mono tracking-wide uppercase">
              <Terminal className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
              <span>Modular AI Solutions & Enterprise Engineering</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Modular AI Solutions for{' '}
              <span className="text-[#0CCAB1] underline decoration-[#0CCAB1]/40 underline-offset-8">
                High-Scale Workflows
              </span>
            </Heading>

            {/* Subhead */}
            <Text variant="body-lg" className="text-slate-300 font-normal leading-relaxed">
              Whether you need pre-configured micro-SaaS utilities or bespoke AI pipeline engineering, NorAI delivers sub-second intelligence tailored to your business goals.
            </Text>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold px-8 py-3.5 rounded-lg shadow-lg shadow-[#0CCAB1]/20 transition-all">
                  Schedule Technical Scope <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/pricing" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg backdrop-blur-md">
                  View Pricing Tiers
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Signature Element: Solution Architecture Selector Bar */}
      <Section className="py-4 border-y border-white/10 bg-[#131924]/60">
        <Container size="default">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <Activity className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" />
              <span className="font-bold text-white uppercase tracking-wider">Catalog Filter:</span>
              <span className="text-[#45F7D6]">● 8 Total Solutions</span>
            </div>

            {/* Filter Segment Buttons */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Services Catalog Filter">
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'all'}
                onClick={() => setActiveCategory('all')}
                className={`px-3.5 py-1.5 rounded transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0CCAB1] ${
                  activeCategory === 'all'
                    ? 'bg-[#0CCAB1] text-[#0B0F17] font-bold'
                    : 'bg-[#0B0F17] text-slate-400 border border-white/10 hover:text-white'
                }`}
              >
                [ALL SOLUTIONS]
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'micro'}
                onClick={() => setActiveCategory('micro')}
                className={`px-3.5 py-1.5 rounded transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0CCAB1] ${
                  activeCategory === 'micro'
                    ? 'bg-[#0CCAB1] text-[#0B0F17] font-bold'
                    : 'bg-[#0B0F17] text-slate-400 border border-white/10 hover:text-white'
                }`}
              >
                [01] MICRO-SAAS (4)
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'custom'}
                onClick={() => setActiveCategory('custom')}
                className={`px-3.5 py-1.5 rounded transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0CCAB1] ${
                  activeCategory === 'custom'
                    ? 'bg-[#0CCAB1] text-[#0B0F17] font-bold'
                    : 'bg-[#0B0F17] text-slate-400 border border-white/10 hover:text-white'
                }`}
              >
                [02] ENTERPRISE (4)
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Category 1: Pre-Built Micro-SaaS Tools Grid */}
      {(activeCategory === 'all' || activeCategory === 'micro') && (
        <Section className="py-16">
          <Container size="default">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <div className="text-xs font-mono text-[#0CCAB1] uppercase font-bold tracking-widest">
                Category 01 • Instant Deploy
              </div>
              <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
                Pre-Built Micro-SaaS Utilities
              </Heading>
              <Text variant="body-md" className="text-slate-400">
                Instant-deploy AI agents accessible via web dashboards or REST API endpoints.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MICRO_TOOLS_DATA.map((tool) => {
                const IconComp = tool.icon;
                return (
                  <div
                    key={tool.id}
                    className="bg-[#131924] border border-white/10 rounded-xl p-6 flex flex-col justify-between space-y-6 hover:border-[#0CCAB1]/40 transition-all group"
                  >
                    <div className="space-y-4">
                      {/* Top Monospace Header Bar */}
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-500 font-bold tracking-wider">{tool.id}</span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#0CCAB1]/10 text-[#45F7D6] border border-[#0CCAB1]/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#45F7D6] animate-pulse" />
                          READY TO DEPLOY
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-[#0CCAB1]/10 border border-[#0CCAB1]/20 text-[#0CCAB1] group-hover:scale-105 transition-transform">
                          <IconComp className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                          <Heading as="h3" variant="heading-lg" className="font-display font-bold text-white group-hover:text-[#0CCAB1] transition-colors">
                            {tool.title}
                          </Heading>
                          <span className="text-[11px] font-mono text-slate-400">{tool.badge}</span>
                        </div>
                      </div>

                      <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                        {tool.desc}
                      </Text>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" /> {tool.latency} Latency
                      </span>
                      <Link href="/contact" className="inline-flex items-center font-bold text-[#0CCAB1] group-hover:text-[#45F7D6]">
                        Deploy Tool <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* Category 2: Custom Enterprise AI Services (Asymmetrical Architecture Matrix) */}
      {(activeCategory === 'all' || activeCategory === 'custom') && (
        <Section className="py-16 bg-[#131924]/40 border-t border-white/10">
          <Container size="default">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <div className="text-xs font-mono text-[#0CCAB1] uppercase font-bold tracking-widest">
                Category 02 • Bespoke Engineering
              </div>
              <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
                Custom Enterprise AI Services
              </Heading>
              <Text variant="body-md" className="text-slate-400">
                Tailored AI agents, web applications, and automated pipelines engineered for your exact business logic.
              </Text>
            </div>

            {/* Asymmetrical Matrix: Featured Hero Card + 3-Card Grid */}
            <div className="space-y-6">
              {/* Featured Anchor Card: Custom AI Chatbots & Agents */}
              {CUSTOM_SERVICES_DATA.filter((s) => s.featured).map((srv) => {
                const IconComp = srv.icon;
                return (
                  <div
                    key={srv.id}
                    className="bg-[#131924] border-2 border-[#0CCAB1]/60 rounded-xl p-8 space-y-6 relative overflow-hidden shadow-xl shadow-[#0CCAB1]/10"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-[#0CCAB1]/10 border border-[#0CCAB1]/30 text-[#0CCAB1]">
                          <IconComp className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold text-[#45F7D6] uppercase tracking-wider">{srv.id} • {srv.badge}</span>
                          <Heading as="h3" variant="heading-xl" className="font-display font-bold text-white">
                            {srv.title}
                          </Heading>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded bg-[#0CCAB1] text-[#0B0F17] text-xs font-mono font-bold uppercase tracking-wider w-fit">
                        FLAGSHIP ENTERPRISE SOLUTION
                      </span>
                    </div>

                    <Text variant="body-md" className="text-slate-300 max-w-3xl leading-relaxed">
                      {srv.desc}
                    </Text>

                    {/* Architecture Highlights Pill Row */}
                    <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                      {srv.highlights.map((h, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0B0F17] border border-white/10 text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" /> {h}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" /> Strict Private Data Isolation SLA
                      </span>
                      <Link href="/contact">
                        <Button variant="primary" size="md" className="bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold px-6 py-2.5 rounded-lg shadow-md shadow-[#0CCAB1]/20">
                          Scope Enterprise Solution <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}

              {/* 3 Secondary Enterprise Solution Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CUSTOM_SERVICES_DATA.filter((s) => !s.featured).map((srv) => {
                  const IconComp = srv.icon;
                  return (
                    <div
                      key={srv.id}
                      className="bg-[#131924] border border-white/10 rounded-xl p-6 flex flex-col justify-between space-y-6 hover:border-[#0CCAB1]/40 transition-all group"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-500 font-bold">{srv.id}</span>
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-[#45F7D6] border border-white/10">{srv.badge}</span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-[#0CCAB1]/10 border border-[#0CCAB1]/20 text-[#0CCAB1] w-fit group-hover:scale-105 transition-transform">
                          <IconComp className="w-5 h-5" aria-hidden="true" />
                        </div>

                        <Heading as="h3" variant="heading-lg" className="font-display font-bold text-white group-hover:text-[#0CCAB1] transition-colors">
                          {srv.title}
                        </Heading>

                        <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                          {srv.desc}
                        </Text>
                      </div>

                      <div className="pt-4 border-t border-white/5 space-y-3">
                        <div className="space-y-1">
                          {srv.highlights.map((h, i) => (
                            <div key={i} className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-[#0CCAB1]" /> {h}
                            </div>
                          ))}
                        </div>
                        <Link href="/contact" className="inline-flex items-center text-xs font-mono font-bold text-[#0CCAB1] group-hover:text-[#45F7D6]">
                          Scope Solution <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Engagement Model Section: Connected Horizontal Pipeline */}
      <Section className="py-20 border-t border-white/10">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Our Engagement Model
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Three transparent phases from technical scoping to production SLA guarantees.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_STEPS.map((step, index) => (
              <div key={index} className="bg-[#131924] border border-white/10 rounded-xl p-6 space-y-4 hover:border-[#0CCAB1]/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold font-mono text-[#0CCAB1] bg-[#0CCAB1]/10 px-3 py-1 rounded border border-[#0CCAB1]/30">
                    {step.step}
                  </span>
                  {index < ENGAGEMENT_STEPS.length - 1 && (
                    <span className="hidden md:block text-slate-600 font-mono text-xs">PHASE &#8594;</span>
                  )}
                </div>
                <Heading as="h3" variant="heading-md" className="font-display font-bold text-white">
                  {step.title}
                </Heading>
                <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                  {step.desc}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services FAQ */}
      <Section className="py-20 bg-[#131924]/40 border-t border-white/10">
        <Container size="narrow">
          <div className="text-center space-y-4 mb-12">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Services FAQ
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Common questions about integration, data security, and service delivery.
            </Text>
          </div>

          <div className="space-y-4">
            {SERVICES_FAQ.map((faq, index) => (
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
                Ready to Automate Your Business Operations?
              </Heading>
              <Text variant="body-lg" className="text-slate-300">
                Contact our AI solution architects today for a technical consultation and live product demonstration.
              </Text>
            </div>

            <div className="relative z-10 pt-2 flex justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold px-10 py-4 rounded-lg shadow-xl shadow-[#0CCAB1]/20">
                  Schedule Free Technical Scope <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

import React from 'react';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import {
  ArrowRight,
  Bot,
  Globe,
  Video,
  Workflow,
  HelpCircle,
  ChevronDown,
  Lock,
  Terminal,
  Activity,
  CheckCircle2,
  Package,
  Database,
  Server,
  BarChart2,
  Sparkles,
  Construction,
  FlaskConical,
} from 'lucide-react';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/services',
  title: 'Enterprise AI Services & Readiness Matrix — NorAI Technologies',
  description: 'Bespoke AI agent orchestration, custom RAG vector search, MCP tool servers, and automated pipelines across 3 visual confidence tiers.',
});

const TIER_1_ACTIVE_SERVICES = [
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
    title: 'RAG Systems',
    badge: 'Knowledge Retrieval',
    featured: false,
    desc: 'Build enterprise vector search pipelines, hybrid retrieval-augmented generation (RAG), and multi-document indexing engines for high-accuracy knowledge retrieval.',
    icon: Database,
    highlights: ['Vector DB & Hybrid Search', 'Document Chunking & Embeddings', 'Grounded Context Verification'],
  },
  {
    id: 'ENTERPRISE_03',
    title: 'MCP Integration',
    badge: 'Protocol Tooling',
    featured: false,
    desc: 'Implement Model Context Protocol (MCP) tool servers connecting Claude and AI assistants directly to your databases, internal APIs, and developer tooling.',
    icon: Server,
    highlights: ['Standardized MCP Protocol', 'Custom Tool & Resource Servers', 'Secure Execution Handlers'],
  },
  {
    id: 'ENTERPRISE_04',
    title: 'LLM Consulting & Auditing',
    badge: 'Model Optimization',
    featured: false,
    desc: 'Evaluate model performance, optimize prompt engineering pipelines, audit token consumption costs, and implement latency benchmarks across your LLM stack.',
    icon: BarChart2,
    highlights: ['Token & Cost Optimization', 'Latency & Benchmark Audits', 'Prompt & Model Evaluation'],
  },
  {
    id: 'ENTERPRISE_05',
    title: 'AI Web Applications',
    badge: 'Full-Stack Web',
    featured: false,
    desc: 'Build modern Next.js and React web applications powered by sub-second neural inference, dynamic UI generation, and deterministic workflow engines.',
    icon: Globe,
    highlights: ['Next.js 15 & React 19 Stack', 'Sub-100ms Inference Endpoints'],
  },
  {
    id: 'ENTERPRISE_06',
    title: 'AI Video & Product Ads',
    badge: 'Synthetic Media',
    featured: false,
    desc: 'Generate automated product showcase videos, localized AI voiceovers, and high-converting visual ad creatives at 10x lower cost than traditional studios.',
    icon: Video,
    highlights: ['Multi-Lingual Voice Synthesis', 'Automated Rendering Pipelines'],
  },
  {
    id: 'ENTERPRISE_07',
    title: 'Business Automation Pipelines',
    badge: 'Workflow Engineering',
    featured: false,
    desc: 'Automate manual data entry, ERP ingestion, compliance auditing, and multi-app sync with fault-tolerant background workers and webhooks.',
    icon: Workflow,
    highlights: ['Fault-Tolerant Worker Queues', 'Webhook & REST Orchestration'],
  },
];

const TIER_2_EARLY_ACCESS_SERVICE = {
  id: 'EARLY_01',
  title: 'Enterprise AI Transformation',
  badge: 'Early Access Practice',
  desc: 'Comprehensive technical audit and modernization roadmap to integrate AI workflows into legacy enterprise software and operational pipelines. We are currently onboarding select enterprise pilot partners.',
  icon: Sparkles,
  highlights: ['Legacy System Audit', 'Early Access Onboarding', 'Architecture Modernization'],
};

const TIER_3_SCAFFOLD_ITEM = {
  id: 'SCAFFOLD_01',
  title: 'Agent Development (Multi-Agent Orchestration)',
  badge: 'Provisional R&D Scaffold',
  desc: 'Architectural research blueprint for multi-agent autonomous orchestration, task decomposition, and inter-agent communication protocols. This represents future backend engineering research and is not currently offered for commercial client scoping.',
  icon: Construction,
};

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
    question: 'How do service readiness tiers work (Active vs. Early Access vs. Scaffold)?',
    answer: 'Active Core Services (Chatbots, RAG, MCP, LLM Auditing, Web Apps, Video, Pipelines) are shipped commercial offerings. Early Access Practices (Enterprise Transformation) are active programs currently onboarding select pilot clients. Scaffold items (Agent Development) represent internal R&D research blueprints not currently open for commercial scoping.',
  },
  {
    question: 'What is the difference between your self-serve products and enterprise services?',
    answer: 'Our self-serve products (available on our Products page) are ready-to-deploy tools accessible via instant sign-up. Custom enterprise services on this page involve engineering bespoke AI pipelines, agents, or full-stack applications tailored to your exact business logic and security policies.',
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
  const flagshipService = TIER_1_ACTIVE_SERVICES.find((s) => s.featured);
  const secondaryServices = TIER_1_ACTIVE_SERVICES.filter((s) => !s.featured);

  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-[#0CCAB1] selection:text-[#0B0F17]">
      {/* Hero Section */}
      <Section className="relative pt-12 pb-14 md:pt-20 md:pb-16 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0CCAB1]/30 bg-[#0CCAB1]/10 text-[#45F7D6] text-xs font-mono tracking-wide uppercase">
              <Terminal className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
              <span>Enterprise AI Architecture &amp; Custom Engineering</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Bespoke AI Services for{' '}
              <span className="text-[#0CCAB1] underline decoration-[#0CCAB1]/40 underline-offset-8">
                Enterprise Workflows
              </span>
            </Heading>

            {/* Subhead */}
            <Text variant="body-lg" className="text-slate-300 font-normal leading-relaxed">
              We design, build, and deploy custom conversational agents, RAG search systems, MCP tool servers, full-stack web applications, synthetic media engines, and automated backend pipelines.
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

            {/* Quiet Teaser Linking to /products */}
            <div className="pt-2">
              <Link href="/products" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-[#131924]/60 text-slate-300 hover:text-white hover:border-[#0CCAB1]/40 transition-all text-xs font-mono group">
                <Package className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
                <span>Looking for ready-to-deploy tools instead?</span>
                <span className="text-[#0CCAB1] font-bold group-hover:translate-x-0.5 transition-transform">
                  Explore NorAI Products &rarr;
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Signature Element: Telemetry Bar */}
      <Section className="py-4 border-y border-white/10 bg-[#131924]/60">
        <Container size="default">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <Activity className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" />
              <span className="font-bold text-white uppercase tracking-wider">Catalog Scope:</span>
              <span className="text-[#45F7D6]">● 7 Active Services | 1 Early Access | 1 R&amp;D Scaffold</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#45F7D6] bg-[#0B0F17] px-3 py-1 rounded border border-white/10">
                <Lock className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
                TRANSPARENT SERVICE MATURITY MATRIX
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* TIER 1: ACTIVE CORE ENTERPRISE SERVICES */}
      <Section className="py-16">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-mono text-[#0CCAB1] uppercase font-bold tracking-widest">
              Tier 01 • Active Shipped Services
            </div>
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Core Consultative Services
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Fully active, commercial offerings ready for enterprise scoping and production deployment.
            </Text>
          </div>

          <div className="space-y-6">
            {/* Flagship Hero Card: Custom AI Chatbots & Agents */}
            {flagshipService && (
              <div
                key={flagshipService.id}
                className="bg-[#131924] border-2 border-[#0CCAB1]/60 rounded-xl p-8 space-y-6 relative overflow-hidden shadow-xl shadow-[#0CCAB1]/10"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#0CCAB1]/10 border border-[#0CCAB1]/30 text-[#0CCAB1]">
                      <Bot className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#45F7D6] uppercase tracking-wider">{flagshipService.id} • {flagshipService.badge}</span>
                      <Heading as="h3" variant="heading-xl" className="font-display font-bold text-white">
                        {flagshipService.title}
                      </Heading>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded bg-[#0CCAB1] text-[#0B0F17] text-xs font-mono font-bold uppercase tracking-wider w-fit">
                    FLAGSHIP ENTERPRISE SOLUTION
                  </span>
                </div>

                <Text variant="body-md" className="text-slate-300 max-w-3xl leading-relaxed">
                  {flagshipService.desc}
                </Text>

                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                  {flagshipService.highlights.map((h, i) => (
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
            )}

            {/* 6 Active Secondary Solution Cards Grid (2x3) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryServices.map((srv) => {
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

      {/* TIER 2: EARLY ACCESS / EMERGING PRACTICE */}
      <Section className="py-12 border-t border-white/10 bg-[#131924]/30">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
            <div className="text-xs font-mono text-[#45F7D6] uppercase font-bold tracking-widest">
              Tier 02 • Early Access Practice
            </div>
            <Heading as="h2" variant="heading-xl" className="font-display font-extrabold text-white">
              Emerging Enterprise Programs
            </Heading>
          </div>

          <div className="max-w-4xl mx-auto bg-[#131924] border border-[#0CCAB1]/40 rounded-xl p-8 space-y-6 relative overflow-hidden shadow-lg shadow-[#0CCAB1]/5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#0CCAB1]/10 border border-[#0CCAB1]/30 text-[#0CCAB1]">
                  <Sparkles className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#45F7D6] uppercase tracking-wider">
                    {TIER_2_EARLY_ACCESS_SERVICE.id} • {TIER_2_EARLY_ACCESS_SERVICE.badge}
                  </span>
                  <Heading as="h3" variant="heading-xl" className="font-display font-bold text-white">
                    {TIER_2_EARLY_ACCESS_SERVICE.title}
                  </Heading>
                </div>
              </div>
              <span className="px-3 py-1 rounded bg-[#45F7D6]/10 text-[#45F7D6] border border-[#45F7D6]/30 text-xs font-mono font-bold uppercase tracking-wider w-fit">
                EARLY ACCESS PILOT PROGRAM
              </span>
            </div>

            <Text variant="body-md" className="text-slate-300 leading-relaxed">
              {TIER_2_EARLY_ACCESS_SERVICE.desc}
            </Text>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              {TIER_2_EARLY_ACCESS_SERVICE.highlights.map((h, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0B0F17] border border-white/10 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#45F7D6]" aria-hidden="true" /> {h}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <FlaskConical className="w-3.5 h-3.5 text-[#45F7D6]" aria-hidden="true" /> Active Early Access Program — Onboarding Pilot Partners
              </span>
              <Link href="/contact">
                <Button variant="secondary" size="md" className="border-[#0CCAB1]/40 bg-[#0CCAB1]/10 text-[#45F7D6] hover:bg-[#0CCAB1]/20 font-semibold px-6 py-2 rounded-lg">
                  Inquire for Pilot Scope &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* TIER 3: PROVISIONAL R&D SCAFFOLD */}
      <Section className="py-12 border-t border-white/10 bg-[#0B0F17]/60">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
            <div className="text-xs font-mono text-amber-400 uppercase font-bold tracking-widest">
              Tier 03 • Provisional R&amp;D Scaffold
            </div>
            <Heading as="h2" variant="heading-xl" className="font-display font-extrabold text-white">
              Architecture Roadmap
            </Heading>
          </div>

          <div className="max-w-4xl mx-auto bg-[#0B0F17]/80 border-2 border-dashed border-slate-700/80 rounded-xl p-8 space-y-6 relative overflow-hidden opacity-85">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Construction className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    {TIER_3_SCAFFOLD_ITEM.id} • {TIER_3_SCAFFOLD_ITEM.badge}
                  </span>
                  <Heading as="h3" variant="heading-xl" className="font-display font-bold text-slate-200">
                    {TIER_3_SCAFFOLD_ITEM.title}
                  </Heading>
                </div>
              </div>
              <span className="px-3 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold uppercase tracking-wider w-fit">
                UNDER ACTIVE R&amp;D
              </span>
            </div>

            <Text variant="body-md" className="text-slate-400 leading-relaxed">
              {TIER_3_SCAFFOLD_ITEM.desc}
            </Text>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
              <span className="text-amber-400/90 flex items-center gap-1.5">
                <Construction className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" /> PROVISIONAL SCAFFOLD — NOT OFFERED FOR COMMERCIAL SCOPING
              </span>
              <div className="px-4 py-2 rounded bg-slate-900 border border-slate-800 text-slate-500 font-bold uppercase tracking-wider cursor-not-allowed">
                [IN DEVELOPMENT • NO ACTIVE INQUIRIES]
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Engagement Model Section */}
      <Section className="py-20 border-t border-white/10 bg-[#131924]/40">
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
                    <span className="hidden md:block text-slate-400 font-mono text-xs">PHASE &rarr;</span>
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
      <Section className="py-20 border-t border-white/10">
        <Container size="narrow">
          <div className="text-center space-y-4 mb-12">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Services FAQ
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Common questions about service maturity, integration, data security, and delivery.
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

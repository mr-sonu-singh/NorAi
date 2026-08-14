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
      <Section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden isolate">
        {/* Cover Image — place your file at /public/images/services-hero-cover.jpg
            backgroundColor is a fallback if the image fails to load, keeping white text readable. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundColor: 'var(--primary-900)',
          }}
        />

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

        {/* Tinted overlay so text stays readable over the image */}
        <div aria-hidden="true" className="absolute inset-0 bg-[var(--bg-page)]/20" />

        <Container size="default" className="relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/30 bg-white/10 text-white text-xs font-mono tracking-wide uppercase">
              <Terminal className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              <span>Enterprise AI Architecture &amp; Custom Engineering</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold text-white tracking-[-0.03em] leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
            >
              Bespoke AI Services for{' '}
              <span className="text-[#DDF7FF] underline decoration-[color:var(--accent-mono)/0.6] underline-offset-8">
                Enterprise Workflows
              </span>
            </Heading>

            {/* Subhead */}
            <Text
              variant="body-lg"
              className="font-sans font-medium text-[#E8F7FF] max-w-2xl mx-auto leading-[1.8] tracking-[-0.01em] drop-shadow-[0_1px_6px_rgba(0,20,50,0.35)]"
            >
              We design, build, and deploy custom conversational agents, RAG search systems, MCP tool servers, full-stack web applications, synthetic media engines, and automated backend pipelines.
            </Text>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
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
                  Schedule Technical Scope
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>

              <Link href="/pricing" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="
                    w-full sm:w-auto
                    border border-white/70
                    bg-white/95
                    hover:bg-[#E8F7FF]
                    text-[var(--accent-700)]
                    font-semibold
                    px-8 py-3.5
                    rounded-lg
                    shadow-lg shadow-black/10
                    transition-all duration-200
                  "
                >
                  View Pricing Tiers
                </Button>
              </Link>
            </div>

            {/* Quiet Teaser Linking to /products */}
            <div className="pt-2">
              <Link
                href="/products"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/30
                  text-white
                  hover:bg-white/20
                  hover:border-white/50
                  transition-all
                  text-xs
                  font-mono
                  group
                "
              >
                <Package className="w-3.5 h-3.5 text-[#DDF7FF]" aria-hidden="true" />
                <span>Looking for ready-to-deploy tools instead?</span>
                <span className="text-[#DDF7FF] font-bold group-hover:translate-x-0.5 transition-transform">
                  Explore NorAI Products &rarr;
                </span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 flex items-center justify-center gap-6 text-xs font-mono text-[#D5F5FF]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-mono)]" aria-hidden="true" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-mono)]" aria-hidden="true" />
                Free technical scope
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Signature Element: Telemetry Bar */}
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
              <span className="font-bold text-primary-800 uppercase tracking-wider">CATALOG_SCOPE:</span>
              <span className="text-[var(--accent-mono)]">● 7 ACTIVE SERVICES | 1 EARLY ACCESS | 1 R&amp;D SCAFFOLD</span>
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
                <Lock className="w-3.5 h-3.5 text-[var(--accent-500)]" aria-hidden="true" />
                TRANSPARENT SERVICE MATURITY MATRIX
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* TIER 1: ACTIVE CORE ENTERPRISE SERVICES */}
      <Section
        className="
          relative
          py-20
          overflow-hidden
          bg-[radial-gradient(circle_at_8%_35%,rgba(59,130,246,0.10),transparent_32%),radial-gradient(circle_at_92%_65%,rgba(139,92,246,0.10),transparent_34%)]
        "
      >
        {/* AI Ambient Glow */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="
              absolute
              -left-32
              top-20
              w-[420px]
              h-[420px]
              rounded-full
              bg-blue-500/15
              blur-[90px]
              animate-pulse
            "
            style={{ animationDuration: '4s' }}
          />
          <div
            className="
              absolute
              -right-32
              bottom-10
              w-[460px]
              h-[460px]
              rounded-full
              bg-violet-500/15
              blur-[95px]
              animate-pulse
            "
            style={{ animationDuration: '5s', animationDelay: '1s' }}
          />
        </div>

        <Container size="default" className="relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-mono text-[var(--accent-500)] uppercase font-bold tracking-widest">
              Tier 01 • Active Shipped Services
            </div>
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
              Core Consultative Services
            </Heading>
            <Text variant="body-md" className="text-primary-700">
              Fully active, commercial offerings ready for enterprise scoping and production deployment.
            </Text>
          </div>

          <div className="space-y-6">
            {/* Flagship Hero Card */}
            {flagshipService && (
              <div
                key={flagshipService.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  p-8
                  space-y-6

                  bg-white/50
                  backdrop-blur-xl

                  border-2
                  border-blue-400/30

                  shadow-[0_20px_60px_rgba(59,130,246,0.12)]

                  hover:border-blue-400/50
                  hover:shadow-[0_25px_70px_rgba(59,130,246,0.18)]

                  transition-all
                  duration-500
                "
              >
                {/* Card AI Glow */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -top-24
                    -right-24
                    w-64
                    h-64
                    rounded-full
                    bg-blue-500/15
                    blur-[90px]
                    opacity-70
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    pointer-events-none
                  "
                />
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-24
                    -left-24
                    w-56
                    h-56
                    rounded-full
                    bg-violet-500/15
                    blur-[90px]
                    opacity-60
                    group-hover:opacity-100
                    transition-opacity
                    duration-700
                    pointer-events-none
                  "
                />
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-blue-400/60
                    to-transparent
                  "
                />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        p-3
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
                      <Bot className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[var(--accent-mono)] uppercase tracking-wider">
                        {flagshipService.id} • {flagshipService.badge}
                      </span>
                      <Heading as="h3" variant="heading-xl" className="font-display font-bold text-primary-800">
                        {flagshipService.title}
                      </Heading>
                    </div>
                  </div>
                  <span
                    className="
                      px-3 py-1 rounded-full
                      bg-gradient-to-r from-blue-600 to-indigo-600
                      text-white text-xs font-mono font-bold uppercase tracking-wider w-fit
                      shadow-lg shadow-blue-500/20
                    "
                  >
                    Flagship Enterprise Solution
                  </span>
                </div>

                <Text variant="body-md" className="relative z-10 text-primary-700 max-w-3xl leading-relaxed">
                  {flagshipService.desc}
                </Text>

                <div className="relative z-10 pt-2 flex flex-wrap gap-2 text-xs font-mono">
                  {flagshipService.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="
                        inline-flex items-center gap-1.5 px-3 py-1 rounded-lg
                        bg-white/40 backdrop-blur-sm border border-blue-400/15 text-primary-700
                      "
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-500)]" aria-hidden="true" /> {h}
                    </span>
                  ))}
                </div>

                <div className="relative z-10 pt-4 border-t border-blue-400/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-primary-700 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[var(--accent-500)]" aria-hidden="true" /> Strict Private Data Isolation SLA
                  </span>
                  <Link href="/contact">
                    <Button
                      variant="primary"
                      size="md"
                      className="
                        bg-gradient-to-r from-blue-600 to-indigo-600
                        hover:from-blue-700 hover:to-violet-600
                        text-white font-semibold px-6 py-2.5 rounded-lg
                        shadow-lg shadow-blue-500/20
                        transition-all duration-300
                      "
                    >
                      Scope Enterprise Solution <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {/* 6 Secondary Solution Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryServices.map((srv) => {
                const IconComp = srv.icon;
                return (
                  <div
                    key={srv.id}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      p-6
                      flex
                      flex-col
                      justify-between
                      space-y-6

                      bg-white/45
                      backdrop-blur-xl

                      border
                      border-blue-400/15

                      shadow-[0_10px_40px_rgba(59,130,246,0.06)]

                      hover:-translate-y-2
                      hover:border-blue-400/30
                      hover:shadow-[0_20px_55px_rgba(59,130,246,0.14)]

                      transition-all
                      duration-500
                    "
                  >
                    {/* Card AI Glow */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        -top-20
                        -right-20
                        w-40
                        h-40
                        rounded-full
                        bg-blue-500/10
                        blur-[70px]
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                        pointer-events-none
                      "
                    />
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        top-0
                        left-0
                        right-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-blue-400/50
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                      "
                    />

                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-primary-700 font-bold">{srv.id}</span>
                        <span className="px-2 py-0.5 rounded bg-white/40 text-[var(--accent-mono)] border border-blue-400/15">
                          {srv.badge}
                        </span>
                      </div>

                      <div
                        className="
                          p-3
                          rounded-xl
                          bg-white/40
                          backdrop-blur-md
                          border
                          border-blue-400/20
                          text-blue-600
                          w-fit

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
                        as="h3"
                        variant="heading-lg"
                        className="font-display font-bold text-primary-800 group-hover:text-blue-600 transition-colors"
                      >
                        {srv.title}
                      </Heading>

                      <Text variant="body-sm" className="text-primary-700 leading-relaxed">
                        {srv.desc}
                      </Text>
                    </div>

                    <div className="relative z-10 pt-4 border-t border-blue-400/10 space-y-3">
                      <div className="space-y-1">
                        {srv.highlights.map((h, i) => (
                          <div key={i} className="text-[11px] font-mono text-primary-700 flex items-center gap-1.5">
                            <span
                              className="
                                w-1.5 h-1.5 rounded-full bg-blue-500
                                shadow-[0_0_10px_rgba(59,130,246,0.8)]
                                group-hover:animate-pulse
                              "
                            />
                            {h}
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-xs font-mono font-bold text-[var(--accent-500)] group-hover:text-[var(--accent-mono)]"
                      >
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
      <Section className="py-16 border-t border-blue-400/10 bg-white/20 backdrop-blur-sm">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
            <div className="text-xs font-mono text-[var(--accent-mono)] uppercase font-bold tracking-widest">
              Tier 02 • Early Access Practice
            </div>
            <Heading as="h2" variant="heading-xl" className="font-display font-extrabold text-primary-800">
              Emerging Enterprise Programs
            </Heading>
          </div>

          <div
            className="
              group
              relative
              overflow-hidden
              max-w-4xl mx-auto
              rounded-2xl
              p-8
              space-y-6

              bg-white/45
              backdrop-blur-xl

              border
              border-violet-400/25

              shadow-[0_15px_50px_rgba(139,92,246,0.08)]

              hover:border-violet-400/40
              hover:shadow-[0_20px_60px_rgba(139,92,246,0.14)]

              transition-all
              duration-500
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -top-20
                -right-20
                w-52
                h-52
                rounded-full
                bg-violet-500/10
                blur-[80px]
                opacity-60
                group-hover:opacity-100
                transition-opacity
                duration-500
                pointer-events-none
              "
            />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="
                    p-3 rounded-xl
                    bg-white/40 backdrop-blur-md
                    border border-violet-400/25
                    text-violet-600
                  "
                >
                  <Sparkles className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[var(--accent-mono)] uppercase tracking-wider">
                    {TIER_2_EARLY_ACCESS_SERVICE.id} • {TIER_2_EARLY_ACCESS_SERVICE.badge}
                  </span>
                  <Heading as="h3" variant="heading-xl" className="font-display font-bold text-primary-800">
                    {TIER_2_EARLY_ACCESS_SERVICE.title}
                  </Heading>
                </div>
              </div>
              <span
                className="
                  px-3 py-1 rounded-full
                  bg-violet-500/10 text-violet-700 border border-violet-400/30
                  text-xs font-mono font-bold uppercase tracking-wider w-fit
                "
              >
                Early Access Pilot Program
              </span>
            </div>

            <Text variant="body-md" className="relative z-10 text-primary-700 leading-relaxed">
              {TIER_2_EARLY_ACCESS_SERVICE.desc}
            </Text>

            <div className="relative z-10 pt-2 flex flex-wrap gap-2 text-xs font-mono">
              {TIER_2_EARLY_ACCESS_SERVICE.highlights.map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/40 backdrop-blur-sm border border-violet-400/15 text-primary-700"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-600" aria-hidden="true" /> {h}
                </span>
              ))}
            </div>

            <div className="relative z-10 pt-4 border-t border-violet-400/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-primary-700 flex items-center gap-1.5">
                <FlaskConical className="w-3.5 h-3.5 text-violet-600" aria-hidden="true" /> Active Early Access Program — Onboarding Pilot Partners
              </span>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="md"
                  className="
                    border border-violet-400/30 bg-violet-500/10 text-violet-700
                    hover:bg-violet-500/20 font-semibold px-6 py-2 rounded-lg
                    transition-all duration-300
                  "
                >
                  Inquire for Pilot Scope &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* TIER 3: PROVISIONAL R&D SCAFFOLD */}
      <Section className="py-16 border-t border-blue-400/10">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
            <div className="text-xs font-mono text-primary-700 uppercase font-bold tracking-widest">
              Tier 03 • Provisional R&amp;D Scaffold
            </div>
            <Heading as="h2" variant="heading-xl" className="font-display font-extrabold text-primary-800">
              Architecture Roadmap
            </Heading>
          </div>

          <div
            className="
              max-w-4xl mx-auto
              rounded-2xl
              p-8
              space-y-6
              relative
              overflow-hidden

              bg-white/30
              backdrop-blur-md

              border-2
              border-dashed
              border-primary-300/50

              opacity-90
            "
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-white/40 backdrop-blur-md border border-primary-300/40 text-primary-600">
                  <Construction className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-primary-700 uppercase tracking-wider">
                    {TIER_3_SCAFFOLD_ITEM.id} • {TIER_3_SCAFFOLD_ITEM.badge}
                  </span>
                  <Heading as="h3" variant="heading-xl" className="font-display font-bold text-primary-600">
                    {TIER_3_SCAFFOLD_ITEM.title}
                  </Heading>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/40 text-primary-700 border border-primary-300/40 text-xs font-mono font-bold uppercase tracking-wider w-fit">
                Under Active R&amp;D
              </span>
            </div>

            <Text variant="body-md" className="text-primary-700 leading-relaxed">
              {TIER_3_SCAFFOLD_ITEM.desc}
            </Text>

            <div className="pt-4 border-t border-primary-300/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
              <span className="text-primary-700/90 flex items-center gap-1.5">
                <Construction className="w-3.5 h-3.5 text-primary-700" aria-hidden="true" /> PROVISIONAL SCAFFOLD — NOT OFFERED FOR COMMERCIAL SCOPING
              </span>
              <div className="px-4 py-2 rounded-lg bg-white/40 border border-primary-300/40 text-primary-700 font-bold uppercase tracking-wider cursor-not-allowed">
                [In Development • No Active Inquiries]
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Engagement Model Section */}
      <Section className="relative py-20 border-t border-blue-400/10 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="
              absolute
              -left-28
              top-[15%]
              w-[440px]
              h-[440px]
              rounded-full
              bg-blue-400/15
              blur-[105px]
              animate-pulse
            "
            style={{ animationDuration: '4.5s' }}
          />
          <div
            className="
              absolute
              -right-28
              bottom-[10%]
              w-[480px]
              h-[480px]
              rounded-full
              bg-violet-400/15
              blur-[115px]
              animate-pulse
            "
            style={{ animationDuration: '5s', animationDelay: '1s' }}
          />
        </div>

        <Container size="default" className="relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
              Our Engagement Model
            </Heading>
            <Text variant="body-md" className="text-primary-700">
              Three transparent phases from technical scoping to production SLA guarantees.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_STEPS.map((step, index) => (
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
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-2xl font-extrabold font-mono text-blue-600
                      bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-400/25
                    "
                  >
                    {step.step}
                  </span>
                  {index < ENGAGEMENT_STEPS.length - 1 && (
                    <span className="hidden md:block text-primary-700 font-mono text-xs">PHASE &rarr;</span>
                  )}
                </div>
                <Heading as="h3" variant="heading-md" className="font-display font-bold text-primary-800">
                  {step.title}
                </Heading>
                <Text variant="body-sm" className="text-primary-700 leading-relaxed">
                  {step.desc}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services FAQ */}
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
              Services FAQ
            </Heading>
            <Text variant="body-md" className="text-primary-700">
              Common questions about service maturity, integration, data security, and delivery.
            </Text>
          </div>

          <div className="space-y-4">
            {SERVICES_FAQ.map((faq, index) => (
              <details
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl

                  border
                  border-white/70

                  bg-white/75
                  backdrop-blur-md

                  p-5

                  shadow-[0_8px_30px_rgba(59,130,246,0.04)]

                  hover:bg-white/85
                  hover:border-blue-300/40
                  hover:shadow-[0_15px_40px_rgba(59,130,246,0.10)]

                  transition-all
                  duration-500

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

                <summary className="relative z-10 flex items-center justify-between cursor-pointer font-semibold text-primary-800 text-sm md:text-base">
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
          <div className="rounded-2xl border border-blue-400/15 bg-gradient-to-br from-white via-[#F8FAFF] to-[#EEF5FF] p-12 md:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <Heading as="h2" variant="display-lg" className="font-display font-extrabold text-primary-800">
                Ready to Automate Your Business Operations?
              </Heading>
              <Text variant="body-lg" className="text-primary-700">
                Contact our AI solution architects today for a technical consultation and live product demonstration.
              </Text>
            </div>

            <div className="relative z-10 pt-2 flex justify-center gap-4">
              <Link href="/contact">
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
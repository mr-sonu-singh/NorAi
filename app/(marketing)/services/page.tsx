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
} from 'lucide-react';

export const metadata = buildMetadata({
  path: '/services',
  title: 'AI Services & Enterprise Automation — NorAI Technologies',
  description: 'Explore NorAI AI services: Pre-built micro-SaaS tools, custom AI chatbots, AI web applications, synthetic video ads, and business automation pipelines.',
});

const MICRO_TOOLS_DATA = [
  {
    title: 'AI Resume Shortlister',
    badge: 'Recruitment AI',
    desc: 'Parse, score, and rank candidate resumes against job requirements with automated skill extraction and qualification matching.',
    icon: Sparkles,
    tag: 'Pre-Built Utility',
  },
  {
    title: 'Course Note-Taker',
    badge: 'EdTech AI',
    desc: 'Convert YouTube lectures, audio recordings, and slides into structured study notes, flashcards, key takeaways, and quizzes.',
    icon: Zap,
    tag: 'Pre-Built Utility',
  },
  {
    title: 'Community Chat Digest',
    badge: 'Community AI',
    desc: 'Digest noisy Telegram, Discord, and Slack channels into executive daily briefs highlighting customer feedback and action items.',
    icon: Cpu,
    tag: 'Pre-Built Utility',
  },
  {
    title: 'Smart Dainik News',
    badge: 'Media AI',
    desc: 'Curate hyper-local regional news and market updates filtered by sentiment, relevance, and interest categories.',
    icon: Layers,
    tag: 'Pre-Built Utility',
  },
];

const CUSTOM_SERVICES_DATA = [
  {
    title: 'Custom AI Chatbots & Agents',
    badge: 'Enterprise AI',
    desc: 'Deploy autonomous conversational agents trained on your proprietary docs, CRM records, and internal knowledge bases with strict zero-hallucination boundaries.',
    icon: Bot,
  },
  {
    title: 'AI Web Applications',
    badge: 'Full-Stack Web',
    desc: 'Build modern Next.js and React web applications powered by sub-second neural inference, dynamic UI generation, and deterministic workflow engines.',
    icon: Globe,
  },
  {
    title: 'AI Video & Product Ads',
    badge: 'Synthetic Media',
    desc: 'Generate automated product showcase videos, localized AI voiceovers, and high-converting visual ad creatives at 10x lower cost than traditional studios.',
    icon: Video,
  },
  {
    title: 'Business Automation Pipelines',
    badge: 'Workflow Engineering',
    desc: 'Automate manual data extraction, ERP entry, compliance auditing, and multi-app sync with fault-tolerant background workers and webhooks.',
    icon: Workflow,
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
  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      {/* Hero Section */}
      <Section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>AI Services & Enterprise Automation</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-extrabold tracking-tight text-white leading-tight"
            >
              Modular AI Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
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
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30">
                  Talk to Us <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </Button>
              </Link>
              <Link href="/pricing" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-xl backdrop-blur-md">
                  View Pricing Tiers
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pre-Built Micro-SaaS Tools */}
      <Section className="py-16 bg-slate-950/40 border-y border-white/10">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-extrabold text-white">
              Pre-Built Micro-SaaS Utilities
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Instant-deploy AI tools accessible via web dashboards or REST APIs.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MICRO_TOOLS_DATA.map((tool, index) => {
              const IconComp = tool.icon;
              return (
                <TiltCard key={index} className="group flex flex-col justify-between p-8 bg-slate-900/70">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-blue-300 border border-blue-400/20">
                        {tool.badge}
                      </span>
                    </div>

                    <Heading as="h3" variant="heading-lg" className="font-bold text-white group-hover:text-blue-400 transition-colors">
                      {tool.title}
                    </Heading>

                    <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                      {tool.desc}
                    </Text>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-400" /> &lt; 1s Latency
                    </span>
                    <Link href="/contact" className="inline-flex items-center text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                      Deploy Tool <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Custom AI Engineering Solutions */}
      <Section className="py-20">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-extrabold text-white">
              Custom Enterprise AI Services
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Tailored AI agents, web applications, and automated pipelines engineered for your exact business logic.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CUSTOM_SERVICES_DATA.map((srv, index) => {
              const IconComp = srv.icon;
              return (
                <TiltCard key={index} className="group flex flex-col justify-between p-8 bg-slate-900/60 border border-white/10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 border border-cyan-400/20">
                        {srv.badge}
                      </span>
                    </div>

                    <Heading as="h3" variant="heading-lg" className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {srv.title}
                    </Heading>

                    <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                      {srv.desc}
                    </Text>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-cyan-400" /> Private Data SLA
                    </span>
                    <Link href="/contact" className="inline-flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                      Scope Solution <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Engagement Model / How We Work */}
      <Section className="py-20 bg-slate-950/60 border-y border-white/10">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-extrabold text-white">
              Our Engagement Model
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Three transparent phases from technical scoping to production SLA guarantees.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ENGAGEMENT_STEPS.map((step, index) => (
              <TiltCard key={index} className="text-center space-y-4 p-8 bg-slate-900/60">
                <div className="inline-block text-4xl font-extrabold font-mono text-blue-500/40 border-b border-blue-500/20 pb-2 mb-2">
                  {step.step}
                </div>
                <Heading as="h3" variant="heading-md" className="font-bold text-white">
                  {step.title}
                </Heading>
                <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                  {step.desc}
                </Text>
              </TiltCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services FAQ Accordion */}
      <Section className="py-20">
        <Container size="narrow">
          <div className="text-center space-y-4 mb-12">
            <Heading as="h2" variant="display-md" className="font-extrabold text-white">
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
                Ready to Automate Your Business Operations?
              </Heading>
              <Text variant="body-lg" className="text-slate-300">
                Contact our AI solution architects today for a technical consultation and live product demonstration.
              </Text>
            </div>

            <div className="relative z-10 pt-2 flex justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-xl shadow-xl shadow-blue-600/40">
                  Schedule Free Technical Scope <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

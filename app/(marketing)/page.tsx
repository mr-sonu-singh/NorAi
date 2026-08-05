import React from 'react';
import { buildMetadata, getOrganizationJsonLd } from '@/lib/seo';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { HeroOrb } from '@/components/organisms/HeroOrb';
import {
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Play,
  Clock,
  Cpu,
  Layers,
  HelpCircle,
  ChevronDown,
  Terminal,
} from 'lucide-react';

export const metadata = buildMetadata({
  path: '/',
  title: 'NorAI Technologies — Autonomous Micro-AI Agents for High-Growth Businesses',
  description: 'Automate your operations with NorAI micro-SaaS suite: AI Resume Shortlister, Course Note-Taker, Community Chat Digest, and Smart Government Job News.',
});

const METRICS_DATA = [
  { value: '5+', label: 'Core Micro-Tools', desc: 'Pre-built SaaS agents ready to deploy' },
  { value: '< 1s', label: 'Processing Latency', desc: 'Sub-second response time guarantee' },
  { value: '100%', label: 'Automated Pipelines', desc: 'Zero manual intervention required' },
  { value: '24/7', label: 'API Availability', desc: 'Enterprise reliability & 99.9% SLA' },
];

const PRODUCTS_DATA = [
  {
    title: 'AI Resume Shortlister',
    badge: 'Recruitment AI',
    desc: 'Parse, score, and rank hundreds of applicant resumes instantly with customizable candidate criteria and skill extraction.',
    icon: Sparkles,
    href: '/products',
  },
  {
    title: 'Course Note-Taker',
    badge: 'EdTech AI',
    desc: 'Transform raw video lectures, audio recordings, and slides into concise executive summaries and interactive flashcards.',
    icon: Zap,
    href: '/products',
  },
  {
    title: 'Community Chat Digest',
    badge: 'Community AI',
    desc: 'Digest noisy Telegram, Discord, and Slack channels into daily executive briefs highlighting actionable community feedback.',
    icon: Cpu,
    href: '/products',
  },
  {
    title: 'Smart Government Job News',
    badge: 'Media AI',
    desc: 'Curate hyper-local regional news and market updates filtered by sentiment, relevance, and custom interest categories.',
    icon: Layers,
    href: '/products',
  },
];

const HOW_IT_WORKS_DATA = [
  {
    step: '01',
    title: 'Tell Us Your Workflow',
    desc: 'Define your repetitive candidate screening, lecture summarization, or chat filtering bottleneck.',
  },
  {
    step: '02',
    title: 'We Match a Micro-Agent',
    desc: 'Select from our pre-built NorAI micro-SaaS agents or configure a custom API integration.',
  },
  {
    step: '03',
    title: 'Plug In & Go Live',
    desc: 'Connect our REST API or standalone dashboard and experience 10x workflow speedup instantly.',
  },
];

const FEATURES_DATA = [
  {
    title: 'Sub-Second Latency',
    desc: 'Optimized neural inference engine designed for instantaneous response times and low latency processing.',
    icon: Clock,
  },
  {
    title: 'Reliable Failover',
    desc: 'Built with redundancy and multi-cloud compute nodes ensuring 99.9% API availability and zero downtime.',
    icon: ShieldCheck,
  },
  {
    title: 'Predictable Pricing',
    desc: 'Replace expensive manual labor with transparent pay-as-you-go micro-SaaS subscriptions.',
    icon: CheckCircle2,
  },
  {
    title: 'Drop-In Integration',
    desc: 'One-line API keys, webhooks, and drop-in UI widgets compatible with Next.js, React, and REST clients.',
    icon: Zap,
  },
];

const TESTIMONIALS_DATA = [
  {
    quote: 'NorAI Resume Shortlister cut our candidate screening phase from 4 days to under 15 minutes. It is an indispensable tool for our HR team.',
    author: 'Priya Sharma',
    role: 'Head of Talent, TechCorp India',
  },
  {
    quote: 'The Course Note-Taker transformed our online academy experience. Students love the auto-generated summaries and flashcards!',
    author: 'Arjun Kapoor',
    role: 'Director of Learning, EdSpark',
  },
  {
    quote: 'Community Chat Digest keeps our team informed of customer feedback across 10,000+ Discord members without spending hours reading chats.',
    author: 'Meera Sundaram',
    role: 'Community Lead, Web3 Global',
  },
];

const FAQ_DATA = [
  {
    question: 'How fast can I set up NorAI micro-tools for my business?',
    answer: 'You can get started in less than 5 minutes. Our tools offer pre-built web dashboards as well as standard REST API endpoints with instant API key access.',
  },
  {
    question: 'Is my business data private and secure?',
    answer: 'Yes, absolutely. All data passed through NorAI pipelines is encrypted in transit and at rest. We do not use customer data for public model training.',
  },
  {
    question: 'Can I request a custom AI tool for my unique business workflow?',
    answer: 'Yes! In addition to our pre-built micro-SaaS suite, our AI engineering team builds custom enterprise agents tailored to your custom database and APIs.',
  },
  {
    question: 'What pricing options are available?',
    answer: 'We offer flexible pay-as-you-go usage tiers for startups, flat monthly SaaS subscriptions for growing teams, and enterprise custom plans.',
  },
];

export default function HomePage() {
  const organizationJsonLd = getOrganizationJsonLd();

  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-[#0CCAB1] selection:text-[#0B0F17]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* Hero Section */}
      <Section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="md:col-span-6 space-y-6 text-center md:text-left">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0CCAB1]/30 bg-[#0CCAB1]/10 text-[#45F7D6] text-xs font-mono tracking-wide uppercase">
                <Terminal className="w-3.5 h-3.5 text-[#0CCAB1]" />
                <span>NorAI Micro-SaaS • Autonomous AI Agents</span>
              </div>

              {/* Main Headline */}
              <Heading
                as="h1"
                variant="display-xl"
                className="font-display font-extrabold text-white tracking-tight leading-tight"
              >
                Autonomous Micro-AI Agents for <span className="text-[#0CCAB1] underline decoration-[#0CCAB1]/40 underline-offset-8">High-Growth Businesses</span>
              </Heading>

              {/* Subhead */}
              <Text variant="body-lg" className="text-slate-300 max-w-2xl mx-auto md:mx-0 font-normal leading-relaxed">
                Automate your daily operations with NorAI’s micro-SaaS suite. Shortlist candidates, summarize lectures, digest community chats, and power hyper-local news feeds with sub-second API execution.
              </Text>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold px-8 py-3.5 rounded-lg shadow-lg shadow-[#0CCAB1]/20 transition-all duration-200">
                    Get Started Free <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                  </Button>
                </Link>
                <Link href="/products" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg backdrop-blur-md">
                    Explore Micro-Tools
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex items-center justify-center md:justify-start gap-6 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0CCAB1]" /> No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0CCAB1]" /> Instant API keys
                </span>
              </div>
            </div>

            {/* Right Signature Element: Lightweight Live Console Teaser */}
            <div className="md:col-span-6 flex justify-center">
              <HeroOrb />
            </div>
          </div>
        </Container>
      </Section>

      {/* Impact Stats Grid - Engineered Console Visual Language */}
      <Section className="py-12 border-y border-white/10 bg-[#0B0F17]" aria-label="Key performance metrics">
        <Container size="default">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 list-none p-0 m-0" role="list">
            {METRICS_DATA.map((metric, index) => (
              <li
                key={index}
                className="bg-[#131924] border border-white/10 rounded-xl p-5 relative overflow-hidden group hover:border-[#0CCAB1]/40 transition-all duration-200 flex flex-col justify-between space-y-3"
              >
                {/* Console Status Tag Header */}
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span className="uppercase tracking-wider font-bold">METRIC_0{index + 1}</span>
                  <span className="inline-flex items-center gap-1 text-[#45F7D6]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#45F7D6] animate-pulse" />
                    LIVE
                  </span>
                </div>

                {/* Big Metric Value */}
                <div>
                  <div className="text-3xl md:text-4xl font-extrabold text-[#0CCAB1] font-mono tracking-tight group-hover:text-[#45F7D6] transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-sm font-bold text-white font-display mt-1">
                    {metric.label}
                  </div>
                </div>

                {/* Description Footer */}
                <div className="text-xs text-slate-400 pt-2 border-t border-white/5 font-sans leading-relaxed">
                  {metric.desc}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Product Suite Matrix */}
      <Section className="py-20">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              NorAI Micro-SaaS Product Suite
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Purpose-built AI micro-tools designed for immediate operational speedup and zero-friction automation.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCTS_DATA.map((prod, index) => {
              const IconComp = prod.icon;
              return (
                <div key={index} className="tilt-card group p-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-lg bg-[#0CCAB1]/10 border border-[#0CCAB1]/20 text-[#0CCAB1] group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#0B0F17] text-[#45F7D6] border border-white/10">
                        {prod.badge}
                      </span>
                    </div>

                    <Heading as="h3" variant="heading-lg" className="font-display font-bold text-white group-hover:text-[#0CCAB1] transition-colors">
                      {prod.title}
                    </Heading>

                    <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                      {prod.desc}
                    </Text>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <Link href={prod.href} className="inline-flex items-center text-xs font-mono font-semibold text-[#0CCAB1] group-hover:text-[#45F7D6]">
                      Learn more & try tool <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* How It Works Section: Horizontal Connected Pipeline */}
      <Section className="py-20 bg-[#131924]/40 border-y border-white/10">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              How NorAI Works
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Three simple steps to connect our micro-agents and automate your operational bottlenecks.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {HOW_IT_WORKS_DATA.map((step, index) => (
              <div key={index} className="tilt-card p-6 space-y-4 relative">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold font-mono text-[#0CCAB1] bg-[#0CCAB1]/10 px-3 py-1 rounded border border-[#0CCAB1]/30">
                    {step.step}
                  </span>
                  {index < HOW_IT_WORKS_DATA.length - 1 && (
                    <span className="hidden md:block text-slate-600 font-mono text-xs">PIPELINE_STEP &#8594;</span>
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

      {/* Core Benefits / Why Choose NorAI */}
      <Section className="py-20">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Why Modern Teams Choose NorAI
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Engineered with speed, security, and simplicity at the core.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES_DATA.map((feat, index) => {
              const IconComp = feat.icon;
              return (
                <div key={index} className="tilt-card p-6 space-y-3">
                  <div className="p-2.5 w-fit rounded-lg bg-[#0CCAB1]/10 text-[#0CCAB1] border border-[#0CCAB1]/20">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <Heading as="h4" variant="heading-sm" className="font-display font-bold text-white">
                    {feat.title}
                  </Heading>
                  <Text variant="body-xs" className="text-slate-400 leading-relaxed">
                    {feat.desc}
                  </Text>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Video Demonstration Section */}
      <Section className="py-20 bg-[#131924]/60 border-y border-white/10">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              See NorAI in Action
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Watch how quickly our AI micro-tools parse documents, summarize lectures, and digest community chats.
            </Text>
          </div>

          <div className="max-w-4xl mx-auto rounded-xl border border-white/10 overflow-hidden shadow-2xl bg-[#0B0F17] relative aspect-video flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-[#0B0F17]/40 z-10" />
            <div className="relative z-20 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0CCAB1] text-[#0B0F17] shadow-xl shadow-[#0CCAB1]/30 group-hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <div className="text-sm font-mono text-slate-300">
                NorAI Product Demonstration (1:45)
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="py-20">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Validated by Business Leaders
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Here is what founders, HR leads, and edtech directors say about NorAI.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t, index) => (
              <div key={index} className="tilt-card p-6 flex flex-col justify-between space-y-6">
                <Text variant="body-sm" className="text-slate-300 italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </Text>
                <div className="pt-4 border-t border-white/5">
                  <div className="font-display font-bold text-white text-sm">{t.author}</div>
                  <div className="text-xs font-mono text-[#0CCAB1]">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Interactive FAQ Accordion */}
      <Section className="py-20 bg-[#131924]/40 border-t border-white/10">
        <Container size="narrow">
          <div className="text-center space-y-4 mb-12">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Frequently Asked Questions
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Have questions? We have answers.
            </Text>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-white/10 bg-[#131924] p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-sm md:text-base">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#0CCAB1] flex-shrink-0" />
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

      {/* Final Conversion CTA Banner */}
      <Section className="py-20 relative overflow-hidden">
        <Container size="default">
          <div className="rounded-2xl border border-white/10 bg-[#131924] p-12 md:p-16 text-center space-y-8 relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#0CCAB1]/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <Heading as="h2" variant="display-lg" className="font-display font-extrabold text-white">
                Ready to Automate Your Business Workflow?
              </Heading>
              <Text variant="body-lg" className="text-slate-300">
                Join hundreds of modern teams leveraging NorAI micro-tools to save time, lower costs, and scale intelligence.
              </Text>
            </div>

            <div className="relative z-10 pt-4 flex justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold px-10 py-4 rounded-lg shadow-xl shadow-[#0CCAB1]/20">
                  Get Started Free <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

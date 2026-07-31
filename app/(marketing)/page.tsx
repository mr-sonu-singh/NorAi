import React from 'react';
import { buildMetadata, getOrganizationJsonLd } from '@/lib/seo';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { TiltCard } from '@/components/molecules/TiltCard';
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
} from 'lucide-react';

export const metadata = buildMetadata({
  path: '/',
  title: 'NorAI Technologies — Simple AI Tools for Every Business',
  description: 'Automate your workflows with NorAI micro-SaaS suite: AI Resume Shortlister, Course Note-Taker, Chat Digest, and Smart News Engine.',
});

const METRICS_DATA = [
  { value: '5+', label: 'Core Micro-Tools', desc: 'Pre-built SaaS agents ready to deploy' },
  { value: '< 1s', label: 'Processing Latency', desc: 'Sub-second response time guarantee' },
  { value: '100%', label: 'Automated Pipelines', desc: 'Zero manual intervention required' },
  { value: '24/7', label: 'API Availability', desc: 'Enterprise reliability and 99.9% SLA' },
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
    title: 'Smart Dainik News',
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
    desc: 'Define your repetitive data entry, content summarization, or candidate filtering bottleneck.',
  },
  {
    step: '02',
    title: 'We Match a Tool',
    desc: 'Select from our pre-configured NorAI micro-SaaS agents or request a tailored AI workflow.',
  },
  {
    step: '03',
    title: 'Plug In & Go Live',
    desc: 'Connect our REST API or standalone dashboard and experience 10x workflow speedup.',
  },
];

const FEATURES_DATA = [
  {
    title: 'Lightning Fast',
    desc: 'Optimized neural inference engine designed for instantaneous response times and low latency.',
    icon: Clock,
  },
  {
    title: 'Reliable by Design',
    desc: 'Built with failover protection and redundant multi-cloud compute nodes for zero downtime.',
    icon: ShieldCheck,
  },
  {
    title: 'Cost Effective',
    desc: 'Replace expensive manual labor with scalable pay-as-you-go micro-AI subscriptions.',
    icon: CheckCircle2,
  },
  {
    title: 'Easy Integration',
    desc: 'One-line API keys, webhooks, and drop-in UI widgets compatible with Next.js, React, and WordPress.',
    icon: Zap,
  },
];

const TESTIMONIALS_DATA = [
  {
    quote: 'NorAI Resume Shortlister cut our hiring screening phase from 4 days to under 15 minutes. It is an indispensable tool for our HR team.',
    author: 'Priya Sharma',
    role: 'Head of Talent, TechCorp India',
  },
  {
    quote: 'The Course Note-Taker transformed our online academy experience. Students love the auto-generated summaries and quizzes!',
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
    question: 'How fast can I set up NorAI tools for my business?',
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
    answer: 'We offer flexible pay-as-you-go usage tiers for startups, as well as flat monthly SaaS subscriptions for growing teams and custom enterprise plans.',
  },
];

export default function HomePage() {
  const organizationJsonLd = getOrganizationJsonLd();

  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* Hero Section */}
      <Section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="md:col-span-7 space-y-6 text-center md:text-left">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>AI Tools • AI Videos • AI Websites</span>
              </div>

              {/* Main Headline */}
              <Heading
                as="h1"
                variant="display-xl"
                className="font-extrabold tracking-tight text-white leading-tight"
              >
                Simple AI Tools for <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">Every Business</span>
              </Heading>

              {/* Subhead */}
              <Text variant="body-lg" className="text-slate-300 max-w-2xl mx-auto md:mx-0 font-normal leading-relaxed">
                Transform your daily operations with NorAI's micro-SaaS AI suite. Automate candidate screening, summarize lecture notes, digest community chats, and power hyper-local news feeds effortlessly.
              </Text>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-200">
                    Get Started <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                  </Button>
                </Link>
                <Link href="/products" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-xl backdrop-blur-md">
                    Explore Products
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 flex items-center justify-center md:justify-start gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> Instant API access
                </span>
              </div>
            </div>

            {/* Right Interactive AI Neural Orb */}
            <div className="md:col-span-5 flex justify-center">
              <HeroOrb />
            </div>
          </div>
        </Container>
      </Section>

      {/* Impact Stats Grid */}
      <Section className="py-12 border-y border-white/10 bg-slate-950/40 backdrop-blur-md">
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

      {/* Product Suite Matrix */}
      <Section className="py-20">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-extrabold text-white">
              NorAI Micro-SaaS Product Suite
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Purpose-built AI tools designed for immediate operational speedup and seamless workflow automation.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS_DATA.map((prod, index) => {
              const IconComp = prod.icon;
              return (
                <TiltCard key={index} className="group flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-blue-300 border border-blue-400/20">
                        {prod.badge}
                      </span>
                    </div>

                    <Heading as="h3" variant="heading-lg" className="font-bold text-white group-hover:text-blue-400 transition-colors">
                      {prod.title}
                    </Heading>

                    <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                      {prod.desc}
                    </Text>
                  </div>

                  <div className="pt-6">
                    <Link href={prod.href} className="inline-flex items-center text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                      Learn more & try tool <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section className="py-20 bg-slate-950/60 border-y border-white/10">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-extrabold text-white">
              How NorAI Works
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Three simple steps to automate your business processes and start saving hours daily.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS_DATA.map((step, index) => (
              <TiltCard key={index} className="text-center space-y-4">
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

      {/* Core Benefits / Why Choose NorAI */}
      <Section className="py-20">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-extrabold text-white">
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
                <TiltCard key={index} className="space-y-3">
                  <div className="p-2.5 w-fit rounded-lg bg-blue-500/10 text-blue-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <Heading as="h4" variant="heading-sm" className="font-bold text-white">
                    {feat.title}
                  </Heading>
                  <Text variant="body-xs" className="text-slate-400 leading-relaxed">
                    {feat.desc}
                  </Text>
                </TiltCard>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Video Demonstration Section */}
      <Section className="py-20 bg-slate-950/80 border-y border-white/10">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <Heading as="h2" variant="display-md" className="font-extrabold text-white">
              See NorAI in Action
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Watch how quickly our AI tools parse documents, summarize lectures, and generate community digests.
            </Text>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl border border-blue-500/30 overflow-hidden shadow-2xl shadow-blue-500/10 bg-slate-900/90 relative aspect-video flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 z-10" />
            <div className="relative z-20 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/50 group-hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
              <div className="text-sm font-medium text-slate-300">
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
            <Heading as="h2" variant="display-md" className="font-extrabold text-white">
              Validated by Business Leaders
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Here is what founders, HR leads, and edtech directors have to say about NorAI.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t, index) => (
              <TiltCard key={index} className="flex flex-col justify-between space-y-6">
                <Text variant="body-sm" className="text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </Text>
                <div>
                  <div className="font-bold text-white text-sm">{t.author}</div>
                  <div className="text-xs text-blue-400">{t.role}</div>
                </div>
              </TiltCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Interactive FAQ Accordion */}
      <Section className="py-20 bg-slate-950/60 border-t border-white/10">
        <Container size="narrow">
          <div className="text-center space-y-4 mb-12">
            <Heading as="h2" variant="display-md" className="font-extrabold text-white">
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
                className="group rounded-xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-sm md:text-base">
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

      {/* Final Conversion CTA Banner */}
      <Section className="py-20 relative overflow-hidden">
        <Container size="default">
          <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-950/60 to-slate-900/80 p-12 md:p-16 text-center space-y-8 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-blue-500/10">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <Heading as="h2" variant="display-lg" className="font-extrabold text-white">
                Ready to Automate Your Business Workflow?
              </Heading>
              <Text variant="body-lg" className="text-slate-300">
                Join hundreds of modern teams leveraging NorAI micro-tools to save time, lower costs, and scale intelligence.
              </Text>
            </div>

            <div className="relative z-10 pt-4 flex justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-xl shadow-xl shadow-blue-600/40">
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

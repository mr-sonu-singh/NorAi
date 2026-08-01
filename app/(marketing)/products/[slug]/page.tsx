import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PRODUCTS_DATA } from '@/lib/products';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { buildMetadata } from '@/lib/seo';
import {
  Sparkles,
  Zap,
  Cpu,
  Layers,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Shield,
  Briefcase,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Zap,
  Cpu,
  Layers,
};

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(PRODUCTS_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_DATA[slug];

  if (!product) {
    return buildMetadata({
      path: `/products/${slug}`,
      title: 'Product Not Found — NorAI Technologies',
      description: 'The requested product could not be found.',
    });
  }

  return buildMetadata({
    path: `/products/${product.slug}`,
    title: `${product.title} — NorAI Self-Serve AI Tools`,
    description: product.excerpt,
  });
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = PRODUCTS_DATA[slug];

  if (!product) {
    notFound();
  }

  const IconComp = ICON_MAP[product.iconName] || Sparkles;

  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-[#0CCAB1] selection:text-[#0B0F17]">
      {/* Hero Section */}
      <Section className="relative pt-12 pb-14 md:pt-20 md:pb-16 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Breadcrumb & Monospace Badge */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono">
              <Link href="/products" className="text-slate-400 hover:text-[#0CCAB1] transition-colors">
                &larr; All Products
              </Link>
              <span className="text-slate-600">•</span>
              <span className="px-3 py-1 rounded-full border border-[#0CCAB1]/30 bg-[#0CCAB1]/10 text-[#45F7D6] uppercase tracking-wide">
                {product.id} • {product.badge}
              </span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold tracking-tight text-white leading-tight"
            >
              {product.title}
            </Heading>

            {/* Subhead */}
            <Text variant="body-lg" className="text-slate-300 font-normal leading-relaxed">
              {product.tagline}
            </Text>

            {/* Telemetry Pill Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#131924] border border-white/10">
                <Clock className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
                Processing SLA: {product.latency}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#131924] border border-white/10">
                <Shield className="w-3.5 h-3.5 text-[#45F7D6]" aria-hidden="true" />
                Zero Persistent RAM Logging
              </span>
            </div>

            {/* Self-Serve CTA Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold px-8 py-3.5 rounded-lg shadow-lg shadow-[#0CCAB1]/20 transition-all">
                  Get Started Free <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="#pricing" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg backdrop-blur-md">
                  View Self-Serve Tiers
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Problem vs Solution Section */}
      <Section className="py-16 border-t border-white/10 bg-[#131924]/40">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-mono text-[#0CCAB1] uppercase font-bold tracking-widest">
              Problem vs. Solution
            </div>
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Why Teams Choose {product.title}
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Bottleneck Card */}
            <div className="bg-[#131924] border border-red-500/30 rounded-xl p-8 space-y-4">
              <div className="flex items-center gap-2 text-red-400 text-xs font-mono font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" aria-hidden="true" /> Traditional Manual Bottleneck
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                {product.problem.map((prob, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-red-400 font-bold mt-0.5">&times;</span>
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NorAI Automated Solution Card */}
            <div className="bg-[#131924] border-2 border-[#0CCAB1]/60 rounded-xl p-8 space-y-4 shadow-lg shadow-[#0CCAB1]/10">
              <div className="flex items-center gap-2 text-[#45F7D6] text-xs font-mono font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" /> NorAI Automated Neural Solution
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                {product.solution.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0CCAB1] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Grid */}
      <Section className="py-16">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-mono text-[#0CCAB1] uppercase font-bold tracking-widest">
              Core Capabilities
            </div>
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Engineered for Speed &amp; Accuracy
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feat, idx) => (
              <div key={idx} className="bg-[#131924] border border-white/10 rounded-xl p-6 space-y-3 hover:border-[#0CCAB1]/40 transition-all">
                <div className="p-2.5 rounded-lg bg-[#0CCAB1]/10 border border-[#0CCAB1]/20 text-[#0CCAB1] w-fit">
                  <IconComp className="w-5 h-5" aria-hidden="true" />
                </div>
                <Heading as="h3" variant="heading-md" className="font-display font-bold text-white">
                  {feat.title}
                </Heading>
                <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                  {feat.desc}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3-Step Workflow Pipeline */}
      <Section className="py-16 border-t border-white/10 bg-[#131924]/40">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-mono text-[#0CCAB1] uppercase font-bold tracking-widest">
              Execution Architecture
            </div>
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              How It Works in 3 Steps
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.workflow.map((wf, idx) => (
              <div key={idx} className="bg-[#131924] border border-white/10 rounded-xl p-6 space-y-4 hover:border-[#0CCAB1]/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold font-mono text-[#0CCAB1] bg-[#0CCAB1]/10 px-3 py-1 rounded border border-[#0CCAB1]/30">
                    {wf.step}
                  </span>
                  {idx < product.workflow.length - 1 && (
                    <span className="hidden md:block text-slate-400 font-mono text-xs">STEP &rarr;</span>
                  )}
                </div>
                <Heading as="h3" variant="heading-md" className="font-display font-bold text-white">
                  {wf.title}
                </Heading>
                <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                  {wf.desc}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing Tiers Card Section */}
      <Section id="pricing" className="py-16">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-mono text-[#0CCAB1] uppercase font-bold tracking-widest">
              Predictable Self-Serve Pricing
            </div>
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Select Your Usage Plan
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Transparent monthly tiers with zero hidden fees. Upgrade or cancel anytime.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.pricing.map((plan, idx) => (
              <div
                key={idx}
                className={`bg-[#131924] rounded-xl p-8 flex flex-col justify-between space-y-6 ${
                  plan.highlighted
                    ? 'border-2 border-[#0CCAB1] shadow-xl shadow-[#0CCAB1]/10 relative'
                    : 'border border-white/10'
                }`}
              >
                <div className="space-y-4">
                  {plan.highlighted && (
                    <span className="px-3 py-1 rounded bg-[#0CCAB1] text-[#0B0F17] text-xs font-mono font-bold uppercase tracking-wider w-fit block">
                      MOST POPULAR TIER
                    </span>
                  )}
                  <Heading as="h3" variant="heading-lg" className="font-display font-bold text-white">
                    {plan.tier}
                  </Heading>
                  <div className="text-3xl font-extrabold font-mono text-[#45F7D6]">
                    {plan.price}
                  </div>
                  <Text variant="body-sm" className="text-slate-400">
                    {plan.desc}
                  </Text>
                  <ul className="pt-4 border-t border-white/10 space-y-2 text-xs font-mono text-slate-300">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="w-full">
                  <Button
                    variant={plan.highlighted ? 'primary' : 'secondary'}
                    size="md"
                    className={`w-full ${
                      plan.highlighted
                        ? 'bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold'
                        : 'border-white/10 bg-white/5 hover:bg-white/10 text-white'
                    }`}
                  >
                    Get Started with {plan.tier}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Product FAQ */}
      <Section className="py-16 border-t border-white/10 bg-[#131924]/40">
        <Container size="narrow">
          <div className="text-center space-y-3 mb-12">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Product FAQ
            </Heading>
          </div>

          <div className="space-y-4">
            {product.faq.map((faq, idx) => (
              <details
                key={idx}
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

      {/* Quiet Mirrored Cross-Link to /services */}
      <Section className="py-12 border-t border-white/10">
        <Container size="narrow">
          <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 bg-[#131924] text-slate-300 hover:text-white hover:border-[#0CCAB1]/40 transition-all text-xs font-mono group">
              <Briefcase className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" />
              <span>Need custom enterprise engineering or bespoke AI models instead?</span>
              <span className="text-[#0CCAB1] font-bold group-hover:translate-x-0.5 transition-transform">
                Explore NorAI Services &rarr;
              </span>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Self-Serve Conversion CTA */}
      <Section className="py-16 relative overflow-hidden">
        <Container size="default">
          <div className="rounded-2xl border border-white/10 bg-[#131924] p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <Heading as="h2" variant="display-lg" className="font-display font-extrabold text-white">
                Ready to Start Using {product.title}?
              </Heading>
              <Text variant="body-lg" className="text-slate-300">
                Deploy in under 60 seconds with instant API key generation and dashboard access.
              </Text>
            </div>

            <div className="relative z-10 pt-2 flex justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold px-10 py-4 rounded-lg shadow-xl shadow-[#0CCAB1]/20">
                  Get Started Free <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

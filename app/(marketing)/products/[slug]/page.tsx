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

// Fallback pricing tiers — used only if PRODUCTS_DATA[slug] doesn't define its own `pricing` array.
// Swap this out (or wire product.pricing through) once real tier data lives in @/lib/products.
interface PricingTier {
  tier: string;
  price: string;
  desc: string;
  features: string[];
  highlighted?: boolean;
}

function getPricingTiers(product: { title: string; pricing?: PricingTier[] }): PricingTier[] {
  if (product.pricing && product.pricing.length > 0) {
    return product.pricing;
  }
  return [
    {
      tier: 'Starter',
      price: '$0',
      desc: `Try ${product.title} with limited monthly usage.`,
      features: ['Community support', 'Basic usage limits', 'Standard processing speed'],
    },
    {
      tier: 'Pro',
      price: '$29/mo',
      desc: `Full access to ${product.title} for individuals and small teams.`,
      features: ['Priority support', 'Higher usage limits', 'Faster processing SLA'],
      highlighted: true,
    },
    {
      tier: 'Enterprise',
      price: 'Custom',
      desc: `Custom limits, SLAs, and integrations for ${product.title}.`,
      features: ['Dedicated support', 'Unlimited usage', 'Custom integrations'],
    },
  ];
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
      title: 'Product Not Found — NorAi Technologies',
      description: 'The requested product could not be found.',
    });
  }

  return buildMetadata({
    path: `/products/${product.slug}`,
    title: `${product.title} — NorAi Self-Serve AI Tools`,
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
  const pricingTiers = getPricingTiers(product);

  return (
    <div className="bg-[var(--bg-page)] text-primary-800 min-h-screen font-sans selection:bg-[var(--accent-500)] selection:text-[var(--bg-page)]">
      {/* Hero Section */}
      <Section className="relative pt-12 pb-14 md:pt-20 md:pb-16 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Breadcrumb & Monospace Badge */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono">
              <Link href="/products" className="text-primary-700 hover:text-[var(--accent-500)] transition-colors">
                &larr; All Products
              </Link>
              <span className="text-primary-700">•</span>
              <span className="px-3 py-1 rounded-full border border-[color:var(--accent-500)/0.3] bg-[color:var(--accent-500)/0.1] text-[var(--accent-mono)] uppercase tracking-wide">
                {product.id} • {product.badge}
              </span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold tracking-tight text-primary-800 leading-tight"
            >
              {product.title}
            </Heading>

            {/* Subhead */}
            <Text variant="body-lg" className="text-primary-700 font-normal leading-relaxed">
              {product.tagline}
            </Text>

            {/* Telemetry Pill Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-primary-700">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[var(--bg-elevated)] border border-slate-200/60">
                <Clock className="w-3.5 h-3.5 text-[var(--accent-500)]" aria-hidden="true" />
                Processing SLA: {product.latency}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[var(--bg-elevated)] border border-slate-200/60">
                <Shield className="w-3.5 h-3.5 text-[var(--accent-mono)]" aria-hidden="true" />
                Zero Persistent RAM Logging
              </span>
            </div>

            {/* Self-Serve CTA Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-[var(--accent-500)] hover:bg-[var(--accent-mono)] text-[var(--bg-page)] font-semibold px-8 py-3.5 rounded-lg shadow-lg shadow-[color:var(--accent-500)/0.2] transition-all">
                  Get Started Free <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="#pricing" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto border-slate-200/60 bg-[var(--bg-elevated)] hover:bg-[var(--bg-sunken)] text-primary-800 px-8 py-3.5 rounded-lg backdrop-blur-md">
                  View Self-Serve Tiers
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Problem vs Solution Section */}
      <Section className="py-16 border-t border-slate-200/60 bg-[color:var(--bg-elevated)/0.4]">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-mono text-[var(--accent-500)] uppercase font-bold tracking-widest">
              Problem vs. Solution
            </div>
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
              Why Teams Choose {product.title}
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Bottleneck Card */}
            <div className="bg-[var(--bg-elevated)] border border-red-500/30 rounded-xl p-8 space-y-4">
              <div className="flex items-center gap-2 text-red-400 text-xs font-mono font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" aria-hidden="true" /> Traditional Manual Bottleneck
              </div>
              <ul className="space-y-3 text-sm text-primary-700">
                {product.problem.map((prob, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-red-400 font-bold mt-0.5">&times;</span>
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NorAI Automated Solution Card */}
            <div className="bg-[var(--bg-elevated)] border-2 border-[color:var(--accent-500)/0.6] rounded-xl p-8 space-y-4 shadow-lg shadow-[color:var(--accent-500)/0.1]">
              <div className="flex items-center gap-2 text-[var(--accent-mono)] text-xs font-mono font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-500)]" aria-hidden="true" /> NorAi Automated Neural Solution
              </div>
              <ul className="space-y-3 text-sm text-primary-700">
                {product.solution.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-500)] shrink-0 mt-0.5" aria-hidden="true" />
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
            <div className="text-xs font-mono text-[var(--accent-500)] uppercase font-bold tracking-widest">
              Core Capabilities
            </div>
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
              Engineered for Speed &amp; Accuracy
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feat, idx) => (
              <div key={idx} className="bg-[var(--bg-elevated)] border border-slate-200/60 rounded-xl p-6 space-y-3 hover:border-[color:var(--accent-500)]/40 transition-all">
                <div className="p-2.5 rounded-lg bg-[var(--accent-500)]/10 border border-[color:var(--accent-500)]/20 text-[var(--accent-500)] w-fit">
                  <IconComp className="w-5 h-5" aria-hidden="true" />
                </div>
                <Heading as="h3" variant="heading-md" className="font-display font-bold text-primary-800">
                  {feat.title}
                </Heading>
                <Text variant="body-sm" className="text-primary-700 leading-relaxed">
                  {feat.desc}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3-Step Workflow Pipeline */}
      <Section className="py-16 border-t border-slate-200/60 bg-[color:var(--bg-elevated)/0.4]">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-mono text-[var(--accent-500)] uppercase font-bold tracking-widest">
              Execution Architecture
            </div>
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
              How It Works in 3 Steps
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.workflow.map((wf, idx) => (
              <div key={idx} className="bg-[var(--bg-elevated)] border border-slate-200/60 rounded-xl p-6 space-y-4 hover:border-[color:var(--accent-500)]/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold font-mono text-[var(--accent-500)] bg-[var(--accent-500)]/10 px-3 py-1 rounded border border-[color:var(--accent-500)]/30">
                    {wf.step}
                  </span>
                  {idx < product.workflow.length - 1 && (
                    <span className="hidden md:block text-primary-700 font-mono text-xs">STEP &rarr;</span>
                  )}
                </div>
                <Heading as="h3" variant="heading-md" className="font-display font-bold text-primary-800">
                  {wf.title}
                </Heading>
                <Text variant="body-sm" className="text-primary-700 leading-relaxed">
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
            <div className="text-xs font-mono text-[var(--accent-500)] uppercase font-bold tracking-widest">
              Predictable Self-Serve Pricing
            </div>
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
              Select Your Usage Plan
            </Heading>
            <Text variant="body-md" className="text-primary-700">
              Transparent monthly tiers with zero hidden fees. Upgrade or cancel anytime.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((plan, idx) => (
              <div
                key={idx}
                className={`bg-[var(--bg-elevated)] rounded-xl p-6 space-y-4 transition-all ${
                  plan.highlighted
                    ? 'border-2 border-[color:var(--accent-500)] shadow-xl shadow-[color:var(--accent-500)/0.1] relative'
                    : 'border border-slate-200/60'
                }`}
              >
                <div className="space-y-4">
                  {plan.highlighted && (
                    <span className="px-3 py-1 rounded bg-[var(--accent-500)] text-primary-900 text-xs font-mono font-bold uppercase tracking-wider w-fit block">
                      MOST POPULAR TIER
                    </span>
                  )}
                  <Heading as="h3" variant="heading-lg" className="font-display font-bold text-primary-800">
                    {plan.tier}
                  </Heading>
                  <div className="text-3xl font-extrabold font-mono text-[var(--accent-mono)]">
                    {plan.price}
                  </div>
                  <Text variant="body-sm" className="text-primary-700">
                    {plan.desc}
                  </Text>
                  <ul className="pt-4 border-t border-slate-200/60 space-y-2 text-xs font-mono text-primary-700">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-500)]" aria-hidden="true" />
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
                        ? 'bg-[var(--accent-500)] hover:bg-[var(--accent-mono)] text-primary-900 font-semibold'
                        : 'border-slate-200/60 bg-[var(--bg-elevated)] hover:bg-[var(--bg-sunken)] text-primary-800'
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
      <Section className="py-16 border-t border-slate-200/60 bg-[color:var(--bg-elevated)/0.4]">
        <Container size="narrow">
          <div className="text-center space-y-3 mb-12">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
              Product FAQ
            </Heading>
          </div>

          <div className="space-y-4">
            {product.faq.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-lg border border-slate-200/60 bg-[var(--bg-elevated)] p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-primary-800 text-base">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[var(--accent-500)] flex-shrink-0" aria-hidden="true" />
                    {faq.question}
                  </span>
                  <ChevronDown className="w-4 h-4 text-primary-700 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-4 text-sm text-primary-700 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quiet Mirrored Cross-Link to /services */}
      <Section className="py-12 border-t border-slate-200/60">
        <Container size="narrow">
          <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200/60 bg-[var(--bg-elevated)] text-primary-700 hover:text-primary-800 hover:border-[color:var(--accent-500)]/40 transition-all text-xs font-mono group">
              <Briefcase className="w-4 h-4 text-[var(--accent-500)]" aria-hidden="true" />
              <span>Need custom enterprise engineering or bespoke AI models instead?</span>
              <span className="text-[var(--accent-500)] font-bold group-hover:translate-x-0.5 transition-transform">
                Explore NorAi Services &rarr;
              </span>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Self-Serve Conversion CTA */}
      <Section className="py-16 relative overflow-hidden">
        <Container size="default">
          <div className="rounded-2xl border border-slate-200/60 bg-[var(--bg-elevated)] p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <Heading as="h2" variant="display-lg" className="font-display font-extrabold text-primary-800">
                Ready to Start Using {product.title}?
              </Heading>
              <Text variant="body-lg" className="text-primary-700">
                Deploy in under 60 seconds with instant API key generation and dashboard access.
              </Text>
            </div>

            <div className="relative z-10 pt-2 flex justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="bg-[var(--accent-500)] hover:bg-[var(--accent-mono)] text-primary-900 font-semibold px-10 py-4 rounded-lg shadow-xl shadow-[color:var(--accent-500)/0.2]">
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
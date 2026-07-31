'use client';

import React, { useState } from 'react';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { TiltCard } from '@/components/molecules/TiltCard';
import {
  Check,
  Minus,
  Sparkles,
  Zap,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Building2,
} from 'lucide-react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      {/* Hero Section */}
      <Section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Simple & Transparent Pricing</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-extrabold tracking-tight text-white leading-tight"
            >
              Scale Your AI Workflows{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Effortlessly
              </span>
            </Heading>

            {/* Subhead */}
            <Text variant="body-lg" className="text-slate-300 font-normal leading-relaxed">
              Transparent pay-as-you-grow pricing for modern teams. Save 20% when you pay annually.
            </Text>

            {/* Billing Toggle Switch */}
            <div className="pt-6 flex items-center justify-center gap-4">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-white font-bold' : 'text-slate-400'}`}>
                Monthly Billing
              </span>
              <button
                type="button"
                onClick={() => setIsAnnual(!isAnnual)}
                aria-label="Toggle annual or monthly billing"
                className="relative w-14 h-8 rounded-full bg-slate-800 border border-blue-500/40 p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div
                  className={`w-6 h-6 rounded-full bg-blue-500 shadow-md transform transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium flex items-center gap-2 ${isAnnual ? 'text-white font-bold' : 'text-slate-400'}`}>
                Annual Billing
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing Cards Grid */}
      <Section className="py-12">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Starter Plan */}
            <TiltCard className="flex flex-col justify-between p-8 space-y-8 bg-slate-900/60 border border-white/10">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Starter
                  </span>
                  <Heading as="h3" variant="heading-lg" className="font-bold text-white">
                    Individual & Small Projects
                  </Heading>
                  <Text variant="body-sm" className="text-slate-400">
                    Essential micro-AI tools for freelancers and early-stage startups.
                  </Text>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-mono">
                    ${isAnnual ? '23' : '29'}
                  </span>
                  <span className="text-sm text-slate-400 font-medium">/ month</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>5,000 AI API requests / mo</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Sub-1s processing latency</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Access to all 4 micro-SaaS tools</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Standard email support</span>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="w-full">
                <Button variant="secondary" size="md" className="w-full border-white/20 hover:bg-white/10 text-white font-semibold py-3 rounded-xl">
                  Start 14-Day Free Trial
                </Button>
              </Link>
            </TiltCard>

            {/* Pro Plan (Featured) */}
            <TiltCard className="relative flex flex-col justify-between p-8 space-y-8 bg-slate-900/90 border-2 border-blue-500/60 shadow-2xl shadow-blue-500/20">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 border border-blue-300/40 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                Most Popular
              </div>

              <div className="space-y-6 pt-2">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                    Pro
                  </span>
                  <Heading as="h3" variant="heading-lg" className="font-bold text-white">
                    Growing Businesses
                  </Heading>
                  <Text variant="body-sm" className="text-slate-300">
                    High-throughput AI pipelines with webhooks and priority SLA.
                  </Text>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-mono">
                    ${isAnnual ? '79' : '99'}
                  </span>
                  <span className="text-sm text-slate-400 font-medium">/ month</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>50,000 AI API requests / mo</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Priority sub-500ms processing SLA</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Webhooks & Zapier integrations</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Custom candidate & parser criteria</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200 font-medium">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>24/7 priority chat support</span>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="w-full">
                <Button variant="primary" size="md" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-600/40">
                  Get Started with Pro <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </Button>
              </Link>
            </TiltCard>

            {/* Enterprise Plan */}
            <TiltCard className="flex flex-col justify-between p-8 space-y-8 bg-slate-900/60 border border-white/10">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Enterprise
                  </span>
                  <Heading as="h3" variant="heading-lg" className="font-bold text-white">
                    Custom AI Infrastructure
                  </Heading>
                  <Text variant="body-sm" className="text-slate-400">
                    Dedicated compute clusters, custom models, and ZK-proof verification.
                  </Text>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white font-mono">
                    Custom Quote
                  </span>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Unlimited AI request throughput</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Hardware-enforced ZK audit proofs</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Dedicated cluster & 99.9% uptime SLA</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Custom model fine-tuning & connectors</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Dedicated account manager</span>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="w-full">
                <Button variant="secondary" size="md" className="w-full border-white/20 hover:bg-white/10 text-white font-semibold py-3 rounded-xl">
                  Talk to Enterprise Team
                </Button>
              </Link>
            </TiltCard>
          </div>
        </Container>
      </Section>

      {/* Feature Comparison Matrix */}
      <Section className="py-20 bg-slate-950/60 border-y border-white/10">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-extrabold text-white">
              Detailed Plan Comparison
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Compare features and SLAs across all NorAI pricing tiers.
            </Text>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10 text-slate-300 text-sm font-semibold">
                  <th className="py-4 px-6">Feature</th>
                  <th className="py-4 px-6 text-center">Starter</th>
                  <th className="py-4 px-6 text-center text-blue-400">Pro</th>
                  <th className="py-4 px-6 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm text-slate-300">
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Monthly AI Requests</td>
                  <td className="py-4 px-6 text-center font-mono">5,000</td>
                  <td className="py-4 px-6 text-center font-mono text-blue-300">50,000</td>
                  <td className="py-4 px-6 text-center font-mono">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Latency Guarantee</td>
                  <td className="py-4 px-6 text-center">&lt; 1s</td>
                  <td className="py-4 px-6 text-center text-blue-300">&lt; 500ms</td>
                  <td className="py-4 px-6 text-center">&lt; 100ms</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Webhooks & API Access</td>
                  <td className="py-4 px-6 text-center"><Check className="w-4 h-4 mx-auto text-blue-400" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-4 h-4 mx-auto text-blue-400" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-4 h-4 mx-auto text-blue-400" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Custom Candidate & Parsing Rules</td>
                  <td className="py-4 px-6 text-center"><Minus className="w-4 h-4 mx-auto text-slate-600" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-4 h-4 mx-auto text-blue-400" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-4 h-4 mx-auto text-blue-400" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Hardware-Enforced ZK Proofs</td>
                  <td className="py-4 px-6 text-center"><Minus className="w-4 h-4 mx-auto text-slate-600" /></td>
                  <td className="py-4 px-6 text-center"><Minus className="w-4 h-4 mx-auto text-slate-600" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-4 h-4 mx-auto text-blue-400" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Uptime SLA</td>
                  <td className="py-4 px-6 text-center font-mono">99.5%</td>
                  <td className="py-4 px-6 text-center font-mono text-blue-300">99.9%</td>
                  <td className="py-4 px-6 text-center font-mono">99.99%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Pricing FAQ */}
      <Section className="py-20">
        <Container size="narrow">
          <div className="text-center space-y-4 mb-12">
            <Heading as="h2" variant="display-md" className="font-extrabold text-white">
              Pricing Questions
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Everything you need to know about billing and subscriptions.
            </Text>
          </div>

          <div className="space-y-4">
            <details className="group rounded-xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-base">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  Can I change or upgrade my plan later?
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed pl-8">
                Yes! You can upgrade, downgrade, or cancel your subscription at any time directly from your dashboard. Pro-rated credits are automatically applied.
              </p>
            </details>

            <details className="group rounded-xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-base">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  What happens if I exceed my monthly request limit?
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed pl-8">
                We will notify you when you reach 80% and 100% of your usage cap. Additional requests are billed at a simple pay-as-you-go rate ($0.002/req) without service interruption.
              </p>
            </details>

            <details className="group rounded-xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-base">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  How does the 14-day free trial work?
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed pl-8">
                The 14-day trial gives you full access to Starter and Pro features with 1,000 free API requests. No credit card is required to sign up.
              </p>
            </details>
          </div>
        </Container>
      </Section>

      {/* CTA Conversion Banner */}
      <Section className="py-20 relative overflow-hidden">
        <Container size="default">
          <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-950/60 to-slate-900/80 p-12 text-center space-y-6 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-blue-500/10">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <Heading as="h2" variant="display-lg" className="font-extrabold text-white">
                Need a Custom AI Automation Pipeline?
              </Heading>
              <Text variant="body-lg" className="text-slate-300">
                Talk to our solution architects for custom enterprise integrations and dedicated SLA agreements.
              </Text>
            </div>

            <div className="relative z-10 pt-2 flex justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-xl shadow-blue-600/40">
                  Talk to Enterprise Team <Building2 className="w-4 h-4 ml-2 inline-block" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

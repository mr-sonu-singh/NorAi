'use client';

import React, { useState } from 'react';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import {
  Check,
  Minus,
  Sparkles,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Building2,
  Terminal,
  Activity,
} from 'lucide-react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-[#0CCAB1] selection:text-[#0B0F17]">
      {/* Hero Section */}
      <Section className="relative pt-12 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0CCAB1]/30 bg-[#0CCAB1]/10 text-[#45F7D6] text-xs font-mono tracking-wide uppercase">
              <Terminal className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
              <span>Transparent Pay-As-You-Grow Pricing</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Scale Your AI Workflows{' '}
              <span className="text-[#0CCAB1] underline decoration-[#0CCAB1]/40 underline-offset-8">
                Effortlessly
              </span>
            </Heading>

            {/* Subhead */}
            <Text variant="body-lg" className="text-slate-300 font-normal leading-relaxed">
              Transparent, predictable pricing for high-growth teams. Save 20% when you choose annual billing.
            </Text>

            {/* Billing Toggle Switch */}
            <div className="pt-4 flex items-center justify-center gap-4">
              <span className={`text-xs font-mono ${!isAnnual ? 'text-white font-bold' : 'text-slate-400'}`}>
                Monthly Billing
              </span>
              <button
                type="button"
                onClick={() => setIsAnnual(!isAnnual)}
                aria-label={`Switch to ${isAnnual ? 'monthly' : 'annual'} billing`}
                aria-pressed={isAnnual}
                className="relative w-14 h-8 rounded-full bg-[#131924] border border-white/10 p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0CCAB1] cursor-pointer"
              >
                <div
                  className={`w-6 h-6 rounded-full bg-[#0CCAB1] shadow-md transform transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-xs font-mono flex items-center gap-2 ${isAnnual ? 'text-white font-bold' : 'text-slate-400'}`}>
                Annual Billing
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[#0CCAB1]/10 border border-[#0CCAB1]/30 text-[#45F7D6]">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Signature Element: Static Throughput Bracket Bar */}
      <Section className="py-4 border-y border-white/10 bg-[#131924]/60">
        <Container size="default">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <Activity className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" />
              <span className="font-bold text-white uppercase tracking-wider">Throughput Brackets:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:w-auto">
              <div className="px-3.5 py-1.5 rounded bg-[#0B0F17] border border-white/10 text-slate-300 text-center">
                <span className="text-[#45F7D6]">STARTER:</span> 5k req/mo • &lt;1s
              </div>
              <div className="px-3.5 py-1.5 rounded bg-[#0B0F17] border border-[#0CCAB1]/50 text-white text-center font-bold">
                <span className="text-[#0CCAB1]">PRO:</span> 50k req/mo • &lt;500ms
              </div>
              <div className="px-3.5 py-1.5 rounded bg-[#0B0F17] border border-white/10 text-slate-300 text-center">
                <span className="text-[#45F7D6]">ENTERPRISE:</span> Unlimited • &lt;100ms
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing Cards Grid */}
      <Section className="py-16">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Starter Plan */}
            <div className="flex flex-col justify-between p-8 space-y-8 bg-[#131924] border border-white/10 rounded-xl hover:border-white/20 transition-all">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Starter Tier
                  </span>
                  <Heading as="h3" variant="heading-lg" className="font-display font-bold text-white">
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
                  <span className="text-xs text-slate-400 font-mono">/ month</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-3 text-xs font-sans text-slate-300">
                    <Check className="w-4 h-4 text-[#0CCAB1] shrink-0" aria-hidden="true" />
                    <span>5,000 AI API requests / mo</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-slate-300">
                    <Check className="w-4 h-4 text-[#0CCAB1] shrink-0" aria-hidden="true" />
                    <span>Sub-1s processing latency guarantee</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-slate-300">
                    <Check className="w-4 h-4 text-[#0CCAB1] shrink-0" aria-hidden="true" />
                    <span>Access to all 4 micro-SaaS tools</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-slate-300">
                    <Check className="w-4 h-4 text-[#0CCAB1] shrink-0" aria-hidden="true" />
                    <span>Standard email support</span>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="w-full">
                <Button variant="secondary" size="md" className="w-full border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold py-3 rounded-lg">
                  Start 14-Day Free Trial
                </Button>
              </Link>
            </div>

            {/* Pro Plan (Featured) */}
            <div className="relative flex flex-col justify-between p-8 space-y-8 bg-[#131924] border-2 border-[#0CCAB1] rounded-xl shadow-xl shadow-[#0CCAB1]/10">
              {/* Popular Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded bg-[#0CCAB1] text-[#0B0F17] text-[11px] font-mono font-bold uppercase tracking-wider">
                Most Popular
              </div>

              <div className="space-y-6 pt-2">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#45F7D6]">
                    Pro Tier
                  </span>
                  <Heading as="h3" variant="heading-lg" className="font-display font-bold text-white">
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
                  <span className="text-xs text-slate-400 font-mono">/ month</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-3 text-xs font-sans text-slate-200 font-medium">
                    <Check className="w-4 h-4 text-[#0CCAB1] shrink-0" aria-hidden="true" />
                    <span>50,000 AI API requests / mo</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-slate-200 font-medium">
                    <Check className="w-4 h-4 text-[#0CCAB1] shrink-0" aria-hidden="true" />
                    <span>Priority sub-500ms processing SLA</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-slate-200 font-medium">
                    <Check className="w-4 h-4 text-[#0CCAB1] shrink-0" aria-hidden="true" />
                    <span>Webhooks & REST API access</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-slate-200 font-medium">
                    <Check className="w-4 h-4 text-[#0CCAB1] shrink-0" aria-hidden="true" />
                    <span>Custom candidate & parser rules</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-slate-200 font-medium">
                    <Check className="w-4 h-4 text-[#0CCAB1] shrink-0" aria-hidden="true" />
                    <span>24/7 priority chat support</span>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="w-full">
                <Button variant="primary" size="md" className="w-full bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold py-3 rounded-lg shadow-lg shadow-[#0CCAB1]/20 transition-all">
                  Get Started with Pro <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col justify-between p-8 space-y-8 bg-[#131924] border border-white/10 rounded-xl hover:border-white/20 transition-all">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Enterprise Tier
                  </span>
                  <Heading as="h3" variant="heading-lg" className="font-display font-bold text-white">
                    Custom AI Infrastructure
                  </Heading>
                  <Text variant="body-sm" className="text-slate-400">
                    Dedicated compute clusters, custom model fine-tuning, and enterprise SLAs.
                  </Text>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white font-mono">
                    Custom Quote
                  </span>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-3 text-xs font-sans text-slate-300">
                    <Check className="w-4 h-4 text-[#0CCAB1] shrink-0" aria-hidden="true" />
                    <span>Unlimited AI request throughput</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-slate-300">
                    <Check className="w-4 h-4 text-[#0CCAB1] shrink-0" aria-hidden="true" />
                    <span>Custom model fine-tuning & private connectors</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-slate-300">
                    <Check className="w-4 h-4 text-[#0CCAB1] shrink-0" aria-hidden="true" />
                    <span>Dedicated cluster & 99.99% uptime SLA</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-slate-300">
                    <Check className="w-4 h-4 text-[#0CCAB1] shrink-0" aria-hidden="true" />
                    <span>Dedicated solution architect</span>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="w-full">
                <Button variant="secondary" size="md" className="w-full border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold py-3 rounded-lg">
                  Talk to Enterprise Team
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Feature Comparison Matrix */}
      <Section className="py-20 bg-[#131924]/40 border-y border-white/10">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Detailed Plan Comparison
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Compare capabilities, latency limits, and SLAs across all NorAI pricing tiers.
            </Text>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#131924]">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10 text-slate-300 text-xs font-mono uppercase">
                  <th scope="col" className="py-4 px-6 font-semibold">Capability / SLA</th>
                  <th scope="col" className="py-4 px-6 text-center font-semibold">Starter</th>
                  <th scope="col" className="py-4 px-6 text-center font-semibold text-[#0CCAB1] bg-[#0CCAB1]/5">Pro (Recommended)</th>
                  <th scope="col" className="py-4 px-6 text-center font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm text-slate-300 font-sans">
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Monthly AI Requests</td>
                  <td className="py-4 px-6 text-center font-mono">5,000</td>
                  <td className="py-4 px-6 text-center font-mono text-[#45F7D6] bg-[#0CCAB1]/5">50,000</td>
                  <td className="py-4 px-6 text-center font-mono">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Latency Guarantee</td>
                  <td className="py-4 px-6 text-center font-mono">&lt; 1s</td>
                  <td className="py-4 px-6 text-center font-mono text-[#45F7D6] bg-[#0CCAB1]/5">&lt; 500ms</td>
                  <td className="py-4 px-6 text-center font-mono">&lt; 100ms</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Webhooks & REST API Access</td>
                  <td className="py-4 px-6 text-center"><Check className="w-4 h-4 mx-auto text-[#0CCAB1]" aria-hidden="true" /></td>
                  <td className="py-4 px-6 text-center bg-[#0CCAB1]/5"><Check className="w-4 h-4 mx-auto text-[#0CCAB1]" aria-hidden="true" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-4 h-4 mx-auto text-[#0CCAB1]" aria-hidden="true" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Custom Candidate & Parsing Rules</td>
                  <td className="py-4 px-6 text-center"><Minus className="w-4 h-4 mx-auto text-slate-600" aria-hidden="true" /></td>
                  <td className="py-4 px-6 text-center bg-[#0CCAB1]/5"><Check className="w-4 h-4 mx-auto text-[#0CCAB1]" aria-hidden="true" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-4 h-4 mx-auto text-[#0CCAB1]" aria-hidden="true" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Custom Model Fine-Tuning & Private Connectors</td>
                  <td className="py-4 px-6 text-center"><Minus className="w-4 h-4 mx-auto text-slate-600" aria-hidden="true" /></td>
                  <td className="py-4 px-6 text-center bg-[#0CCAB1]/5"><Minus className="w-4 h-4 mx-auto text-slate-600" aria-hidden="true" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-4 h-4 mx-auto text-[#0CCAB1]" aria-hidden="true" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-white">Uptime SLA</td>
                  <td className="py-4 px-6 text-center font-mono">99.5%</td>
                  <td className="py-4 px-6 text-center font-mono text-[#45F7D6] bg-[#0CCAB1]/5">99.9%</td>
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
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Pricing Questions
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Everything you need to know about billing, request limits, and enterprise contracts.
            </Text>
          </div>

          <div className="space-y-4">
            <details className="group rounded-lg border border-white/10 bg-[#131924] p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-base">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#0CCAB1] flex-shrink-0" aria-hidden="true" />
                  Can I change or upgrade my plan later?
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed pl-8">
                Yes! You can upgrade, downgrade, or cancel your subscription at any time directly from your dashboard. Pro-rated credits are automatically applied.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-[#131924] p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-base">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#0CCAB1] flex-shrink-0" aria-hidden="true" />
                  What happens if I exceed my monthly request limit?
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed pl-8">
                We will notify you when you reach 80% and 100% of your usage cap. Additional requests are billed at a simple pay-as-you-go rate ($0.002/req) without service interruption.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-[#131924] p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-base">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#0CCAB1] flex-shrink-0" aria-hidden="true" />
                  How does the 14-day free trial work?
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
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
          <div className="rounded-2xl border border-white/10 bg-[#131924] p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <Heading as="h2" variant="display-lg" className="font-display font-extrabold text-white">
                Need a Custom AI Automation Pipeline?
              </Heading>
              <Text variant="body-lg" className="text-slate-300">
                Talk to our solution architects for custom enterprise integrations and dedicated SLA agreements.
              </Text>
            </div>

            <div className="relative z-10 pt-2 flex justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold px-8 py-3.5 rounded-lg shadow-xl shadow-[#0CCAB1]/20">
                  Talk to Enterprise Team <Building2 className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

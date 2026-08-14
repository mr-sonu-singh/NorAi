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
      <Section className="relative pt-12 pb-14 md:pt-20 md:pb-20 overflow-hidden isolate">
        {/* Cover Image — place your file at /public/images/hero-bg.jpg */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundColor: 'var(--primary-900)',
          }}
        />

        {/* Tinted overlay so text stays readable over the image */}
        <div aria-hidden="true" className="absolute inset-0 bg-[var(--bg-page)]/20" />

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

        <Container size="default" className="relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-xs font-mono tracking-wide uppercase">
              <Terminal className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              <span>Transparent Pay-As-You-Grow Pricing</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold text-white tracking-[-0.03em] leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
            >
              Scale Your AI Workflows{' '}
              <span className="text-[#DDF7FF] underline decoration-[color:var(--accent-mono)/0.6] underline-offset-8">
                Effortlessly
              </span>
            </Heading>

            {/* Subhead */}
            <Text
              variant="body-lg"
              className="font-sans font-medium text-[#E8F7FF] max-w-2xl mx-auto leading-[1.8] tracking-[-0.01em] drop-shadow-[0_1px_6px_rgba(0,20,50,0.35)]"
            >
              Transparent, predictable pricing for high-growth teams. Save 20% when you choose annual billing.
            </Text>

            {/* Billing Toggle Switch */}
            <div className="pt-4 flex items-center justify-center gap-4">
              <span className={`text-xs font-mono ${!isAnnual ? 'text-white font-bold' : 'text-[#D5F5FF]'}`}>
                Monthly Billing
              </span>
              <button
                type="button"
                onClick={() => setIsAnnual(!isAnnual)}
                aria-label={`Switch to ${isAnnual ? 'monthly' : 'annual'} billing`}
                aria-pressed={isAnnual}
                className="relative w-14 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/30 p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              >
                <div
                  className={`w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md transform transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-xs font-mono flex items-center gap-2 ${isAnnual ? 'text-white font-bold' : 'text-[#D5F5FF]'}`}>
                Annual Billing
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-white/10 backdrop-blur-md border border-white/30 text-[#DDF7FF]">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Signature Element: Static Throughput Bracket Bar */}
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
              <span className="font-bold text-primary-800 uppercase tracking-wider">Throughput Brackets:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:w-auto">
              <div className="px-3.5 py-1.5 rounded-lg bg-white/40 backdrop-blur-sm border border-blue-400/15 text-primary-700 text-center">
                <span className="text-[var(--accent-mono)]">STARTER:</span> 5k req/mo • &lt;1s
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-white/50 backdrop-blur-sm border border-blue-400/40 text-primary-800 text-center font-bold">
                <span className="text-blue-600">PRO:</span> 50k req/mo • &lt;500ms
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-white/40 backdrop-blur-sm border border-blue-400/15 text-primary-700 text-center">
                <span className="text-[var(--accent-mono)]">ENTERPRISE:</span> Unlimited • &lt;100ms
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing Cards Grid */}
      <Section
        className="
          relative
          py-20
          overflow-hidden
          bg-[radial-gradient(circle_at_8%_35%,rgba(59,130,246,0.10),transparent_32%),radial-gradient(circle_at_92%_65%,rgba(139,92,246,0.10),transparent_34%)]
        "
      >
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Starter Plan */}
            <div
              className="
                group
                relative
                overflow-hidden
                flex
                flex-col
                justify-between
                rounded-2xl
                p-8
                space-y-8

                bg-white/45
                backdrop-blur-xl

                border
                border-blue-400/15

                shadow-[0_10px_40px_rgba(59,130,246,0.06)]

                hover:-translate-y-1
                hover:border-blue-400/30
                hover:shadow-[0_20px_55px_rgba(59,130,246,0.14)]

                transition-all
                duration-500
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute -top-20 -right-20 w-40 h-40 rounded-full
                  bg-blue-500/10 blur-[70px]
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500 pointer-events-none
                "
              />

              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary-700">
                    Starter Tier
                  </span>
                  <Heading as="h3" variant="heading-lg" className="font-display font-bold text-primary-800">
                    Individual & Small Projects
                  </Heading>
                  <Text variant="body-sm" className="text-primary-700">
                    Essential micro-AI tools for freelancers and early-stage startups.
                  </Text>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-primary-800 font-mono">
                    ${isAnnual ? '23' : '29'}
                  </span>
                  <span className="text-xs text-primary-700 font-mono">/ month</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-blue-400/10">
                  <div className="flex items-center gap-3 text-xs font-sans text-primary-700">
                    <Check className="w-4 h-4 text-[var(--accent-500)] shrink-0" aria-hidden="true" />
                    <span>5,000 AI API requests / mo</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-primary-700">
                    <Check className="w-4 h-4 text-[var(--accent-500)] shrink-0" aria-hidden="true" />
                    <span>Sub-1s processing latency guarantee</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-primary-700">
                    <Check className="w-4 h-4 text-[var(--accent-500)] shrink-0" aria-hidden="true" />
                    <span>Access to all 4 micro-SaaS tools</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-primary-700">
                    <Check className="w-4 h-4 text-[var(--accent-500)] shrink-0" aria-hidden="true" />
                    <span>Standard email support</span>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="relative z-10 w-full">
                <Button
                  variant="secondary"
                  size="md"
                  className="
                    w-full
                    border border-blue-400/20
                    bg-white/60
                    backdrop-blur-md
                    hover:bg-white/80
                    hover:border-blue-400/40
                    text-primary-800
                    font-semibold py-3 rounded-lg
                    transition-all duration-300
                  "
                >
                  Start 14-Day Free Trial
                </Button>
              </Link>
            </div>

            {/* Pro Plan (Featured) */}
            <div
              className="
                group
                relative
                overflow-hidden
                flex
                flex-col
                justify-between
                rounded-2xl
                p-8
                space-y-8

                bg-white/55
                backdrop-blur-xl

                border-2
                border-blue-400/40

                shadow-[0_20px_60px_rgba(59,130,246,0.16)]

                hover:border-blue-400/60
                hover:shadow-[0_25px_70px_rgba(59,130,246,0.22)]

                transition-all
                duration-500
              "
            >
              {/* Card AI Glow */}
              <div
                aria-hidden="true"
                className="
                  absolute -top-24 -right-24 w-56 h-56 rounded-full
                  bg-blue-500/15 blur-[80px]
                  opacity-70 group-hover:opacity-100
                  transition-opacity duration-500 pointer-events-none
                "
              />
              <div
                aria-hidden="true"
                className="
                  absolute -bottom-24 -left-24 w-52 h-52 rounded-full
                  bg-violet-500/15 blur-[80px]
                  opacity-60 group-hover:opacity-100
                  transition-opacity duration-700 pointer-events-none
                "
              />

              {/* Popular Badge */}
              <div
                className="
                  absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full
                  bg-gradient-to-r from-blue-600 to-indigo-600
                  text-white text-[11px] font-mono font-bold uppercase tracking-wider
                  shadow-lg shadow-blue-500/20
                "
              >
                Most Popular
              </div>

              <div className="relative z-10 space-y-6 pt-2">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent-mono)]">
                    Pro Tier
                  </span>
                  <Heading as="h3" variant="heading-lg" className="font-display font-bold text-primary-800">
                    Growing Businesses
                  </Heading>
                  <Text variant="body-sm" className="text-primary-700">
                    High-throughput AI pipelines with webhooks and priority SLA.
                  </Text>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-primary-800 font-mono">
                    ${isAnnual ? '79' : '99'}
                  </span>
                  <span className="text-xs text-primary-700 font-mono">/ month</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-blue-400/10">
                  <div className="flex items-center gap-3 text-xs font-sans text-primary-800 font-medium">
                    <Check className="w-4 h-4 text-[var(--accent-500)] shrink-0" aria-hidden="true" />
                    <span>50,000 AI API requests / mo</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-primary-800 font-medium">
                    <Check className="w-4 h-4 text-[var(--accent-500)] shrink-0" aria-hidden="true" />
                    <span>Priority sub-500ms processing SLA</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-primary-800 font-medium">
                    <Check className="w-4 h-4 text-[var(--accent-500)] shrink-0" aria-hidden="true" />
                    <span>Webhooks & REST API access</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-primary-800 font-medium">
                    <Check className="w-4 h-4 text-[var(--accent-500)] shrink-0" aria-hidden="true" />
                    <span>Custom candidate & parser rules</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-primary-800 font-medium">
                    <Check className="w-4 h-4 text-[var(--accent-500)] shrink-0" aria-hidden="true" />
                    <span>24/7 priority chat support</span>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="relative z-10 w-full">
                <Button
                  variant="primary"
                  size="md"
                  className="
                    w-full
                    bg-gradient-to-r from-blue-600 to-indigo-600
                    hover:from-blue-700 hover:to-violet-600
                    text-white font-semibold py-3 rounded-lg
                    shadow-lg shadow-blue-500/20
                    hover:shadow-blue-500/30
                    transition-all duration-300
                  "
                >
                  Get Started with Pro <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div
              className="
                group
                relative
                overflow-hidden
                flex
                flex-col
                justify-between
                rounded-2xl
                p-8
                space-y-8

                bg-white/45
                backdrop-blur-xl

                border
                border-blue-400/15

                shadow-[0_10px_40px_rgba(59,130,246,0.06)]

                hover:-translate-y-1
                hover:border-blue-400/30
                hover:shadow-[0_20px_55px_rgba(59,130,246,0.14)]

                transition-all
                duration-500
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute -top-20 -right-20 w-40 h-40 rounded-full
                  bg-violet-500/10 blur-[70px]
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500 pointer-events-none
                "
              />

              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary-700">
                    Enterprise Tier
                  </span>
                  <Heading as="h3" variant="heading-lg" className="font-display font-bold text-primary-800">
                    Custom AI Infrastructure
                  </Heading>
                  <Text variant="body-sm" className="text-primary-700">
                    Dedicated compute clusters, custom model fine-tuning, and enterprise SLAs.
                  </Text>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-primary-800 font-mono">
                    Custom Quote
                  </span>
                </div>

                <div className="space-y-3 pt-4 border-t border-blue-400/10">
                  <div className="flex items-center gap-3 text-xs font-sans text-primary-700">
                    <Check className="w-4 h-4 text-[var(--accent-500)] shrink-0" aria-hidden="true" />
                    <span>Unlimited AI request throughput</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-primary-700">
                    <Check className="w-4 h-4 text-[var(--accent-500)] shrink-0" aria-hidden="true" />
                    <span>Custom model fine-tuning & private connectors</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-primary-700">
                    <Check className="w-4 h-4 text-[var(--accent-500)] shrink-0" aria-hidden="true" />
                    <span>Dedicated cluster & 99.99% uptime SLA</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-sans text-primary-700">
                    <Check className="w-4 h-4 text-[var(--accent-500)] shrink-0" aria-hidden="true" />
                    <span>Dedicated solution architect</span>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="relative z-10 w-full">
                <Button
                  variant="secondary"
                  size="md"
                  className="
                    w-full
                    border border-blue-400/20
                    bg-white/60
                    backdrop-blur-md
                    hover:bg-white/80
                    hover:border-blue-400/40
                    text-primary-800
                    font-semibold py-3 rounded-lg
                    transition-all duration-300
                  "
                >
                  Talk to Enterprise Team
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Feature Comparison Matrix */}
      <Section className="py-20 border-y border-blue-400/10 bg-white/20 backdrop-blur-sm">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
              Detailed Plan Comparison
            </Heading>
            <Text variant="body-md" className="text-primary-700">
              Compare capabilities, latency limits, and SLAs across all NorAI pricing tiers.
            </Text>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-blue-400/15 bg-white/45 backdrop-blur-xl shadow-[0_10px_40px_rgba(59,130,246,0.06)]">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-blue-400/10 text-primary-700 text-xs font-mono uppercase">
                  <th scope="col" className="py-4 px-6 font-semibold">Capability / SLA</th>
                  <th scope="col" className="py-4 px-6 text-center font-semibold">Starter</th>
                  <th scope="col" className="py-4 px-6 text-center font-semibold text-blue-600 bg-blue-500/5">Pro (Recommended)</th>
                  <th scope="col" className="py-4 px-6 text-center font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-400/10 text-sm text-primary-700 font-sans">
                <tr>
                  <td className="py-4 px-6 font-medium text-primary-800">Monthly AI Requests</td>
                  <td className="py-4 px-6 text-center font-mono">5,000</td>
                  <td className="py-4 px-6 text-center font-mono text-[var(--accent-mono)] bg-blue-500/5">50,000</td>
                  <td className="py-4 px-6 text-center font-mono">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-primary-800">Latency Guarantee</td>
                  <td className="py-4 px-6 text-center font-mono">&lt; 1s</td>
                  <td className="py-4 px-6 text-center font-mono text-[var(--accent-mono)] bg-blue-500/5">&lt; 500ms</td>
                  <td className="py-4 px-6 text-center font-mono">&lt; 100ms</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-primary-800">Webhooks & REST API Access</td>
                  <td className="py-4 px-6 text-center"><Check className="w-4 h-4 mx-auto text-[var(--accent-500)]" aria-hidden="true" /></td>
                  <td className="py-4 px-6 text-center bg-blue-500/5"><Check className="w-4 h-4 mx-auto text-[var(--accent-500)]" aria-hidden="true" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-4 h-4 mx-auto text-[var(--accent-500)]" aria-hidden="true" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-primary-800">Custom Candidate & Parsing Rules</td>
                  <td className="py-4 px-6 text-center"><Minus className="w-4 h-4 mx-auto text-primary-700" aria-hidden="true" /></td>
                  <td className="py-4 px-6 text-center bg-blue-500/5"><Check className="w-4 h-4 mx-auto text-[var(--accent-500)]" aria-hidden="true" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-4 h-4 mx-auto text-[var(--accent-500)]" aria-hidden="true" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-primary-800">Custom Model Fine-Tuning & Private Connectors</td>
                  <td className="py-4 px-6 text-center"><Minus className="w-4 h-4 mx-auto text-primary-700" aria-hidden="true" /></td>
                  <td className="py-4 px-6 text-center bg-blue-500/5"><Minus className="w-4 h-4 mx-auto text-primary-700" aria-hidden="true" /></td>
                  <td className="py-4 px-6 text-center"><Check className="w-4 h-4 mx-auto text-[var(--accent-500)]" aria-hidden="true" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-primary-800">Uptime SLA</td>
                  <td className="py-4 px-6 text-center font-mono">99.5%</td>
                  <td className="py-4 px-6 text-center font-mono text-[var(--accent-mono)] bg-blue-500/5">99.9%</td>
                  <td className="py-4 px-6 text-center font-mono">99.99%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Pricing FAQ */}
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
              Pricing Questions
            </Heading>
            <Text variant="body-md" className="text-primary-700">
              Everything you need to know about billing, request limits, and enterprise contracts.
            </Text>
          </div>

          <div className="space-y-4">
            <details
              className="
                group relative overflow-hidden rounded-xl
                border border-white/70
                bg-white/75 backdrop-blur-md
                p-5
                shadow-[0_8px_30px_rgba(59,130,246,0.04)]
                hover:bg-white/85 hover:border-blue-300/40 hover:shadow-[0_15px_40px_rgba(59,130,246,0.10)]
                transition-all duration-500
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
              <summary className="relative z-10 flex items-center justify-between cursor-pointer font-semibold text-primary-800 text-base">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[var(--accent-500)] flex-shrink-0" aria-hidden="true" />
                  Can I change or upgrade my plan later?
                </span>
                <ChevronDown className="w-4 h-4 text-primary-700 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="relative z-10 mt-4 text-sm text-primary-700 leading-relaxed pl-8">
                Yes! You can upgrade, downgrade, or cancel your subscription at any time directly from your dashboard. Pro-rated credits are automatically applied.
              </p>
            </details>

            <details
              className="
                group relative overflow-hidden rounded-xl
                border border-white/70
                bg-white/75 backdrop-blur-md
                p-5
                shadow-[0_8px_30px_rgba(59,130,246,0.04)]
                hover:bg-white/85 hover:border-blue-300/40 hover:shadow-[0_15px_40px_rgba(59,130,246,0.10)]
                transition-all duration-500
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
              <summary className="relative z-10 flex items-center justify-between cursor-pointer font-semibold text-primary-800 text-base">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[var(--accent-500)] flex-shrink-0" aria-hidden="true" />
                  What happens if I exceed my monthly request limit?
                </span>
                <ChevronDown className="w-4 h-4 text-primary-700 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="relative z-10 mt-4 text-sm text-primary-700 leading-relaxed pl-8">
                We will notify you when you reach 80% and 100% of your usage cap. Additional requests are billed at a simple pay-as-you-go rate ($0.002/req) without service interruption.
              </p>
            </details>

            <details
              className="
                group relative overflow-hidden rounded-xl
                border border-white/70
                bg-white/75 backdrop-blur-md
                p-5
                shadow-[0_8px_30px_rgba(59,130,246,0.04)]
                hover:bg-white/85 hover:border-blue-300/40 hover:shadow-[0_15px_40px_rgba(59,130,246,0.10)]
                transition-all duration-500
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
              <summary className="relative z-10 flex items-center justify-between cursor-pointer font-semibold text-primary-800 text-base">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[var(--accent-500)] flex-shrink-0" aria-hidden="true" />
                  How does the 14-day free trial work?
                </span>
                <ChevronDown className="w-4 h-4 text-primary-700 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="relative z-10 mt-4 text-sm text-primary-700 leading-relaxed pl-8">
                The 14-day trial gives you full access to Starter and Pro features with 1,000 free API requests. No credit card is required to sign up.
              </p>
            </details>
          </div>
        </Container>
      </Section>

      {/* CTA Conversion Banner */}
      <Section className="py-20 relative overflow-hidden bg-transparent">
        <Container size="default">
          <div className="rounded-2xl border border-blue-400/15 bg-gradient-to-br from-white via-[#F8FAFF] to-[#EEF5FF] p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <Heading as="h2" variant="display-lg" className="font-display font-extrabold text-primary-800">
                Need a Custom AI Automation Pipeline?
              </Heading>
              <Text variant="body-lg" className="text-primary-700">
                Talk to our solution architects for custom enterprise integrations and dedicated SLA agreements.
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
                    text-white font-semibold px-8 py-3.5 rounded-lg
                    shadow-xl shadow-blue-500/20
                    hover:shadow-blue-500/30
                    hover:-translate-y-0.5
                    transition-all duration-300
                  "
                >
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
import React from 'react';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { ContactFormClient } from './ContactFormClient';
import {
  Sparkles,
  MapPin,
  Mail,
  Clock,
  HelpCircle,
  ChevronDown,
  Building2,
  Activity,
  ShieldCheck,
} from 'lucide-react';

export default function ContactPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact NorAI Technologies',
    description: 'Get in touch with NorAI Technologies engineering and sales teams.',
    mainEntity: {
      '@type': 'Organization',
      name: 'NorAI Technologies Pvt. Ltd.',
      url: 'https://norai-c8yy.onrender.com',
      email: 'contact@norai.asia',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'India',
      },
    },
  };

  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-[#0CCAB1] selection:text-[#0B0F17]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      {/* Hero Section */}
      <Section className="relative pt-12 pb-14 md:pt-20 md:pb-16 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0CCAB1]/30 bg-[#0CCAB1]/10 text-[#45F7D6] text-xs font-mono tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
              <span>Contact & Technical Scoping</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Let&apos;s Build Your AI Workflow{' '}
              <span className="text-[#0CCAB1] underline decoration-[#0CCAB1]/40 underline-offset-8">
                Together
              </span>
            </Heading>

            {/* Subhead */}
            <Text variant="body-lg" className="text-slate-300 font-normal leading-relaxed">
              Connect with our founding engineering team for micro-SaaS deployment, custom AI agent orchestration, or enterprise technical consultations.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Signature Element: SLA & Response Window Telemetry Bar */}
      <Section className="py-4 border-y border-white/10 bg-[#131924]/60">
        <Container size="default">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <Activity className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" />
              <span className="font-bold text-white uppercase tracking-wider">ENGINEERING_SLA:</span>
              <span className="text-[#45F7D6]">&lt; 2 HOURS GUARANTEED</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#45F7D6] bg-[#0B0F17] px-3 py-1 rounded border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#45F7D6] animate-pulse" />
                ACTIVE WINDOW: MON–SAT (9:00 AM – 8:00 PM IST)
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Contact Grid: Form + Info Cards */}
      <Section className="py-16">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Interactive Contact Form (Client Component) */}
            <div className="lg:col-span-7">
              <ContactFormClient />
            </div>

            {/* Right Column: Direct Info Cards & Regional Office */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Regional Hub */}
              <div className="p-6 bg-[#131924] border border-white/10 rounded-xl space-y-3 hover:border-[#0CCAB1]/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0CCAB1]/10 text-[#0CCAB1] border border-[#0CCAB1]/20">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <Heading as="h4" variant="heading-sm" className="font-display font-bold text-white">
                      Regional Startup Hub
                    </Heading>
                    <Text variant="body-xs" className="text-[#45F7D6] font-mono">
                      Uttar Pradesh, India
                    </Text>
                  </div>
                </div>
                <Text variant="body-xs" className="text-slate-300 leading-relaxed pt-2">
                  Operating directly out of India&apos;s fast-growing northern technology corridor, serving global enterprise clients.
                </Text>
              </div>

              {/* Card 2: Direct Email */}
              <div className="p-6 bg-[#131924] border border-white/10 rounded-xl space-y-3 hover:border-[#0CCAB1]/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0CCAB1]/10 text-[#0CCAB1] border border-[#0CCAB1]/20">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <Heading as="h4" variant="heading-sm" className="font-display font-bold text-white">
                      Direct Email Inquiries
                    </Heading>
                    <Text variant="body-xs" className="text-[#45F7D6] font-mono">
                      contact@norai.asia
                    </Text>
                  </div>
                </div>
                <Text variant="body-xs" className="text-slate-300 leading-relaxed pt-2">
                  Email our technical team directly for API access keys, custom enterprise quotes, or NDA requests.
                </Text>
              </div>

              {/* Card 3: Response SLA */}
              <div className="p-6 bg-[#131924] border border-white/10 rounded-xl space-y-3 hover:border-[#0CCAB1]/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0CCAB1]/10 text-[#0CCAB1] border border-[#0CCAB1]/20">
                    <Clock className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <Heading as="h4" variant="heading-sm" className="font-display font-bold text-white">
                      Fast SLA Response
                    </Heading>
                    <Text variant="body-xs" className="text-[#45F7D6] font-mono">
                      &lt; 2 Hours Guaranteed
                    </Text>
                  </div>
                </div>
                <Text variant="body-xs" className="text-slate-300 leading-relaxed pt-2">
                  Our solution architects review every incoming workflow request and respond with preliminary technical scopes.
                </Text>
              </div>

              {/* Card 4: Enterprise NDA Policy */}
              <div className="p-6 bg-[#131924] border border-white/10 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#0CCAB1] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" /> ENTERPRISE_DATA_SECURITY
                </div>
                <Text variant="body-xs" className="text-slate-300 leading-relaxed">
                  All shared project requirements and sample datasets are protected under strict internal data isolation protocols. Mutual NDAs executed upon request.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact FAQ Accordion */}
      <Section className="py-20 bg-[#131924]/40 border-t border-white/10">
        <Container size="narrow">
          <div className="text-center space-y-4 mb-12">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Contact & Scoping FAQ
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Answers to common questions before reaching out.
            </Text>
          </div>

          <div className="space-y-4">
            <details className="group rounded-lg border border-white/10 bg-[#131924] p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-base">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#0CCAB1] flex-shrink-0" aria-hidden="true" />
                  How quickly will someone from the engineering team respond?
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed pl-8">
                Our active response window is Monday to Saturday, 9:00 AM – 8:00 PM IST. We guarantee a response in under 2 hours during active business hours.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-[#131924] p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-base">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#0CCAB1] flex-shrink-0" aria-hidden="true" />
                  Can we request a Non-Disclosure Agreement (NDA) before sharing workflow data?
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed pl-8">
                Yes! We regularly execute mutual NDAs with enterprise partners prior to reviewing proprietary document datasets or internal API specs.
              </p>
            </details>

            <details className="group rounded-lg border border-white/10 bg-[#131924] p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-base">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#0CCAB1] flex-shrink-0" aria-hidden="true" />
                  Do you offer pilot trial integrations for custom AI agents?
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed pl-8">
                Yes, we provide 14-day prototype pilot integrations allowing your technical team to test accuracy, latency, and webhook reliability in sandbox environments.
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
                Ready to Experience 10x AI Automation?
              </Heading>
              <Text variant="body-lg" className="text-slate-300">
                Start automating candidate screening, lecture summaries, community digests, and regional news today.
              </Text>
            </div>

            <div className="relative z-10 pt-2 flex justify-center gap-4">
              <Link href="/services">
                <Button variant="primary" size="lg" className="bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold px-10 py-4 rounded-lg shadow-xl shadow-[#0CCAB1]/20">
                  Explore Product Suite <Building2 className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

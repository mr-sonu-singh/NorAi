import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { TiltCard } from '@/components/molecules/TiltCard';
import { ContactFormClient } from './ContactFormClient';
import {
  Sparkles,
  MapPin,
  Mail,
  Clock,
  HelpCircle,
  ChevronDown,
  Building2,
} from 'lucide-react';

export const metadata = buildMetadata({
  path: '/contact',
  title: 'Contact Us & Technical Scoping — NorAI Technologies',
  description: 'Get in touch with NorAI Technologies engineering and sales teams for micro-SaaS deployment and custom AI automation pipelines.',
});

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
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      {/* Hero Section */}
      <Section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Contact & Technical Scoping</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-extrabold tracking-tight text-white leading-tight"
            >
              Let's Build Your AI Workflow{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
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

      {/* Main Contact Grid: Form + Info Cards */}
      <Section className="py-12">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Interactive Contact Form (Client Component) */}
            <div className="lg:col-span-7">
              <ContactFormClient />
            </div>

            {/* Right Column: Direct Info Cards & Regional Office */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Regional Hub */}
              <TiltCard className="p-6 bg-slate-900/60 border border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <Heading as="h4" variant="heading-sm" className="font-bold text-white">
                      Regional Startup Hub
                    </Heading>
                    <Text variant="body-xs" className="text-slate-400">
                      Uttar Pradesh, India
                    </Text>
                  </div>
                </div>
                <Text variant="body-xs" className="text-slate-300 leading-relaxed pt-2">
                  Operating directly out of India's fast-growing northern technology corridor, serving global enterprise clients.
                </Text>
              </TiltCard>

              {/* Card 2: Direct Email */}
              <TiltCard className="p-6 bg-slate-900/60 border border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <Heading as="h4" variant="heading-sm" className="font-bold text-white">
                      Direct Email Inquiries
                    </Heading>
                    <Text variant="body-xs" className="text-slate-400">
                      contact@norai.asia
                    </Text>
                  </div>
                </div>
                <Text variant="body-xs" className="text-slate-300 leading-relaxed pt-2">
                  Email our technical team directly for API access keys, custom enterprise quotes, or NDA requests.
                </Text>
              </TiltCard>

              {/* Card 3: Response SLA */}
              <TiltCard className="p-6 bg-slate-900/60 border border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <Heading as="h4" variant="heading-sm" className="font-bold text-white">
                      Fast SLA Response
                    </Heading>
                    <Text variant="body-xs" className="text-slate-400">
                      &lt; 2 Hours Guaranteed
                    </Text>
                  </div>
                </div>
                <Text variant="body-xs" className="text-slate-300 leading-relaxed pt-2">
                  Our solution architects review every incoming workflow request and respond with preliminary technical scopes.
                </Text>
              </TiltCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact FAQ Accordion */}
      <Section className="py-20 bg-slate-950/60 border-t border-white/10">
        <Container size="narrow">
          <div className="text-center space-y-4 mb-12">
            <Heading as="h2" variant="display-md" className="font-extrabold text-white">
              Contact & Scoping FAQ
            </Heading>
            <Text variant="body-md" className="text-slate-400">
              Answers to common questions before reaching out.
            </Text>
          </div>

          <div className="space-y-4">
            <details className="group rounded-xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-base">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  How quickly will someone from the engineering team respond?
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed pl-8">
                Our active response window is Monday to Saturday, 9:00 AM – 8:00 PM IST. We guarantee a response in under 2 hours during active business hours.
              </p>
            </details>

            <details className="group rounded-xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-base">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  Can we request a Non-Disclosure Agreement (NDA) before sharing workflow data?
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed pl-8">
                Yes! We regularly execute mutual NDAs with enterprise partners prior to reviewing proprietary document datasets or internal API specs.
              </p>
            </details>

            <details className="group rounded-xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-white text-base">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  Do you offer pilot trial integrations for custom AI agents?
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" />
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
          <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-950/60 to-slate-900/80 p-12 text-center space-y-6 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-blue-500/10">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <Heading as="h2" variant="display-lg" className="font-extrabold text-white">
                Ready to Experience 10x AI Automation?
              </Heading>
              <Text variant="body-lg" className="text-slate-300">
                Start automating candidate screening, lecture summaries, community digests, and regional news today.
              </Text>
            </div>

            <div className="relative z-10 pt-2 flex justify-center gap-4">
              <Link href="/services">
                <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-xl shadow-xl shadow-blue-600/40">
                  Explore Product Suite <Building2 className="w-4 h-4 ml-2 inline-block" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

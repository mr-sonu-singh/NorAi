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
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/contact',
  title: 'Contact & Technical Scoping — NorAI Technologies',
  description: 'Connect with NorAI Technologies founding engineers for micro-SaaS deployment, custom AI agent orchestration, or enterprise consultations.',
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
      email: 'noraitechnologies@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'India',
      },
    },
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      {/* Hero Section */}
      <Section className="relative pt-12 pb-14 md:pt-20 md:pb-16 overflow-hidden isolate">
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
              <Sparkles className="w-3.5 h-3.5 text-[#DDF7FF]" aria-hidden="true" />
              <span>Contact & Technical Scoping</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold text-white tracking-[-0.03em] leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
            >
              Let&apos;s Build Your AI Workflow{' '}
              <span className="text-[#DDF7FF] underline decoration-[color:var(--accent-mono)/0.6] underline-offset-8">
                Together
              </span>
            </Heading>

            {/* Subhead */}
            <Text
              variant="body-lg"
              className="font-sans font-medium text-[#E8F7FF] max-w-2xl mx-auto leading-[1.8] tracking-[-0.01em] drop-shadow-[0_1px_6px_rgba(0,20,50,0.35)]"
            >
              Connect with our founding engineering team for micro-SaaS deployment, custom AI agent orchestration, or enterprise technical consultations.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Signature Element: SLA & Response Window Telemetry Bar */}
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
              <span className="font-bold text-primary-800 uppercase tracking-wider">ENGINEERING_SLA:</span>
              <span className="text-[var(--accent-mono)]">&lt; 2 HOURS GUARANTEED</span>
            </div>

            <div className="flex items-center gap-2 text-primary-700">
              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  text-xs
                  text-blue-600
                  bg-white/40
                  backdrop-blur-sm
                  px-3
                  py-1
                  rounded-lg
                  border
                  border-blue-400/15
                "
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mono)] animate-pulse" />
                ACTIVE WINDOW: MON–SAT (9:00 AM – 8:00 PM IST)
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Contact Grid: Form + Info Cards */}
      <Section
        className="
          relative
          py-16
          overflow-hidden
          bg-[radial-gradient(circle_at_8%_35%,rgba(59,130,246,0.08),transparent_32%),radial-gradient(circle_at_92%_65%,rgba(139,92,246,0.08),transparent_34%)]
        "
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="
              absolute -left-32 top-20 w-[420px] h-[420px] rounded-full
              bg-blue-500/10 blur-[90px] animate-pulse
            "
            style={{ animationDuration: '4s' }}
          />
          <div
            className="
              absolute -right-32 bottom-10 w-[460px] h-[460px] rounded-full
              bg-violet-500/10 blur-[95px] animate-pulse
            "
            style={{ animationDuration: '5s', animationDelay: '1s' }}
          />
        </div>

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Interactive Contact Form (Client Component) */}
            <div className="lg:col-span-7">
              <ContactFormClient />
            </div>

            {/* Right Column: Direct Info Cards & Regional Office */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Regional Hub */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  p-6
                  space-y-3

                  bg-white/45
                  backdrop-blur-xl

                  border
                  border-blue-400/15

                  hover:-translate-y-1
                  hover:border-blue-400/30
                  hover:shadow-[0_16px_45px_rgba(59,130,246,0.10)]

                  transition-all
                  duration-300
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute -top-16 -right-16 w-32 h-32 rounded-full
                    bg-blue-400/10 blur-3xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500 pointer-events-none
                  "
                />
                <div className="relative z-10 flex items-center gap-3">
                  <div
                    className="
                      p-2.5
                      rounded-xl
                      bg-white/40
                      backdrop-blur-md
                      border
                      border-blue-400/20
                      text-blue-600

                      group-hover:bg-blue-500/10
                      group-hover:border-blue-400/40
                      group-hover:scale-110
                      group-hover:rotate-2

                      transition-all
                      duration-300
                    "
                  >
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <Heading as="h4" variant="heading-sm" className="font-display font-bold text-primary-800">
                      Regional Startup Hub
                    </Heading>
                    <Text variant="body-xs" className="text-[var(--accent-mono)] font-mono">
                      Uttar Pradesh, India
                    </Text>
                  </div>
                </div>
                <Text variant="body-xs" className="relative z-10 text-primary-700 leading-relaxed pt-2">
                  Operating directly out of India&apos;s fast-growing northern technology corridor, serving global enterprise clients.
                </Text>
              </div>

              {/* Card 2: Direct Email */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  p-6
                  space-y-3

                  bg-white/45
                  backdrop-blur-xl

                  border
                  border-blue-400/15

                  hover:-translate-y-1
                  hover:border-blue-400/30
                  hover:shadow-[0_16px_45px_rgba(59,130,246,0.10)]

                  transition-all
                  duration-300
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute -top-16 -right-16 w-32 h-32 rounded-full
                    bg-blue-400/10 blur-3xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500 pointer-events-none
                  "
                />
                <div className="relative z-10 flex items-center gap-3">
                  <div
                    className="
                      p-2.5
                      rounded-xl
                      bg-white/40
                      backdrop-blur-md
                      border
                      border-blue-400/20
                      text-blue-600

                      group-hover:bg-blue-500/10
                      group-hover:border-blue-400/40
                      group-hover:scale-110
                      group-hover:rotate-2

                      transition-all
                      duration-300
                    "
                  >
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <Heading as="h4" variant="heading-sm" className="font-display font-bold text-primary-800">
                      Direct Email Inquiries
                    </Heading>
                    <Text variant="body-xs" className="text-[var(--accent-mono)] font-mono">
                      noraitechnologies@gmail.com
                    </Text>
                  </div>
                </div>
                <Text variant="body-xs" className="relative z-10 text-primary-700 leading-relaxed pt-2">
                  Email our technical team directly for API access keys, custom enterprise quotes, or NDA requests.
                </Text>
              </div>

              {/* Card 3: Response SLA */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  p-6
                  space-y-3

                  bg-white/45
                  backdrop-blur-xl

                  border
                  border-blue-400/15

                  hover:-translate-y-1
                  hover:border-blue-400/30
                  hover:shadow-[0_16px_45px_rgba(59,130,246,0.10)]

                  transition-all
                  duration-300
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute -top-16 -right-16 w-32 h-32 rounded-full
                    bg-blue-400/10 blur-3xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500 pointer-events-none
                  "
                />
                <div className="relative z-10 flex items-center gap-3">
                  <div
                    className="
                      p-2.5
                      rounded-xl
                      bg-white/40
                      backdrop-blur-md
                      border
                      border-blue-400/20
                      text-blue-600

                      group-hover:bg-blue-500/10
                      group-hover:border-blue-400/40
                      group-hover:scale-110
                      group-hover:rotate-2

                      transition-all
                      duration-300
                    "
                  >
                    <Clock className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <Heading as="h4" variant="heading-sm" className="font-display font-bold text-primary-800">
                      Fast SLA Response
                    </Heading>
                    <Text variant="body-xs" className="text-[var(--accent-mono)] font-mono">
                      &lt; 2 Hours Guaranteed
                    </Text>
                  </div>
                </div>
                <Text variant="body-xs" className="relative z-10 text-primary-700 leading-relaxed pt-2">
                  Our solution architects review every incoming workflow request and respond with preliminary technical scopes.
                </Text>
              </div>

              {/* Card 4: Enterprise NDA Policy */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  p-6
                  space-y-3

                  bg-white/40
                  backdrop-blur-xl

                  border
                  border-violet-400/20
                "
              >
                <div className="flex items-center gap-2 text-xs font-mono text-violet-700 font-bold">
                  <ShieldCheck className="w-4 h-4 text-violet-600" aria-hidden="true" /> ENTERPRISE_DATA_SECURITY
                </div>
                <Text variant="body-xs" className="text-primary-700 leading-relaxed">
                  All shared project requirements and sample datasets are protected under strict internal data isolation protocols. Mutual NDAs executed upon request.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact FAQ Accordion */}
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
              Contact & Scoping FAQ
            </Heading>
            <Text variant="body-md" className="text-primary-700">
              Answers to common questions before reaching out.
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
                  How quickly will someone from the engineering team respond?
                </span>
                <ChevronDown className="w-4 h-4 text-primary-700 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="relative z-10 mt-4 text-sm text-primary-700 leading-relaxed pl-8">
                Our active response window is Monday to Saturday, 9:00 AM – 8:00 PM IST. We guarantee a response in under 2 hours during active business hours.
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
                  Can we request a Non-Disclosure Agreement (NDA) before sharing workflow data?
                </span>
                <ChevronDown className="w-4 h-4 text-primary-700 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="relative z-10 mt-4 text-sm text-primary-700 leading-relaxed pl-8">
                Yes! We regularly execute mutual NDAs with enterprise partners prior to reviewing proprietary document datasets or internal API specs.
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
                  Do you offer pilot trial integrations for custom AI agents?
                </span>
                <ChevronDown className="w-4 h-4 text-primary-700 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="relative z-10 mt-4 text-sm text-primary-700 leading-relaxed pl-8">
                Yes, we provide 14-day prototype pilot integrations allowing your technical team to test accuracy, latency, and webhook reliability in sandbox environments.
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
                Ready to Experience 10x AI Automation?
              </Heading>
              <Text variant="body-lg" className="text-primary-700">
                Start automating candidate screening, lecture summaries, community digests, and regional news today.
              </Text>
            </div>

            <div className="relative z-10 pt-2 flex justify-center gap-4">
              <Link href="/services">
                <Button
                  variant="primary"
                  size="lg"
                  className="
                    bg-gradient-to-r from-blue-600 to-indigo-600
                    hover:from-blue-700 hover:to-violet-600
                    text-white font-semibold px-10 py-4 rounded-lg
                    shadow-xl shadow-blue-500/20
                    hover:shadow-blue-500/30
                    hover:-translate-y-0.5
                    transition-all duration-300
                  "
                >
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
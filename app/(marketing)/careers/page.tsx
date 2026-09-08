import React from 'react';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { buildMetadata } from '@/lib/seo';
import { Terminal, MapPin, Mail, ArrowRight, Code, Cpu, Workflow } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Careers | NorAi Technologies',
  description: 'Join NorAi Technologies — building micro-SaaS utilities and enterprise AI automation pipelines out of Uttar Pradesh, India.',
  path: '/careers',
});

const CORE_DOMAINS = [
  {
    title: 'AI Product & Micro-SaaS Engineering',
    desc: 'Building sub-second REST API endpoints and web dashboards for parsing, summarization, and data digestion utilities.',
    icon: Code,
  },
  {
    title: 'Enterprise AI & RAG Orchestration',
    desc: 'Engineering custom conversational agents, vector search indexes, and Model Context Protocol (MCP) tool servers.',
    icon: Cpu,
  },
  {
    title: 'Workflow & System Automation',
    desc: 'Designing fault-tolerant background worker queues, ERP ingestion webhooks, and automated data pipelines.',
    icon: Workflow,
  },
];

export default function CareersPage() {
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
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" />

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
              <Terminal className="w-3.5 h-3.5 text-[#DDF7FF]" aria-hidden="true" />
              <span>Join NorAi Technologies</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold text-white tracking-[-0.03em] leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
            >
              Build Practical AI Products for{' '}
              <span className="text-[#DDF7FF] underline decoration-[color:var(--accent-mono)/0.6] underline-offset-8">
                High-Growth Businesses
              </span>
            </Heading>

            {/* Subhead */}
            <Text
              variant="body-lg"
              className="font-sans font-medium text-[#E8F7FF] max-w-2xl mx-auto leading-[1.8] tracking-[-0.01em] drop-shadow-[0_1px_6px_rgba(0,20,50,0.35)]"
            >
              We are a lean engineering and product team operating out of Uttar Pradesh, India with remote collaboration across engineering disciplines.
            </Text>

            {/* Location Pill */}
            <div className="pt-2 flex items-center justify-center gap-2">
              <span
                className="
                  inline-flex items-center gap-2 px-4 py-2 rounded-full
                  bg-white/10 backdrop-blur-md border border-white/30
                  text-xs font-mono text-[#D5F5FF]
                "
              >
                <MapPin className="w-4 h-4 text-[#DDF7FF]" aria-hidden="true" />
                Hub: Uttar Pradesh, India • Remote-Friendly Engineering
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Engineering Domains */}
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
              absolute -left-32 top-20 w-[420px] h-[420px] rounded-full
              bg-blue-500/15 blur-[90px] animate-pulse
            "
            style={{ animationDuration: '4s' }}
          />
          <div
            className="
              absolute -right-32 bottom-10 w-[460px] h-[460px] rounded-full
              bg-violet-500/15 blur-[95px] animate-pulse
            "
            style={{ animationDuration: '5s', animationDelay: '1s' }}
          />
        </div>

        <Container size="default" className="relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-mono text-[var(--accent-500)] uppercase font-bold tracking-widest">
              What We Work On
            </div>
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
              Engineering Focus Areas
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_DOMAINS.map((domain, idx) => {
              const IconComp = domain.icon;
              return (
                <div
                  key={idx}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    p-6
                    space-y-4

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

                  <div
                    className="
                      relative z-10
                      p-3
                      w-fit
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
                    <IconComp className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <Heading
                    as="h3"
                    variant="heading-md"
                    className="relative z-10 font-display font-bold text-primary-800 group-hover:text-blue-600 transition-colors"
                  >
                    {domain.title}
                  </Heading>
                  <Text variant="body-sm" className="relative z-10 text-primary-700 leading-relaxed">
                    {domain.desc}
                  </Text>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Open Applications Section */}
      <Section className="py-20 relative overflow-hidden">
        <Container size="default">
          <div className="rounded-2xl border border-blue-400/15 bg-gradient-to-br from-white via-[#F8FAFF] to-[#EEF5FF] p-12 text-center space-y-6 relative overflow-hidden shadow-2xl max-w-3xl mx-auto">
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
                General Engineering Applications
              </Heading>
              <Text variant="body-md" className="text-primary-700 leading-relaxed">
                While we do not have specific public openings listed today, we are always open to connecting with exceptional full-stack developers, AI pipeline engineers, and product designers.
              </Text>
            </div>

            <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="
                    w-full sm:w-auto
                    bg-gradient-to-r from-blue-600 to-indigo-600
                    hover:from-blue-700 hover:to-violet-600
                    text-white font-semibold px-8 py-3.5 rounded-lg
                    shadow-xl shadow-blue-500/20
                    hover:shadow-blue-500/30
                    hover:-translate-y-0.5
                    transition-all duration-300
                  "
                >
                  Send Technical Inquiry <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
              <a href="mailto:noraitechnologies@gmail.com" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="
                    w-full sm:w-auto
                    border border-blue-400/20
                    bg-white/60
                    backdrop-blur-md
                    hover:bg-white/80
                    hover:border-blue-400/40
                    text-primary-800
                    px-8 py-3.5 rounded-lg
                    inline-flex items-center justify-center gap-2
                    transition-all duration-300
                  "
                >
                  <Mail className="w-4 h-4 text-[var(--accent-500)]" aria-hidden="true" /> Email Talent Team
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
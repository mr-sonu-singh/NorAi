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
  title: 'Careers | NorAI Technologies',
  description: 'Join NorAI Technologies — building micro-SaaS utilities and enterprise AI automation pipelines out of Uttar Pradesh, India.',
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
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-[#0CCAB1] selection:text-[#0B0F17]">
      {/* Hero Section */}
      <Section className="relative pt-12 pb-14 md:pt-20 md:pb-16 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0CCAB1]/30 bg-[#0CCAB1]/10 text-[#45F7D6] text-xs font-mono tracking-wide uppercase">
              <Terminal className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
              <span>Join NorAI Technologies</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Build Practical AI Products for{' '}
              <span className="text-[#0CCAB1] underline decoration-[#0CCAB1]/40 underline-offset-8">
                High-Growth Businesses
              </span>
            </Heading>

            {/* Subhead */}
            <Text variant="body-lg" className="text-slate-300 font-normal leading-relaxed">
              We are a lean engineering and product team operating out of Uttar Pradesh, India with remote collaboration across engineering disciplines.
            </Text>

            {/* Location Pill */}
            <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
              <MapPin className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" />
              <span>Hub: Uttar Pradesh, India • Remote-Friendly Engineering</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Engineering Domains */}
      <Section className="py-16 border-t border-white/10 bg-[#131924]/40">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="text-xs font-mono text-[#0CCAB1] uppercase font-bold tracking-widest">
              What We Work On
            </div>
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
              Engineering Focus Areas
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_DOMAINS.map((domain, idx) => {
              const IconComp = domain.icon;
              return (
                <div key={idx} className="bg-[#131924] border border-white/10 rounded-xl p-6 space-y-4 hover:border-[#0CCAB1]/40 transition-all">
                  <div className="p-2.5 rounded-lg bg-[#0CCAB1]/10 border border-[#0CCAB1]/20 text-[#0CCAB1] w-fit">
                    <IconComp className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <Heading as="h3" variant="heading-md" className="font-display font-bold text-white">
                    {domain.title}
                  </Heading>
                  <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                    {domain.desc}
                  </Text>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Open Applications Section */}
      <Section className="py-20 relative overflow-hidden border-t border-white/10">
        <Container size="default">
          <div className="rounded-2xl border border-white/10 bg-[#131924] p-12 text-center space-y-6 relative overflow-hidden shadow-2xl max-w-3xl mx-auto">
            <div className="relative z-10 space-y-4">
              <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
                General Engineering Applications
              </Heading>
              <Text variant="body-md" className="text-slate-300 leading-relaxed">
                While we do not have specific public openings listed today, we are always open to connecting with exceptional full-stack developers, AI pipeline engineers, and product designers.
              </Text>
            </div>

            <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold px-8 py-3.5 rounded-lg shadow-xl shadow-[#0CCAB1]/20">
                  Send Technical Inquiry <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
              <a href="mailto:noraitechnologies@gmail.com" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg backdrop-blur-md inline-flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" /> Email Talent Team
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

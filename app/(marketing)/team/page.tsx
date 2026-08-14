import React from 'react';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Code2,
  Cpu,
  Lock,
  HelpCircle,
  ChevronDown,
  Briefcase,
  Users,
} from 'lucide-react';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/team',
  title: 'Founding Leadership & Technical Team — NorAI Technologies',
  description: 'Meet the founding engineers and operational leadership driving NorAI Technologies from Uttar Pradesh, India.',
});

const FOUNDING_TEAM = [
  {
    name: 'Dhruw Singh',
    role: 'FOUNDER',
    degree: 'B.Sc',
    desc: 'Retd. Indian Army (Corps of Signals) after 30 years of distinguished military service. Leads strategic operations and administrative leadership.',
    tag: 'Military Discipline & Leadership',
  },
  {
    name: 'Sonu Singh',
    role: 'AR-VR / AI ENGINEER',
    degree: 'BCA',
    desc: 'Returned from Japan VR/AR Summit. Specializes in spatial computing, immersive tech, and modern AI model pipelines.',
    tag: 'Spatial Computing & XR',
  },
  {
    name: 'Annant',
    role: 'DIGITAL MARKETING',
    degree: 'B.Com',
    desc: 'Drives brand development, inbound marketing pipelines, SEO strategies, and corporate client acquisition.',
    tag: 'Growth & Marketing',
  },
  {
    name: 'Rishabh',
    role: 'DESIGN & VISUALISATION',
    degree: 'B.Tech',
    desc: 'Focuses on UI/UX architecture, visual rendering, interactive frontend design, and product aesthetics.',
    tag: 'UI/UX & Product Design',
  },
  {
    name: 'Gourav Singh',
    role: 'AI ENGINEER / ORCHESTRATION',
    degree: 'B.Tech',
    desc: 'Builds AI agents, workflows, and automation using modern AI models, ensuring smart, reliable, and scalable AI solutions.',
    tag: 'AI Agents & Orchestration',
  },
];

const CULTURE_POINTS = [
  {
    title: 'Military Discipline & Operations',
    desc: 'Led by 30-year veteran Army leadership, ensuring absolute operational rigor, reliability, and security compliance.',
    icon: ShieldCheck,
  },
  {
    title: 'Cutting-Edge AI & Spatial Tech',
    desc: 'Combining modern LLM orchestration, spatial AR/VR computing, and interactive 3D rendering.',
    icon: Cpu,
  },
  {
    title: 'Full-Stack Rapid Execution',
    desc: 'Agile cross-functional team handling frontend UI/UX, backend AI agents, and corporate growth in-house.',
    icon: Code2,
  },
  {
    title: 'Developer & Customer Trust',
    desc: 'Built for enterprise reliability with sub-second execution speeds, predictable SLAs, and zero privacy compromises.',
    icon: Lock,
  },
];

const TEAM_FAQ = [
  {
    question: 'Where is the NorAI founding team based?',
    answer: 'Our team operates out of Uttar Pradesh, India, combining technical innovation with strategic leadership and global experience.',
  },
  {
    question: 'What core disciplines comprise the founding team?',
    answer: 'Our 5-member core team spans Military Operations, AR-VR Spatial Computing, Digital Growth Marketing, UI/UX Visual Architecture, and AI Agent Orchestration.',
  },
  {
    question: 'Are you hiring or collaborating with external researchers?',
    answer: 'Yes! We are expanding our engineering and research teams. Reach out via our contact page to explore open roles or technical partnerships.',
  },
];

export default function TeamPage() {
  return (
    <div className="bg-[var(--bg-page)] text-primary-800 min-h-screen font-sans selection:bg-[var(--accent-500)] selection:text-[var(--bg-page)]">
      {/* Hero Section */}
      <Section className="relative pt-12 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Signature Element: Founding Roster Credentials Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200/60 bg-[var(--bg-elevated)] text-primary-700 text-xs font-mono tracking-wide">
              <Users className="w-3.5 h-3.5 text-[var(--accent-500)]" aria-hidden="true" />
              <span>Founding Roster • 5 Specializations • Military Rigor &amp; Spatial AI</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold tracking-tight text-primary-800 leading-tight"
            >
              Founding Engineering{' '}
              <span className="text-[var(--accent-500)] underline decoration-[color:var(--accent-500)/0.4] underline-offset-8">
                Team
              </span>
            </Heading>

            {/* Subhead */}
            <Text variant="body-lg" className="text-primary-700 font-normal leading-relaxed">
              An agile full-stack team combining military discipline, cutting-edge spatial computing, strategic marketing, UI/UX design, and AI orchestration.
            </Text>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto bg-[var(--accent-500)] hover:bg-[var(--accent-mono)] text-[var(--bg-page)] font-semibold px-8 py-3.5 rounded-lg shadow-lg shadow-[color:var(--accent-500)/0.2] transition-all">
                  Talk to Our Team <ArrowRight className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto border-slate-200/60 bg-[var(--bg-elevated)] hover:bg-[var(--bg-sunken)] text-primary-800 px-8 py-3.5 rounded-lg backdrop-blur-md">
                  Read Company Story
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5-Member Team Grid */}
      <Section className="py-16 bg-[var(--bg-elevated)]/40 border-y border-slate-200/60">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="text-xs font-mono text-[var(--accent-500)] uppercase font-bold tracking-widest">
              Core Leadership &amp; Engineering
            </div>
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
              Meet the Founders &amp; Key Engineers
            </Heading>
            <Text variant="body-md" className="text-primary-700">
              Cross-disciplinary leaders driving NorAI&apos;s micro-SaaS tools and AI orchestration architecture.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FOUNDING_TEAM.map((member, index) => (
                <div
                key={index}
                className="bg-[var(--bg-elevated)] border border-slate-200/60 rounded-xl p-8 flex flex-col justify-between space-y-6 hover:border-[color:var(--accent-500)/0.4] transition-all group"
              >
                <div className="space-y-5">
                  {/* Top Avatar Circle Badge & Degree Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-full bg-[var(--bg-page)] border-2 border-[color:var(--accent-500)/0.4] flex items-center justify-center text-[var(--accent-500)] font-display font-extrabold text-xl shadow-lg shadow-[color:var(--accent-500)/0.1]">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>

                    <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-[var(--bg-page)] border border-slate-200/60 text-[var(--accent-mono)]">
                      {member.degree}
                    </span>
                  </div>

                  {/* Member Name & Role */}
                  <div>
                    <Heading as="h3" variant="heading-lg" className="font-display font-bold text-primary-800 group-hover:text-[var(--accent-500)] transition-colors">
                      {member.name}
                    </Heading>
                    <div className="text-xs font-bold font-mono tracking-wider text-[var(--accent-500)] uppercase pt-1">
                      {member.role}
                    </div>
                  </div>

                  {/* Description */}
                  <Text variant="body-sm" className="text-primary-700 leading-relaxed pt-1">
                    {member.desc}
                  </Text>
                </div>

                {/* Tag Footer */}
                <div className="pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-primary-700 font-medium">{member.tag}</span>
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-500)] shrink-0" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Engineering Culture & Philosophy */}
      <Section className="py-20">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
              Engineering Culture &amp; Discipline
            </Heading>
            <Text variant="body-md" className="text-primary-700">
              Combining military operational standards with modern spatial and AI engineering.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CULTURE_POINTS.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div key={index} className="bg-[var(--bg-elevated)] border border-slate-200/60 rounded-xl p-6 space-y-4 hover:border-[color:var(--accent-500)/0.4] transition-all">
                  <div className="p-3 w-fit rounded-lg bg-[color:var(--accent-500)/0.1] border border-[color:var(--accent-500)/0.2] text-[var(--accent-500)]">
                    <IconComp className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <Heading as="h4" variant="heading-md" className="font-display font-bold text-primary-800">
                    {item.title}
                  </Heading>
                  <Text variant="body-xs" className="text-primary-700 leading-relaxed">
                    {item.desc}
                  </Text>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Team FAQ Accordion */}
      <Section className="py-20 bg-[var(--bg-elevated)]/40 border-t border-slate-200/60">
        <Container size="narrow">
          <div className="text-center space-y-4 mb-12">
            <Heading as="h2" variant="display-md" className="font-display font-extrabold text-primary-800">
              Team FAQ
            </Heading>
            <Text variant="body-md" className="text-primary-700">
              Common questions about our founding team and engineering culture.
            </Text>
          </div>

          <div className="space-y-4">
            {TEAM_FAQ.map((faq, index) => (
              <details
                key={index}
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

      {/* CTA Conversion Banner */}
      <Section className="py-20 relative overflow-hidden">
        <Container size="default">
          <div className="rounded-2xl border border-slate-200/60 bg-[var(--bg-elevated)] p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <Heading as="h2" variant="display-lg" className="font-display font-extrabold text-primary-800">
                Build Next-Gen AI With NorAI
              </Heading>
              <Text variant="body-lg" className="text-primary-700">
                Talk to our founding engineering team about your business automation &amp; AI agent requirements.
              </Text>
            </div>

            <div className="relative z-10 pt-2 flex justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="bg-[var(--accent-500)] hover:bg-[var(--accent-mono)] text-primary-900 font-semibold px-10 py-4 rounded-lg shadow-xl shadow-[color:var(--accent-500)/0.2]">
                  Contact Founders <Briefcase className="w-4 h-4 ml-2 inline-block" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}




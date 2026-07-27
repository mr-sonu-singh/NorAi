import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { HeroStandard } from '@/components/organisms/sections/HeroStandard';
import { FeatureSection } from '@/components/organisms/sections/FeatureSection';
import { Timeline } from '@/components/organisms/sections/Timeline';
import { SocialProofStrip } from '@/components/organisms/sections/SocialProofStrip';
import { TeamSection } from '@/components/organisms/sections/TeamSection';
import { CTASection } from '@/components/organisms/sections/CTASection';

export const metadata = buildMetadata({
  title: 'About NorAI | Verifiable AI Infrastructure',
  description: 'Architecting zero-knowledge neural compute infrastructure for high-consequence enterprise applications.',
  path: '/about',
});

const ABOUT_TEAM_PREVIEW = [
  {
    name: 'Dr. Elena Rostova',
    role: 'Chief AI Architect',
    photoSrc: '/images/team/elena-rostova.jpg',
    bio: 'Pioneer in zero-knowledge neural network proof generation and deterministic model execution.',
  },
  {
    name: 'Marcus Vance',
    role: 'Head of Cryptography',
    photoSrc: '/images/team/marcus-vance.jpg',
    bio: 'Former lead researcher at Zurich Quantum Cryptography Lab specialising in STARK proof systems.',
  },
  {
    name: 'Sarah Jenkins',
    role: 'VP of Engineering',
    photoSrc: '/images/team/sarah-jenkins.jpg',
    bio: 'Scaled high-frequency trading infrastructure processing 10B+ daily messages at ultra-low latency.',
  },
];

const TIMELINE_ITEMS = [
  {
    date: 'Q1 2024',
    title: 'Zero-Knowledge Proof Compiler',
    description: 'Developed initial STARK proof compiler for neural layer matrix operations.',
    icon: 'code',
  },
  {
    date: 'Q3 2024',
    title: 'Hardware Acceleration SLA',
    description: 'Achieved sub-10ms latency benchmark on dedicated FPGA hardware clusters.',
    icon: 'cpu',
  },
  {
    date: 'Q1 2025',
    title: 'Enterprise Deployment',
    description: 'Launched NorAI Core platform powering autonomous financial settlement pipelines.',
    icon: 'shield-check',
  },
];

const TRUST_INDICATORS = [
  { label: 'Corporate Reg (CIN)', value: 'CIN: U72900MH2025PTC123456' },
  { label: 'Global HQ', value: 'Zurich Tech Park & Singapore AI Hub' },
  { label: 'Audit Standard', value: 'SOC2 Type II & ZK-STARK Verifiable' },
];

export default function AboutPage() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About NorAI Technologies',
    description: 'Architecting zero-knowledge neural compute infrastructure for high-consequence enterprise applications.',
    publisher: {
      '@type': 'Organization',
      name: 'NorAI Technologies',
      url: 'https://norai.asia',
      identifier: 'CIN: U72900MH2025PTC123456',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Zurich',
        addressCountry: 'Switzerland',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <HeroStandard
        variant="textOnly"
        eyebrow="Company & Mission"
        headline="Architecting Verifiable Intelligence for Enterprise"
        subhead="NorAI was founded to replace non-deterministic black-box AI with cryptographically audited, sub-10ms neural compute."
      />
      <FeatureSection
        heading="Our Origin Story"
        body="As artificial intelligence migrated into mission-critical financial, medical, and defense systems, the lack of hardware determinism and mathematical auditability became an unacceptable vulnerability. We built NorAI to bridge advanced cryptography and neural execution."
        align="mediaRight"
        media={
          <div className="p-8 bg-elevated border border-primary-200 rounded-lg space-y-4">
            <h3 className="font-bold text-primary-900 text-lg">The Determinism Mandate</h3>
            <p className="text-primary-600 leading-relaxed text-sm">
              We believe every neural output driving a high-consequence enterprise action must carry an unforgeable zero-knowledge cryptographic proof of its execution.
            </p>
          </div>
        }
      />
      <Timeline
        heading="Engineering Milestones"
        items={TIMELINE_ITEMS}
      />
      <SocialProofStrip
        eyebrow="Verifiable Corporate & Audit Credentials"
        trustIndicators={TRUST_INDICATORS}
      />
      <TeamSection
        heading="Led by Cryptographers & AI Pioneers"
        variant="Preview"
        members={ABOUT_TEAM_PREVIEW}
        careersLink={{
          label: 'Meet Full Team & Open Positions',
          href: '/team',
        }}
      />
      <CTASection
        heading="Partner with NorAI Infrastructure"
        body="Join leading enterprise engineering teams building verifiable neural execution pipelines."
        surface="dark"
        primaryCta={{
          label: 'Schedule Executive Briefing',
          href: '/contact',
        }}
      />
    </>
  );
}

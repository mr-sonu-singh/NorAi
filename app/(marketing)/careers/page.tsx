import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { HeroStandard } from '@/components/organisms/sections/HeroStandard';
import { FeatureSection } from '@/components/organisms/sections/FeatureSection';
import { FeatureGrid } from '@/components/organisms/sections/FeatureGrid';
import { CTASection } from '@/components/organisms/sections/CTASection';

export const metadata = buildMetadata({
  title: 'Careers | NorAI Technologies',
  description: 'Join NorAI Technologies to build zero-knowledge neural compute infrastructure for high-scale enterprise applications.',
  path: '/careers',
});

const OPEN_ROLES = [
  {
    title: 'Principal Cryptographer — ZK-STARKs',
    description: 'Lead design of zero-knowledge circuit compilers for neural matrix execution. Requirements: 5+ years ZK cryptography.',
    icon: 'shield-check',
  },
  {
    title: 'Senior Systems Engineer — FPGA Acceleration',
    description: 'Optimize hardware acceleration drivers for sub-10ms neural compute nodes. Requirements: C/C++, Rust, Linux Kernel.',
    icon: 'cpu',
  },
  {
    title: 'Staff Distributed Systems Architect',
    description: 'Scale fault-tolerant, high-throughput inferencing cluster orchestration. Requirements: Go/Rust, Kubernetes, Raft.',
    icon: 'layers',
  },
];

export default function CareersPage() {
  return (
    <>
      <HeroStandard
        variant="textOnly"
        eyebrow="Join Our Mission"
        headline="Build Verifiable AI Infrastructure at Scale"
        subhead="Work alongside leading cryptographers and systems engineers solving fundamental challenges in deterministic AI execution."
      />
      <FeatureSection
        heading="Engineering Culture & Principles"
        body="We prioritize mathematical rigor, open collaboration, and remote-first autonomy. Every team member works on high-consequence technology shaping the future of verifiable intelligence."
        align="mediaRight"
        media={
          <div className="p-8 bg-primary-900 text-white rounded-lg space-y-4 border border-primary-700">
            <h3 className="font-bold text-lg">Remote-First & Global</h3>
            <p className="text-primary-200 text-sm leading-relaxed">
              Our engineering hubs are located in Zurich and Singapore, supported by a global distributed engineering team.
            </p>
          </div>
        }
      />
      <FeatureGrid
        heading="Open Engineering Positions"
        intro="Explore current opportunities to advance zero-knowledge cryptography and low-latency neural compute."
        features={OPEN_ROLES}
      />
      <CTASection
        heading="Don't See Your Role?"
        body="We are always looking for exceptional talent in cryptography, systems programming, and AI research. Submit a general application or email careers@norai.asia."
        surface="dark"
        primaryCta={{
          label: 'Submit General Application',
          href: '/contact',
        }}
        secondaryCta={{
          label: 'Email Talent Team',
          href: 'mailto:careers@norai.asia',
          external: true,
        }}
      />
    </>
  );
}

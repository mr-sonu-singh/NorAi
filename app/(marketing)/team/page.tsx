import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { HeroStandard } from '@/components/organisms/sections/HeroStandard';
import { TeamSection } from '@/components/organisms/sections/TeamSection';
import { CTASection } from '@/components/organisms/sections/CTASection';

export const metadata = buildMetadata({
  title: 'Our Team | NorAI Technologies',
  description: 'Meet the team of cryptographers, AI researchers, and systems engineers building NorAI zero-knowledge compute primitives.',
  path: '/team',
});

const FULL_TEAM_MEMBERS = [
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
  {
    name: 'Tariq Al-Mansoor',
    role: 'Principal Systems Engineer',
    photoSrc: '/images/team/tariq-al-mansoor.jpg',
    bio: 'Specialist in FPGA hardware acceleration and custom Linux kernel driver development.',
  },
];

export default function TeamPage() {
  return (
    <>
      <HeroStandard
        variant="textOnly"
        eyebrow="NorAI Leadership & Research"
        headline="World-Class Cryptographers & AI Researchers"
        subhead="Our multidisciplinary engineering team combines decades of experience across zero-knowledge proofs, parallel compute, and high-scale systems."
      />
      <TeamSection
        heading="Engineering & Research Team"
        variant="FullGrid"
        members={FULL_TEAM_MEMBERS}
        careersLink={{
          label: 'Explore Careers at NorAI',
          href: '/careers',
        }}
      />
      <CTASection
        heading="Want to Build Next-Gen AI Infrastructure?"
        body="We are actively hiring principal engineers, cryptographers, and systems architects to join our global remote-first engineering team."
        surface="dark"
        primaryCta={{
          label: 'View Open Roles',
          href: '/careers',
        }}
        secondaryCta={{
          label: 'Contact Talent Team',
          href: '/contact',
        }}
      />
    </>
  );
}

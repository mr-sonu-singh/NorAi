import React from 'react';
import { buildMetadata, getOrganizationJsonLd } from '@/lib/seo';
import { Grid } from '@/components/foundation/Grid';
import { HeroTypographic } from '@/components/organisms/sections/HeroTypographic';
import { SocialProofStrip } from '@/components/organisms/sections/SocialProofStrip';
import { FeatureSection } from '@/components/organisms/sections/FeatureSection';
import { ProcessFlow } from '@/components/organisms/sections/ProcessFlow';
import { UseCasesSection } from '@/components/organisms/sections/UseCasesSection';
import { TestimonialsSection } from '@/components/organisms/sections/TestimonialsSection';
import { TeamSection } from '@/components/organisms/sections/TeamSection';
import { CTASection } from '@/components/organisms/sections/CTASection';
import { ProductCard } from '@/components/organisms/cards/ProductCard';

export const metadata = buildMetadata({
  path: '/',
});

const HOMEPAGE_LOGOS = [
  { name: 'Vercel', logoUrl: '/images/logos/vercel.svg' },
  { name: 'Supabase', logoUrl: '/images/logos/supabase.svg' },
  { name: 'Stripe', logoUrl: '/images/logos/stripe.svg' },
  { name: 'AWS', logoUrl: '/images/logos/aws.svg' },
];

const HOMEPAGE_TESTIMONIALS = [
  {
    quote: 'NorAI reduced our inference latency by 60% while maintaining absolute zero-knowledge audit trails for our financial settlement pipeline.',
    authorName: 'David Chen',
    authorRole: 'CTO, Quantum Financial Technologies',
    avatar: '/images/avatars/david-chen.jpg',
  },
  {
    quote: 'The hardware-enforced determinism allowed our compliance team to approve automated medical diagnostic AI in record time.',
    authorName: 'Dr. Aris Thorne',
    authorRole: 'Chief Medical Officer, HealthPulse AI',
    avatar: '/images/avatars/aris-thorne.jpg',
  },
];

const HOMEPAGE_TEAM_PREVIEW = [
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

export default function HomePage() {
  const organizationJsonLd = getOrganizationJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HeroTypographic
        eyebrow="Next-Gen AI Infrastructure"
        headline="Verifiable AI Infrastructure for High-Scale Enterprise"
        subhead="Deploy deterministic neural computation with sub-10ms latency SLA and cryptographic zero-knowledge proofs."
        primaryCta={{ label: 'Get Started', href: '/contact' }}
        secondaryCta={{ label: 'Explore Products', href: '/products' }}
      />
      <SocialProofStrip
        eyebrow="Trusted by Engineering Teams at Scale"
        logos={HOMEPAGE_LOGOS}
      />
      <FeatureSection
        heading="Deterministic AI Product Lineup"
        body="Deploy mission-critical neural models with guaranteed hardware execution SLA and zero-knowledge verification."
        align="mediaRight"
        cta={{
          label: 'Explore All Products',
          href: '/products',
        }}
        media={
          <Grid cols={2} gap="6">
            <ProductCard
              name="NorAI Core"
              summary="Sub-10ms deterministic AI inference engine designed for high-throughput enterprise workloads."
              href="/products/core"
              image="/images/products/core.jpg"
              category="Compute Platform"
              variant="Default"
            />
            <ProductCard
              name="NorAI Vision"
              summary="Real-time multi-stream neural computer vision processor with hardware-level ZK auditability."
              href="/products/vision"
              image="/images/products/vision.jpg"
              category="Computer Vision"
              variant="Default"
            />
          </Grid>
        }
      />
      <ProcessFlow
        heading="How NorAI Operates"
        variant="Horizontal"
        steps={[
          {
            icon: 'upload-cloud',
            title: 'Raw Workload Input',
            description: 'Ingest neural model prompts or dataset payloads via secure TLS stream.',
          },
          {
            icon: 'cpu',
            title: 'Deterministic AI Execution',
            description: 'Execute payload on verified hardware nodes and generate ZK-STARK proofs.',
          },
          {
            icon: 'check-circle',
            title: 'Verified Proof Output',
            description: 'Receive cryptographically audited response with cryptographic guarantees.',
          },
        ]}
      />
      <UseCasesSection
        heading="Engineered for High-Consequence Intelligence"
        cta={{
          label: 'View All Use Cases',
          href: '/use-cases',
        }}
        useCases={[
          {
            title: 'Autonomous Financial Settlements',
            description: 'Execute multi-billion dollar algorithmic trades with cryptographic proof of model execution.',
            icon: 'shield-check',
          },
          {
            title: 'Auditable Medical Diagnostics',
            description: 'Run diagnostic neural models while maintaining complete privacy and regulatory compliance.',
            icon: 'activity',
          },
          {
            title: 'Verifiable Supply Chain Robotics',
            description: 'Provide cryptographic proof of origin and automated robotic quality inspection stream.',
            icon: 'box',
          },
        ]}
      />
      <TestimonialsSection
        heading="Validated by Industry Leaders"
        testimonials={HOMEPAGE_TESTIMONIALS}
      />
      <TeamSection
        heading="Built by Cryptographers & AI Pioneers"
        variant="Preview"
        members={HOMEPAGE_TEAM_PREVIEW}
        careersLink={{
          label: 'View Open Positions',
          href: '/careers',
        }}
      />
      <CTASection
        heading="Ready to Build Verifiable AI Infrastructure?"
        body="Deploy sub-10ms deterministic neural compute with cryptographic zero-knowledge guarantees today."
        surface="dark"
        primaryCta={{
          label: 'Get Started Now',
          href: '/contact',
        }}
        secondaryCta={{
          label: 'Talk to an Expert',
          href: '/contact',
        }}
      />
    </>
  );
}

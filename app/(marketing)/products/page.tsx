import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { PRODUCTS_DATA } from '@/lib/products';
import { HubTemplate } from '@/components/templates/HubTemplate';
import { HeroStandard } from '@/components/organisms/sections/HeroStandard';
import { FeatureSection } from '@/components/organisms/sections/FeatureSection';
import { SocialProofStrip } from '@/components/organisms/sections/SocialProofStrip';
import { CTASection } from '@/components/organisms/sections/CTASection';
import { ProductCard } from '@/components/organisms/cards/ProductCard';
import { Grid } from '@/components/foundation/Grid';

export const metadata = buildMetadata({
  title: 'Products Hub | NorAI Technologies',
  description: 'Explore NorAI deterministic AI primitives and zero-knowledge compute engines built for high-scale enterprise workloads.',
  path: '/products',
});

const LOGOS = [
  { name: 'Vercel', logoUrl: '/images/logos/vercel.svg' },
  { name: 'Supabase', logoUrl: '/images/logos/supabase.svg' },
  { name: 'Stripe', logoUrl: '/images/logos/stripe.svg' },
  { name: 'AWS', logoUrl: '/images/logos/aws.svg' },
];

export default function ProductsPage() {
  const productsList = Object.values(PRODUCTS_DATA);

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'NorAI Product Suite',
    itemListElement: productsList.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: product.name,
      url: `https://norai.asia/products/${product.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <HubTemplate
        hero={
          <HeroStandard
            variant="textOnly"
            eyebrow="NorAI Product Suite"
            headline="Deterministic AI Workload Primitives"
            subhead="Sub-10ms latency SLA with zero-knowledge cryptographic verification for high-scale enterprise computation."
          />
        }
        featureSection={
          <FeatureSection
            heading="Enterprise Product Portfolio"
            body="Select a workload primitive to view technical specifications, execution SLA guarantees, and benchmark proofs."
            align="mediaRight"
            media={
              <Grid cols={2} gap="6">
                {productsList.map((product) => (
                  <ProductCard
                    key={product.slug}
                    name={product.name}
                    summary={product.summary}
                    href={`/products/${product.slug}`}
                    image={product.image}
                    category={product.category}
                    variant="Expanded"
                  />
                ))}
              </Grid>
            }
          />
        }
        socialProof={
          <SocialProofStrip
            eyebrow="Proven Infrastructure Trusted at Scale"
            logos={LOGOS}
          />
        }
        cta={
          <CTASection
            heading="Need a Custom Neural Execution Pipeline?"
            body="Architect custom deterministic AI models with guaranteed latency SLAs and cryptographic ZK proofs."
            surface="dark"
            primaryCta={{
              label: 'Contact Infrastructure Team',
              href: '/contact',
            }}
          />
        }
      />
    </>
  );
}

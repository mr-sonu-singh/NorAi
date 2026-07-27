import React from 'react';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { PRODUCTS_DATA } from '@/lib/products';
import { ProductDetailTemplate } from '@/components/templates/ProductDetailTemplate';
import { HeroStandard } from '@/components/organisms/sections/HeroStandard';
import { FeatureSection } from '@/components/organisms/sections/FeatureSection';
import { FeatureGrid } from '@/components/organisms/sections/FeatureGrid';
import { ProcessFlow } from '@/components/organisms/sections/ProcessFlow';
import { PricingSection } from '@/components/organisms/sections/PricingSection';
import { CTASection } from '@/components/organisms/sections/CTASection';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(PRODUCTS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS_DATA[slug];

  if (!product) {
    return buildMetadata({
      title: 'Product Not Found | NorAI Technologies',
      description: 'The requested product could not be found.',
      path: '/products',
    });
  }

  return buildMetadata({
    title: `${product.name} | NorAI Technologies`,
    description: product.summary,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS_DATA[slug];

  if (!product) {
    notFound();
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.summary,
    brand: {
      '@type': 'Brand',
      name: 'NorAI Technologies',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      offerCount: product.pricingTiers.length,
    },
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: product.name, href: `/products/${product.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailTemplate
        hero={
          <HeroStandard
            variant="withMedia"
            eyebrow={product.category}
            headline={product.headline}
            subhead={product.subhead}
            breadcrumb={breadcrumbItems}
            primaryCta={{
              label: 'Get Started',
              href: '/contact',
            }}
            secondaryCta={{
              label: 'View Pricing',
              href: `#pricing`,
            }}
            media={
              <div className="w-full h-64 sm:h-80 bg-primary-900 rounded-lg flex items-center justify-center border border-primary-700 text-white font-mono text-lg shadow-xl">
                [ {product.name} Hardware Acceleration Node ]
              </div>
            }
          />
        }
        problemSolution={
          <FeatureSection
            heading={product.problemHeading}
            body={product.problemBody}
            align="mediaLeft"
            cta={{
              label: 'Talk to an Engineer',
              href: '/contact',
            }}
          />
        }
        capabilities={
          <FeatureGrid
            heading={product.capabilitiesHeading}
            intro="Designed from first principles to satisfy strict enterprise requirements for execution determinism, auditability, and speed."
            features={product.capabilities}
          />
        }
        processFlow={
          <ProcessFlow
            heading={product.processHeading}
            variant="Horizontal"
            steps={product.processSteps}
          />
        }
        pricing={
          <div id="pricing">
            <PricingSection
              heading={product.pricingHeading}
              intro="Transparent tiers engineered for seamless transition from initial prototyping to high-scale production clusters."
              tiers={product.pricingTiers.map((tier) => ({
                name: tier.name,
                price: tier.price,
                interval: tier.interval,
                features: tier.features,
                highlighted: tier.highlighted,
                cta: {
                  label: tier.ctaLabel,
                },
              }))}
            />
          </div>
        }
        cta={
          <CTASection
            heading={`Deploy ${product.name} in Production`}
            body="Start processing mission-critical AI workloads with guaranteed latency SLAs and cryptographic proof generation today."
            surface="dark"
            primaryCta={{
              label: 'Request Access',
              href: '/contact',
            }}
            secondaryCta={{
              label: 'Explore Other Products',
              href: '/products',
            }}
          />
        }
      />
    </>
  );
}

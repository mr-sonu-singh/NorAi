import React from 'react';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { LEGAL_POLICIES } from '@/lib/legal';
import { LegalTemplate } from '@/components/templates/LegalTemplate';
import { HeroStandard } from '@/components/organisms/sections/HeroStandard';

interface PageProps {
  params: Promise<{ policy: string }>;
}

export function generateStaticParams() {
  return Object.keys(LEGAL_POLICIES).map((policy) => ({ policy }));
}

export async function generateMetadata({ params }: PageProps) {
  const { policy: policySlug } = await params;
  const policy = LEGAL_POLICIES[policySlug];

  if (!policy) {
    return buildMetadata({
      title: 'Policy Not Found | NorAI Technologies',
      description: 'The requested legal policy document could not be found.',
      path: '/',
    });
  }

  return buildMetadata({
    title: `${policy.title} | NorAI Technologies`,
    description: policy.description,
    path: `/${policy.slug}`,
  });
}

export default async function LegalPolicyPage({ params }: PageProps) {
  const { policy: policySlug } = await params;
  const policy = LEGAL_POLICIES[policySlug];

  if (!policy) {
    notFound();
  }

  return (
    <LegalTemplate
      hero={
        <HeroStandard
          variant="textOnly"
          eyebrow="Legal & Compliance"
          headline={policy.title}
          subhead={`Last updated: ${policy.lastUpdated}`}
        />
      }
      body={
        <article className="py-8 space-y-8 text-primary-700 leading-relaxed">
          {policy.sections.map((section, idx) => (
            <section key={`sec-${idx}`} className="space-y-4">
              <h2 className="text-xl font-bold text-primary-900 tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((para, pIdx) => (
                <p key={`p-${pIdx}`} className="text-base text-primary-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </section>
          ))}
        </article>
      }
    />
  );
}

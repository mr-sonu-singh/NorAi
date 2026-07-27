import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { HeroStandard } from '@/components/organisms/sections/HeroStandard';
import { ContactClientContainer } from './ContactClientContainer';

export const metadata = buildMetadata({
  title: 'Contact Us | NorAI Technologies',
  description: 'Get in touch with NorAI engineering and sales teams for custom zero-knowledge AI infrastructure.',
  path: '/contact',
});

export default function ContactPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact NorAI Technologies',
    description: 'Get in touch with NorAI engineering and sales teams for custom zero-knowledge AI infrastructure.',
    mainEntity: {
      '@type': 'Organization',
      name: 'NorAI Technologies',
      url: 'https://norai.asia',
      email: 'sales@norai.asia',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <HeroStandard
        variant="textOnly"
        eyebrow="Conversion & Inquiries"
        headline="Connect with Our Engineering & Sales Teams"
        subhead="Whether you are deploying deterministic neural inference or exploring custom zero-knowledge circuits, our team is ready to assist."
      />
      <ContactClientContainer />
    </>
  );
}

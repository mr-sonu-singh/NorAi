import React from 'react';

export interface HubTemplateProps {
  hero: React.ReactNode;
  featureSection: React.ReactNode;
  socialProof?: React.ReactNode;
  cta: React.ReactNode;
}

export function HubTemplate({
  hero,
  featureSection,
  socialProof,
  cta,
}: HubTemplateProps) {
  return (
    <>
      {hero}
      {featureSection}
      {socialProof}
      {cta}
    </>
  );
}

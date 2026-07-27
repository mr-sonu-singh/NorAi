import React from 'react';

export interface ProductDetailTemplateProps {
  hero: React.ReactNode;
  problemSolution: React.ReactNode;
  capabilities: React.ReactNode;
  processFlow: React.ReactNode;
  statistics?: React.ReactNode;
  testimonials?: React.ReactNode;
  pricing: React.ReactNode;
  faq?: React.ReactNode;
  cta: React.ReactNode;
}

export function ProductDetailTemplate({
  hero,
  problemSolution,
  capabilities,
  processFlow,
  statistics,
  testimonials,
  pricing,
  faq,
  cta,
}: ProductDetailTemplateProps) {
  return (
    <>
      {hero}
      {problemSolution}
      {capabilities}
      {processFlow}
      {statistics}
      {testimonials}
      {pricing}
      {faq}
      {cta}
    </>
  );
}

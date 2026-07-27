import React from 'react';

export interface BlogPostTemplateProps {
  breadcrumb: React.ReactNode;
  hero: React.ReactNode;
  body: React.ReactNode;
  related?: React.ReactNode;
  cta: React.ReactNode;
}

export function BlogPostTemplate({
  breadcrumb,
  hero,
  body,
  related,
  cta,
}: BlogPostTemplateProps) {
  return (
    <>
      {breadcrumb}
      {hero}
      {body}
      {related}
      {cta}
    </>
  );
}

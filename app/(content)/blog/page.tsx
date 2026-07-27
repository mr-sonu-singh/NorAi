import React from 'react';
import { buildMetadata } from '@/lib/seo';
import { BLOG_POSTS } from '@/lib/blog';
import { HubTemplate } from '@/components/templates/HubTemplate';
import { HeroStandard } from '@/components/organisms/sections/HeroStandard';
import { BlogPreviewSection } from '@/components/organisms/sections/BlogPreviewSection';
import { CTASection } from '@/components/organisms/sections/CTASection';

export const metadata = buildMetadata({
  title: 'Blog & Research | NorAI Technologies',
  description: 'Technical research, cryptographic breakdowns, and engineering insights on deterministic AI and zero-knowledge compute.',
  path: '/blog',
});

export default function BlogHubPage() {
  const postsList = Object.values(BLOG_POSTS).map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    href: `/blog/${post.slug}`,
    image: post.image,
    meta: post.meta,
    category: post.category,
  }));

  return (
    <HubTemplate
      hero={
        <HeroStandard
          variant="textOnly"
          eyebrow="Engineering & Research"
          headline="Verifiable AI & Cryptography Insights"
          subhead="Deep dives into zero-knowledge STARK compilers, deterministic inferencing, and sub-10ms hardware acceleration."
        />
      }
      featureSection={
        <BlogPreviewSection
          heading="Latest Research & Technical Articles"
          variant="Hub"
          posts={postsList}
          showSearch
        />
      }
      cta={
        <CTASection
          heading="Architect Custom Neural Workloads"
          body="Connect with our cryptographic engineering team to build verifiable AI execution pipelines."
          surface="dark"
          primaryCta={{
            label: 'Contact Engineering',
            href: '/contact',
          }}
        />
      }
    />
  );
}

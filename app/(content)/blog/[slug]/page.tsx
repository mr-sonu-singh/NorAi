import React from 'react';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { BLOG_POSTS } from '@/lib/blog';
import { BlogPostTemplate } from '@/components/templates/BlogPostTemplate';
import { Breadcrumb } from '@/components/molecules/Breadcrumb';
import { HeroStandard } from '@/components/organisms/sections/HeroStandard';
import { BlogPreviewSection } from '@/components/organisms/sections/BlogPreviewSection';
import { CTASection } from '@/components/organisms/sections/CTASection';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    return buildMetadata({
      title: 'Article Not Found | NorAI Blog',
      description: 'The requested research article could not be found.',
      path: '/blog',
    });
  }

  return buildMetadata({
    title: `${post.title} | NorAI Blog`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  const relatedPosts = Object.values(BLOG_POSTS)
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      title: p.title,
      excerpt: p.excerpt,
      href: `/blog/${p.slug}`,
      image: p.image,
      meta: p.meta,
      category: p.category,
    }));

  return (
    <BlogPostTemplate
      breadcrumb={
        <div className="mb-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      }
      hero={
        <HeroStandard
          variant="textOnly"
          eyebrow={post.category}
          headline={post.title}
          subhead={`${post.author} · ${post.date}`}
        />
      }
      body={
        <article className="py-8 space-y-8 text-primary-700 leading-relaxed border-b border-primary-200">
          {post.sections.map((section, idx) => (
            <section key={`section-${idx}`} className="space-y-4">
              {section.heading && (
                <h2 className="text-2xl font-bold text-primary-900 tracking-tight pt-4">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((para, pIdx) => (
                <p key={`p-${pIdx}`} className="text-base text-primary-700 leading-relaxed">
                  {para}
                </p>
              ))}
              {section.codeSnippet && (
                <div className="my-6 rounded-lg bg-primary-950 p-6 text-primary-100 overflow-x-auto font-mono text-sm border border-primary-800 shadow-inner">
                  <pre>
                    <code>{section.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </article>
      }
      related={
        relatedPosts.length > 0 ? (
          <BlogPreviewSection
            heading="Related Research & Articles"
            variant="Preview"
            posts={relatedPosts}
          />
        ) : undefined
      }
      cta={
        <CTASection
          heading="Build Verifiable AI Infrastructure"
          body="Discuss custom zero-knowledge circuit generation and deterministic latency SLAs with our team."
          surface="dark"
          primaryCta={{
            label: 'Talk to an Engineer',
            href: '/contact',
          }}
        />
      }
    />
  );
}

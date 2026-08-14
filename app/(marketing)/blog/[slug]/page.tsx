import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/lib/blog';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Link } from '@/components/atoms/Link';
import { buildMetadata } from '@/lib/seo';
import { ArrowLeft, Clock, Tag, User } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    return buildMetadata({
      path: `/blog/${slug}`,
      title: 'Article Not Found — NorAi Blog',
      description: 'The requested blog article could not be found.',
    });
  }

  return buildMetadata({
    path: `/blog/${post.slug}`,
    title: `${post.title} — NorAi Journal`,
    description: post.excerpt,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-[var(--bg-page)] text-primary-800 min-h-screen font-sans selection:bg-[var(--accent-500)] selection:text-[var(--bg-page)]">
      {/* Editorial Header */}
      <Section className="relative pt-12 pb-12 md:pt-16 md:pb-16 border-b border-slate-200/60">
        <Container size="narrow">
            <div className="space-y-6">
            {/* Back Button */}
            <Link href="/blog" className="inline-flex items-center text-xs font-mono text-primary-700 hover:text-[var(--accent-500)] transition-colors">
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" /> Back to Journal
            </Link>

            {/* Metadata Bar */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[color:var(--accent-500)/0.1] text-[var(--accent-mono)] border border-[color:var(--accent-500)/0.2] font-bold">
                <Tag className="w-3 h-3 text-[var(--accent-500)]" aria-hidden="true" />
                {post.category}
              </span>
              <span className="text-primary-700">•</span>
              <span className="text-primary-700 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[var(--accent-500)]" aria-hidden="true" /> {post.readTime}
              </span>
              <span className="text-primary-700">•</span>
              <span className="text-primary-700 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[var(--accent-500)]" aria-hidden="true" /> By {post.author}
              </span>
            </div>

            {/* Title */}
            <Heading
              as="h1"
              variant="display-lg"
              className="font-display font-extrabold tracking-tight text-primary-800 leading-tight"
            >
              {post.title}
            </Heading>

            {/* Excerpt Lead Paragraph */}
            <Text variant="body-lg" className="text-primary-700 font-normal leading-relaxed italic border-l-2 border-[color:var(--accent-500)/1] pl-4">
              {post.excerpt}
            </Text>
          </div>
        </Container>
      </Section>

      {/* Main Prose Article Body */}
      <Section className="py-16">
        <Container size="narrow">
          <div className="space-y-10 text-primary-500 leading-relaxed text-base">
            {post.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                {sec.heading && (
                  <Heading as="h2" variant="heading-xl" className="font-display font-bold text-primary-800 pt-4">
                    {sec.heading}
                  </Heading>
                )}

                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-primary-700 text-base leading-relaxed">
                    {p}
                  </p>
                ))}

                {sec.codeSnippet && (
                  <div className="my-6 rounded-lg bg-[var(--bg-page)] border border-slate-200/60 overflow-hidden font-mono text-xs">
                    <div className="px-4 py-2 bg-[var(--bg-elevated)] border-b border-slate-200/60 text-primary-700 flex items-center justify-between">
                      <span className="text-xs uppercase font-bold text-[var(--accent-mono)]">{sec.codeSnippet.language}</span>
                      <span className="text-[11px] text-primary-700">EXEMPLARY SNIPPET</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-primary-500 leading-relaxed">
                      <code>{sec.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Article Footer & Back Action */}
          <div className="mt-16 pt-8 border-t border-slate-200/60 flex items-center justify-between">
            <Link href="/blog" className="inline-flex items-center text-xs font-mono text-primary-700 hover:text-[var(--accent-500)] transition-colors">
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" /> Back to Journal Index
            </Link>
            <span className="text-xs font-mono text-primary-700">
              Published on {post.date}
            </span>
          </div>
        </Container>
      </Section>
    </article>
  );
}




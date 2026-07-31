import React from 'react';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { BLOG_POSTS } from '@/lib/blog';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { TiltCard } from '@/components/molecules/TiltCard';
import {
  Sparkles,
  ArrowLeft,
  Clock,
  User,
  Share2,
  Bookmark,
  ChevronRight,
  Code2,
} from 'lucide-react';

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
    title: `${post.title} — NorAI Research Journal`,
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

  const relatedPosts = Object.values(BLOG_POSTS).filter((p) => p.slug !== post.slug);

  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      {/* Top Header / Navigation Back Link */}
      <Section className="pt-10 pb-6">
        <Container size="narrow">
          <Link href="/blog" className="inline-flex items-center text-xs font-mono font-semibold text-blue-400 hover:text-blue-300 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Research Journal
          </Link>
        </Container>
      </Section>

      {/* Article Hero */}
      <Section className="py-8">
        <Container size="narrow">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 uppercase">
                {post.category}
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" /> {post.readTime}
              </span>
            </div>

            <Heading as="h1" variant="display-lg" className="font-extrabold text-white leading-tight">
              {post.title}
            </Heading>

            <Text variant="body-lg" className="text-slate-300 leading-relaxed">
              {post.excerpt}
            </Text>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center border border-blue-500/30">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-bold">{post.author}</div>
                  <div className="text-slate-400">{post.date}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-slate-900 border border-white/10 hover:text-white transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Article Body Content */}
      <Section className="py-12 border-t border-white/10">
        <Container size="narrow">
          <article className="space-y-8 text-slate-300 leading-relaxed text-base">
            {post.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                {section.heading && (
                  <Heading as="h2" variant="heading-lg" className="font-extrabold text-white pt-4">
                    {section.heading}
                  </Heading>
                )}

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-300 leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.codeSnippet && (
                  <div className="my-6 rounded-2xl bg-slate-950 border border-white/10 p-6 font-mono text-sm overflow-x-auto shadow-2xl space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/10 pb-3 mb-3">
                      <span className="flex items-center gap-2 text-blue-400">
                        <Code2 className="w-4 h-4" /> {section.codeSnippet.language.toUpperCase()}
                      </span>
                      <span>Snippet</span>
                    </div>
                    <pre className="text-slate-200">
                      <code>{section.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </article>
        </Container>
      </Section>

      {/* Related Research Articles */}
      {relatedPosts.length > 0 && (
        <Section className="py-16 bg-slate-950/60 border-t border-white/10">
          <Container size="default">
            <Heading as="h2" variant="display-sm" className="font-extrabold text-white mb-8">
              Related Research & Articles
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((rel, rIdx) => (
                <TiltCard key={rIdx} className="group p-8 bg-slate-900/70 border border-white/10 space-y-4">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-800 text-blue-300 border border-blue-400/20">
                    {rel.category}
                  </span>

                  <Link href={`/blog/${rel.slug}`}>
                    <Heading as="h3" variant="heading-md" className="font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer">
                      {rel.title}
                    </Heading>
                  </Link>

                  <Text variant="body-xs" className="text-slate-300 leading-relaxed">
                    {rel.excerpt}
                  </Text>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="text-slate-300">{rel.author}</span>
                    <Link href={`/blog/${rel.slug}`} className="inline-flex items-center text-blue-400 font-semibold">
                      Read Post <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </TiltCard>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </div>
  );
}

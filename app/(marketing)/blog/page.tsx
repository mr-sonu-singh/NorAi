'use client';

import React, { useState } from 'react';
import { BLOG_POSTS } from '@/lib/blog';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Link } from '@/components/atoms/Link';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

const CATEGORIES = ['[ALL]', '[AI ORCHESTRATION]', '[KNOWLEDGE RETRIEVAL]', '[DEVELOPER TOOLING]', '[RECRUITMENT AI]', '[OPERATIONS]'];

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState('[ALL]');
  const postsList = Object.values(BLOG_POSTS);

  const filteredPosts = selectedCategory === '[ALL]'
    ? postsList
    : postsList.filter((post) => `[${post.category.toUpperCase()}]` === selectedCategory);

  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-[#0CCAB1] selection:text-[#0B0F17]">
      {/* Editorial Hero Header */}
      <Section className="relative pt-12 pb-12 md:pt-20 md:pb-16 border-b border-white/10">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0CCAB1] uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" />
              <span>Engineering Journal &amp; Technical Insights</span>
            </div>

            <Heading
              as="h1"
              variant="display-lg"
              className="font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Technical Insights &amp; Architecture Write-Ups
            </Heading>

            <Text variant="body-lg" className="text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
              Practical notes on AI orchestration patterns, retrieval systems, developer tooling, and system automation engineering.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Category Topic Filter Bar */}
      <Section className="py-4 border-b border-white/10 bg-[#131924]/60 sticky top-16 z-30 backdrop-blur-md">
        <Container size="default">
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none text-xs font-mono" role="tablist" aria-label="Blog Category Filter">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0CCAB1] ${
                  selectedCategory === cat
                    ? 'bg-[#0CCAB1] text-[#0B0F17] font-bold'
                    : 'bg-[#0B0F17] text-slate-400 border border-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Post Index Grid */}
      <Section className="py-16">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#131924] border border-white/10 rounded-xl p-8 flex flex-col justify-between space-y-6 hover:border-[#0CCAB1]/40 transition-all group"
              >
                <div className="space-y-4">
                  {/* Article Metadata Bar */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#0CCAB1]/10 text-[#45F7D6] border border-[#0CCAB1]/20 font-bold">
                      <Tag className="w-3 h-3 text-[#0CCAB1]" aria-hidden="true" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Headline */}
                  <Heading as="h2" variant="heading-lg" className="font-display font-bold text-white group-hover:text-[#0CCAB1] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </Heading>

                  {/* Excerpt */}
                  <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                    {post.excerpt}
                  </Text>
                </div>

                {/* Footer Metadata & Action */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">
                    By <strong className="text-white">{post.author}</strong> • {post.date}
                  </span>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center font-bold text-[#0CCAB1] group-hover:text-[#45F7D6]">
                    Read Article <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}

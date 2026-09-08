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
    <div
      className="
        text-primary-800
        min-h-screen
        font-sans
        selection:bg-[var(--accent-500)]
        selection:text-[var(--bg-page)]

        bg-[linear-gradient(180deg,#F4F7FF_0%,#EEF2FF_25%,#F5F0FF_55%,#F4F7FF_100%)]
      "
    >
      {/* Editorial Hero Header */}
      <Section className="relative pt-12 pb-12 md:pt-20 md:pb-16 overflow-hidden isolate">
        {/* Cover Image — place your file at /public/images/hero-bg.jpg */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundColor: 'var(--primary-900)',
          }}
        />

        {/* Tinted overlay so text stays readable over the image */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" />

        {/* AI Neural Network Animation */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div
            className="
              absolute
              -left-20
              top-1/2
              w-72
              h-72
              rounded-full
              bg-cyan-400/10
              blur-[100px]
              animate-pulse
            "
          />

          <div
            className="
              absolute
              -right-20
              top-1/3
              w-80
              h-80
              rounded-full
              bg-blue-500/10
              blur-[110px]
              animate-pulse
            "
            style={{ animationDelay: '1200ms' }}
          />

          {/* AI Node - Left */}
          <div className="absolute left-[15%] top-[30%]">
            <span
              className="
                block
                w-2
                h-2
                rounded-full
                bg-cyan-300
                shadow-[0_0_18px_rgba(103,232,249,0.9)]
                animate-pulse
              "
            />
            <span
              className="
                absolute
                -inset-3
                rounded-full
                border
                border-cyan-300/20
                animate-ping
              "
            />
          </div>

          {/* AI Node - Right */}
          <div className="absolute right-[22%] top-[25%]">
            <span
              className="
                block
                w-1.5
                h-1.5
                rounded-full
                bg-cyan-200
                shadow-[0_0_15px_rgba(103,232,249,0.8)]
                animate-pulse
              "
              style={{ animationDelay: '500ms' }}
            />
          </div>

          {/* AI Node - Bottom Left */}
          <div className="absolute left-[27%] bottom-[18%]">
            <span
              className="
                block
                w-1.5
                h-1.5
                rounded-full
                bg-blue-200
                shadow-[0_0_14px_rgba(147,197,253,0.8)]
                animate-pulse
              "
              style={{ animationDelay: '900ms' }}
            />
          </div>

          {/* AI Node - Bottom Right */}
          <div className="absolute right-[13%] bottom-[25%]">
            <span
              className="
                block
                w-2
                h-2
                rounded-full
                bg-cyan-300
                shadow-[0_0_18px_rgba(103,232,249,0.8)]
                animate-pulse
              "
              style={{ animationDelay: '1400ms' }}
            />
          </div>

          {/* Neural Connection Lines */}
          <div
            className="
              absolute
              left-[15.5%]
              top-[30.5%]
              w-32
              h-px
              origin-left
              rotate-[18deg]
              bg-gradient-to-r
              from-cyan-300/40
              to-transparent
              animate-pulse
            "
          />

          <div
            className="
              absolute
              right-[22%]
              top-[25%]
              w-28
              h-px
              origin-right
              -rotate-[20deg]
              bg-gradient-to-l
              from-cyan-300/30
              to-transparent
              animate-pulse
            "
            style={{ animationDelay: '700ms' }}
          />

          {/* Tiny Data Particles */}
          <span className="absolute left-[9%] top-[45%] w-1 h-1 rounded-full bg-cyan-200/70 animate-pulse" />
          <span
            className="absolute left-[35%] top-[20%] w-1 h-1 rounded-full bg-blue-200/70 animate-pulse"
            style={{ animationDelay: '300ms' }}
          />
          <span
            className="absolute right-[32%] top-[45%] w-1 h-1 rounded-full bg-cyan-200/70 animate-pulse"
            style={{ animationDelay: '800ms' }}
          />
          <span
            className="absolute right-[8%] top-[40%] w-1 h-1 rounded-full bg-cyan-300/70 animate-pulse"
            style={{ animationDelay: '1100ms' }}
          />
        </div>

        <Container size="default" className="relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-xs font-mono tracking-wider uppercase">
              <BookOpen className="w-4 h-4 text-[#DDF7FF]" aria-hidden="true" />
              <span>Engineering Journal &amp; Technical Insights</span>
            </div>

            <Heading
              as="h1"
              variant="display-lg"
              className="font-display font-extrabold text-white tracking-[-0.03em] leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
            >
              Technical Insights &amp;{' '}
              <span className="text-[#DDF7FF] underline decoration-[color:var(--accent-mono)/0.6] underline-offset-8">
                Architecture Write-Ups
              </span>
            </Heading>

            <Text
              variant="body-lg"
              className="font-sans font-medium text-[#E8F7FF] max-w-2xl mx-auto leading-[1.8] tracking-[-0.01em] drop-shadow-[0_1px_6px_rgba(0,20,50,0.35)]"
            >
              Practical notes on AI orchestration patterns, retrieval systems, developer tooling, and system automation engineering.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Category Topic Filter Bar */}
      <Section
        className="
          py-4
          border-y
          border-blue-400/10
          bg-white/40
          backdrop-blur-md
          sticky top-16 z-30
        "
      >
        <Container size="default">
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none text-xs font-mono" role="tablist" aria-label="Blog Category Filter">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-500)] ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/20'
                    : 'bg-white/50 backdrop-blur-sm text-primary-700 border border-blue-400/15 hover:text-primary-800 hover:border-blue-400/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Post Index Grid */}
      <Section
        className="
          relative
          py-16
          overflow-hidden
          bg-[radial-gradient(circle_at_8%_35%,rgba(59,130,246,0.08),transparent_32%),radial-gradient(circle_at_92%_65%,rgba(139,92,246,0.08),transparent_34%)]
        "
      >
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="
              absolute -left-32 top-20 w-[420px] h-[420px] rounded-full
              bg-blue-500/10 blur-[90px] animate-pulse
            "
            style={{ animationDuration: '4s' }}
          />
          <div
            className="
              absolute -right-32 bottom-10 w-[460px] h-[460px] rounded-full
              bg-violet-500/10 blur-[95px] animate-pulse
            "
            style={{ animationDuration: '5s', animationDelay: '1s' }}
          />
        </div>

        <Container size="default" className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  p-8
                  flex
                  flex-col
                  justify-between
                  space-y-6

                  bg-white/45
                  backdrop-blur-xl

                  border
                  border-blue-400/15

                  shadow-[0_10px_40px_rgba(59,130,246,0.06)]

                  hover:-translate-y-2
                  hover:border-blue-400/30
                  hover:shadow-[0_20px_55px_rgba(59,130,246,0.14)]

                  transition-all
                  duration-500
                "
              >
                {/* Card AI Glow */}
                <div
                  aria-hidden="true"
                  className="
                    absolute -top-24 -right-24 w-56 h-56 rounded-full
                    bg-blue-500/10 blur-[80px]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500 pointer-events-none
                  "
                />
                <div
                  aria-hidden="true"
                  className="
                    absolute -bottom-24 -left-24 w-52 h-52 rounded-full
                    bg-violet-500/10 blur-[80px]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-700 pointer-events-none
                  "
                />
                <div
                  aria-hidden="true"
                  className="
                    absolute top-0 left-0 right-0 h-px
                    bg-gradient-to-r from-transparent via-blue-400/50 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                />

                <div className="relative z-10 space-y-4">
                  {/* Article Metadata Bar */}
                  <div className="flex items-center justify-between text-xs font-mono text-primary-700">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-500/10 text-[var(--accent-mono)] border border-blue-400/20 font-bold">
                      <Tag className="w-3 h-3 text-[var(--accent-500)]" aria-hidden="true" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-primary-700">
                      <Clock className="w-3.5 h-3.5 text-[var(--accent-500)]" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Headline */}
                  <Heading
                    as="h2"
                    variant="heading-lg"
                    className="font-display font-bold text-primary-800 group-hover:text-blue-600 transition-colors leading-snug"
                  >
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </Heading>

                  {/* Excerpt */}
                  <Text variant="body-sm" className="text-primary-700 leading-relaxed">
                    {post.excerpt}
                  </Text>
                </div>

                {/* Footer Metadata & Action */}
                <div className="relative z-10 pt-6 border-t border-blue-400/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-primary-700">
                    By <strong className="text-primary-800">{post.author}</strong> • {post.date}
                  </span>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center font-bold text-[var(--accent-500)] group-hover:text-[var(--accent-mono)]">
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
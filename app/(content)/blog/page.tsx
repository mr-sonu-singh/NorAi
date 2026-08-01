'use client';

import React, { useState } from 'react';
import { BLOG_POSTS } from '@/lib/blog';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import {
  Sparkles,
  ArrowRight,
  Clock,
  User,
  Mail,
  ChevronRight,
  Activity,
  Terminal,
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: '[ALL ARTICLES]' },
  { id: 'AI Orchestration', label: '[AI ORCHESTRATION]' },
  { id: 'Spatial Computing', label: '[SPATIAL COMPUTING]' },
  { id: 'Operations & Leadership', label: '[OPERATIONS]' },
];

export default function BlogHubPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const postsList = Object.values(BLOG_POSTS);
  const featuredPost = postsList[0];

  const filteredPosts = activeCategory === 'all'
    ? postsList
    : postsList.filter((p) => p.category === activeCategory);

  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-[#0CCAB1] selection:text-[#0B0F17]">
      {/* Hero Section */}
      <Section className="relative pt-12 pb-14 md:pt-20 md:pb-16 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0CCAB1]/30 bg-[#0CCAB1]/10 text-[#45F7D6] text-xs font-mono tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
              <span>Engineering &amp; AI Research Journal</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Insights on AI Orchestration,{' '}
              <span className="text-[#0CCAB1] underline decoration-[#0CCAB1]/40 underline-offset-8">
                Spatial Tech &amp; Automation
              </span>
            </Heading>

            {/* Subhead */}
            <Text variant="body-lg" className="text-slate-300 font-normal leading-relaxed">
              Deep dives into high-scale LLM pipelines, AR-VR spatial rendering, military-grade DevSecOps, and automated micro-SaaS architecture by our founding team.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Signature Element: Journal Telemetry Bar */}
      <Section className="py-4 border-y border-white/10 bg-[#131924]/60">
        <Container size="default">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400">
              <Activity className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" />
              <span className="font-bold text-white uppercase tracking-wider">JOURNAL_INDEX:</span>
              <span className="text-[#45F7D6]">● {postsList.length} PUBLISHED DISPATCHES</span>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#45F7D6] bg-[#0B0F17] px-3 py-1 rounded border border-white/10">
                <Terminal className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" />
                TECHNICAL CODE SNIPPETS &amp; ARCHITECTURE
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Article Spotlight Card */}
      {featuredPost && (
        <Section className="py-12">
          <Container size="default">
            <div className="p-8 md:p-10 bg-[#131924] border-2 border-[#0CCAB1]/50 rounded-xl group space-y-6 relative overflow-hidden shadow-xl shadow-[#0CCAB1]/10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span className="px-3 py-1 rounded bg-[#0CCAB1] text-[#0B0F17] font-bold uppercase tracking-wider">
                      FEATURED DISPATCH
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-slate-800 text-[#45F7D6] border border-white/10">
                      {featuredPost.category}
                    </span>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Heading as="h2" variant="display-md" className="font-display font-bold text-white group-hover:text-[#0CCAB1] transition-colors cursor-pointer pt-2">
                      {featuredPost.title}
                    </Heading>
                  </Link>

                  <Text variant="body-md" className="text-slate-300 leading-relaxed">
                    {featuredPost.excerpt}
                  </Text>

                  <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5 text-white font-semibold">
                      <User className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" /> {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" /> {featuredPost.readTime}
                    </span>
                    <span>{featuredPost.date}</span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button variant="primary" size="lg" className="bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold px-8 py-3.5 rounded-lg shadow-lg shadow-[#0CCAB1]/20 flex items-center gap-2 transition-all">
                      Read Full Article <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Article Grid Section with Category Filtering */}
      <Section className="py-16 bg-[#131924]/40 border-y border-white/10">
        <Container size="default">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <Heading as="h2" variant="display-md" className="font-display font-extrabold text-white">
                All Engineering &amp; Research Articles
              </Heading>
              <Text variant="body-sm" className="text-slate-400">
                Explore technical write-ups authored by NorAI founders.
              </Text>
            </div>

            {/* Category Filter Segment Buttons */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs" role="tablist" aria-label="Article Categories Filter">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0CCAB1] ${
                    activeCategory === cat.id
                      ? 'bg-[#0CCAB1] text-[#0B0F17] font-bold'
                      : 'bg-[#0B0F17] text-slate-400 border border-white/10 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <div
                key={index}
                className="bg-[#131924] border border-white/10 rounded-xl p-8 flex flex-col justify-between space-y-6 hover:border-[#0CCAB1]/40 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded bg-[#0B0F17] text-[#45F7D6] border border-white/10 font-bold">
                      {post.category}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" /> {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Heading as="h3" variant="heading-lg" className="font-display font-bold text-white group-hover:text-[#0CCAB1] transition-colors cursor-pointer">
                      {post.title}
                    </Heading>
                  </Link>

                  <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                    {post.excerpt}
                  </Text>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" /> {post.author}
                  </span>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-[#0CCAB1] font-bold group-hover:text-[#45F7D6]">
                    Read Post <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter Subscription Banner */}
      <Section className="py-20 relative overflow-hidden">
        <Container size="default">
          <div className="rounded-2xl border border-white/10 bg-[#131924] p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <Heading as="h2" variant="display-lg" className="font-display font-extrabold text-white">
                Subscribe to NorAI Engineering Dispatch
              </Heading>
              <Text variant="body-lg" className="text-slate-300">
                Get monthly deep dives on LLM pipeline architecture, spatial computing benchmarks, and AI automation delivered directly to your inbox.
              </Text>
            </div>

            <div className="relative z-10 pt-2 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter work email..."
                className="flex-1 px-4 py-3.5 rounded-lg bg-[#0B0F17] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0CCAB1] text-sm font-sans"
              />
              <Button variant="primary" size="lg" className="bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold px-6 py-3.5 rounded-lg shadow-lg shadow-[#0CCAB1]/20 flex items-center justify-center gap-2 transition-all cursor-pointer">
                Subscribe <Mail className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

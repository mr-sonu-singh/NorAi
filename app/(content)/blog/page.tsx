import React from 'react';
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
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  User,
  BookOpen,
  Mail,
  ChevronRight,
} from 'lucide-react';

export const metadata = buildMetadata({
  path: '/blog',
  title: 'Engineering & AI Research Journal — NorAI Technologies',
  description: 'Technical insights, AI agent orchestration breakdowns, spatial computing research, and system engineering articles by NorAI founders.',
});

export default function BlogHubPage() {
  const postsList = Object.values(BLOG_POSTS);
  const featuredPost = postsList[0];
  const remainingPosts = postsList.slice(1);

  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      {/* Hero Section */}
      <Section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Engineering & AI Research Journal</span>
            </div>

            {/* Headline */}
            <Heading
              as="h1"
              variant="display-xl"
              className="font-extrabold tracking-tight text-white leading-tight"
            >
              Insights on AI Orchestration,{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Spatial Tech & Automation
              </span>
            </Heading>

            {/* Subhead */}
            <Text variant="body-lg" className="text-slate-300 font-normal leading-relaxed">
              Deep dives into high-scale LLM pipelines, AR-VR spatial rendering, military-grade DevSecOps, and automated micro-SaaS architecture by our founding team.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Featured Article Spotlight Card */}
      {featuredPost && (
        <Section className="py-8">
          <Container size="default">
            <TiltCard className="p-8 md:p-12 bg-slate-900/80 border border-blue-500/30 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 uppercase">
                      Featured Article
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {featuredPost.category}
                    </span>
                  </div>

                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Heading as="h2" variant="display-sm" className="font-extrabold text-white group-hover:text-blue-400 transition-colors cursor-pointer pt-2">
                      {featuredPost.title}
                    </Heading>
                  </Link>

                  <Text variant="body-md" className="text-slate-300 leading-relaxed">
                    {featuredPost.excerpt}
                  </Text>

                  <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5 text-white font-medium">
                      <User className="w-4 h-4 text-blue-400" /> {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-slate-400" /> {featuredPost.readTime}
                    </span>
                    <span>{featuredPost.date}</span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 flex items-center gap-2">
                      Read Full Article <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TiltCard>
          </Container>
        </Section>
      )}

      {/* Article Grid Section */}
      <Section className="py-16 bg-slate-950/40 border-y border-white/10">
        <Container size="default">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
            <div>
              <Heading as="h2" variant="display-md" className="font-extrabold text-white">
                All Engineering & Research Articles
              </Heading>
              <Text variant="body-sm" className="text-slate-400">
                Explore technical write-ups authored by NorAI founders.
              </Text>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium">
              <span className="px-3.5 py-1.5 rounded-full bg-blue-600 text-white cursor-pointer">
                All Articles
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white cursor-pointer">
                AI Orchestration
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white cursor-pointer">
                Spatial Computing
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-white cursor-pointer">
                Operations
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {postsList.map((post, index) => (
              <TiltCard key={index} className="group flex flex-col justify-between p-8 bg-slate-900/70 border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-800 text-blue-300 border border-blue-400/20">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-400" /> {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Heading as="h3" variant="heading-lg" className="font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer">
                      {post.title}
                    </Heading>
                  </Link>

                  <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                    {post.excerpt}
                  </Text>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-400" /> {post.author}
                  </span>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-blue-400 font-semibold group-hover:text-blue-300">
                    Read Post <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter Subscription Banner */}
      <Section className="py-20 relative overflow-hidden">
        <Container size="default">
          <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-950/60 to-slate-900/80 p-12 text-center space-y-6 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-blue-500/10">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <Heading as="h2" variant="display-lg" className="font-extrabold text-white">
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
                className="flex-1 px-4 py-3.5 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
                Subscribe <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

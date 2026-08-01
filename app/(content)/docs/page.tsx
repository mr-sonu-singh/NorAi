import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Link } from '@/components/atoms/Link';
import { buildMetadata } from '@/lib/seo';
import { BookOpen, Sparkles, Zap, Cpu, Layers } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  path: '/docs',
  title: 'Documentation & Integration Guide — NorAI Technologies',
  description: 'Conceptual documentation and getting started guide for NorAI self-serve micro-SaaS utilities and API integration patterns.',
});

export default function DocsPage() {
  return (
    <div className="dark-ambient-bg text-slate-100 min-h-screen font-sans selection:bg-[#0CCAB1] selection:text-[#0B0F17]">
      {/* Header Section */}
      <Section className="relative pt-12 pb-12 md:pt-20 md:pb-16 border-b border-white/10">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0CCAB1] uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-[#0CCAB1]" aria-hidden="true" />
              <span>Developer Reference &amp; Product Guide</span>
            </div>

            <Heading
              as="h1"
              variant="display-lg"
              className="font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Product &amp; Integration Documentation
            </Heading>

            <Text variant="body-lg" className="text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
              Getting started overview, product execution concepts, and general integration patterns for NorAI self-serve tools.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Getting Started Guide */}
      <Section className="py-16 border-b border-white/10 bg-[#131924]/40">
        <Container size="default">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-2">
              <div className="text-xs font-mono text-[#0CCAB1] uppercase font-bold tracking-widest">
                Quick Start
              </div>
              <Heading as="h2" variant="heading-xl" className="font-display font-bold text-white">
                How Integration Works
              </Heading>
              <Text variant="body-md" className="text-slate-300">
                All NorAI micro-tools follow a consistent 3-stage integration workflow:
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#131924] border border-white/10 rounded-xl p-6 space-y-3">
                <span className="text-xs font-mono font-bold text-[#0CCAB1] bg-[#0CCAB1]/10 px-2.5 py-1 rounded">
                  STEP 01
                </span>
                <Heading as="h3" variant="heading-md" className="font-display font-bold text-white">
                  Dashboard Access
                </Heading>
                <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                  Sign up for a self-serve account and access your product dashboard to configure input parameters.
                </Text>
              </div>

              <div className="bg-[#131924] border border-white/10 rounded-xl p-6 space-y-3">
                <span className="text-xs font-mono font-bold text-[#0CCAB1] bg-[#0CCAB1]/10 px-2.5 py-1 rounded">
                  STEP 02
                </span>
                <Heading as="h3" variant="heading-md" className="font-display font-bold text-white">
                  Payload Ingestion
                </Heading>
                <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                  Submit text payloads, resume documents, lecture transcripts, or channel feeds for processing.
                </Text>
              </div>

              <div className="bg-[#131924] border border-white/10 rounded-xl p-6 space-y-3">
                <span className="text-xs font-mono font-bold text-[#0CCAB1] bg-[#0CCAB1]/10 px-2.5 py-1 rounded">
                  STEP 03
                </span>
                <Heading as="h3" variant="heading-md" className="font-display font-bold text-white">
                  Structured Response
                </Heading>
                <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                  Receive verified JSON outputs, structured summary briefs, or flashcard decks.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Product Reference Guides */}
      <Section className="py-16">
        <Container size="default">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-2 text-center md:text-left">
              <div className="text-xs font-mono text-[#0CCAB1] uppercase font-bold tracking-widest">
                Product Specifications
              </div>
              <Heading as="h2" variant="heading-xl" className="font-display font-bold text-white">
                Self-Serve Utilities Overview
              </Heading>
            </div>

            {/* Product 1: AI Resume Shortlister */}
            <div id="resume-shortlister" className="bg-[#131924] border border-white/10 rounded-xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0CCAB1]/10 border border-[#0CCAB1]/20 text-[#0CCAB1]">
                  <Sparkles className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#45F7D6]">TOOL_01 • RECRUITMENT AI</span>
                  <Heading as="h3" variant="heading-lg" className="font-display font-bold text-white">
                    AI Resume Shortlister
                  </Heading>
                </div>
              </div>
              <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                Parses PDF, Word, and text resumes against custom job requirement specifications. Returns an objective candidate qualification score, skill breakdown, and candidate match summary.
              </Text>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Supported Formats: PDF, DOCX, TXT</span>
                <Link href="/products/resume-shortlister" className="text-[#0CCAB1] hover:text-[#45F7D6] font-bold">
                  Product Details &rarr;
                </Link>
              </div>
            </div>

            {/* Product 2: AI Course Note-Taker */}
            <div id="course-note-taker" className="bg-[#131924] border border-white/10 rounded-xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0CCAB1]/10 border border-[#0CCAB1]/20 text-[#0CCAB1]">
                  <Zap className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#45F7D6]">TOOL_02 • EDTECH AI</span>
                  <Heading as="h3" variant="heading-lg" className="font-display font-bold text-white">
                    AI Course Note-Taker
                  </Heading>
                </div>
              </div>
              <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                Converts lecture audio tracks, video transcripts, and educational documents into structured chapter outlines, core concept definitions, and interactive digital flashcards.
              </Text>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Export Formats: Markdown, PDF, JSON</span>
                <Link href="/products/course-note-taker" className="text-[#0CCAB1] hover:text-[#45F7D6] font-bold">
                  Product Details &rarr;
                </Link>
              </div>
            </div>

            {/* Product 3: Chat Digest AI */}
            <div id="chat-digest" className="bg-[#131924] border border-white/10 rounded-xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0CCAB1]/10 border border-[#0CCAB1]/20 text-[#0CCAB1]">
                  <Cpu className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#45F7D6]">TOOL_03 • COMMUNITY AI</span>
                  <Heading as="h3" variant="heading-lg" className="font-display font-bold text-white">
                    Chat Digest &amp; Newsletter AI
                  </Heading>
                </div>
              </div>
              <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                Aggregates daily channel transcript exports from public community spaces. Filters out noise and casual chatter to extract customer feedback, bug reports, and key discussion highlights into daily executive briefs.
              </Text>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Input Sources: Public Transcripts &amp; Webhooks</span>
                <Link href="/products/chat-digest" className="text-[#0CCAB1] hover:text-[#45F7D6] font-bold">
                  Product Details &rarr;
                </Link>
              </div>
            </div>

            {/* Product 4: Smart News Aggregator */}
            <div id="news-aggregator" className="bg-[#131924] border border-white/10 rounded-xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0CCAB1]/10 border border-[#0CCAB1]/20 text-[#0CCAB1]">
                  <Layers className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#45F7D6]">TOOL_04 • MEDIA AI</span>
                  <Heading as="h3" variant="heading-lg" className="font-display font-bold text-white">
                    Smart News Aggregator
                  </Heading>
                </div>
              </div>
              <Text variant="body-sm" className="text-slate-300 leading-relaxed">
                Curates regional news feeds, press releases, and market updates by topic and sentiment. Groups syndicated articles into single topic clusters for efficient media monitoring.
              </Text>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Features: Topic Clustering &amp; Sentiment Tagging</span>
                <Link href="/products/news-aggregator" className="text-[#0CCAB1] hover:text-[#45F7D6] font-bold">
                  Product Details &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

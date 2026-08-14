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
  title: 'Documentation & Integration Guide — NorAi Technologies',
  description: 'Conceptual documentation and getting started guide for NorAi self-serve micro-SaaS utilities and API integration patterns.',
});

export default function DocsPage() {
  return (
    <div className="bg-[var(--bg-page)] text-primary-800 min-h-screen font-sans selection:bg-[var(--accent-500)] selection:text-[var(--bg-page)]">
      {/* Header Section */}
      <Section className="relative pt-12 pb-12 md:pt-20 md:pb-16 border-b border-slate-200/60">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-500)] uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-[var(--accent-500)]" aria-hidden="true" />
              <span>Developer Reference &amp; Product Guide</span>
            </div>

            <Heading
              as="h1"
              variant="display-lg"
              className="font-display font-extrabold tracking-tight text-primary-800 leading-tight"
            >
              Product &amp; Integration Documentation
            </Heading>

            <Text variant="body-lg" className="text-primary-700 font-normal leading-relaxed max-w-2xl mx-auto">
              Getting started overview, product execution concepts, and general integration patterns for NorAi self-serve tools.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Getting Started Guide */}
      <Section className="py-16 border-b border-slate-200/60 bg-[color:var(--bg-elevated)/0.4]">
        <Container size="default">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-2">
              <div className="text-xs font-mono text-[var(--accent-500)] uppercase font-bold tracking-widest">
                Quick Start
              </div>
              <Heading as="h2" variant="heading-xl" className="font-display font-bold text-primary-800">
                How Integration Works
              </Heading>
              <Text variant="body-md" className="text-primary-700">
                All NorAi micro-tools follow a consistent 3-stage integration workflow:
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[var(--bg-elevated)] border border-slate-200/60 rounded-xl p-6 space-y-3">
                <span className="text-xs font-mono font-bold text-[var(--accent-500)] bg-[color:var(--accent-500)/0.1] px-2.5 py-1 rounded">
                  STEP 01
                </span>
                <Heading as="h3" variant="heading-md" className="font-display font-bold text-primary-800">
                  Dashboard Access
                </Heading>
                <Text variant="body-sm" className="text-primary-700 leading-relaxed">
                  Sign up for a self-serve account and access your product dashboard to configure input parameters.
                </Text>
              </div>

              <div className="bg-[var(--bg-elevated)] border border-slate-200/60 rounded-xl p-6 space-y-3">
                <span className="text-xs font-mono font-bold text-[var(--accent-500)] bg-[color:var(--accent-500)/0.1] px-2.5 py-1 rounded">
                  STEP 02
                </span>
                <Heading as="h3" variant="heading-md" className="font-display font-bold text-primary-800">
                  Payload Ingestion
                </Heading>
                <Text variant="body-sm" className="text-primary-700 leading-relaxed">
                  Submit text payloads, resume documents, lecture transcripts, or channel feeds for processing.
                </Text>
              </div>

              <div className="bg-[var(--bg-elevated)] border border-slate-200/60 rounded-xl p-6 space-y-3">
                <span className="text-xs font-mono font-bold text-[var(--accent-500)] bg-[color:var(--accent-500)/0.1] px-2.5 py-1 rounded">
                  STEP 03
                </span>
                <Heading as="h3" variant="heading-md" className="font-display font-bold text-primary-800">
                  Structured Response
                </Heading>
                <Text variant="body-sm" className="text-primary-700 leading-relaxed">
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
              <div className="text-xs font-mono text-[var(--accent-500)] uppercase font-bold tracking-widest">
                Product Specifications
              </div>
              <Heading as="h2" variant="heading-xl" className="font-display font-bold text-primary-800">
                Self-Serve Utilities Overview
              </Heading>
            </div>

            {/* Product 1: AI Resume Shortlister */}
            <div id="resume-shortlister" className="bg-[var(--bg-elevated)] border border-slate-200/60 rounded-xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[color:var(--accent-500)/0.1] border border-[color:var(--accent-500)/0.2] text-[var(--accent-500)]">
                  <Sparkles className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[var(--accent-mono)]">TOOL_01 • RECRUITMENT AI</span>
                  <Heading as="h3" variant="heading-lg" className="font-display font-bold text-primary-800">
                    AI Resume Shortlister
                  </Heading>
                </div>
              </div>
              <Text variant="body-sm" className="text-primary-700 leading-relaxed">
                Parses PDF, Word, and text resumes against custom job requirement specifications. Returns an objective candidate qualification score, skill breakdown, and candidate match summary.
              </Text>
                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono">
                <span className="text-primary-700">Supported Formats: PDF, DOCX, TXT</span>
                <Link href="/products/resume-shortlister" className="text-[var(--accent-500)] hover:text-[var(--accent-mono)] font-bold">
                  Product Details &rarr;
                </Link>
              </div>
            </div>

            {/* Product 2: AI Course Note-Taker */}
            <div id="course-note-taker" className="bg-[var(--bg-elevated)] border border-slate-200/60 rounded-xl p-8 space-y-4">
                <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[color:var(--accent-500)/0.1] border border-[color:var(--accent-500)/0.2] text-[var(--accent-500)]">
                  <Zap className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[var(--accent-mono)]">TOOL_02 • EDTECH AI</span>
                  <Heading as="h3" variant="heading-lg" className="font-display font-bold text-primary-800">
                    AI Course Note-Taker
                  </Heading>
                </div>
              </div>
              <Text variant="body-sm" className="text-primary-700 leading-relaxed">
                Converts lecture audio tracks, video transcripts, and educational documents into structured chapter outlines, core concept definitions, and interactive digital flashcards.
              </Text>
                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono">
                <span className="text-primary-700">Export Formats: Markdown, PDF, JSON</span>
                <Link href="/products/course-note-taker" className="text-[var(--accent-500)] hover:text-[var(--accent-mono)] font-bold">
                  Product Details &rarr;
                </Link>
              </div>
            </div>

            {/* Product 3: Chat Digest AI */}
            <div id="chat-digest" className="bg-[var(--bg-elevated)] border border-slate-200/60 rounded-xl p-8 space-y-4">
                <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[color:var(--accent-500)/0.1] border border-[color:var(--accent-500)/0.2] text-[var(--accent-500)]">
                  <Cpu className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[var(--accent-mono)]">TOOL_03 • COMMUNITY AI</span>
                  <Heading as="h3" variant="heading-lg" className="font-display font-bold text-primary-800">
                    Chat Digest &amp; Newsletter AI
                  </Heading>
                </div>
              </div>
              <Text variant="body-sm" className="text-primary-700 leading-relaxed">
                Aggregates daily channel transcript exports from public community spaces. Filters out noise and casual chatter to extract customer feedback, bug reports, and key discussion highlights into daily executive briefs.
              </Text>
                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono">
                <span className="text-primary-700">Input Sources: Public Transcripts &amp; Webhooks</span>
                <Link href="/products/chat-digest" className="text-[var(--accent-500)] hover:text-[var(--accent-mono)] font-bold">
                  Product Details &rarr;
                </Link>
              </div>
            </div>

            {/* Product 4: Smart News Aggregator */}
            <div id="news-aggregator" className="bg-[var(--bg-elevated)] border border-slate-200/60 rounded-xl p-8 space-y-4">
                <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[color:var(--accent-500)/0.1] border border-[color:var(--accent-500)/0.2] text-[var(--accent-500)]">
                  <Layers className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[var(--accent-mono)]">TOOL_04 • MEDIA AI</span>
                  <Heading as="h3" variant="heading-lg" className="font-display font-bold text-primary-800">
                    Smart News Aggregator
                  </Heading>
                </div>
              </div>
              <Text variant="body-sm" className="text-primary-700 leading-relaxed">
                Curates regional news feeds, press releases, and market updates by topic and sentiment. Groups syndicated articles into single topic clusters for efficient media monitoring.
              </Text>
                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono">
                <span className="text-primary-700">Features: Topic Clustering &amp; Sentiment Tagging</span>
                <Link href="/products/news-aggregator" className="text-[var(--accent-500)] hover:text-[var(--accent-mono)] font-bold">
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




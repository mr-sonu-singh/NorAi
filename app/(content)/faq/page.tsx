'use client';

import React, { useState } from 'react';
import { Container } from '@/components/foundation/Container';
import { Section } from '@/components/foundation/Section';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Link } from '@/components/atoms/Link';
import { HelpCircle, Search, ChevronDown, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'product' | 'service' | 'billing';
}

const FAQ_ITEMS: FAQItem[] = [
  // Product Category
  {
    category: 'product',
    question: 'What self-serve AI micro-tools does NorAi offer?',
    answer: 'NorAi offers 4 self-serve micro-tools: AI Resume Shortlister (candidate screening), AI Course Note-Taker (lecture summarization & flashcards), Chat Digest AI (community chat briefs), and Smart News Aggregator (regional news curation).',
  },
  {
    category: 'product',
    question: 'How fast are responses processed by the micro-tools?',
    answer: 'All self-serve micro-tools are engineered for sub-second execution speeds, with processing SLAs ranging from < 0.28s to < 0.45s depending on payload size.',
  },
  {
    category: 'product',
    question: 'What file formats can be uploaded to the AI Resume Shortlister and Course Note-Taker?',
    answer: 'The AI Resume Shortlister supports PDF, DOCX, and TXT files. The Course Note-Taker supports video transcripts, plain text notes, and MP3/WAV audio tracks.',
  },
  {
    category: 'product',
    question: 'Can Chat Digest AI aggregate community chat transcripts from Telegram or Discord?',
    answer: 'Yes! You can paste public community channel exports or sync webhook exports to generate automated daily executive digests.',
  },

  // Service Category
  {
    category: 'service',
    question: 'What is the difference between self-serve products and custom enterprise services?',
    answer: 'Self-serve products (available on our Products page) are ready-to-deploy tools accessible via instant sign-up. Custom enterprise services involve engineering bespoke AI pipelines, RAG vector search, MCP tool servers, or full-stack web applications tailored to your proprietary data.',
  },
  {
    category: 'service',
    question: 'What are the 3 service readiness tiers listed on your Services page?',
    answer: 'Our Services page categorizes offerings into 3 maturity tiers: Tier 1 (7 Active Core Services ready for deployment), Tier 2 (1 Early Access Practice onboarding pilot partners), and Tier 3 (1 Provisional R&D Scaffold under internal research).',
  },
  {
    category: 'service',
    question: 'How fast can a custom enterprise AI pipeline or chatbot prototype be deployed?',
    answer: 'Initial functional prototypes are typically delivered within 3-5 days. Full enterprise production deployments with webhooks and SLA guarantees typically take 1 to 2 weeks.',
  },
  {
    category: 'service',
    question: 'Can custom enterprise AI services be deployed on private cloud infrastructure?',
    answer: 'Yes! For enterprise clients with strict data residency requirements, we offer private cloud deployments across AWS, Azure, GCP, and dedicated isolated clusters.',
  },

  // Billing Category
  {
    category: 'billing',
    question: 'What pricing tiers are available for self-serve products?',
    answer: 'Self-serve products feature transparent monthly tiers (Starter, Pro, Scale) designed for different usage volumes, starting at predictable monthly rates.',
  },
  {
    category: 'billing',
    question: 'Are there any hidden setup or maintenance fees for self-serve tools?',
    answer: 'No. Self-serve plans feature transparent monthly pricing with zero hidden setup fees or unexpected maintenance charges.',
  },
  {
    category: 'billing',
    question: 'How are custom enterprise AI services priced?',
    answer: 'Custom enterprise services are scoped individually during a technical consultation based on workflow complexity, data integration requirements, and SLA targets.',
  },
  {
    category: 'billing',
    question: 'How do I upgrade or change my self-serve product tier?',
    answer: 'You can adjust your subscription tier anytime directly through your product dashboard or by contacting our support team.',
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'product' | 'service' | 'billing'>('all');

  const filteredItems = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[var(--bg-page)] text-primary-800 min-h-screen font-sans selection:bg-[var(--accent-500)] selection:text-[var(--bg-page)]">
      {/* Header Section */}
      <Section className="relative pt-12 pb-12 md:pt-20 md:pb-16 border-b border-slate-200/60">
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-500)] uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-[var(--accent-500)]" aria-hidden="true" />
              <span>Knowledge Base &amp; Frequently Asked Questions</span>
            </div>

            <Heading
              as="h1"
              variant="display-lg"
              className="font-display font-extrabold tracking-tight text-primary-800 leading-tight"
            >
              Frequently Asked Questions
            </Heading>

            <Text variant="body-lg" className="text-primary-700 font-normal leading-relaxed max-w-2xl mx-auto">
              Find instant answers regarding self-serve products, custom enterprise engineering, and billing structures.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Search & Category Filter Controls */}
      <Section className="py-8 border-b border-slate-200/60 bg-[color:var(--bg-elevated)/0.6] sticky top-16 z-30 backdrop-blur-md">
        <Container size="narrow">
          <div className="space-y-4">
            {/* Search Input Bar */}
            <div className="relative">
              <Search className="w-4 h-4 text-primary-700 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search questions or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[var(--bg-page)] border border-slate-200/60 rounded-lg pl-11 pr-4 py-3 text-sm text-primary-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)] transition-all"
              />
            </div>

            {/* Category Tabs */}
              <div className="flex items-center justify-center gap-2 text-xs font-mono" role="tablist" aria-label="FAQ Category Filter">
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'all'}
                onClick={() => setActiveCategory('all')}
                className={`px-3.5 py-1.5 rounded transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-500)] ${
                  activeCategory === 'all'
                    ? 'bg-[var(--accent-500)] text-[var(--bg-page)] font-bold'
                    : 'bg-[var(--bg-page)] text-primary-700 border border-slate-200/60 hover:text-primary-800'
                }`}
              >
                [ALL QUESTIONS]
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'product'}
                onClick={() => setActiveCategory('product')}
                className={`px-3.5 py-1.5 rounded transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-500)] ${
                  activeCategory === 'product'
                    ? 'bg-[var(--accent-500)] text-[var(--bg-page)] font-bold'
                    : 'bg-[var(--bg-page)] text-primary-700 border border-slate-200/60 hover:text-primary-800'
                }`}
              >
                [PRODUCTS]
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'service'}
                onClick={() => setActiveCategory('service')}
                className={`px-3.5 py-1.5 rounded transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-500)] ${
                  activeCategory === 'service'
                    ? 'bg-[var(--accent-500)] text-[var(--bg-page)] font-bold'
                    : 'bg-[var(--bg-page)] text-primary-700 border border-slate-200/60 hover:text-primary-800'
                }`}
              >
                [SERVICES]
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'billing'}
                onClick={() => setActiveCategory('billing')}
                className={`px-3.5 py-1.5 rounded transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-500)] ${
                  activeCategory === 'billing'
                    ? 'bg-[var(--accent-500)] text-[var(--bg-page)] font-bold'
                    : 'bg-[var(--bg-page)] text-primary-700 border border-slate-200/60 hover:text-primary-800'
                }`}
              >
                [BILLING &amp; TIERS]
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Accordion FAQ Results */}
      <Section className="py-16">
        <Container size="narrow">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Text variant="body-md" className="text-primary-700">
                No questions found matching your search.
              </Text>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="text-xs font-mono text-[var(--accent-500)] hover:underline cursor-pointer"
              >
                Clear search filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item, idx) => (
                <details
                  key={idx}
                  className="group rounded-lg border border-slate-200/60 bg-[var(--bg-elevated)] p-5 backdrop-blur-md transition-all [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer font-semibold text-primary-800 text-base">
                    <span className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-[var(--accent-500)] flex-shrink-0" aria-hidden="true" />
                      {item.question}
                    </span>
                    <ChevronDown className="w-4 h-4 text-primary-700 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="mt-4 text-sm text-primary-700 leading-relaxed pl-8">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          )}

          {/* Contact Support Banner */}
          <div className="mt-16 rounded-xl border border-slate-200/60 bg-[var(--bg-elevated)] p-8 text-center space-y-4">
            <Heading as="h2" variant="heading-xl" className="font-display font-bold text-primary-800">
              Have Additional Questions?
            </Heading>
            <Text variant="body-sm" className="text-primary-700">
              Our engineering and solution architects are available for technical scoping and inquiries.
            </Text>
            <div className="pt-2">
              <Link href="/contact" className="inline-flex items-center text-xs font-mono text-[var(--accent-500)] hover:text-[var(--accent-mono)] font-bold">
                Schedule Technical Consultation <ArrowRight className="w-3.5 h-3.5 ml-1.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}




'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Terminal, Sparkles, Zap, Cpu, CheckCircle2, ArrowRight, type LucideIcon } from 'lucide-react';

export interface HeroOrbProps {
  className?: string;
}

interface TeaserTab {
  id: string;
  name: string;
  badge: string;
  icon: LucideIcon;
  inputSnippet: string;
  outputSummary: string;
  latency: string;
}

const TEASER_TABS: TeaserTab[] = [
  {
    id: 'resume',
    name: 'Resume-Shortlister.v1',
    badge: 'Recruitment AI',
    icon: Sparkles,
    inputSnippet: 'Candidate: Senior Fullstack Engineer\nSkills: React, Next.js, Node.js, Python, PostgreSQL\nExperience: 5+ years building SaaS automation...',
    outputSummary: 'Score: 94/100 (Top 2%)\nExtraction: Strong React + Python match\nRecommendation: Advance to Technical Screen',
    latency: '0.34s',
  },
  {
    id: 'notetaker',
    name: 'Course-NoteTaker.v1',
    badge: 'EdTech AI',
    icon: Zap,
    inputSnippet: 'Audio Stream: Lecture_04_Neural_Networks.mp3\nDuration: 45m 12s\nTopic: Gradient Descent & Loss Functions',
    outputSummary: 'Key Takeaways: 4 Core Formulas\nSummary: Executive 3-para digest\nQuiz: 5 Auto-generated Flashcards ready',
    latency: '0.41s',
  },
  {
    id: 'digest',
    name: 'Chat-Digest.v1',
    badge: 'Community AI',
    icon: Cpu,
    inputSnippet: 'Source: #general-discussions (Discord)\nMessages Analyzed: 1,420 unread\nTimeframe: Last 24 Hours',
    outputSummary: 'Urgent Issues: 2 API rate limit reports\nSentiment: 88% Positive\nAction: Sent alert to @engineering',
    latency: '0.28s',
  },
];

export const HeroOrb: React.FC<HeroOrbProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState(0);
  const activeItem = TEASER_TABS[activeTab] ?? TEASER_TABS[0];
  if (!activeItem) return null;
  const current = activeItem;
  const IconComp = current.icon;

  return (
    <div className={cn('w-full max-w-xl mx-auto rounded-xl border border-slate-200/60 bg-[var(--bg-elevated)] shadow-2xl overflow-hidden font-sans select-none', className)}>
      {/* Console Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[var(--bg-page)] border-b border-slate-200/60">
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[var(--accent-500)]/80" />
            <div className="w-3 h-3 rounded-full bg-[var(--brand-purple)]/80" />
            <div className="w-3 h-3 rounded-full bg-[color:var(--accent-mono)/0.15]" />
            <span className="ml-2 text-xs font-mono text-primary-700 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[var(--accent-500)]" /> norai-console ~ live-preview
            </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[color:var(--accent-500)/0.1] border border-[color:var(--accent-500)/0.3] text-[var(--accent-mono)] text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-mono)] animate-pulse" />
            {current.latency} latency
          </span>
        </div>
      </div>

      {/* Console Tab Selector */}
      <div className="flex border-b border-slate-200/60 bg-[color:var(--bg-page)/0.6] overflow-x-auto scrollbar-none" role="tablist" aria-label="NorAI Micro-Tool Teaser Console">
        {TEASER_TABS.map((tab, idx) => {
          const TabIcon = tab.icon;
          const isActive = activeTab === idx;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(idx)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') {
                  e.preventDefault();
                  setActiveTab((idx + 1) % TEASER_TABS.length);
                } else if (e.key === 'ArrowLeft') {
                  e.preventDefault();
                  setActiveTab((idx - 1 + TEASER_TABS.length) % TEASER_TABS.length);
                }
              }}
                className={cn(
                'flex items-center gap-2 px-4 py-2.5 text-xs font-mono transition-all border-b-2 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-500)]',
                isActive
                  ? 'border-[color:var(--accent-500)/0.9] text-[var(--accent-mono)] bg-[var(--bg-elevated)]'
                  : 'border-transparent text-primary-700 hover:text-primary-700 hover:bg-[var(--bg-elevated)]'
              )}
            >
              <TabIcon className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Console Live Teaser Payload View */}
      <div className="p-5 space-y-4">
        {/* Tool Header & Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[color:var(--accent-500)/0.1] border border-[color:var(--accent-500)/0.2] text-[var(--accent-500)]">
              <IconComp className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-primary-800 font-display">
              {current.name}
            </span>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[var(--bg-page)] text-[var(--accent-mono)] border border-slate-200/60">
            {current.badge}
          </span>
        </div>

        {/* Input & Output Split Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
          {/* Input Block */}
          <div className="p-3 rounded-lg bg-[var(--bg-page)] border border-slate-200/60 space-y-1.5">
            <div className="text-[10px] text-primary-700 uppercase tracking-wider font-bold flex items-center justify-between">
              <span>Input Stream</span>
              <span className="text-primary-700">RAW_DATA</span>
            </div>
            <pre className="text-primary-800 whitespace-pre-wrap leading-relaxed text-[11px] font-mono">
              {current.inputSnippet}
            </pre>
          </div>

          {/* Output Block */}
          <div className="p-3 rounded-lg bg-[var(--bg-page)] border border-[color:var(--accent-500)/0.3] space-y-1.5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[color:var(--accent-500)/0.05] rounded-full blur-xl pointer-events-none" />
            <div className="text-[10px] text-[var(--accent-500)] uppercase tracking-wider font-bold flex items-center justify-between">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[var(--accent-mono)]" /> AI Output Payload
              </span>
              <span className="text-[var(--accent-mono)]">EXTRACTED</span>
            </div>
            <pre className="text-[var(--accent-mono)] whitespace-pre-wrap leading-relaxed text-[11px] font-mono">
              {current.outputSummary}
            </pre>
          </div>
        </div>

        {/* Teaser Footer Note */}
        <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-primary-700">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-500)]" /> Instant Rest API payload simulation
          </span>
          <span className="text-primary-700 hover:text-[var(--accent-500)] transition-colors cursor-pointer flex items-center gap-1">
            See product docs <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};

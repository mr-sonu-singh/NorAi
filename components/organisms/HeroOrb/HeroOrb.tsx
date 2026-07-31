'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkles, Cpu, Zap, Bot, ShieldCheck } from 'lucide-react';

export interface HeroOrbProps {
  className?: string;
}

export const HeroOrb: React.FC<HeroOrbProps> = ({ className }) => {
  return (
    <div className={cn('relative flex items-center justify-center w-full max-w-2xl mx-auto aspect-square select-none pointer-events-none', className)}>
      {/* Outer Ambient Glowing Backdrop */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-indigo-600/30 blur-3xl animate-orb-pulse" />
      <div className="absolute inset-10 rounded-full bg-blue-500/10 blur-2xl animate-ping opacity-20" />

      {/* SVG Neural Orbital Mesh Canvas */}
      <svg
        className="w-full h-full relative z-10 overflow-visible"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <radialGradient id="orbCoreGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#2563eb" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
          </linearGradient>

          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Concentric Rotating Rings */}
        <circle cx="250" cy="250" r="210" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 8" strokeOpacity="0.3" className="animate-spin" style={{ animationDuration: '40s' }} />
        <circle cx="250" cy="250" r="170" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="12 12" strokeOpacity="0.4" className="animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
        <circle cx="250" cy="250" r="120" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5" />

        {/* Core Glowing Orb Sphere */}
        <circle cx="250" cy="250" r="90" fill="url(#orbCoreGradient)" filter="url(#glowFilter)" />
        <circle cx="250" cy="250" r="45" fill="#1e40af" fillOpacity="0.6" stroke="#60a5fa" strokeWidth="2" />

        {/* Neural Vector Connections */}
        <g className="animate-line-glow">
          <line x1="250" y1="250" x2="110" y2="140" stroke="url(#lineGrad1)" strokeWidth="2" />
          <line x1="250" y1="250" x2="390" y2="130" stroke="url(#lineGrad2)" strokeWidth="2" />
          <line x1="250" y1="250" x2="380" y2="370" stroke="url(#lineGrad1)" strokeWidth="2" />
          <line x1="250" y1="250" x2="120" y2="360" stroke="url(#lineGrad2)" strokeWidth="2" />
          <line x1="110" y1="140" x2="250" y2="80" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="390" y1="130" x2="250" y2="80" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="380" y1="370" x2="250" y2="420" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="120" y1="360" x2="250" y2="420" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="4 4" />
        </g>

        {/* Node Points */}
        <circle cx="250" cy="80" r="8" fill="#38bdf8" className="animate-pulse" filter="url(#glowFilter)" />
        <circle cx="110" cy="140" r="7" fill="#60a5fa" className="animate-pulse" />
        <circle cx="390" cy="130" r="9" fill="#818cf8" className="animate-pulse" />
        <circle cx="380" cy="370" r="7" fill="#38bdf8" className="animate-pulse" />
        <circle cx="120" cy="360" r="8" fill="#60a5fa" className="animate-pulse" />
        <circle cx="250" cy="420" r="7" fill="#818cf8" className="animate-pulse" />
      </svg>

      {/* Center AI Core Icon */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="p-4 rounded-full bg-blue-950/80 border border-blue-400/40 text-blue-400 shadow-lg shadow-blue-500/20 backdrop-blur-md">
          <Bot className="w-10 h-10 animate-pulse" />
        </div>
      </div>

      {/* Floating Interactive Badge Micro-Cards */}
      <div className="absolute top-[12%] left-[2%] z-30 flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-slate-900/80 backdrop-blur-md text-xs font-medium text-blue-300 shadow-lg animate-float-particle">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>AI Resume Parser</span>
      </div>

      <div className="absolute top-[10%] right-[2%] z-30 flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-slate-900/80 backdrop-blur-md text-xs font-medium text-sky-300 shadow-lg animate-float-particle" style={{ animationDelay: '2s' }}>
        <Zap className="w-3.5 h-3.5 text-blue-400" />
        <span>Fast Note-Taker</span>
      </div>

      <div className="absolute bottom-[12%] right-[5%] z-30 flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-slate-900/80 backdrop-blur-md text-xs font-medium text-indigo-300 shadow-lg animate-float-particle" style={{ animationDelay: '4s' }}>
        <Cpu className="w-3.5 h-3.5 text-indigo-400" />
        <span>Chat Digest Bot</span>
      </div>

      <div className="absolute bottom-[10%] left-[5%] z-30 flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-slate-900/80 backdrop-blur-md text-xs font-medium text-teal-300 shadow-lg animate-float-particle" style={{ animationDelay: '6s' }}>
        <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
        <span>Smart News Engine</span>
      </div>
    </div>
  );
};

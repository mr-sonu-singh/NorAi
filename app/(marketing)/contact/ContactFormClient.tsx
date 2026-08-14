'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import {
  MessageSquare,
  Send,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

const SERVICE_OPTIONS = [
  { value: 'AI Resume Shortlister', label: '[MICRO-SAAS] AI Resume Shortlister' },
  { value: 'Course Note-Taker', label: '[MICRO-SAAS] Course Note-Taker' },
  { value: 'Community Chat Digest', label: '[MICRO-SAAS] Community Chat Digest' },
  { value: 'Smart Smart Government Job News News', label: '[MICRO-SAAS] Smart Government Job News' },
  { value: 'Custom AI Chatbots & Agents', label: '[ENTERPRISE] Custom AI Chatbots & Agents' },
  { value: 'AI Web Applications', label: '[ENTERPRISE] AI Web Applications' },
  { value: 'AI Video & Product Ads', label: '[ENTERPRISE] AI Video & Product Ads' },
  { value: 'Business Automation Pipelines', label: '[ENTERPRISE] Business Automation Pipelines' },
  { value: 'General Technical Consultation', label: '[GENERAL] General Technical Consultation' },
];

export function ContactFormClient() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI Resume Shortlister',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const paramLower = serviceParam.toLowerCase();
      const matched = SERVICE_OPTIONS.find((opt) =>
        opt.value.toLowerCase().includes(paramLower) || opt.label.toLowerCase().includes(paramLower)
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, service: matched.value }));
      }
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setError('');
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        p-8 md:p-10
        space-y-6

        bg-white/45
        backdrop-blur-xl

        border
        border-blue-400/15

        shadow-[0_10px_40px_rgba(59,130,246,0.06)]

        hover:border-blue-400/25
        hover:shadow-[0_20px_55px_rgba(59,130,246,0.10)]

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
          opacity-60 group-hover:opacity-100
          transition-opacity duration-500 pointer-events-none
        "
      />
      <div
        aria-hidden="true"
        className="
          absolute top-0 left-0 right-0 h-px
          bg-gradient-to-r from-transparent via-blue-400/50 to-transparent
        "
      />

      {/* Top Header Bar */}
      <div className="relative z-10 space-y-2 border-b border-blue-400/10 pb-6">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-primary-700 font-bold tracking-wider flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[var(--accent-500)]" aria-hidden="true" /> TECHNICAL_SCOPING_FORM
          </span>
        </div>
        <Heading as="h2" variant="heading-lg" className="font-display font-bold text-primary-800 pt-2 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[var(--accent-500)]" aria-hidden="true" /> Send Us a Message
        </Heading>
      </div>

      {submitted ? (
        <div className="relative z-10 p-8 rounded-2xl bg-blue-500/10 border border-blue-400/25 text-center space-y-4 font-mono">
          <div className="w-12 h-12 rounded-full bg-blue-500/15 text-blue-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
          </div>
          <span className="inline-block text-xs font-bold text-[var(--accent-mono)] bg-white/60 backdrop-blur-sm px-3 py-1 rounded-lg border border-blue-400/15 uppercase tracking-wider">
            [STATUS: RECEIVED] • ENGINEER ASSIGNED
          </span>
          <Heading as="h3" variant="heading-md" className="font-display font-bold text-primary-800">
            Message Successfully Dispatched!
          </Heading>
          <Text variant="body-sm" className="text-primary-700 max-w-md mx-auto font-sans leading-relaxed">
            Thank you for reaching out to NorAi Technologies. One of our solution engineers will contact you at <strong className="text-primary-800">{formData.email}</strong> shortly.
          </Text>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
          <p className="text-xs font-mono text-primary-700">
            Fields marked with <span className="text-[var(--accent-500)] font-bold">*</span> are required.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-xs font-mono font-bold text-primary-700 uppercase tracking-wider block">
                Full Name <span className="text-[var(--accent-500)]" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                aria-required="true"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-white/60 backdrop-blur-sm
                  border border-blue-400/15
                  text-primary-800 placeholder-slate-500
                  focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/40
                  text-sm font-sans
                  transition-all
                "
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-xs font-mono font-bold text-primary-700 uppercase tracking-wider block">
                Work Email <span className="text-[var(--accent-500)]" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                aria-required="true"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-white/60 backdrop-blur-sm
                  border border-blue-400/15
                  text-primary-800 placeholder-slate-500
                  focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/40
                  text-sm font-sans
                  transition-all
                "
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="contact-company" className="text-xs font-mono font-bold text-primary-700 uppercase tracking-wider block">
                Company / Organization
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-white/60 backdrop-blur-sm
                  border border-blue-400/15
                  text-primary-800 placeholder-slate-500
                  focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/40
                  text-sm font-sans
                  transition-all
                "
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-service" className="text-xs font-mono font-bold text-primary-700 uppercase tracking-wider block">
                Service Interest <span className="text-[var(--accent-500)]" aria-hidden="true">*</span>
              </label>
              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-white/60 backdrop-blur-sm
                  border border-blue-400/15
                  text-primary-800
                  focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/40
                  text-sm font-mono cursor-pointer
                  transition-all
                "
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-white text-primary-800">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-message" className="text-xs font-mono font-bold text-primary-700 uppercase tracking-wider block">
              Project / Scoping Details <span className="text-[var(--accent-500)]" aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              aria-required="true"
              rows={4}
              placeholder="Tell us about your data bottleneck, request volume, or AI automation goals..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="
                w-full px-4 py-3 rounded-xl
                bg-white/60 backdrop-blur-sm
                border border-blue-400/15
                text-primary-800 placeholder-slate-500
                focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/40
                text-sm font-sans
                transition-all
              "
            />
          </div>

          {error && (
            <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-3">
              <p className="text-sm text-red-500">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="
              w-full
              bg-gradient-to-r from-blue-600 to-indigo-600
              hover:from-blue-700 hover:to-violet-600
              text-white font-semibold py-3.5 rounded-xl
              shadow-lg shadow-blue-500/20
              hover:shadow-blue-500/30
              flex items-center justify-center gap-2
              transition-all duration-300 cursor-pointer
            "
          >
            Submit <Send className="w-4 h-4" aria-hidden="true" />
          </Button>
        </form>
      )}
    </div>
  );
}
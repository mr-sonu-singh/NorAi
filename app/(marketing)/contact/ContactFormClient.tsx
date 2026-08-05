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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-8 md:p-10 bg-[#131924] border border-white/10 rounded-xl space-y-6 shadow-xl">
      {/* Top Header Bar */}
      <div className="space-y-2 border-b border-white/10 pb-6">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-400 font-bold tracking-wider flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#0CCAB1]" aria-hidden="true" /> TECHNICAL_SCOPING_FORM
          </span>
        </div>
        <Heading as="h2" variant="heading-lg" className="font-display font-bold text-white pt-2 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#0CCAB1]" aria-hidden="true" /> Send Us a Message
        </Heading>
      </div>

      {submitted ? (
        <div className="p-8 rounded-xl bg-[#0CCAB1]/10 border border-[#0CCAB1]/30 text-center space-y-4 font-mono">
          <div className="w-12 h-12 rounded-full bg-[#0CCAB1]/20 text-[#45F7D6] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
          </div>
          <span className="inline-block text-xs font-bold text-[#45F7D6] bg-[#0B0F17] px-3 py-1 rounded border border-white/10 uppercase tracking-wider">
            [STATUS: RECEIVED] • ENGINEER ASSIGNED
          </span>
          <Heading as="h3" variant="heading-md" className="font-display font-bold text-white">
            Message Successfully Dispatched!
          </Heading>
          <Text variant="body-sm" className="text-slate-300 max-w-md mx-auto font-sans leading-relaxed">
            Thank you for reaching out to NorAI Technologies. One of our solution engineers will contact you at <strong className="text-white">{formData.email}</strong> shortly.
          </Text>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <p className="text-xs font-mono text-slate-400">
            Fields marked with <span className="text-[#0CCAB1] font-bold">*</span> are required.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
                Full Name <span className="text-[#0CCAB1]" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                aria-required="true"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#0B0F17] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0CCAB1] focus:border-[#0CCAB1] text-sm font-sans"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
                Work Email <span className="text-[#0CCAB1]" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                aria-required="true"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#0B0F17] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0CCAB1] focus:border-[#0CCAB1] text-sm font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="contact-company" className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
                Company / Organization
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#0B0F17] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0CCAB1] focus:border-[#0CCAB1] text-sm font-sans"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-service" className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
                Service Interest <span className="text-[#0CCAB1]" aria-hidden="true">*</span>
              </label>
              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#0B0F17] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#0CCAB1] focus:border-[#0CCAB1] text-sm font-mono cursor-pointer"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-[#0B0F17] text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-message" className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
              Project / Scoping Details <span className="text-[#0CCAB1]" aria-hidden="true">*</span>
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
              className="w-full px-4 py-3 rounded-lg bg-[#0B0F17] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0CCAB1] focus:border-[#0CCAB1] text-sm font-sans"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full bg-[#0CCAB1] hover:bg-[#45F7D6] text-[#0B0F17] font-semibold py-3.5 rounded-lg shadow-lg shadow-[#0CCAB1]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            Submit<Send className="w-4 h-4" aria-hidden="true" />
          </Button>
        </form>
      )}
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { TiltCard } from '@/components/molecules/TiltCard';
import {
  MessageSquare,
  Send,
  CheckCircle2,
} from 'lucide-react';

export function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI Resume Shortlister',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <TiltCard className="p-8 md:p-10 bg-slate-900/80 border border-white/10 space-y-6">
      <div className="space-y-2 border-b border-white/10 pb-6">
        <Heading as="h2" variant="heading-lg" className="font-bold text-white flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-blue-400" /> Send Us a Message
        </Heading>
        <Text variant="body-sm" className="text-slate-400">
          Fill out the form below and an engineer will reach out within 2 hours.
        </Text>
      </div>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <Heading as="h3" variant="heading-md" className="font-bold text-white">
            Message Received!
          </Heading>
          <Text variant="body-sm" className="text-slate-300 max-w-md mx-auto">
            Thank you for reaching out to NorAI Technologies. One of our solution engineers will contact you at <strong className="text-white">{formData.email}</strong> shortly.
          </Text>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Dhruw Singh"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Company / Organization
              </label>
              <input
                type="text"
                placeholder="TechCorp Global"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Service Interest *
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="AI Resume Shortlister">AI Resume Shortlister</option>
                <option value="Course Note-Taker">Course Note-Taker</option>
                <option value="Community Chat Digest">Community Chat Digest</option>
                <option value="Smart Dainik News">Smart Dainik News</option>
                <option value="Custom AI Chatbots & Agents">Custom AI Chatbots & Agents</option>
                <option value="AI Web Application Development">AI Web Application Development</option>
                <option value="Business Automation Pipeline">Business Automation Pipeline</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Project / Scoping Details *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell us about your data bottleneck, request volume, or AI automation goals..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
          >
            Submit Inquiries <Send className="w-4 h-4" />
          </Button>
        </form>
      )}
    </TiltCard>
  );
}

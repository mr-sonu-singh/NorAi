import React from 'react';
import { BlogCard } from './BlogCard';

const meta = {
  title: 'Organisms/Cards/BlogCard',
  component: BlogCard,
};

export default meta;

export const Default = () => (
  <BlogCard
    title="Deterministic AI Inference Architecture"
    excerpt="Detailed overview of cryptographic zero-knowledge proof generation."
    href="/blog/deterministic-ai-inference"
    image="/images/blog-1.jpg"
    meta="Oct 24, 2025 · Dr. Elena Rostova"
    category="Architecture"
  />
);

export const Compact = () => (
  <BlogCard
    title="Sub-10ms Inference Latency at Scale"
    excerpt="How NorAI optimizes hardware pipelines for high-throughput enterprise workloads."
    href="/blog/sub-10ms-inference-latency"
    image="/images/blog-2.jpg"
    meta="Nov 12, 2025 · Marcus Vance"
    category="Performance"
    variant="Compact"
  />
);

export const Loading = () => (
  <BlogCard
    title="Pending Post"
    excerpt="Excerpt"
    href="/blog/pending"
    image="/images/blog-1.jpg"
    meta="Meta"
    pending
  />
);

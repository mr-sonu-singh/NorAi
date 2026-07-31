export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  meta: string;
  readTime: string;
  sections: Array<{
    heading?: string;
    paragraphs: string[];
    codeSnippet?: {
      language: string;
      code: string;
    };
  }>;
}

export const BLOG_POSTS: Record<string, BlogPostData> = {
  'ai-agent-orchestration-architecture': {
    slug: 'ai-agent-orchestration-architecture',
    title: 'Architecting Deterministic AI Agent Workflows for Scale',
    excerpt: 'How NorAI orchestrates multi-agent workflows with sub-second response guarantees, structured JSON schemas, and fault-tolerant fallbacks.',
    author: 'Gourav Singh',
    date: 'January 15, 2026',
    category: 'AI Orchestration',
    image: '/images/blog/neural-compute.jpg',
    meta: 'Gourav Singh · Jan 15, 2026',
    readTime: '5 min read',
    sections: [
      {
        heading: 'The Challenge of Stochastic LLM Outputs',
        paragraphs: [
          'Enterprise automated pipelines require predictable, structured outputs. Standard unstructured text generation leads to parsing errors, hallucination edge cases, and unexpected system downtime.',
          'At NorAI, we enforce strict JSON schema validation and deterministic prompt DAGs to ensure AI agents return clean, type-safe payloads every single time.',
        ],
      },
      {
        heading: 'Deterministic Agent State Machine',
        paragraphs: [
          'By modeling multi-agent interactions as state transition machines, every execution step carries clear pre-conditions, retry logic, and fallback fallbacks.',
        ],
        codeSnippet: {
          language: 'typescript',
          code: `import { AgentOrchestrator, SchemaValidator } from '@norai/agent-core';

const orchestrator = new AgentOrchestrator({
  timeoutMs: 800,
  maxRetries: 2,
});

const result = await orchestrator.executeTask({
  task: 'SHORTLIST_RESUME',
  payload: resumeText,
  schema: ResumeScoringSchema,
});
console.log('Score:', result.qualificationScore);`,
        },
      },
    ],
  },
  'spatial-computing-ar-vr-ai-pipelines': {
    slug: 'spatial-computing-ar-vr-ai-pipelines',
    title: 'Bridging Spatial Computing & Neural Model Inference',
    excerpt: 'Insights from Japan VR/AR Summit: How spatial 3D rendering and real-time vision AI unlock next-generation immersive applications.',
    author: 'Sonu Singh',
    date: 'December 28, 2025',
    category: 'Spatial Computing',
    image: '/images/blog/stark-compiler.jpg',
    meta: 'Sonu Singh · Dec 28, 2025',
    readTime: '6 min read',
    sections: [
      {
        heading: 'Spatial Telemetry Meets Real-Time Computer Vision',
        paragraphs: [
          'High-precision spatial tracking requires processing 60+ camera frames per second with sub-10ms neural mesh alignment.',
          'We leverage WebGPU hardware acceleration and quantized vision models to deliver instantaneous spatial segmentation in browser viewports.',
        ],
      },
    ],
  },
  'military-discipline-in-software-ops': {
    slug: 'military-discipline-in-software-ops',
    title: 'Applying 30 Years of Military Discipline to Modern DevSecOps',
    excerpt: 'Lessons from 30 years in the Indian Army Corps of Signals on zero-trust security, operational redundancy, and fail-safe system design.',
    author: 'Dhruw Singh',
    date: 'November 12, 2025',
    category: 'Operations & Leadership',
    image: '/images/blog/deterministic-ai.jpg',
    meta: 'Dhruw Singh · Nov 12, 2025',
    readTime: '4 min read',
    sections: [
      {
        heading: 'Operational Redundancy & Signal Reliability',
        paragraphs: [
          'In military communications, packet loss or system failure is never an option. The exact same principle applies to mission-critical business automation.',
          'We enforce 3-tier fallback systems, automated database heartbeats, and strict security compliance across all NorAI production endpoints.',
        ],
      },
    ],
  },
};

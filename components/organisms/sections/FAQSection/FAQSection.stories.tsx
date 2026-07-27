import { FAQSection } from './FAQSection';

const meta = {
  title: 'Organisms/Sections/FAQSection',
  component: FAQSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const SingleOpen = {
  args: {
    heading: 'Frequently Asked Questions',
    expandMode: 'single',
    items: [
      {
        question: 'How does cryptographic model verification work?',
        answer:
          'NorAI attaches a zero-knowledge execution trace to every inference response, allowing clients to independently verify computation integrity without revealing weights or private data.',
      },
      {
        question: 'What infrastructure is required to deploy NorAI?',
        answer:
          'NorAI deploys via lightweight WebAssembly or Container sidecars compatible with Kubernetes, Docker, and bare-metal environments.',
      },
      {
        question: 'What are the latency guarantees?',
        answer:
          'Sub-10ms response times are guaranteed for standard inference pipelines across our globally distributed edge locations.',
      },
    ],
  },
};

export const MultipleOpen = {
  args: {
    heading: 'Developer FAQs (Multiple Open Allowed)',
    expandMode: 'multiple',
    items: [
      {
        question: 'Can I self-host the verification nodes?',
        answer:
          'Yes, enterprise subscribers can run dedicated verification nodes within their own VPC or sovereign cloud.',
      },
      {
        question: 'How are compliance audits performed?',
        answer:
          'Audit logs are continuously committed to an immutable ledger with automated SOC 2 Type II and HIPAA reporting.',
      },
    ],
  },
};

export const Empty = {
  args: {
    heading: 'Frequently Asked Questions',
    items: [],
  },
};

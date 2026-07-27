import { TestimonialsSection } from './TestimonialsSection';

const meta = {
  title: 'Organisms/Sections/TestimonialsSection',
  component: TestimonialsSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const GridVariant = {
  args: {
    heading: 'Trusted by Engineering Leaders',
    testimonials: [
      {
        quote: 'NorAI transformed our auditing pipeline by delivering cryptographic verification without performance overhead.',
        authorName: 'Sarah Jenkins',
        authorRole: 'VP of Engineering',
      },
      {
        quote: 'Sub-10ms response times backed by strict SLA guarantees. The compute scaling is seamless.',
        authorName: 'David Chen',
        authorRole: 'Chief Architect',
      },
      {
        quote: 'The zero-knowledge privacy features allowed us to deploy AI models in highly regulated jurisdictions.',
        authorName: 'Elena Rostova',
        authorRole: 'Head of Compliance',
      },
    ],
  },
};

export const SingleVariant = {
  args: {
    heading: 'Customer Spotlight',
    testimonials: [
      {
        quote: 'NorAI has enabled us to achieve complete model transparency across our global infrastructure.',
        authorName: 'Marcus Vance',
        authorRole: 'CTO',
      },
    ],
  },
};

export const Empty = {
  args: {
    heading: 'What Leaders Say',
    testimonials: [],
  },
};

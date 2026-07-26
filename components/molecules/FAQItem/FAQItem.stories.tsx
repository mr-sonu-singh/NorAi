import { FAQItem } from './FAQItem';

const meta = {
  title: 'Molecules/FAQItem',
  component: FAQItem,
};

export default meta;

export const Default = {
  args: {
    question: 'How do I integrate NorAI with existing data pipelines?',
    answer: 'NorAI provides standard REST and gRPC connectors that integrate directly into existing Kafka, PostgreSQL, or Snowflake pipelines.',
  },
};

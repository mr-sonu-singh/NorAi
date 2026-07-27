export interface FAQItemData {
  question: string;
  answer: string;
}

export type FAQExpandMode = 'single' | 'multiple';

export interface FAQSectionProps {
  heading: string;
  items: FAQItemData[];
  expandMode?: FAQExpandMode;
}

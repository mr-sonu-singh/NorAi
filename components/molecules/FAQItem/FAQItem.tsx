import React from 'react';
import { Accordion } from '../Accordion';
import { FAQItemProps } from './FAQItem.types';

export function FAQItem({
  question,
  answer,
  id = 'faq-item',
  defaultOpen = false,
  className,
  ...props
}: FAQItemProps) {
  const items = [
    {
      id,
      title: question,
      content: typeof answer === 'string' ? <p>{answer}</p> : answer,
    },
  ];

  return (
    <Accordion
      items={items}
      type="single"
      defaultValue={defaultOpen ? id : undefined}
      className={className}
      data-testid="faq-item-molecule"
      {...props}
    />
  );
}

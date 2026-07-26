'use client';

import React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { Icon } from '@/components/atoms/Icon';
import { cn } from '@/lib/utils';
import { AccordionProps } from './Accordion.types';

export function Accordion({
  items,
  type = 'single',
  defaultValue,
  className,
  ...props
}: AccordionProps) {
  if (!items || items.length === 0) return null;

  return (
    <RadixAccordion.Root
      {...(type === 'single'
        ? { type: 'single', collapsible: true, defaultValue: defaultValue as string | undefined }
        : { type: 'multiple', defaultValue: defaultValue as string[] | undefined })}
      className={cn('w-full divide-y divide-primary-200 border-y border-primary-200', className)}
      data-testid="accordion-molecule"
      {...props}
    >
      {items.map((item) => (
        <RadixAccordion.Item
          key={item.id}
          value={item.id}
          disabled={item.disabled}
          className="group py-3"
        >
          <RadixAccordion.Header className="flex">
            <RadixAccordion.Trigger
              className={cn(
                'flex flex-1 items-center justify-between py-2 text-left text-body-lg font-medium text-primary transition-colors duration-fast hover:text-accent',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm',
                item.disabled && 'opacity-disabled cursor-not-allowed text-primary-300',
              )}
            >
              <span>{item.title}</span>
              <Icon
                name="chevron-down"
                size="sm"
                className="shrink-0 text-primary-400 transition-transform duration-fast group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>

          <RadixAccordion.Content className="overflow-hidden text-body-md text-primary-400 pt-2 pb-3 transition-all duration-fast">
            {item.content}
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
}

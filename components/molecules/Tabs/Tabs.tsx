'use client';

import React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';
import { TabsProps } from './Tabs.types';

export function Tabs({
  tabs,
  defaultTab,
  value,
  onValueChange,
  orientation = 'horizontal',
  className,
  ...props
}: TabsProps) {
  if (!tabs || tabs.length === 0) return null;

  const initialTab = defaultTab || tabs[0]?.id;

  return (
    <RadixTabs.Root
      defaultValue={initialTab}
      value={value}
      onValueChange={onValueChange}
      orientation={orientation}
      className={cn(
        'w-full',
        orientation === 'vertical' ? 'flex flex-col sm:flex-row gap-6' : 'flex flex-col gap-4',
        className,
      )}
      data-testid="tabs-molecule"
      {...props}
    >
      <RadixTabs.List
        className={cn(
          'inline-flex border-b border-primary-200 gap-2 overflow-x-auto scrollbar-none',
          orientation === 'vertical' && 'border-b-0 border-r border-primary-200 flex-col shrink-0 min-w-[180px]',
        )}
        aria-label="Content Tabs"
      >
        {tabs.map((tab) => (
          <RadixTabs.Trigger
            key={tab.id}
            value={tab.id}
            disabled={tab.disabled}
            className={cn(
              'px-4 py-2.5 text-body-md font-medium text-primary hover:text-accent transition-colors duration-fast relative whitespace-nowrap',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm',
              'data-[state=active]:text-accent data-[state=active]:font-semibold',
              'data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-0.5 data-[state=active]:after:bg-accent',
              orientation === 'vertical' && 'data-[state=active]:after:h-full data-[state=active]:after:w-0.5 data-[state=active]:after:right-0 data-[state=active]:after:left-auto data-[state=active]:after:top-0',
              tab.disabled && 'opacity-disabled cursor-not-allowed text-primary-300',
            )}
          >
            {tab.label}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>

      {tabs.map((tab) => (
        <RadixTabs.Content
          key={tab.id}
          value={tab.id}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm py-2"
        >
          {tab.content}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
}

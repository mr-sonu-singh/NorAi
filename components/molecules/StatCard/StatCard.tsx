import React from 'react';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Icon } from '@/components/atoms/Icon';
import { Stack } from '@/components/foundation/Stack';
import { cn } from '@/lib/utils';
import { StatCardProps } from './StatCard.types';

export function StatCard({
  value,
  label,
  icon,
  emphasis = false,
  className,
  ...props
}: StatCardProps) {
  return (
    <Stack
      direction="col"
      gap="2"
      align="start"
      className={cn(
        'p-6 bg-elevated border border-primary-200 rounded-lg w-full',
        emphasis && 'border-accent bg-accent/5',
        className,
      )}
      data-testid="stat-card-molecule"
      {...props}
    >
      <div className="flex items-center justify-between gap-3 w-full">
        <Heading
          as="h3"
          variant="display-md"
          className={cn('font-bold tracking-tight', emphasis ? 'text-accent' : 'text-primary')}
        >
          {value}
        </Heading>
        {icon && <Icon name={icon} size="md" className="text-primary-400 shrink-0" aria-hidden="true" />}
      </div>

      <Text as="p" className="text-body-sm text-primary-400 font-medium">
        {label}
      </Text>
    </Stack>
  );
}

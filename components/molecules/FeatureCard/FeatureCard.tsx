import React from 'react';
import { Icon } from '@/components/atoms/Icon';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Stack } from '@/components/foundation/Stack';
import { cn } from '@/lib/utils';
import { FeatureCardProps } from './FeatureCard.types';

export function FeatureCardBody({
  icon,
  title,
  description,
  cta,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Stack
      direction="col"
      gap="4"
      align="start"
      className={cn('p-6 bg-elevated border border-primary-200 rounded-lg w-full', className)}
      data-testid="feature-card-molecule"
      {...props}
    >
      {icon && (
        <div className="w-10 h-10 rounded-default bg-accent/10 flex items-center justify-center text-accent shrink-0">
          <Icon name={icon} size="md" aria-hidden="true" />
        </div>
      )}

      <div className="space-y-2">
        <Heading as="h3" variant="heading-sm" className="font-semibold text-primary">
          {title}
        </Heading>
        <Text as="p" className="text-body-sm text-primary-400 leading-relaxed">
          {description}
        </Text>
      </div>

      {cta && <div className="mt-2">{cta}</div>}
    </Stack>
  );
}

export function FeatureCard(props: FeatureCardProps) {
  return <FeatureCardBody {...props} />;
}

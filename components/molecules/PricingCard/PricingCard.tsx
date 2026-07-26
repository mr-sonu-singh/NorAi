import React from 'react';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Badge } from '@/components/atoms/Badge';
import { Divider } from '@/components/atoms/Divider';
import { Icon } from '@/components/atoms/Icon';
import { Stack } from '@/components/foundation/Stack';
import { cn } from '@/lib/utils';
import { PricingCardProps } from './PricingCard.types';

export function PricingCardBody({
  tierName,
  price,
  interval,
  description,
  features,
  highlighted = false,
  cta,
  badgeText,
  className,
  ...props
}: PricingCardProps) {
  return (
    <Stack
      direction="col"
      gap="6"
      className={cn(
        'p-6 bg-elevated border rounded-lg w-full relative',
        highlighted ? 'border-accent shadow-accent' : 'border-primary-200',
        className,
      )}
      data-testid="pricing-card-molecule"
      {...props}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <Heading as="h3" variant="heading-sm" className="font-semibold text-primary">
            {tierName}
          </Heading>
          {(badgeText || highlighted) && (
            <Badge variant={highlighted ? 'accent' : 'neutral'} size="sm">
              {badgeText || 'Popular'}
            </Badge>
          )}
        </div>

        {description && (
          <Text as="p" className="text-body-xs text-primary-400">
            {description}
          </Text>
        )}

        <div className="flex items-baseline gap-1 pt-1">
          <Heading as="h2" variant="display-md" className="font-bold text-primary">
            {price}
          </Heading>
          {interval && (
            <Text as="span" className="text-body-xs text-primary-400">
              /{interval}
            </Text>
          )}
        </div>
      </div>

      <Divider />

      <ul className="space-y-2.5 flex-1" aria-label={`Features included in ${tierName} plan`}>
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <Icon name="check" size="sm" className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
            <Text as="span" className="text-body-sm text-primary">
              {feature}
            </Text>
          </li>
        ))}
      </ul>

      {cta && <div className="pt-2">{cta}</div>}
    </Stack>
  );
}

export function PricingCard(props: PricingCardProps) {
  return <PricingCardBody {...props} />;
}

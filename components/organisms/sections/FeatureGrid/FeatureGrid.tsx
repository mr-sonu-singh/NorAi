'use client';

import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Grid } from '@/components/foundation/Grid';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { FeatureCard } from '@/components/molecules/FeatureCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { FeatureGridProps, FeatureGridVariant } from './FeatureGrid.types';

export function FeatureGrid({
  heading,
  features,
  intro,
  variant,
  className,
}: FeatureGridProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldAnimate = !prefersReducedMotion;

  // Determine active variant based on explicit prop or features length
  const activeVariant: FeatureGridVariant =
    variant || (features.length <= 4 ? 'twoUp' : 'threeUp');

  const gridColsMap: Record<FeatureGridVariant, 2 | 3> = {
    twoUp: 2,
    threeUp: 3,
  };

  return (
    <div ref={ref}>
      <Section
        variant="default"
        className={cn(
          'relative py-16 lg:py-24 transition-all duration-normal',
          shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
          shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
          className,
        )}
        data-testid="feature-grid-organism"
        data-variant={activeVariant}
        data-revealed={isRevealed}
      >
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <Heading as="h2" variant="heading-xl" className="text-primary-900 font-bold tracking-tight">
              {heading}
            </Heading>
            {intro && (
              <Text variant="body-lg" className="text-primary-600">
                {intro}
              </Text>
            )}
          </div>

          <Grid cols={gridColsMap[activeVariant]} gap="6">
            {features.map((feature, index) => (
              <FeatureCard key={`${feature.title}-${index}`} {...feature} />
            ))}
          </Grid>
        </Container>
      </Section>
    </div>
  );
}

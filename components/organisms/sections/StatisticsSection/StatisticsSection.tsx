'use client';

import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Grid } from '@/components/foundation/Grid';
import { Heading } from '@/components/foundation/Heading';
import { StatCard } from '@/components/molecules/StatCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { StatisticsSectionProps, StatisticsSectionVariant } from './StatisticsSection.types';

export function StatisticsSection({
  stats,
  heading,
  variant,
  className,
}: StatisticsSectionProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldAnimate = !prefersReducedMotion;

  // Infer variant based on stats length if not explicitly provided
  const activeVariant: StatisticsSectionVariant =
    variant ||
    (stats.length === 2 ? 'twoUp' : stats.length === 4 ? 'fourUp' : 'threeUp');

  const gridColsMap: Record<StatisticsSectionVariant, 2 | 3 | 4> = {
    twoUp: 2,
    threeUp: 3,
    fourUp: 4,
  };

  return (
    <div ref={ref}>
      <Section
        variant="default"
        className={cn(
          'relative transition-all duration-normal',
          shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
          shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
          className,
        )}
        data-testid="statistics-section-organism"
        data-variant={activeVariant}
        data-revealed={isRevealed}
      >
        <Container size="default">
          {heading && (
            <div className="text-center max-w-2xl mx-auto mb-10">
              <Heading as="h2" variant="heading-xl" className="text-primary-900 font-bold">
                {heading}
              </Heading>
            </div>
          )}

          <Grid cols={gridColsMap[activeVariant]} gap="6">
            {stats.map((stat, index) => (
              <StatCard
                key={`${stat.label}-${index}`}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                emphasis={stat.emphasis}
              />
            ))}
          </Grid>
        </Container>
      </Section>
    </div>
  );
}

'use client';

import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Grid } from '@/components/foundation/Grid';
import { Heading } from '@/components/foundation/Heading';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { FeatureCard } from '@/components/molecules/FeatureCard';
import { EmptyState } from '@/components/molecules/EmptyState';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { UseCasesSectionProps } from './UseCasesSection.types';

export function UseCasesSection({
  heading,
  useCases = [],
  cta,
}: UseCasesSectionProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldAnimate = !prefersReducedMotion;
  const gridCols = useCases.length <= 4 ? 2 : 3;

  return (
    <div ref={ref}>
      <Section
        variant="default"
        className={cn(
          'relative py-16 lg:py-24 transition-all duration-normal',
          shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
          shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
        )}
        data-testid="use-cases-section-organism"
        data-revealed={isRevealed}
      >
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Heading as="h2" variant="heading-xl" className="text-primary-900 font-bold tracking-tight">
              {heading}
            </Heading>
          </div>

          {useCases.length === 0 ? (
            <EmptyState
              title="No Use Cases Available"
              description="Use cases for this section are currently being updated."
              icon="layers"
            />
          ) : (
            <Grid cols={gridCols} gap="6">
              {useCases.map((useCase, index) => (
                <FeatureCard
                  key={`${useCase.title}-${index}`}
                  title={useCase.title}
                  description={useCase.description}
                  icon={useCase.icon}
                />
              ))}
            </Grid>
          )}

          {cta && (
            <div className="mt-12 text-center">
              <Link href={cta.href} external={cta.external}>
                <Button variant="primary" size="lg" onClick={cta.onClick}>
                  {cta.label}
                </Button>
              </Link>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}

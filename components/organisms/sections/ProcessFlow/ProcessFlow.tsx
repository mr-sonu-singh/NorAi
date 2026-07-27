'use client';

import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Icon } from '@/components/atoms/Icon';
import { Badge } from '@/components/atoms/Badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { ProcessFlowProps } from './ProcessFlow.types';

export function ProcessFlow({
  heading,
  steps = [] as unknown as ProcessFlowProps['steps'],
  variant = 'Horizontal',
}: ProcessFlowProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldAnimate = !prefersReducedMotion;
  const isHorizontal = variant === 'Horizontal';
  const processSteps = steps.slice(0, 3);

  return (
    <div ref={ref}>
      <Section
        variant="default"
        className={cn(
          'relative py-16 lg:py-24 transition-all duration-normal',
          shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
          shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
        )}
        data-testid="process-flow-organism"
        data-variant={variant}
        data-revealed={isRevealed}
      >
        <Container size="default">
          {heading && (
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Heading as="h2" variant="heading-xl" className="text-primary-900 font-bold tracking-tight">
                {heading}
              </Heading>
            </div>
          )}

          <ol
            className={cn(
              'grid gap-8 items-stretch',
              isHorizontal ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 max-w-xl mx-auto',
            )}
          >
            {processSteps.map((step, index) => {
              const isLast = index === processSteps.length - 1;
              return (
                <li
                  key={`step-${index}`}
                  className="relative flex flex-col items-center text-center p-6 bg-elevated border border-primary-200 rounded-lg space-y-4"
                >
                  <div className="flex items-center justify-between w-full">
                    <Badge variant="accent" size="sm">
                      Step 0{index + 1}
                    </Badge>

                    <div className="p-3 bg-primary-50 rounded-full text-accent">
                      <Icon name={step.icon} size="md" aria-hidden="true" />
                    </div>
                  </div>

                  <Heading as="h3" variant="heading-sm" className="font-bold text-primary-900">
                    {step.title}
                  </Heading>

                  <Text variant="body-sm" className="text-primary-600">
                    {step.description}
                  </Text>

                  {/* Connector arrow icon for horizontal >= md layout */}
                  {!isLast && isHorizontal && (
                    <div
                      className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center bg-page border border-primary-200 rounded-full text-primary-400 shadow-sm"
                      aria-hidden="true"
                    >
                      <Icon name="arrow-right" size="sm" aria-hidden="true" />
                    </div>
                  )}

                  {/* Connector arrow icon for vertical layout */}
                  {!isLast && !isHorizontal && (
                    <div
                      className="flex md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 w-8 h-8 items-center justify-center bg-page border border-primary-200 rounded-full text-primary-400 shadow-sm"
                      aria-hidden="true"
                    >
                      <Icon name="arrow-down" size="sm" aria-hidden="true" />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>
    </div>
  );
}

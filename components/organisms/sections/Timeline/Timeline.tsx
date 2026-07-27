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
import { TimelineProps } from './Timeline.types';

export function Timeline({
  heading,
  items = [],
  variant = 'Vertical',
}: TimelineProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldAnimate = !prefersReducedMotion;
  const isAlternating = variant === 'Alternating';

  return (
    <div ref={ref}>
      <Section
        variant="default"
        className={cn(
          'relative py-16 lg:py-24 transition-all duration-normal',
          shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
          shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
        )}
        data-testid="timeline-organism"
        data-variant={variant}
        data-revealed={isRevealed}
      >
        <Container size="default">
          {heading && (
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Heading as="h2" variant="heading-xl" className="text-primary-900 font-bold tracking-tight">
                {heading}
              </Heading>
            </div>
          )}

          <div className="relative max-w-4xl mx-auto">
            {/* Center rail line */}
            <div
              className={cn(
                'absolute top-0 bottom-0 w-0.5 bg-primary-200',
                isAlternating ? 'left-4 md:left-1/2 md:-translate-x-1/2' : 'left-4',
              )}
              aria-hidden="true"
            />

            <ol className="relative space-y-12">
              {items.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <li
                    key={`timeline-item-${index}`}
                    className={cn(
                      'relative flex items-start gap-6',
                      isAlternating
                        ? isEven
                          ? 'md:flex-row-reverse md:text-right'
                          : 'md:flex-row'
                        : 'flex-row',
                    )}
                  >
                    {/* Decorative marker icon/dot */}
                    <div
                      className={cn(
                        'relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white shrink-0 shadow-sm',
                        isAlternating ? 'left-0 md:left-auto' : '',
                      )}
                      aria-hidden="true"
                    >
                      <Icon name={item.icon || 'check'} size="sm" aria-hidden="true" />
                    </div>

                    {/* Content box */}
                    <div
                      className={cn(
                        'flex-1 p-6 bg-elevated border border-primary-200 rounded-lg space-y-2',
                        isAlternating && isEven ? 'md:mr-12' : isAlternating ? 'md:ml-12' : '',
                      )}
                    >
                      <div
                        className={cn(
                          'flex items-center gap-3',
                          isAlternating && isEven ? 'md:justify-end' : 'justify-start',
                        )}
                      >
                        {item.date && (
                          <Badge variant="neutral" size="sm">
                            {item.date}
                          </Badge>
                        )}
                        <Heading as="h3" variant="heading-sm" className="font-bold text-primary-900">
                          {item.title}
                        </Heading>
                      </div>

                      <Text variant="body-sm" className="text-primary-600">
                        {item.description}
                      </Text>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </Container>
      </Section>
    </div>
  );
}

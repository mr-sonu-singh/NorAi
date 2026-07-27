'use client';

import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Grid } from '@/components/foundation/Grid';
import { Heading } from '@/components/foundation/Heading';
import { TestimonialCard } from '@/components/molecules/TestimonialCard';
import { EmptyState } from '@/components/molecules/EmptyState';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { TestimonialsSectionProps } from './TestimonialsSection.types';

export function TestimonialsSection({
  heading,
  testimonials = [],
}: TestimonialsSectionProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldAnimate = !prefersReducedMotion;
  const isSingle = testimonials.length === 1;

  return (
    <div ref={ref}>
      <Section
        variant="sunken"
        className={cn(
          'relative py-16 lg:py-24 transition-all duration-normal',
          shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
          shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
        )}
        data-testid="testimonials-section-organism"
        data-variant={isSingle ? 'single' : 'grid'}
        data-revealed={isRevealed}
      >
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Heading as="h2" variant="heading-xl" className="text-primary-900 font-bold tracking-tight">
              {heading}
            </Heading>
          </div>

          {testimonials.length === 0 ? (
            <EmptyState
              title="No Testimonials Available"
              description="Testimonials for this section are currently being updated."
              icon="layers"
            />
          ) : isSingle && testimonials[0] ? (
            <div className="max-w-2xl mx-auto">
              <TestimonialCard
                quote={testimonials[0].quote}
                authorName={testimonials[0].authorName}
                authorRole={testimonials[0].authorRole}
                avatarSrc={testimonials[0].avatar}
              />
            </div>
          ) : (
            <Grid cols={testimonials.length === 2 ? 2 : 3} gap="6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.authorName}-${index}`}
                  quote={testimonial.quote}
                  authorName={testimonial.authorName}
                  authorRole={testimonial.authorRole}
                  avatarSrc={testimonial.avatar}
                />
              ))}
            </Grid>
          )}
        </Container>
      </Section>
    </div>
  );
}

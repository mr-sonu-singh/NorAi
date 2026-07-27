'use client';

import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Stack } from '@/components/foundation/Stack';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { HeroTypographicProps } from './HeroTypographic.types';

export function HeroTypographic({
  headline,
  subhead,
  primaryCta,
  eyebrow,
  secondaryCta,
  className,
}: HeroTypographicProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldAnimate = !prefersReducedMotion;

  return (
    <div ref={ref}>
      <Section
        variant="default"
        className={cn(
          'relative overflow-hidden py-16 sm:py-24 lg:py-32 transition-all duration-normal',
          shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
          shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
          className,
        )}
        data-testid="hero-typographic-organism"
        data-revealed={isRevealed}
      >
        <Container size="default">
          <div className="mx-auto max-w-4xl text-center space-y-6 sm:space-y-8">
            {eyebrow && (
              <div className="flex justify-center">
                <Badge variant="accent" size="md">
                  {eyebrow}
                </Badge>
              </div>
            )}

            <Heading
              as="h1"
              variant="display-xl"
              className="text-primary-900 font-bold tracking-tight text-balance"
            >
              {headline}
            </Heading>

            <Text
              variant="body-xl"
              className="text-primary-600 max-w-2xl mx-auto text-balance"
            >
              {subhead}
            </Text>

            <Stack
              direction="row"
              gap="4"
              align="center"
              justify="center"
              className="pt-4 flex-col sm:flex-row w-full sm:w-auto"
            >
              <Link
                href={primaryCta.href}
                external={primaryCta.external}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={primaryCta.onClick}
                >
                  {primaryCta.label}
                </Button>
              </Link>

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  external={secondaryCta.external}
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    fullWidth
                    onClick={secondaryCta.onClick}
                  >
                    {secondaryCta.label}
                  </Button>
                </Link>
              )}
            </Stack>
          </div>
        </Container>
      </Section>
    </div>
  );
}

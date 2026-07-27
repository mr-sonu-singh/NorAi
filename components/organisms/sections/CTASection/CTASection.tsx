'use client';

import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Stack } from '@/components/foundation/Stack';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { CTASectionProps } from './CTASection.types';

export function CTASection({
  heading,
  body,
  primaryCta,
  secondaryCta,
  surface = 'page',
}: CTASectionProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldAnimate = !prefersReducedMotion;
  const isDark = surface === 'dark';

  return (
    <div ref={ref}>
      <Section
        variant={isDark ? 'dark' : 'default'}
        className={cn(
          'relative py-16 lg:py-24 text-center transition-all duration-normal',
          shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
          shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
        )}
        data-testid="cta-section-organism"
        data-surface={surface}
        data-revealed={isRevealed}
      >
        <Container size="default">
          <div className="max-w-3xl mx-auto space-y-4 mb-8">
            <Heading
              as="h2"
              variant="heading-xl"
              className={cn(
                'font-bold tracking-tight',
                isDark ? 'text-white' : 'text-primary-900',
              )}
            >
              {heading}
            </Heading>
            {body && (
              <Text
                variant="body-lg"
                className={isDark ? 'text-primary-200' : 'text-primary-600'}
              >
                {body}
              </Text>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Stack direction="row" gap="4" className="w-full sm:w-auto flex-col sm:flex-row">
              <Link href={primaryCta.href} external={primaryCta.external} className="w-full sm:w-auto">
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
                <Link href={secondaryCta.href} external={secondaryCta.external} className="w-full sm:w-auto">
                  <Button
                    variant={isDark ? 'ghost' : 'secondary'}
                    size="lg"
                    fullWidth
                    onClick={secondaryCta.onClick}
                    className={isDark ? 'text-white hover:bg-white/10' : undefined}
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

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
import { Breadcrumb } from '@/components/molecules/Breadcrumb';
import { LoadingState } from '@/components/molecules/LoadingState';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { HeroStandardProps } from './HeroStandard.types';

export function HeroStandard({
  headline,
  subhead,
  eyebrow,
  breadcrumb,
  primaryCta,
  secondaryCta,
  media,
  isMediaLoading = false,
  variant,
  className,
}: HeroStandardProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Determine active variant based on explicit prop or media presence
  const activeVariant =
    variant || (media || isMediaLoading ? 'withMedia' : 'textOnly');

  const shouldAnimate = !prefersReducedMotion;

  const renderCtas = () => {
    if (!primaryCta && !secondaryCta) return null;

    return (
      <Stack
        direction="row"
        gap="4"
        align="center"
        className="w-full sm:w-auto pt-2 flex-col sm:flex-row"
      >
        {primaryCta && (
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
        )}
        {secondaryCta && (
          <Link href={secondaryCta.href} external={secondaryCta.external} className="w-full sm:w-auto">
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
    );
  };

  const renderMediaContent = () => {
    if (isMediaLoading) {
      return (
        <div
          className="w-full aspect-video rounded-lg border border-primary-200 bg-bg-sunken flex items-center justify-center p-8 shadow-sm"
          data-testid="hero-media-loading"
        >
          <LoadingState variant="skeleton" label="Loading media preview..." />
        </div>
      );
    }

    if (media) {
      return (
        <div
          className="w-full rounded-lg overflow-hidden border border-primary-200 shadow-md bg-background"
          data-testid="hero-media-content"
        >
          {media}
        </div>
      );
    }

    return null;
  };

  return (
    <div ref={ref}>
      <Section
        variant="default"
        className={cn(
          'relative overflow-hidden transition-all duration-normal',
          shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
          shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
          className,
        )}
        data-testid="hero-standard-organism"
        data-variant={activeVariant}
        data-revealed={isRevealed}
      >
        <Container size="default">
          <Stack direction="col" gap="6">
            {/* Optional Breadcrumb */}
            {breadcrumb && breadcrumb.length > 0 && (
              <div className="w-full">
                <Breadcrumb items={breadcrumb} />
              </div>
            )}

            {activeVariant === 'withMedia' ? (
              /* WithMedia Split Layout */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
                <div className="lg:col-span-6 space-y-6">
                  {eyebrow && (
                    <div>
                      <Badge variant="neutral" size="md">
                        {eyebrow}
                      </Badge>
                    </div>
                  )}

                  <Heading as="h1" variant="display-lg" className="text-primary-900 font-bold">
                    {headline}
                  </Heading>

                  <Text variant="body-lg" className="text-primary-600 max-w-xl">
                    {subhead}
                  </Text>

                  {renderCtas()}
                </div>

                <div className="lg:col-span-6 w-full pt-4 lg:pt-0">
                  {renderMediaContent()}
                </div>
              </div>
            ) : (
              /* TextOnly Centered / Left-aligned Layout */
              <div className="max-w-3xl space-y-6 pt-2">
                {eyebrow && (
                  <div>
                    <Badge variant="neutral" size="md">
                      {eyebrow}
                    </Badge>
                  </div>
                )}

                <Heading as="h1" variant="display-xl" className="text-primary-900 font-bold">
                  {headline}
                </Heading>

                <Text variant="body-xl" className="text-primary-600">
                  {subhead}
                </Text>

                {renderCtas()}
              </div>
            )}
          </Stack>
        </Container>
      </Section>
    </div>
  );
}

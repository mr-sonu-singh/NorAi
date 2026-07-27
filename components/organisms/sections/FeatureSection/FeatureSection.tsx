'use client';

import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { FeatureCard } from '@/components/molecules/FeatureCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { FeatureSectionProps, FeatureSectionVariant } from './FeatureSection.types';

export function FeatureSection({
  heading,
  body,
  feature,
  media,
  cta,
  align,
  variant,
  className,
}: FeatureSectionProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldAnimate = !prefersReducedMotion;

  // Infer active variant
  const activeVariant: FeatureSectionVariant =
    variant ||
    (align === 'mediaLeft'
      ? 'mediaLeftTextRight'
      : media || feature
      ? 'textLeftMediaRight'
      : 'textOnly');

  const renderTextContent = () => (
    <div className="space-y-6">
      <Heading as="h2" variant="heading-xl" className="text-primary-900 font-bold tracking-tight">
        {heading}
      </Heading>
      <Text variant="body-lg" className="text-primary-600 leading-relaxed">
        {body}
      </Text>

      {cta && (
        <div className="pt-2">
          <Link href={cta.href} external={cta.external}>
            <Button variant="primary" size="md" onClick={cta.onClick}>
              {cta.label}
            </Button>
          </Link>
        </div>
      )}
    </div>
  );

  const renderMediaOrFeature = () => {
    if (media) {
      return (
        <div className="w-full rounded-lg overflow-hidden border border-primary-200 bg-background shadow-sm" aria-hidden="true">
          {media}
        </div>
      );
    }

    if (feature) {
      return <FeatureCard {...feature} />;
    }

    return null;
  };

  return (
    <div ref={ref}>
      <Section
        variant="default"
        className={cn(
          'relative overflow-hidden py-16 lg:py-24 transition-all duration-normal',
          shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
          shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
          className,
        )}
        data-testid="feature-section-organism"
        data-variant={activeVariant}
        data-revealed={isRevealed}
      >
        <Container size="default">
          {activeVariant === 'textOnly' ? (
            <div className="max-w-3xl space-y-6">{renderTextContent()}</div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div
                className={cn(
                  'lg:col-span-6',
                  activeVariant === 'mediaLeftTextRight' ? 'lg:order-2' : 'lg:order-1',
                )}
              >
                {renderTextContent()}
              </div>

              <div
                className={cn(
                  'lg:col-span-6 w-full',
                  activeVariant === 'mediaLeftTextRight' ? 'lg:order-1' : 'lg:order-2',
                )}
              >
                {renderMediaOrFeature()}
              </div>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}

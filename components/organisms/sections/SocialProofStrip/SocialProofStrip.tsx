'use client';

import Image from 'next/image';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Text } from '@/components/foundation/Text';
import { Icon } from '@/components/atoms/Icon';
import { Badge } from '@/components/atoms/Badge';
import { Divider } from '@/components/atoms/Divider';
import { Link } from '@/components/atoms/Link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import {
  SocialProofStripProps,
  SocialProofStripVariant,
  SocialProofLogo,
  SocialProofTrustIndicator,
} from './SocialProofStrip.types';

export function SocialProofStrip({
  eyebrow,
  logos = [],
  trustIndicators = [],
  variant,
  className,
}: SocialProofStripProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldAnimate = !prefersReducedMotion;

  // Determine active variant
  const activeVariant: SocialProofStripVariant =
    variant ||
    (logos.length > 0 && trustIndicators.length > 0
      ? 'combined'
      : trustIndicators.length > 0
      ? 'trustIndicators'
      : 'logoCloud');

  const renderLogo = (logo: SocialProofLogo, index: number) => {
    const content = (
      <div className="flex items-center gap-2 px-3 py-1.5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-normal">
        {logo.icon && (
          <Icon name={logo.icon} size="md" aria-hidden="true" className="text-primary-600" />
        )}
        {logo.logoUrl ? (
          <Image
            src={logo.logoUrl}
            alt={logo.name}
            width={100}
            height={24}
            className="h-6 w-auto object-contain"
          />
        ) : (
          <Text variant="body-sm" className="font-semibold text-primary-700 tracking-tight">
            {logo.name}
          </Text>
        )}
      </div>
    );

    if (logo.href) {
      return (
        <Link key={`${logo.name}-${index}`} href={logo.href} external aria-label={logo.name}>
          {content}
        </Link>
      );
    }

    return <div key={`${logo.name}-${index}`}>{content}</div>;
  };

  const renderTrustIndicator = (indicator: SocialProofTrustIndicator, index: number) => {
    const badgeVariantMap = {
      active: 'success' as const,
      verified: 'accent' as const,
      neutral: 'neutral' as const,
    };

    return (
      <div key={`${indicator.label}-${index}`} className="flex items-center gap-2">
        <Text variant="body-xs" className="text-primary-500 font-medium">
          {indicator.label}:
        </Text>
        <Badge variant={badgeVariantMap[indicator.status || 'neutral']} size="sm">
          {indicator.value}
        </Badge>
      </div>
    );
  };

  return (
    <div ref={ref}>
      <Section
        variant="sunken"
        className={cn(
          'py-8 border-y border-primary-200 transition-all duration-normal',
          shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
          shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
          className,
        )}
        data-testid="social-proof-strip-organism"
        data-variant={activeVariant}
        data-revealed={isRevealed}
      >
        <Container size="default">
          <div className="flex flex-col items-center gap-6">
            {eyebrow && (
              <Text variant="body-xs" className="text-primary-500 uppercase tracking-wider font-semibold text-center">
                {eyebrow}
              </Text>
            )}

            <div className="w-full flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {/* Logo Cloud section */}
              {(activeVariant === 'logoCloud' || activeVariant === 'combined') &&
                logos.map((logo, index) => renderLogo(logo, index))}

              {/* Divider if combined */}
              {activeVariant === 'combined' && logos.length > 0 && trustIndicators.length > 0 && (
                <Divider orientation="vertical" className="hidden sm:block h-6" />
              )}

              {/* Trust Indicators section */}
              {(activeVariant === 'trustIndicators' || activeVariant === 'combined') &&
                trustIndicators.map((indicator, index) => renderTrustIndicator(indicator, index))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

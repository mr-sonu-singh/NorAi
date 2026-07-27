'use client';

import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Grid } from '@/components/foundation/Grid';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { TeamMemberCard } from '@/components/molecules/TeamMemberCard';
import { EmptyState } from '@/components/molecules/EmptyState';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { TeamSectionProps } from './TeamSection.types';

export function TeamSection({
  heading,
  members = [],
  careersLink,
  variant = 'FullGrid',
}: TeamSectionProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldAnimate = !prefersReducedMotion;
  const isPreview = variant === 'Preview';

  return (
    <div ref={ref}>
      <Section
        variant="default"
        className={cn(
          'relative py-16 lg:py-24 transition-all duration-normal',
          shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
          shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
        )}
        data-testid="team-section-organism"
        data-variant={variant}
        data-revealed={isRevealed}
      >
        <Container size="default">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <Heading as="h2" variant="heading-xl" className="text-primary-900 font-bold tracking-tight">
              {heading}
            </Heading>
          </div>

          {members.length === 0 ? (
            <EmptyState
              title="No Team Members Found"
              description="Team member details are currently being updated."
              icon="layers"
            />
          ) : (
            <Grid
              cols={isPreview ? 3 : 4}
              gap="6"
              className={cn(
                'grid-cols-1 md:grid-cols-2',
                isPreview ? 'lg:grid-cols-3' : 'lg:grid-cols-4',
              )}
            >
              {members.map((member, index) => (
                <TeamMemberCard
                  key={`member-${index}`}
                  name={member.name}
                  role={member.role}
                  photoSrc={member.photoSrc}
                  socials={member.socials}
                  bio={member.bio}
                />
              ))}
            </Grid>
          )}

          {careersLink && (
            <div className="mt-12 text-center">
              <Link href={careersLink.href}>
                <Button variant="secondary" size="lg">
                  {careersLink.label}
                </Button>
              </Link>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}

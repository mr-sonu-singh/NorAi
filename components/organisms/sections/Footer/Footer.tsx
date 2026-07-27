'use client';

import React from 'react';
import { Container } from '@/components/foundation/Container';
import { Grid } from '@/components/foundation/Grid';
import { Stack } from '@/components/foundation/Stack';
import { Text } from '@/components/foundation/Text';
import { Heading } from '@/components/foundation/Heading';
import { Logo } from '@/components/molecules/Logo';
import { NavigationGroup } from '@/components/molecules/NavigationGroup';
import { SocialLinks } from '@/components/molecules/SocialLinks';
import { Divider } from '@/components/atoms/Divider';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { FooterProps, FooterColumn } from './Footer.types';
import { SocialLinkItem } from '@/components/molecules/SocialLinks/SocialLinks.types';

export const DEFAULT_FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Products',
    links: [
      { label: 'NorAI Core', href: '/products/core' },
      { label: 'NorAI Vision', href: '/products/vision' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Documentation', href: '/docs' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

export const DEFAULT_FOOTER_SOCIAL_LINKS: SocialLinkItem[] = [
  { label: 'Twitter', href: 'https://twitter.com/norai', icon: 'twitter' },
  { label: 'GitHub', href: 'https://github.com/norai', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/norai', icon: 'linkedin' },
];

export const DEFAULT_LEGAL_TEXT = `© ${new Date().getFullYear()} NorAI Technologies Inc. All rights reserved.`;

export function Footer({
  columns = DEFAULT_FOOTER_COLUMNS,
  socialLinks = DEFAULT_FOOTER_SOCIAL_LINKS,
  legalText = DEFAULT_LEGAL_TEXT,
  logoVariant = 'full',
  className,
}: FooterProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldAnimate = !prefersReducedMotion;

  return (
    <footer
      ref={ref}
      aria-label="Site Footer"
      className={cn(
        'w-full bg-background border-t border-primary-200 py-12 lg:py-16 transition-all duration-normal',
        shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
        shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
        className,
      )}
      data-testid="footer-organism"
      data-revealed={isRevealed}
    >
      <Container size="default">
        <div className="flex flex-col lg:flex-row gap-12 justify-between mb-12">
          {/* Brand & Social Column */}
          <div className="space-y-4 max-w-sm shrink-0">
            <Logo variant={logoVariant} href="/" />
            <Text variant="body-sm" className="text-primary-600">
              Empowering next-generation artificial intelligence with verifiable and scalable infrastructure.
            </Text>
            {socialLinks && socialLinks.length > 0 && (
              <div className="pt-2">
                <SocialLinks links={socialLinks} size="md" orientation="horizontal" />
              </div>
            )}
          </div>

          {/* Navigation Columns Grid */}
          <div className="grow">
            <Grid cols={4} gap="8">
              {columns.map((column) => (
                <Stack key={column.title} direction="col" gap="3" align="start">
                  <Heading as="h3" variant="heading-xs" className="text-primary-900 font-semibold">
                    {column.title}
                  </Heading>
                  <NavigationGroup
                    items={column.links}
                    orientation="vertical"
                    collapsible={false}
                  />
                </Stack>
              ))}
            </Grid>
          </div>
        </div>

        <Divider className="my-8" />

        {/* Legal Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <Text variant="body-xs" className="text-primary-500">
            {legalText}
          </Text>
        </div>
      </Container>
    </footer>
  );
}

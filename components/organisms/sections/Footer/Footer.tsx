'use client';

import React from 'react';
import { Container } from '@/components/foundation/Container';
import { Stack } from '@/components/foundation/Stack';
import { Text } from '@/components/foundation/Text';
import { Heading } from '@/components/foundation/Heading';
import { Logo } from '@/components/molecules/Logo';
import { NavigationGroup } from '@/components/molecules/NavigationGroup';
import { SocialLinks } from '@/components/molecules/SocialLinks';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { FooterProps, FooterColumn } from './Footer.types';
import { SocialLinkItem } from '@/components/molecules/SocialLinks/SocialLinks.types';

export const DEFAULT_FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Products',
    links: [
      { label: 'All Products', href: '/products' },
      { label: 'Resume Shortlister', href: '/products/resume-shortlister' },
      { label: 'Course Note-Taker', href: '/products/course-note-taker' },
      { label: 'Chat Digest AI', href: '/products/chat-digest' },
      { label: 'Smart News AI', href: '/products/news-aggregator' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Team', href: '/team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Enterprise Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
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

export const DEFAULT_LEGAL_TEXT = `© 2026 NorAI Technologies Pvt. Ltd. All rights reserved.`;

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
        'relative w-full bg-background pt-16 pb-10 lg:pt-20 lg:pb-12 transition-all duration-normal overflow-hidden',
        shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
        shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
        className,
      )}
      data-testid="footer-organism"
      data-revealed={isRevealed}
    >
      {/* Gradient hairline instead of a flat border — softer, on-brand with the teal mark */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
      />

      {/* Faint ambient glow behind the brand column — quiet, not decorative noise */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-400/[0.06] blur-3xl"
      />

      <Container size="default" className="relative">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-10 justify-between mb-14">
          {/* Brand & Social Column */}
          <div className="space-y-5 max-w-xs shrink-0">
            <Logo variant={logoVariant} href="/" />
            {socialLinks && socialLinks.length > 0 && (
              <div className="pt-1">
                <SocialLinks
                  links={socialLinks}
                  size="md"
                  orientation="horizontal"
                  className="[&_a]:h-9 [&_a]:w-9 [&_a]:rounded-full [&_a]:border [&_a]:border-primary-200/60 [&_a]:flex [&_a]:items-center [&_a]:justify-center [&_a]:text-primary-500 [&_a]:transition-all [&_a]:duration-200 [&_a:hover]:border-teal-400/60 [&_a:hover]:text-teal-300 [&_a:hover]:-translate-y-0.5"
                />
              </div>
            )}
          </div>

          {/* Navigation Columns — flex-wrap so a short column (e.g. Resources)
              doesn't stretch into an awkward grid cell full of empty space */}
          <div className="flex flex-wrap gap-x-16 gap-y-10">
            {columns.map((column) => (
              <Stack key={column.title} direction="col" gap="4" align="start" className="min-w-[9rem]">
                <Heading
                  as="h3"
                  variant="heading-xs"
                  className="text-primary-400 font-semibold uppercase tracking-wider text-xs"
                >
                  {column.title}
                </Heading>
                <NavigationGroup
                  items={column.links}
                  orientation="vertical"
                  collapsible={false}
                  className="[&_a]:text-primary-300 [&_a]:text-sm [&_a]:transition-colors [&_a]:duration-200 [&_a:hover]:text-teal-300"
                />
              </Stack>
            ))}
          </div>
        </div>

        {/* Divider replaced with the same soft gradient treatment as the top hairline */}
        <div className="h-px w-full bg-gradient-to-r from-primary-200/0 via-primary-200/40 to-primary-200/0 mb-8" />

        {/* Legal Line + signature status element */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <Text variant="body-xs" className="text-primary-500">
            {legalText}
          </Text>
          <div className="flex items-center gap-2 text-primary-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
            </span>
            <Text variant="body-xs" className="text-primary-500 tracking-wide">
              Uttar Pradesh, India
            </Text>
          </div>
        </div>
      </Container>
    </footer>
  );
}
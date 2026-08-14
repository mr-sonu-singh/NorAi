'use client';

import React from 'react';
import { Container } from '@/components/foundation/Container';
import { Stack } from '@/components/foundation/Stack';
import { Text } from '@/components/foundation/Text';
import { Heading } from '@/components/foundation/Heading';
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
  {
    label: 'Twitter',
    href: 'https://twitter.com/norai',
    icon: 'twitter',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/norai',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/norai',
    icon: 'linkedin',
  },
];

export const DEFAULT_LEGAL_TEXT =
  '© 2026 NorAI Technologies Pvt. Ltd. All rights reserved.';

export function Footer({
  columns = DEFAULT_FOOTER_COLUMNS,
  socialLinks = DEFAULT_FOOTER_SOCIAL_LINKS,
  legalText = DEFAULT_LEGAL_TEXT,
  className,
}: FooterProps) {
  const { ref, isRevealed } = useScrollReveal();
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  return (
    <footer
      ref={ref}
      aria-label="Site Footer"
      className={cn(
        'relative w-full bg-gradient-to-b from-[#001B63] via-[#003D9F] to-[#00A8D6] pt-16 pb-10 lg:pt-20 lg:pb-12 transition-all duration-normal overflow-hidden font-sans',
        shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
        shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
        className,
      )}
      data-testid="footer-organism"
      data-revealed={isRevealed}
    >
      {/* Futuristic cyan ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#00D9FF]/20 blur-3xl"
      />

      {/* Subtle blue glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#0066FF]/20 blur-3xl"
      />

      <Container size="default" className="relative">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-10 justify-between mb-14">

          {/* Social Links */}
          <div className="space-y-5 max-w-xs shrink-0">
            {socialLinks && socialLinks.length > 0 && (
              <div className="pt-1">
                <SocialLinks
                  links={socialLinks}
                  size="md"
                  orientation="horizontal"
                  className="
                    [&_a]:h-9
                    [&_a]:w-9
                    [&_a]:rounded-full
                    [&_a]:border
                    [&_a]:border-white/30
                    [&_a]:flex
                    [&_a]:items-center
                    [&_a]:justify-center
                    [&_a]:text-white/90
                    [&_a]:transition-all
                    [&_a]:duration-200
                    [&_a:hover]:border-[#00D9FF]
                    [&_a:hover]:text-white
                    [&_a:hover]:bg-white/10
                    [&_a:hover]:shadow-[0_0_15px_rgba(0,217,255,0.35)]
                    [&_a:hover]:-translate-y-0.5
                  "
                />
              </div>
            )}
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-wrap gap-x-16 gap-y-10">
            {columns.map((column) => (
              <Stack
                key={column.title}
                direction="col"
                gap="4"
                align="start"
                className="min-w-[9rem]"
              >
                <Heading
                  as="h3"
                  variant="heading-xs"
                  className="font-[var(--font-inter)] text-white/95 font-semibold text-sm tracking-wide"
                >
                  {column.title}
                </Heading>

                <NavigationGroup
                  items={column.links}
                  orientation="vertical"
                  collapsible={false}
                  className="
                    font-sans
                    [&_a]:text-white/75
                    [&_a]:text-sm
                    [&_a]:font-normal
                    [&_a]:transition-colors
                    [&_a]:duration-200
                    [&_a:hover]:text-[#00D9FF]
                  "
                />
              </Stack>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/20 mb-8" />

        {/* Legal + Location */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left font-sans">

          <Text
            variant="body-xs"
            className="font-sans text-white/75 font-normal"
          >
            {legalText}
          </Text>

          <div className="flex items-center gap-2 text-white/70 font-sans">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D9FF] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_rgba(0,217,255,0.8)]" />
            </span>

            <Text
              variant="body-xs"
              className="font-sans text-white/75 tracking-wide font-normal"
            >
              Uttar Pradesh, India
            </Text>
          </div>
        </div>
      </Container>
    </footer>
  );
}
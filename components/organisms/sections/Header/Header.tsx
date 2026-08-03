'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/foundation/Container';
import { Stack } from '@/components/foundation/Stack';
import { Logo } from '@/components/molecules/Logo';
import { NavigationGroup } from '@/components/molecules/NavigationGroup';
import { NavItem } from '@/components/molecules/NavigationGroup/NavigationGroup.types';
import { Button } from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Link';
import { IconButton } from '@/components/atoms/IconButton';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { HeaderProps, HeaderCTA } from './Header.types';

export const DEFAULT_HEADER_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const DEFAULT_HEADER_PRIMARY_CTA: HeaderCTA = {
  label: 'Get Started',
  href: '/contact',
};

export function Header({
  navItems = DEFAULT_HEADER_NAV_ITEMS,
  logoVariant = 'full',
  primaryCta = DEFAULT_HEADER_PRIMARY_CTA,
  secondaryCta,
  sticky = true,
  className,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const prefersReducedMotion = usePrefersReducedMotion();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const prevIsDesktop = useRef(isDesktop);

  // Automatically close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useLockBodyScroll(isMobileMenuOpen && !isDesktop);

  // Close mobile menu ONLY when resizing from mobile screen to desktop breakpoint
  useEffect(() => {
    if (isDesktop && !prevIsDesktop.current) {
      setIsMobileMenuOpen(false);
    }
    prevIsDesktop.current = isDesktop;
  }, [isDesktop]);

  // Handle scroll listener for sticky variant
  useEffect(() => {
    if (!sticky) return;

    function handleScroll() {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sticky]);

  // Focus trapping and Esc key handling for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        document.getElementById('mobile-menu-toggle')?.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const renderCtaButtons = (isMobileLayout = false) => {
    return (
      <Stack
        direction={isMobileLayout ? 'col' : 'row'}
        gap="3"
        align={isMobileLayout ? 'stretch' : 'center'}
        className={isMobileLayout ? 'w-full pt-4 border-t border-white/10' : undefined}
      >
        {secondaryCta && (
          <Link href={secondaryCta.href} external={secondaryCta.external} className="w-full lg:w-auto" onClick={closeMobileMenu}>
            <Button
              variant="secondary"
              size={isMobileLayout ? 'md' : 'sm'}
              fullWidth={isMobileLayout}
              onClick={secondaryCta.onClick}
              className="border-white/15 text-primary-200 hover:border-teal-400/50 hover:text-teal-300 hover:bg-white/5"
            >
              {secondaryCta.label}
            </Button>
          </Link>
        )}
        {primaryCta && (
          <Link href={primaryCta.href} external={primaryCta.external} className="w-full lg:w-auto" onClick={closeMobileMenu}>
            <Button
              variant="primary"
              size={isMobileLayout ? 'md' : 'sm'}
              fullWidth={isMobileLayout}
              onClick={primaryCta.onClick}
              className="bg-teal-400 hover:bg-teal-300 text-slate-950 border-none shadow-md shadow-teal-400/20 font-semibold transition-all hover:-translate-y-0.5"
            >
              {primaryCta.label}
            </Button>
          </Link>
        )}
      </Stack>
    );
  };

  return (
    <header
      className={cn(
        'relative w-full bg-background/90 backdrop-blur-xl text-white transition-all duration-300 z-50',
        sticky && 'sticky top-0',
        sticky && isScrolled && 'shadow-lg shadow-black/20 bg-background/95 backdrop-blur-2xl',
        className,
      )}
      data-testid="header-organism"
      data-scrolled={isScrolled}
      data-sticky={sticky}
    >
      {/* Gradient hairline — same signature treatment as the footer, anchoring the two ends of the page */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300',
          isScrolled
            ? 'bg-gradient-to-r from-transparent via-teal-400/50 to-transparent opacity-100'
            : 'bg-white/10 opacity-100',
        )}
      />

      <Container size="default">
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-between py-3 md:py-4"
        >
          {/* Brand Logo */}
          <div className="flex items-center" onClick={closeMobileMenu}>
            <Logo variant={logoVariant} href="/" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationGroup
              items={navItems}
              orientation="horizontal"
              className="[&_a]:text-primary-300 [&_a]:text-sm [&_a]:font-medium [&_a]:transition-colors [&_a]:duration-200 [&_a:hover]:text-teal-300 [&_a[aria-current=page]]:text-teal-300"
            />
          </div>

          {/* Desktop CTA Group */}
          <div className="hidden lg:flex items-center">
            {renderCtaButtons(false)}
          </div>

          {/* Mobile / Tablet Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <IconButton
              id="mobile-menu-toggle"
              icon={isMobileMenuOpen ? 'x' : 'menu'}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              variant="ghost"
              size="md"
              onClick={toggleMobileMenu}
              className="text-white hover:bg-white/10 hover:text-teal-300"
              data-testid="mobile-menu-toggle"
            />
          </div>
        </nav>

        {/* Mobile / Tablet Dropdown Panel */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            aria-label="Mobile Menu"
            className={cn(
              'lg:hidden py-6 border-t border-white/10 bg-background/95 backdrop-blur-2xl text-white space-y-4',
              !prefersReducedMotion && 'animate-in fade-in slide-in-from-top-2 duration-200',
            )}
            data-testid="mobile-menu-panel"
          >
            <Stack direction="col" gap="4" onClick={closeMobileMenu}>
              <NavigationGroup
                items={navItems}
                orientation="vertical"
                collapsible={false}
                className="[&_a]:text-primary-300 [&_a]:text-base [&_a]:transition-colors [&_a]:duration-200 [&_a:hover]:text-teal-300"
              />
              {renderCtaButtons(true)}
            </Stack>
          </div>
        )}
      </Container>
    </header>
  );
}
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
 // { label: 'Team', href: '/team' },
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
        className={isMobileLayout ? 'w-full pt-4 border-t border-slate-200/60' : undefined}
      >
        {secondaryCta && (
          <Link href={secondaryCta.href} external={secondaryCta.external} className="w-full lg:w-auto" onClick={closeMobileMenu}>
            <Button
              variant="secondary"
              size={isMobileLayout ? 'md' : 'sm'}
              fullWidth={isMobileLayout}
              onClick={secondaryCta.onClick}
              className="border-primary-200/40 text-primary-700 hover:border-[color:var(--accent-mono)/0.5] hover:text-[var(--accent-mono)] hover:bg-[var(--bg-elevated)]"
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
              className="bg-[var(--accent-500)] hover:bg-[var(--accent-mono)] text-[var(--bg-page)] border-none shadow-md shadow-[color:var(--accent-500)/0.2] font-semibold transition-all hover:-translate-y-0.5"
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
        'relative w-full bg-[var(--bg-elevated)] border-b border-slate-200/60 text-primary-800 transition-all duration-300 z-50',
        sticky && 'sticky top-0',
        sticky && isScrolled && 'shadow-md shadow-black/10',
        className,
      )}
      data-testid="header-organism"
      data-scrolled={isScrolled}
      data-sticky={sticky}
    >
      <Container size="default">
  <nav className="flex items-center justify-between min-h-[72px]">

    {/* Brand Logo */}
    <div className="flex items-center shrink-0">
      <Link href="/">
        <img
          src="/images/brand-logo.png"
          alt="NorAi"
          className="w-14 h-14 lg:w-16 lg:h-16 object-contain"
        />
      </Link>
    </div>

    {/* Desktop Navigation Links */}
    <div className="hidden lg:flex items-center gap-8">
      <NavigationGroup
        items={navItems}
        orientation="horizontal"
        className="[&_a]:text-primary-600 [&_a]:text-sm [&_a]:font-medium [&_a]:transition-colors [&_a]:duration-200 [&_a:hover]:text-[var(--accent-mono)] [&_a[aria-current=page]]:text-[var(--accent-mono)]"
      />
    </div>

    {/* Desktop CTA */}
    <div className="hidden lg:flex items-center">
      {renderCtaButtons(false)}
    </div>

    {/* Mobile */}
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
        className="text-primary-800 hover:bg-[var(--bg-elevated)] hover:text-[var(--accent-500)]"
      />
    </div>

  </nav>
</Container>
    </header>
  );
}
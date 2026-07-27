'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'All Products', href: '/products' },
      { label: 'NorAI Core', href: '/products/core' },
      { label: 'NorAI Vision', href: '/products/vision' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Team', href: '/team' },
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
  sticky = false,
  className,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const prefersReducedMotion = usePrefersReducedMotion();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when mobile menu is open
  useLockBodyScroll(isMobileMenuOpen && !isDesktop);

  // Close mobile menu if window resizes to desktop breakpoint
  useEffect(() => {
    if (isDesktop && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isDesktop, isMobileMenuOpen]);

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

      if (event.key === 'Tab' && mobileMenuRef.current) {
        const toggleBtn = document.getElementById('mobile-menu-toggle');
        const menuFocusables = Array.from(
          mobileMenuRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
          )
        );
        
        const focusableElements = toggleBtn ? [toggleBtn, ...menuFocusables] : menuFocusables;
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (firstElement && lastElement) {
          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const renderCtaButtons = (isMobileLayout = false) => {
    return (
      <Stack
        direction={isMobileLayout ? 'col' : 'row'}
        gap="3"
        align={isMobileLayout ? 'stretch' : 'center'}
        className={isMobileLayout ? 'w-full pt-4 border-t border-primary-200' : undefined}
      >
        {secondaryCta && (
          <Link href={secondaryCta.href} external={secondaryCta.external} className="w-full md:w-auto">
            <Button
              variant="secondary"
              size={isMobileLayout ? 'md' : 'sm'}
              fullWidth={isMobileLayout}
              onClick={secondaryCta.onClick}
            >
              {secondaryCta.label}
            </Button>
          </Link>
        )}
        {primaryCta && (
          <Link href={primaryCta.href} external={primaryCta.external} className="w-full md:w-auto">
            <Button
              variant="primary"
              size={isMobileLayout ? 'md' : 'sm'}
              fullWidth={isMobileLayout}
              onClick={primaryCta.onClick}
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
        'w-full bg-background border-b border-primary-200 transition-colors duration-fast z-40',
        sticky && 'sticky top-0',
        sticky && isScrolled && 'shadow-sm bg-background/95 backdrop-blur-md',
        className,
      )}
      data-testid="header-organism"
      data-scrolled={isScrolled}
      data-sticky={sticky}
    >
      <Container size="default">
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-between py-3 md:py-4"
        >
          {/* Brand Logo */}
          <div className="flex items-center">
            <Logo variant={logoVariant} href="/" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationGroup items={navItems} orientation="horizontal" />
          </div>

          {/* Desktop CTA Group */}
          <div className="hidden md:flex items-center">
            {renderCtaButtons(false)}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <IconButton
              id="mobile-menu-toggle"
              icon={isMobileMenuOpen ? 'x' : 'menu'}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              variant="ghost"
              size="md"
              onClick={toggleMobileMenu}
              data-testid="mobile-menu-toggle"
            />
          </div>
        </nav>

        {/* Mobile Dropdown Panel */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            aria-label="Mobile Menu"
            className={cn(
              'md:hidden py-4 border-t border-primary-200 bg-background',
              !prefersReducedMotion && 'animate-in fade-in slide-in-from-top-2 duration-300',
            )}
            data-testid="mobile-menu-panel"
          >
            <Stack direction="col" gap="6">
              <NavigationGroup items={navItems} orientation="vertical" collapsible={false} />
              {renderCtaButtons(true)}
            </Stack>
          </div>
        )}
      </Container>
    </header>
  );
}

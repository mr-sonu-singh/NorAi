import React from 'react';
import NextLink from 'next/link';
import type { Route } from 'next';
import { cn } from '@/lib/utils';
import { FocusRing } from '../FocusRing';
import { Icon } from '../Icon';
import { LinkProps, LinkVariant } from './Link.types';

const variantClasses: Record<LinkVariant, string> = {
  inline:
    'text-accent-600 underline underline-offset-4 hover:text-accent-700 transition-colors duration-[var(--duration-fast)]',
  standalone:
    'inline-flex items-center gap-1 text-accent-600 font-medium hover:text-accent-700 transition-colors duration-[var(--duration-fast)]',
  quiet:
    'text-primary-600 hover:text-primary-800 transition-colors duration-[var(--duration-fast)]',
  unstyled: 'text-inherit no-underline',
};

export function Link({
  href,
  variant = 'inline',
  external = false,
  prefetch,
  'aria-label': ariaLabel,
  className,
  children,
  ...props
}: LinkProps) {
  const isExternal = external || href.startsWith('http://') || href.startsWith('https://');

  const combinedClasses = cn('font-sans cursor-pointer', variantClasses[variant], className);

  const linkContent = (
    <>
      {children}
      {isExternal && variant === 'standalone' && (
        <Icon name="ExternalLink" size="xs" aria-label="(opens in new tab)" />
      )}
    </>
  );

  if (isExternal) {
    return (
      <FocusRing>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className={combinedClasses}
          {...props}
        >
          {linkContent}
        </a>
      </FocusRing>
    );
  }

  return (
    <FocusRing>
      <NextLink
        href={href as Route}
        prefetch={prefetch}
        aria-label={ariaLabel}
        className={combinedClasses}
        {...props}
      >
        {linkContent}
      </NextLink>
    </FocusRing>
  );
}

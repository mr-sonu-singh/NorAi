'use client';

import React from 'react';
import { Link } from '@/components/atoms/Link';
import { Icon } from '@/components/atoms/Icon';
import { Badge } from '@/components/atoms/Badge';
import { useActiveNav } from '@/hooks/useActiveNav';
import { cn } from '@/lib/utils';
import { NavigationLinkProps } from './NavigationLink.types';

export function NavigationLink({
  href,
  label,
  icon,
  badge,
  external = false,
  disabled = false,
  className,
  ...props
}: NavigationLinkProps) {
  const { isActive } = useActiveNav();
  const active = isActive(href);

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={cn(
          'inline-flex items-center gap-2 text-body-md text-primary-300 cursor-not-allowed opacity-disabled',
          className,
        )}
        data-testid="navigation-link-disabled"
      >
        {icon && <Icon name={icon} size="sm" className="shrink-0" />}
        <span>{label}</span>
        {badge && <Badge variant="neutral" size="sm">{badge}</Badge>}
      </span>
    );
  }

  return (
    <Link
      href={href}
      variant="unstyled"
      external={external}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'inline-flex items-center gap-2 text-body-md font-medium transition-colors duration-fast rounded-sm px-2 py-1',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        active
          ? 'text-accent font-semibold'
          : 'text-primary hover:text-accent',
        className,
      )}
      data-testid="navigation-link-molecule"
      {...props}
    >
      {icon && <Icon name={icon} size="sm" className="shrink-0" />}
      <span>{label}</span>
      {badge && <Badge variant={active ? 'accent' : 'neutral'} size="sm">{badge}</Badge>}
    </Link>
  );
}

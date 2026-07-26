import React from 'react';
import { Link } from '@/components/atoms/Link';
import { Icon } from '@/components/atoms/Icon';
import { cn } from '@/lib/utils';
import { BreadcrumbProps } from './Breadcrumb.types';

export function Breadcrumb({
  items,
  separator = 'chevron-right',
  className,
  ...props
}: BreadcrumbProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('inline-flex items-center', className)}
      data-testid="breadcrumb-molecule"
      {...props}
    >
      <ol className="inline-flex items-center gap-2 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href || index} className="inline-flex items-center gap-2">
              {index > 0 && (
                <Icon
                  name={separator}
                  size="xs"
                  className="text-primary-300 shrink-0"
                  aria-hidden="true"
                />
              )}

              {isLast ? (
                <span
                  aria-current="page"
                  className="text-body-sm font-semibold text-primary truncate max-w-[200px]"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  variant="quiet"
                  className="text-body-sm text-primary-400 hover:text-accent transition-colors duration-fast"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

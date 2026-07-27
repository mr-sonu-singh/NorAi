'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Stack } from '@/components/foundation/Stack';
import { Icon } from '@/components/atoms/Icon';
import { NavigationLink } from '../NavigationLink';
import { cn } from '@/lib/utils';
import { NavigationGroupProps } from './NavigationGroup.types';

export function NavigationGroup({
  items,
  orientation = 'horizontal',
  collapsible = true,
  className,
  ...props
}: NavigationGroupProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <div ref={containerRef} className="inline-block" {...props}>
      <Stack
        direction={orientation === 'horizontal' ? 'row' : 'col'}
        gap={orientation === 'horizontal' ? '6' : '3'}
        align={orientation === 'horizontal' ? 'center' : 'start'}
        className={cn('relative', className)}
        data-testid="navigation-group-molecule"
      >
        {items.map((item) => {
          const hasChildren = Boolean(item.children && item.children.length > 0);
          const isOpen = openDropdown === item.label;
          const dropdownId = `nav-dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}`;

          if (hasChildren) {
            if (!collapsible) {
              return (
                <div key={item.label} className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-body-md font-medium text-primary px-2 py-1">
                    {item.icon && <Icon name={item.icon} size="sm" aria-hidden="true" />}
                    <span>{item.label}</span>
                  </div>
                  <Stack direction="col" gap="1" className="pl-4">
                    {item.children?.map((child) => (
                      <NavigationLink
                        key={child.href}
                        href={child.href}
                        label={child.label}
                        icon={child.icon}
                        badge={child.badge}
                        external={child.external}
                        disabled={child.disabled}
                      />
                    ))}
                  </Stack>
                </div>
              );
            }

            return (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown(item.label)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  aria-controls={dropdownId}
                  className={cn(
                    'inline-flex items-center gap-1.5 text-body-md font-medium text-primary hover:text-accent transition-colors duration-fast rounded-sm px-2 py-1',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
                  )}
                  data-testid={`dropdown-trigger-${item.label}`}
                >
                  {item.icon && <Icon name={item.icon} size="sm" aria-hidden="true" />}
                  <span>{item.label}</span>
                  <Icon
                    name="chevron-down"
                    size="xs"
                    className={cn('transition-transform duration-fast', isOpen && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={dropdownId}
                    aria-label={item.label}
                    className={cn(
                      'absolute left-0 top-full mt-2 min-w-[200px] bg-elevated border border-primary-200 rounded-default p-2 shadow-lg z-50',
                      orientation === 'vertical' && 'relative top-0 mt-1 shadow-none border-none pl-4',
                    )}
                  >
                    <Stack direction="col" gap="1">
                      {item.children?.map((child) => (
                        <NavigationLink
                          key={child.href}
                          href={child.href}
                          label={child.label}
                          icon={child.icon}
                          badge={child.badge}
                          external={child.external}
                          disabled={child.disabled}
                          onClick={() => setOpenDropdown(null)}
                        />
                      ))}
                    </Stack>
                  </div>
                )}
              </div>
            );
          }

          return (
            <NavigationLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              badge={item.badge}
              external={item.external}
              disabled={item.disabled}
            />
          );
        })}
      </Stack>
    </div>
  );
}

import React from 'react';
import { cn } from '@/lib/utils';
import { FocusRingProps, FocusRingOffset } from './FocusRing.types';

const offsetMap: Record<FocusRingOffset, string> = {
  none: 'focus-visible:ring-offset-0',
  sm: 'focus-visible:ring-offset-1',
  md: 'focus-visible:ring-offset-2',
};

export function FocusRing({ children, inset = false, offset = 'md' }: FocusRingProps) {
  if (!React.isValidElement(children)) {
    return children;
  }

  const focusClasses = cn(
    'outline-none focus-visible:ring-[var(--focus-ring-width)] focus-visible:ring-accent-600 focus-visible:ring-offset-bg-page',
    inset && 'focus-visible:ring-inset',
    offsetMap[offset],
    children.props.className,
  );

  return React.cloneElement(children, {
    className: focusClasses,
  } as React.HTMLAttributes<HTMLElement>);
}

import React, { useId } from 'react';
import { Link } from '@/components/atoms/Link';
import { VisuallyHidden } from '@/components/foundation/VisuallyHidden';
import { cn } from '@/lib/utils';
import { LogoProps, LogoSize } from './Logo.types';

const sizeMap: Record<LogoSize, { container: string; symbol: string; text: string }> = {
  S: {
    container: 'h-6 gap-2',
    symbol: 'w-6 h-6',
    text: 'text-lg font-display font-extrabold tracking-tight',
  },
  M: {
    container: 'h-8 gap-2.5',
    symbol: 'w-7 h-7 md:w-8 md:h-8',
    text: 'text-xl font-display font-extrabold tracking-tight',
  },
  L: {
    container: 'h-10 gap-3',
    symbol: 'w-9 h-9 md:w-10 md:h-10',
    text: 'text-2xl font-display font-extrabold tracking-tight',
  },
};

export function Logo({
  variant = 'full',
  size = 'M',
  href = '/',
  'aria-label': ariaLabel = 'NorAI, home',
  className,
  ...props
}: LogoProps) {
  const { container, symbol, text } = sizeMap[size];
  const rawId = useId();
  const gradientId = `norai-logo-grad-${rawId.replace(/:/g, '')}`;

  const renderSymbol = () => (
    <svg
      className={cn('inline-block shrink-0', symbol)}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#45F7D6" />
          <stop offset="50%" stopColor="#0CCAB1" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>

      {/* Hexagonal Circuit Outer Frame */}
      <path
        d="M18 3.5 L31 10.5 V25.5 L18 32.5 L5 25.5 V10.5 Z"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Integrated Circuit N */}
      <path
        d="M11 25.5 V10.5 L25 25.5 V13.5"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top-Right Circuit Node */}
      <circle cx="31" cy="10.5" r="2.5" fill={`url(#${gradientId})`} />

      {/* Bottom-Left Circuit Node */}
      <circle cx="5" cy="25.5" r="2.5" fill={`url(#${gradientId})`} />

      {/* N Right Arm Circuit Node */}
      <circle cx="25" cy="13.5" r="2.2" fill={`url(#${gradientId})`} />
    </svg>
  );

  const renderWordmark = () => (
    <span className={cn('select-none flex items-center leading-none', text)}>
      <span className="text-white">Nor</span>
      <span className="bg-gradient-to-r from-[#0CCAB1] via-[#38BDF8] to-[#45F7D6] bg-clip-text text-transparent">
        AI
      </span>
    </span>
  );

  return (
    <Link
      href={href}
      variant="unstyled"
      aria-label={ariaLabel}
      className={cn(
        'inline-flex items-center hover:opacity-90 transition-opacity duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0CCAB1] focus-visible:ring-offset-2 rounded-sm',
        container,
        className,
      )}
      data-testid="logo-molecule"
      {...props}
    >
      {variant === 'full' && (
        <>
          {renderSymbol()}
          {renderWordmark()}
        </>
      )}
      {variant === 'symbol' && (
        <>
          {renderSymbol()}
          <VisuallyHidden>NorAI</VisuallyHidden>
        </>
      )}
      {variant === 'wordmark' && renderWordmark()}
    </Link>
  );
}


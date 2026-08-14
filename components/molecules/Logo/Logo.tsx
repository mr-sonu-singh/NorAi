"use client";

import React, { useId, useEffect } from 'react';
import { Link } from '@/components/atoms/Link';
import { VisuallyHidden } from '@/components/foundation/VisuallyHidden';
import { cn } from '@/lib/utils';
import { LogoProps, LogoSize } from './Logo.types';
import { useBackground } from '@/providers/BackgroundProvider';
import Image from 'next/image';

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
  disableBackground = false,
  showWordmark = true,
  ...props
}: LogoProps) {
  const { container, symbol, text } = sizeMap[size];
  const rawId = useId();
  const gradientId = `norai-logo-grad-${rawId.replace(/:/g, '')}`;

  const setBackground = useBackground();

  const imagePath = props.imageSrc ?? '/images/brand-logo.png';

  useEffect(() => {
    if (disableBackground) return;

    const prev = getComputedStyle(document.documentElement).getPropertyValue('--site-bg') || '';

    // subtle gradient based on the logo's core blue / purple palette
    const logoBg =
      'linear-gradient(135deg, rgba(46,91,255,0.08) 0%, rgba(124,58,237,0.06) 50%, rgba(58,123,255,0.02) 100%)';

    setBackground(logoBg);
    return () => setBackground(prev || null);
  }, [setBackground, disableBackground]);

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
          <stop offset="0%" stopColor="var(--accent-mono)" />
          <stop offset="50%" stopColor="var(--accent-500)" />
          <stop offset="100%" stopColor="var(--accent-blue)" />
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
      <span className="text-primary-800">Nor</span>
      <span
        className="bg-clip-text text-transparent"
        style={{ backgroundImage: 'linear-gradient(90deg, var(--accent-500), var(--brand-purple), var(--accent-mono))' }}
      >
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
        'inline-flex items-center hover:opacity-90 transition-opacity duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-500)] focus-visible:ring-offset-2 rounded-sm',
        container,
        className,
      )}
      data-testid="logo-molecule"
      {...props}
    >
      {variant === 'full' && (
        <>
          {props.useImage ? (
            <Image src={imagePath} alt="NorAI" width={120} height={36} className={cn('inline-block shrink-0', symbol)} />
          ) : (
            renderSymbol()
          )}
          {showWordmark && renderWordmark()}
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
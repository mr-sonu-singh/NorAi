import React from 'react';
import { Link } from '@/components/atoms/Link';
import { VisuallyHidden } from '@/components/foundation/VisuallyHidden';
import { Text } from '@/components/foundation/Text';
import { cn } from '@/lib/utils';
import { LogoProps, LogoSize } from './Logo.types';

const sizeMap: Record<LogoSize, { container: string; symbol: string; text: string }> = {
  S: {
    container: 'h-6 gap-2',
    symbol: 'w-6 h-6',
    text: 'text-body-sm font-bold tracking-tight',
  },
  M: {
    container: 'h-8 gap-2.5',
    symbol: 'w-8 h-8',
    text: 'text-body-md font-bold tracking-tight',
  },
  L: {
    container: 'h-10 gap-3',
    symbol: 'w-10 h-10',
    text: 'text-body-lg font-bold tracking-tight',
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

  const renderSymbol = () => (
    <svg
      className={cn('inline-block shrink-0 fill-current text-accent', symbol)}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 2L4 9V23L16 30L28 23V9L16 2Z"
        className="stroke-accent"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="5" className="fill-accent" />
    </svg>
  );

  const renderWordmark = () => (
    <Text as="span" className={cn('text-primary font-mono select-none', text)}>
      Nor<span className="text-accent">AI</span>
    </Text>
  );

  return (
    <Link
      href={href}
      variant="unstyled"
      aria-label={ariaLabel}
      className={cn(
        'inline-flex items-center hover:opacity-90 transition-opacity duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm',
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

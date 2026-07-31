'use client';

import React from 'react';
import Image from 'next/image';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Badge } from '@/components/atoms/Badge';
import { Tag } from '@/components/atoms/Tag';
import { Skeleton } from '@/components/atoms/Skeleton';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { BlogCardProps } from './BlogCard.types';

export function BlogCard({
  title,
  excerpt,
  href,
  image,
  meta,
  category,
  variant = 'Default',
  pending = false,
}: BlogCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isCompact = variant === 'Compact';

  if (pending) {
    return (
      <div className="p-6 bg-elevated border border-primary-200 rounded-lg space-y-4">
        <Skeleton className="w-full h-48 rounded-md" />
        <Skeleton className="w-1/3 h-4" />
        <Skeleton className="w-3/4 h-6" />
        <Skeleton className="w-full h-12" />
      </div>
    );
  }

  return (
    <a
      href={href}
      className={cn(
        'group block bg-elevated border border-primary-200 rounded-lg overflow-hidden transition-all duration-fast',
        !prefersReducedMotion && 'hover:-translate-y-1 hover:shadow-lg hover:border-primary-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        isCompact ? 'p-4' : 'p-6 space-y-4',
      )}
      data-testid="blog-card-organism"
      data-variant={variant}
    >
      {image && (
        <div className="relative w-full h-48 overflow-hidden rounded-md bg-primary-100 mb-4" style={{ position: 'relative', height: '12rem' }}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-normal group-hover:scale-105"
          />
        </div>
      )}

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          {category && <Tag variant="accent">{category}</Tag>}
          <Badge variant="neutral">{meta}</Badge>
        </div>

        <Heading
          as="h3"
          variant={isCompact ? 'heading-sm' : 'heading-md'}
          className="font-bold text-primary-900 group-hover:text-accent transition-colors duration-fast line-clamp-2"
        >
          {title}
        </Heading>

        <Text
          variant="body-sm"
          className="text-primary-600 line-clamp-3"
        >
          {excerpt}
        </Text>
      </div>
    </a>
  );
}

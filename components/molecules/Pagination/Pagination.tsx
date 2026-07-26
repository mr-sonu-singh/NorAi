'use client';

import React from 'react';
import { Button } from '@/components/atoms/Button';
import { IconButton } from '@/components/atoms/IconButton';
import { cn } from '@/lib/utils';
import { PaginationProps } from './Pagination.types';

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
  ...props
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const totalNumbers = siblingCount * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages <= totalBlocks) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    const startPage = Math.max(2, currentPage - siblingCount);
    const endPage = Math.min(totalPages - 1, currentPage + siblingCount);

    pages.push(1);

    if (startPage > 2) {
      pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      pages.push('...');
    }

    pages.push(totalPages);

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav
      aria-label="Pagination Navigation"
      className={cn('inline-flex items-center gap-1.5', className)}
      data-testid="pagination-molecule"
      {...props}
    >
      <IconButton
        icon="chevron-left"
        size="sm"
        variant="ghost"
        disabled={currentPage <= 1}
        aria-label="Previous Page"
        onClick={() => onPageChange(currentPage - 1)}
      />

      <div className="flex items-center gap-1">
        {pages.map((page, index) => {
          if (typeof page === 'string') {
            return (
              <span key={`dots-${index}`} className="px-2 text-primary-400 text-body-sm select-none">
                {page}
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <Button
              key={page}
              variant={isActive ? 'primary' : 'ghost'}
              size="sm"
              aria-current={isActive ? 'page' : undefined}
              onClick={() => onPageChange(page)}
              className="w-8 h-8 p-0 justify-center"
            >
              {page}
            </Button>
          );
        })}
      </div>

      <IconButton
        icon="chevron-right"
        size="sm"
        variant="ghost"
        disabled={currentPage >= totalPages}
        aria-label="Next Page"
        onClick={() => onPageChange(currentPage + 1)}
      />
    </nav>
  );
}

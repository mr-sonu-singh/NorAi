'use client';

import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { Icon } from '@/components/atoms/Icon';
import { Badge } from '@/components/atoms/Badge';
import { VisuallyHidden } from '@/components/foundation/VisuallyHidden';
import { EmptyState } from '@/components/molecules/EmptyState';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { ComparisonTableProps, ComparisonCellValue } from './ComparisonTable.types';

export function ComparisonTable({
  heading,
  columns = [],
  rows = [],
  variant = 'FeatureComparison',
}: ComparisonTableProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldAnimate = !prefersReducedMotion;

  const renderCellContent = (value: ComparisonCellValue | undefined) => {
    if (value === undefined || value === false) {
      return (
        <div className="flex items-center justify-center gap-2 text-primary-400">
          <Icon name="x" size="sm" aria-hidden="true" />
          <VisuallyHidden>Not included</VisuallyHidden>
        </div>
      );
    }

    if (value === true) {
      return (
        <div className="flex items-center justify-center gap-2 text-accent font-semibold">
          <Icon name="check" size="sm" aria-hidden="true" />
          <VisuallyHidden>Included</VisuallyHidden>
        </div>
      );
    }

    return <Text variant="body-sm" className="font-medium text-primary-800">{value}</Text>;
  };

  return (
    <div ref={ref}>
      <Section
        variant="default"
        className={cn(
          'relative py-16 lg:py-24 transition-all duration-normal',
          shouldAnimate && !isRevealed && 'opacity-0 translate-y-4',
          shouldAnimate && isRevealed && 'opacity-100 translate-y-0',
        )}
        data-testid="comparison-table-organism"
        data-variant={variant}
        data-revealed={isRevealed}
      >
        <Container size="default">
          {heading && (
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Heading as="h2" variant="heading-xl" className="text-primary-900 font-bold tracking-tight">
                {heading}
              </Heading>
            </div>
          )}

          {rows.length === 0 ? (
            <EmptyState
              title="No Comparison Features"
              description="Comparison details are currently unavailable."
              icon="layers"
            />
          ) : (
            <div className="w-full overflow-x-auto border border-primary-200 rounded-lg shadow-sm">
              <table className="w-full text-left border-collapse min-w-full">
                <thead>
                  <tr className="bg-primary-50 border-b border-primary-200">
                    <th
                      scope="col"
                      className="sticky left-0 bg-primary-50 p-4 w-48 font-semibold text-primary-900 z-10 border-r border-primary-200"
                    >
                      Features / Tiers
                    </th>
                    {columns.map((col) => (
                      <th
                        key={col.id}
                        scope="col"
                        className={cn(
                          'p-4 text-center font-bold text-primary-900 w-36',
                          col.highlighted && 'bg-accent-50 text-accent',
                        )}
                      >
                        <div className="flex flex-col items-center gap-1">
                          <span>{col.label}</span>
                          {col.highlighted && (
                            <Badge variant="accent" size="sm">
                              Popular
                            </Badge>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-200 bg-page">
                  {rows.map((row) => (
                    <tr key={row.id} className="hover:bg-primary-50 transition-colors duration-fast">
                      <th
                        scope="row"
                        className="sticky left-0 bg-page p-4 font-medium text-primary-900 z-10 border-r border-primary-200 shadow-sm"
                      >
                        {row.label}
                      </th>
                      {columns.map((col) => (
                        <td
                          key={`${row.id}-${col.id}`}
                          className={cn(
                            'p-4 text-center',
                            col.highlighted && 'bg-accent-50',
                          )}
                        >
                          {renderCellContent(row.values[col.id])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}

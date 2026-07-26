import React from 'react';
import { Icon } from '@/components/atoms/Icon';
import { Text } from '@/components/foundation/Text';
import { cn } from '@/lib/utils';
import { FormErrorProps } from './FormError.types';

export function FormError({ message, id, className, ...props }: FormErrorProps) {
  if (!message) return null;

  return (
    <div
      id={id}
      role="alert"
      aria-live="polite"
      className={cn('inline-flex items-center gap-1.5 text-error text-body-xs mt-1', className)}
      data-testid="form-error-molecule"
      {...props}
    >
      <Icon name="alert-circle" size="xs" className="shrink-0 text-error" aria-hidden="true" />
      <Text as="span" className="text-body-xs text-error font-medium">
        {message}
      </Text>
    </div>
  );
}

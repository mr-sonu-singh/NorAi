import React from 'react';
import { Icon } from '@/components/atoms/Icon';
import { IconButton } from '@/components/atoms/IconButton';
import { Heading } from '@/components/foundation/Heading';
import { Text } from '@/components/foundation/Text';
import { cn } from '@/lib/utils';
import { AlertProps, AlertSeverity } from './Alert.types';

const severityMap: Record<
  AlertSeverity,
  { icon: string; bg: string; border: string; text: string; iconColor: string }
> = {
  info: {
    icon: 'info',
    bg: 'bg-primary-50',
    border: 'border-primary-200',
    text: 'text-primary',
    iconColor: 'text-accent',
  },
  success: {
    icon: 'check-circle',
    bg: 'bg-success/10',
    border: 'border-success/30',
    text: 'text-primary',
    iconColor: 'text-success',
  },
  warning: {
    icon: 'alert-triangle',
    bg: 'bg-warning/10',
    border: 'border-warning/30',
    text: 'text-primary',
    iconColor: 'text-warning',
  },
  error: {
    icon: 'alert-circle',
    bg: 'bg-error/10',
    border: 'border-error/30',
    text: 'text-primary',
    iconColor: 'text-error',
  },
};

export function Alert({
  severity = 'info',
  title,
  message,
  dismissible = false,
  onDismiss,
  className,
  ...props
}: AlertProps) {
  const config = severityMap[severity];
  const isCritical = severity === 'error' || severity === 'warning';

  return (
    <div
      role={isCritical ? 'alert' : 'status'}
      aria-live={isCritical ? 'assertive' : 'polite'}
      className={cn(
        'flex items-start gap-3 p-4 rounded-default border w-full',
        config.bg,
        config.border,
        className,
      )}
      data-testid="alert-molecule"
      {...props}
    >
      <Icon
        name={config.icon}
        size="md"
        className={cn('shrink-0 mt-0.5', config.iconColor)}
        aria-hidden="true"
      />

      <div className="flex-1 min-w-0">
        {title && (
          <Heading as="h6" variant="heading-xs" className={cn('font-semibold mb-1 text-body-md', config.text)}>
            {title}
          </Heading>
        )}
        <Text as="div" className={cn('text-body-sm leading-relaxed', config.text)}>
          {message}
        </Text>
      </div>

      {(dismissible || onDismiss) && (
        <IconButton
          icon="x"
          size="sm"
          variant="ghost"
          aria-label="Dismiss alert"
          onClick={onDismiss}
          className="shrink-0 -mr-1 -mt-1"
        />
      )}
    </div>
  );
}

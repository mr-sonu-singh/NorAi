import React from 'react';
import { Icon } from '@/components/atoms/Icon';
import { Button } from '@/components/atoms/Button';
import { IconButton } from '@/components/atoms/IconButton';
import { Text } from '@/components/foundation/Text';
import { cn } from '@/lib/utils';
import { ToastProps, ToastSeverity } from './Toast.types';

const severityMap: Record<ToastSeverity, { icon: string; iconColor: string }> = {
  info: { icon: 'info', iconColor: 'text-accent' },
  success: { icon: 'check-circle', iconColor: 'text-success' },
  warning: { icon: 'alert-triangle', iconColor: 'text-warning' },
  error: { icon: 'alert-circle', iconColor: 'text-error' },
};

export function Toast({
  severity = 'info',
  title,
  message,
  actionLabel,
  onAction,
  onDismiss,
  className,
  ...props
}: ToastProps) {
  const { icon, iconColor } = severityMap[severity];
  const isCritical = severity === 'error' || severity === 'warning';

  return (
    <div
      role={isCritical ? 'alert' : 'status'}
      aria-live={isCritical ? 'assertive' : 'polite'}
      className={cn(
        'inline-flex items-center gap-3 p-3.5 bg-elevated border border-primary-200 shadow-xl rounded-default max-w-md w-full',
        className,
      )}
      data-testid="toast-molecule"
      {...props}
    >
      <Icon name={icon} size="md" className={cn('shrink-0', iconColor)} aria-hidden="true" />

      <div className="flex-1 min-w-0">
        {title && (
          <Text as="p" className="text-body-sm font-semibold text-primary">
            {title}
          </Text>
        )}
        <Text as="p" className="text-body-xs text-primary-400">
          {message}
        </Text>
      </div>

      {actionLabel && (
        <Button variant="ghost" size="sm" onClick={onAction} className="shrink-0 text-accent">
          {actionLabel}
        </Button>
      )}

      {onDismiss && (
        <IconButton
          icon="x"
          size="sm"
          variant="ghost"
          aria-label="Close notification"
          onClick={onDismiss}
          className="shrink-0 text-primary-400"
        />
      )}
    </div>
  );
}

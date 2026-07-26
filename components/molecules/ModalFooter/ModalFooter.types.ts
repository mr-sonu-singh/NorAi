import React from 'react';

export type ModalFooterAlign = 'start' | 'end' | 'between';

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  align?: ModalFooterAlign;
  className?: string;
  children?: React.ReactNode;
}

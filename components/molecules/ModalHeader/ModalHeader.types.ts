import React from 'react';

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  onClose?: () => void;
  id?: string;
  className?: string;
}

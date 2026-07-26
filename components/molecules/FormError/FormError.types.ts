import React from 'react';

export interface FormErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
  id?: string;
  className?: string;
}

import React from 'react';

export interface FormHintProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text?: string;
  id?: string;
  className?: string;
}

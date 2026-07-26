import React from 'react';

export interface NewsletterFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  placeholder?: string;
  buttonText?: string;
  disabled?: boolean;
  loading?: boolean;
  error?: string;
  successMessage?: string;
  onSubmitEmail?: (email: string) => void | Promise<void>;
  className?: string;
}

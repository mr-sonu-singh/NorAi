'use client';

import React, { useState } from 'react';
import { IconButton } from '@/components/atoms/IconButton';
import { InputGroup } from '../InputGroup';
import { PasswordFieldProps } from './PasswordField.types';

export function PasswordField({
  showToggle = true,
  className,
  disabled,
  ...props
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <InputGroup
      type={showPassword ? 'text' : 'password'}
      disabled={disabled}
      trailing={
        showToggle ? (
          <IconButton
            icon={showPassword ? 'eye-off' : 'eye'}
            size="sm"
            variant="ghost"
            disabled={disabled}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            aria-pressed={showPassword}
            onClick={toggleVisibility}
          />
        ) : undefined
      }
      className={className}
      data-testid="password-field-molecule"
      {...props}
    />
  );
}

'use client';

import React, { useState } from 'react';
import { Icon } from '@/components/atoms/Icon';
import { IconButton } from '@/components/atoms/IconButton';
import { InputGroup } from '../InputGroup';
import { SearchFieldProps } from './SearchField.types';

export function SearchField({
  value: controlledValue,
  placeholder = 'Search...',
  onChange,
  onClear,
  onSubmit,
  className,
  ...props
}: SearchFieldProps) {
  const [internalValue, setInternalValue] = useState('');
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(val);
    }
    onChange?.(val);
  };

  const handleClear = () => {
    if (controlledValue === undefined) {
      setInternalValue('');
    }
    onChange?.('');
    onClear?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit?.(value);
    } else if (e.key === 'Escape' && value) {
      handleClear();
    }
  };

  return (
    <InputGroup
      type="search"
      role="searchbox"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      leading={<Icon name="search" size="sm" />}
      trailing={
        value ? (
          <IconButton
            icon="x"
            size="sm"
            variant="ghost"
            aria-label="Clear search"
            onClick={handleClear}
          />
        ) : undefined
      }
      className={className}
      data-testid="search-field-molecule"
      {...props}
    />
  );
}

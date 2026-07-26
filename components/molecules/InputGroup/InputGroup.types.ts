import React from 'react';
import { InputProps } from '@/components/atoms/Input/Input.types';

export interface InputGroupProps extends InputProps {
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}

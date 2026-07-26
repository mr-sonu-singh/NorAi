'use client';

import React from 'react';
import { MotionConfig } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? 'always' : 'user'}>{children}</MotionConfig>
  );
}

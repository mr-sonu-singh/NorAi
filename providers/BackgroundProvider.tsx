"use client";

import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';

type BackgroundSetter = (value?: string | null) => void;

const BackgroundContext = createContext<BackgroundSetter>(() => {});

export function BackgroundProvider({ children }: { children: React.ReactNode }) {
  const [bg, setBg] = useState<string | undefined>(undefined);

  const setBackground: BackgroundSetter = useCallback((value) => {
    setBg(value ?? undefined);
  }, []);

  useEffect(() => {
    if (bg) {
      document.documentElement.style.setProperty('--site-bg', bg);
    } else {
      document.documentElement.style.removeProperty('--site-bg');
    }
  }, [bg]);

  return <BackgroundContext.Provider value={setBackground}>{children}</BackgroundContext.Provider>;
}

export const useBackground = () => useContext(BackgroundContext);

'use client';

import React, { createContext, useContext, useEffect } from 'react';

const ThemeTokenContext = createContext<boolean>(true);

export function ThemeTokenProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme-tokens', 'true');
  }, []);

  return <ThemeTokenContext.Provider value={true}>{children}</ThemeTokenContext.Provider>;
}

export const useThemeTokens = () => useContext(ThemeTokenContext);

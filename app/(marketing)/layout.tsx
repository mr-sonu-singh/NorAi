import React from 'react';
import { Header } from '@/components/organisms/sections/Header';
import { Footer } from '@/components/organisms/sections/Footer';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header sticky />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
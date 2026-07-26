import React from 'react';
import { Container } from '@/components/foundation/Container';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Landmark Placeholder (Organism reserved for Phase 3) */}
      <nav aria-label="Main navigation" className="w-full border-b border-primary-100 bg-bg-elevated py-4">
        <Container size="default">
          <div className="text-body-sm text-primary-400">
            Header Landmark Placeholder (Phase 3)
          </div>
        </Container>
      </nav>

      <main id="main-content" className="flex-1">
        <Container size="default">{children}</Container>
      </main>

      {/* Footer Landmark Placeholder (Organism reserved for Phase 3) */}
      <footer className="w-full border-t border-primary-100 bg-bg-dark text-white py-8">
        <Container size="default">
          <div className="text-body-sm text-primary-300">
            Footer Landmark Placeholder (Phase 3)
          </div>
        </Container>
      </footer>
    </div>
  );
}

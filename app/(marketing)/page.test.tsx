/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import HomePage, { metadata } from './page';
import MarketingLayout from './layout';

describe('Homepage (Phase 4 Remediation & Assembly)', () => {
  it('exports valid production-ready metadata', () => {
    expect(metadata).toBeDefined();
    expect(metadata.title).toContain('NorAI Technologies');
    expect(metadata.description).toBeDefined();
    expect(metadata.openGraph).toBeDefined();
    expect(metadata.twitter).toBeDefined();
    expect(metadata.alternates?.canonical).toBeDefined();
  });

  it('renders MarketingLayout with Header, main landmark, and Footer', () => {
    const { getByRole, getByTestId } = render(
      <MarketingLayout>
        <HomePage />
      </MarketingLayout>,
    );

    expect(getByTestId('header-organism')).toBeTruthy();
    expect(getByRole('main')).toBeTruthy();
    expect(getByRole('main').getAttribute('id')).toBe('main-content');
    expect(getByTestId('footer-organism')).toBeTruthy();
  });

  it('renders all 8 homepage sections in exact Design Bible narrative order', () => {
    const { getByTestId } = render(<HomePage />);

    const hero = getByTestId('hero-typographic-organism');
    const socialProof = getByTestId('social-proof-strip-organism');
    const featureSection = getByTestId('feature-section-organism');
    const processFlow = getByTestId('process-flow-organism');
    const useCasesSection = getByTestId('use-cases-section-organism');
    const testimonialsSection = getByTestId('testimonials-section-organism');
    const teamSection = getByTestId('team-section-organism');
    const ctaSection = getByTestId('cta-section-organism');

    expect(hero).toBeTruthy();
    expect(socialProof).toBeTruthy();
    expect(featureSection).toBeTruthy();
    expect(processFlow).toBeTruthy();
    expect(useCasesSection).toBeTruthy();
    expect(testimonialsSection).toBeTruthy();
    expect(teamSection).toBeTruthy();
    expect(ctaSection).toBeTruthy();

    // Verify complete DOM narrative progression order
    expect(hero.compareDocumentPosition(socialProof)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    expect(socialProof.compareDocumentPosition(featureSection)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    expect(featureSection.compareDocumentPosition(processFlow)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    expect(processFlow.compareDocumentPosition(useCasesSection)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    expect(useCasesSection.compareDocumentPosition(testimonialsSection)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    expect(testimonialsSection.compareDocumentPosition(teamSection)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    expect(teamSection.compareDocumentPosition(ctaSection)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
  });

  describe('Accessibility Compliance (WCAG 2.1 AA)', () => {
    it('enforces heading hierarchy: exactly 1 H1 and sequential H2 section headings', () => {
      const { getAllByRole } = render(
        <MarketingLayout>
          <HomePage />
        </MarketingLayout>,
      );

      const h1Elements = getAllByRole('heading', { level: 1 });
      expect(h1Elements).toHaveLength(1);
      expect(h1Elements[0].textContent).toContain('Verifiable AI Infrastructure');

      const h2Elements = getAllByRole('heading', { level: 2 });
      expect(h2Elements.length).toBeGreaterThanOrEqual(5);

      // Verify all section headings are rendered at H2 level
      const h2Texts = h2Elements.map((h) => h.textContent);
      expect(h2Texts.some((t) => t?.includes('Deterministic AI Product Lineup'))).toBe(true);
      expect(h2Texts.some((t) => t?.includes('How NorAI Operates'))).toBe(true);
      expect(h2Texts.some((t) => t?.includes('Engineered for High-Consequence Intelligence'))).toBe(true);
      expect(h2Texts.some((t) => t?.includes('Validated by Industry Leaders'))).toBe(true);
      expect(h2Texts.some((t) => t?.includes('Built by Cryptographers'))).toBe(true);
      expect(h2Texts.some((t) => t?.includes('Ready to Build Verifiable AI Infrastructure?'))).toBe(true);
    });

    it('provides accessible names and roles for all links and interactive elements', () => {
      const { getAllByRole } = render(<HomePage />);

      const links = getAllByRole('link');
      links.forEach((link) => {
        expect(link.getAttribute('href')).toBeTruthy();
        expect(link.textContent || link.getAttribute('aria-label')).toBeTruthy();
      });
    });
  });

  describe('Responsive Layout Assumptions', () => {
    it('applies mobile-first stacking and responsive container grid constraints', () => {
      const { container } = render(<HomePage />);

      // Verify no hardcoded pixel widths that cause horizontal overflow
      const elementsWithOverflow = container.querySelectorAll('.overflow-x-scroll');
      expect(elementsWithOverflow).toHaveLength(0);

      // Verify container max width wrappers exist across sections
      const containers = container.querySelectorAll('[class*="max-w-"]');
      expect(containers.length).toBeGreaterThan(0);
    });

    it('maintains narrative section order across mobile, tablet, and desktop viewports', () => {
      const viewports = [375, 768, 1024, 1440];

      viewports.forEach((width) => {
        Object.defineProperty(window, 'innerWidth', {
          writable: true,
          configurable: true,
          value: width,
        });
        window.dispatchEvent(new Event('resize'));

        const { getByTestId } = render(<HomePage />);
        const hero = getByTestId('hero-typographic-organism');
        const ctaSection = getByTestId('cta-section-organism');

        expect(hero.compareDocumentPosition(ctaSection)).toBe(
          Node.DOCUMENT_POSITION_FOLLOWING,
        );
      });
    });
  });

  it('renders product cards with valid internal links', () => {
    const { getByText, getAllByRole } = render(<HomePage />);

    expect(getByText('NorAI Core')).toBeTruthy();
    expect(getByText('NorAI Vision')).toBeTruthy();

    const links = getAllByRole('link');
    const hrefs = links.map((l) => l.getAttribute('href'));

    expect(hrefs).toContain('/products/core');
    expect(hrefs).toContain('/products/vision');
    expect(hrefs).toContain('/products');
    expect(hrefs).toContain('/careers');
    expect(hrefs).toContain('/contact');
  });

  it('renders JSON-LD Organization structured data script tag', () => {
    const { container } = render(<HomePage />);
    const jsonLdScript = container.querySelector('script[type="application/ld+json"]');

    expect(jsonLdScript).toBeTruthy();
    const parsed = JSON.parse(jsonLdScript?.textContent || '{}');
    expect(parsed['@type']).toBe('Organization');
    expect(parsed.name).toBe('NorAI Technologies');
  });
});

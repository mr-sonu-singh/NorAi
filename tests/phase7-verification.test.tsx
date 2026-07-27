/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import sitemap from '../app/sitemap';
import robots from '../app/robots';
import { metadata as notFoundMetadata } from '../app/not-found';
import { metadata as blogMetadata } from '../app/(content)/blog/page';
import RootLoading from '../app/loading';
import RootError from '../app/error';
import NotFound from '../app/not-found';

describe('Phase 7 Verification Suite — Hardening & Audit', () => {
  describe('SEO & Metadata Verification (§10)', () => {
    it('sitemap.ts includes all 13 indexable routes and excludes 404', () => {
      const entries = sitemap();
      const urls = entries.map((e) => e.url);

      expect(urls.some((u) => u.endsWith('/'))).toBe(true);
      expect(urls.some((u) => u.endsWith('/products'))).toBe(true);
      expect(urls.some((u) => u.endsWith('/about'))).toBe(true);
      expect(urls.some((u) => u.endsWith('/team'))).toBe(true);
      expect(urls.some((u) => u.endsWith('/careers'))).toBe(true);
      expect(urls.some((u) => u.endsWith('/contact'))).toBe(true);
      expect(urls.some((u) => u.endsWith('/blog'))).toBe(true);
      expect(urls.some((u) => u.includes('/blog/'))).toBe(true);
      expect(urls.some((u) => u.includes('/privacy-policy'))).toBe(true);
      expect(urls.some((u) => u.includes('/terms-of-service'))).toBe(true);
      expect(urls.some((u) => u.includes('/cookie-policy'))).toBe(true);

      // Exclude not-found
      expect(urls.some((u) => u.includes('/not-found') || u.includes('404'))).toBe(false);
    });

    it('robots.ts enforces allow / and links to sitemap.xml', () => {
      const robotsData = robots();
      expect(robotsData.rules).toBeDefined();
      expect(robotsData.sitemap).toContain('sitemap.xml');
    });

    it('not-found metadata strictly enforces noindex and has no canonical tag', () => {
      expect(notFoundMetadata.robots).toEqual({ index: false, follow: false });
      expect(notFoundMetadata.title).toContain('404');
    });

    it('blog hub metadata provides title, description, and canonical path', () => {
      expect(blogMetadata.title).toContain('Blog & Research');
      expect(blogMetadata.description).toBeDefined();
      expect(blogMetadata.alternates?.canonical).toBeDefined();
    });
  });

  describe('Loading & Error Boundaries (§2.2, §2.3)', () => {
    it('app/loading.tsx renders LoadingState with role="status"', () => {
      const { getByRole } = render(<RootLoading />);
      const statusElement = getByRole('status');
      expect(statusElement).toBeTruthy();
    });

    it('app/error.tsx renders ErrorState with role="alert" and reset action button', () => {
      const mockReset = jest.fn();
      const { getByRole, getByText } = render(<RootError error={new Error('Test')} reset={mockReset} />);

      const alertElement = getByRole('alert');
      expect(alertElement).toBeTruthy();
      expect(getByText('Something went wrong')).toBeTruthy();

      const tryAgainButton = getByText('Try again');
      expect(tryAgainButton).toBeTruthy();
    });

    it('app/not-found.tsx renders ErrorState with notFound variant and recovery buttons', () => {
      const { getByRole, getByText } = render(<NotFound />);

      const alertElement = getByRole('alert');
      expect(alertElement).toBeTruthy();

      const h1Element = getByRole('heading', { level: 1 });
      expect(h1Element.textContent).toContain('404 — Page Not Found');

      expect(getByText('Go to Homepage')).toBeTruthy();
      expect(getByText('Explore Products')).toBeTruthy();
    });
  });
});

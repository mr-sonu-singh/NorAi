/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { render } from '@testing-library/react';
import LegalPolicyPage, { generateStaticParams, generateMetadata } from './page';

describe('Legal Policy Page (/(legal)/[policy])', () => {
  it('generates static params for all three legal policies', () => {
    const params = generateStaticParams();
    expect(params).toHaveLength(3);
    expect(params).toContainEqual({ policy: 'privacy-policy' });
    expect(params).toContainEqual({ policy: 'terms-of-service' });
    expect(params).toContainEqual({ policy: 'cookie-policy' });
  });

  it('generates metadata for valid policy', async () => {
    const meta = await generateMetadata({ params: Promise.resolve({ policy: 'privacy-policy' }) });
    expect(meta).toBeDefined();
    expect(meta.title).toContain('Privacy Policy');
  });

  it('renders legal policy page with heading and sections', async () => {
    const Component = await LegalPolicyPage({ params: Promise.resolve({ policy: 'privacy-policy' }) });
    const { getByRole, getByText } = render(Component);

    const h1 = getByRole('heading', { level: 1 });
    expect(h1.textContent).toBe('Privacy Policy');
    expect(getByText('1. Information We Collect')).toBeTruthy();
  });
});

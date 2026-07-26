import { z } from 'zod';

export const seoMetadataSchema = z.object({
  title: z.string().max(60, 'Title should be under 60 characters'),
  description: z.string().max(160, 'Description should be under 160 characters'),
  canonicalUrl: z.string().url(),
  ogImage: z.string().optional(),
  noIndex: z.boolean().default(false),
});

export type SEOMetadata = z.infer<typeof seoMetadataSchema>;

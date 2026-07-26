import { z } from 'zod';

export const blogFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  author: z.string(),
  category: z.string(),
  slug: z.string(),
  ogImage: z.string().optional(),
});

export const productFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(['Live', 'Beta', 'Coming Soon']),
  slug: z.string(),
  ogImage: z.string().optional(),
});

export const legalFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  lastUpdated: z.string(),
  slug: z.string(),
});

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;
export type ProductFrontmatter = z.infer<typeof productFrontmatterSchema>;
export type LegalFrontmatter = z.infer<typeof legalFrontmatterSchema>;

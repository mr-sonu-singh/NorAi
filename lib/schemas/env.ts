import { z } from 'zod';

export const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_ANALYTICS_ID: z.string().optional(),
  CONTACT_SALES_EMAIL: z.string().email().default('sales@noraitech.com'),
  CONTACT_CAREERS_EMAIL: z.string().email().default('careers@noraitech.com'),
  CONTACT_PRESS_EMAIL: z.string().email().default('press@noraitech.com'),
});

export type Env = z.infer<typeof envSchema>;

export function validateEnv(): Env {
  const result = envSchema.safeParse({
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
    CONTACT_SALES_EMAIL: process.env.CONTACT_SALES_EMAIL,
    CONTACT_CAREERS_EMAIL: process.env.CONTACT_CAREERS_EMAIL,
    CONTACT_PRESS_EMAIL: process.env.CONTACT_PRESS_EMAIL,
  });

  if (!result.success) {
    console.error('Environment validation failed:', result.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
  }

  return result.data;
}

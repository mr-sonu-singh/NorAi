import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { PRODUCTS_DATA } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes = ['', '/products', '/about', '/team', '/careers', '/contact'];
  const productRoutes = Object.keys(PRODUCTS_DATA).map((slug) => `/products/${slug}`);

  const allRoutes = [...staticRoutes, ...productRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/products') ? 0.9 : 0.8,
  }));
}

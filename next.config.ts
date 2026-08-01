import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;

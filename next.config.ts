import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hugotech.pe',
        pathname: '/wp-content/uploads/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 año
  },
  experimental: {
    optimizePackageImports: ['framer-motion', '@heroui/react'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          framerMotion: {
            test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
            name: 'framer-motion',
            priority: 30,
            reuseExistingChunk: true,
          },
          heroui: {
            test: /[\\/]node_modules[\\/](@heroui)[\\/]/,
            name: 'heroui',
            priority: 25,
            reuseExistingChunk: true,
          },
        },
      };
    }
    return config;
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
/** @type {import('next').NextConfig} */
const nextConfig = {
  // keep your existing settings:
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },

  // *** REQUIRED FOR STATIC EXPORT ***
  output: 'export',
  basePath: '/smehdim.github.io',
  assetPrefix: '/smehdim.github.io/',
  trailingSlash: true,
};

export default nextConfig;

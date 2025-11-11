import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['sonner', 'next-themes'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },

};

export default nextConfig;

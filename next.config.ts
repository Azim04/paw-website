import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,        
  },
  basePath: '/paw-website',
  assetPrefix: '/paw-website/',
  trailingSlash: true,
};

export default nextConfig;
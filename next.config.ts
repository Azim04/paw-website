import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? '/paw-website' : '',
  assetPrefix: isProduction ? '/paw-website/' : '',
  trailingSlash: true,
};

export default nextConfig;
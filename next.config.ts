import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "*.picsum.photos",   
      },
    ],
  },
  basePath: '/paw-website',
  assetPrefix: '/paw-website',
  trailingSlash: true,
};

export default nextConfig;
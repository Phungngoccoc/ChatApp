import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "i.imgur.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

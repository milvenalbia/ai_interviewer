import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslin: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

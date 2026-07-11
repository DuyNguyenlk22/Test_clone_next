import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    // Serve the downloaded assets as-is; the clone doesn't need on-the-fly optimization.
    unoptimized: true,
  },
};

export default nextConfig;

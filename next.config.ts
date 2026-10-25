import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json in the user profile confuses workspace-root inference.
  turbopack: { root: process.cwd() },
};

export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mahalaxmiinfra.in",
        pathname: "/images/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;

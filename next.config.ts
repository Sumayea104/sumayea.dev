import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // ✅ For blog images
      {
        protocol: "https",
        hostname: "media2.dev.to",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.dev.to",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dev-to-uploads.s3.amazonaws.com",
        pathname: "/**",
      },
      // ✅ For GitHub profile image
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
      // ✅ For GitHub avatars (if needed)
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }, // Allow any HTTPS image URL (user uploads)
    ],
    formats: ["image/avif", "image/webp"], // Serve modern formats for speed
    minimumCacheTTL: 3600, // Cache optimized images for 1 hour
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons", "@supabase/supabase-js"],
  },
};

export default nextConfig;

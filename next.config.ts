import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["macbook-air"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

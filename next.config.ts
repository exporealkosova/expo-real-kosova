import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // optional: restrict to your Cloudinary cloud name
        // pathname: "/dwinvxbiw/**",
      },
      {
        protocol: "https",
        hostname: "a6wxlnk8hx.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "c8fo83w525.ufs.sh",
      },
    ],
  },
};

export default nextConfig;

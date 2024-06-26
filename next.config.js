/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "utfs.io",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
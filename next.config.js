/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental : {
    serverActions : true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        // pathname: '/account123/**',
      },

      {
        protocol: "https",
        hostname: "s3-alpha.figma.com",
        port: "",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;

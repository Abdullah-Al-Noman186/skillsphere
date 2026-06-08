/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  serverExternalPackages: [
    "@better-auth/kysely-adapter",
    "kysely",
  ],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
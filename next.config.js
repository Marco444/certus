/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://ipfs.io/ipfs"],
  },
};

module.exports = nextConfig;

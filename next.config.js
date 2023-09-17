/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["t2-nft-marketplace.infura-ipfs.io", "infura-ipfs.io"]
  },
};

module.exports = nextConfig

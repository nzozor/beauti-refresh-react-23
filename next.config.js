/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cms.beautiskinclinic.com"],
    loader: "custom",
    path: "/",
  },
};

module.exports = nextConfig;

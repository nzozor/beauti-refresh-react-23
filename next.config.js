const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.beautiskinclinic.com",
      },
    ],
  },
};

module.exports = nextConfig;

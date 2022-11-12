const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.beautiskinclinic.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.beautiskinclinic.com",
      },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;

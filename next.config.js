/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack(config, { isServer }) {
    // Remove custom devtool settings that may cause issues in development
    if (!isServer) {
      // config.devtool = 'source-map'; // Avoid modifying devtool in development
    }
    return config;
  },
};

module.exports = nextConfig;

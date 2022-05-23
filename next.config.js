/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/user/Rhut-Virani',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

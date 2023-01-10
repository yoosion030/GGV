/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
};

module.exports = nextConfig;

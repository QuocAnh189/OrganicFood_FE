/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: process.env.API_URL
  },
  images: {
    domains: ['res.cloudinary.com']
  },
  webpack(config) {
    return config;
  }
};

export default nextConfig;

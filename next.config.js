/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'fonts.gstatic.com'],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  distDir: 'out',
  trailingSlash: false,
};

module.exports = nextConfig;

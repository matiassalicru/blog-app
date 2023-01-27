/** @type {import('next').NextConfig} */

const nextConfig = {
  // reactStrictMode: true,
  optimizeFonts: false,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig

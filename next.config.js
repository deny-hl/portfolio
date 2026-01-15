/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export" + "standalone",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

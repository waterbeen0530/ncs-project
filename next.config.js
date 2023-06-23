/** @type {import('next').NextConfig} */
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${BASE_URL}/:path*`,
      },
    ];
  },
};

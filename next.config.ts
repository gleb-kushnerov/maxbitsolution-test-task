import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://www.thecocktaildb.com/images/media/drink/**')],
  },
};

export default nextConfig;

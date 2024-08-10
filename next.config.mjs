/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true, 
    },
    pageExtensions: ['js', 'jsx'],
    experimental: {
      appDir: true, 
    },
    assetPrefix: '/My_Portfolio/', 
    basePath: '/My_Portfolio', 
  };
  
  export default nextConfig;
  
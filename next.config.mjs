/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx'],
    experimental: {
        appDir: true, // If you're using Next.js's app directory for routing, enable this flag
    },
};

export default nextConfig;

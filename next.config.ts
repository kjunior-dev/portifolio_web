/** @type {import('next').NextConfig} */
const nextConfig = {
    outputFileTracingRoot: process.cwd(),
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.licdn.com',
            },
        ],
    },
};

export default nextConfig;

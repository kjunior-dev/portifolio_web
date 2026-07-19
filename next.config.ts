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

    async rewrites() {
        return [
            {
                source: "/uploads/:path*",
                destination: `/api/uploads/:path*`,
            },
        ];
    },
};

export default nextConfig;

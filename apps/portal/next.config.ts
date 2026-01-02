import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
    output: 'standalone',
    outputFileTracingRoot: path.join(__dirname, '../../'),

    reactCompiler: true,

    experimental: {
        optimizePackageImports: ['@hewo/ui'],
    },
};

export default nextConfig;

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'host.docker.internal',
        port: '1337',
        pathname: '/uploads/**',
      },
      // 如果您部署到生产环境，也需要添加生产环境的域名配置
      // {
      //   protocol: 'https',
      //   hostname: 'your-strapi-production-domain.com',
      //   pathname: '/uploads/**',
      // },
    ],
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */
const repositoryBasePath = '/MY-Portfolio-MH'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: repositoryBasePath,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

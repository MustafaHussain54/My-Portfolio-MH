/** @type {import('next').NextConfig} */
// GitHub Pages serves this project below /MY-Portfolio-MH. Vercel serves it
// from the domain root and needs Next.js's default /_next asset paths.
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  ...(isGitHubPagesBuild
    ? {
        output: 'export',
        trailingSlash: true,
        basePath: '/MY-Portfolio-MH',
      }
    : {}),
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPagesBuild ? '/MY-Portfolio-MH' : '',
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Enables static export for GitHub Pages
  images: {
    unoptimized: true, // ✅ Fixes image loading issues
  },
  basePath: '/interactive-cv', // ✅ Set your GitHub repo name as basePath
  assetPrefix: '/interactive-cv/', // ✅ Prefix assets correctly
};

export default nextConfig;


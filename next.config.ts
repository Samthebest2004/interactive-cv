/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for deployment on GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
  basePath: '/interactive-cv', // Set this to match your GitHub repository name
  assetPrefix: '/interactive-cv/', // Ensures correct asset loading paths
};

export default nextConfig;

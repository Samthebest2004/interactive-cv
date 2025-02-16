/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // Fix for GitHub Pages image loading
  },
  basePath: "/interactive-cv", // Set to your repository name
  assetPrefix: "/interactive-cv/", // Prefix for static assets
};

export default nextConfig;

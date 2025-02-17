/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
  basePath: "/interactive-cv", // Must match EXACTLY your GitHub repo name (case-sensitive)
  assetPrefix: "/interactive-cv/", // Ensures assets load from /interactive-cv/...
  trailingSlash: true, // Adds a slash to every route (/about -> /about/)
};

export default nextConfig;

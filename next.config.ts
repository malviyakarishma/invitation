import type { NextConfig } from "next";

/**
 * GitHub Pages project sites live at username.github.io/<repo>/
 * Set automatically in CI when GITHUB_PAGES=true.
 */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "invitation";
const useBasePath = process.env.GITHUB_PAGES === "true";
const basePath = useBasePath ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  // Allow phone / LAN access to Next.js HMR in development
  allowedDevOrigins: ["192.168.29.154"],
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

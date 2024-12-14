import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  images: { unoptimized: true },
  assetPrefix: isProd ? "/Jung0x12.github.io/" : "",
  basePath: isProd ? "/Jung0x12.github.io" : "",
};

export default nextConfig;

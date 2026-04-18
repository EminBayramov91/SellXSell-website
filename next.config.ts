import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/approach",
        destination: "/meddic-implementation",
        permanent: true,
      },
      {
        source: "/advisory",
        destination: "/revenue-consulting-services",
        permanent: true,
      },
      {
        source: "/speaking",
        destination: "/sales-keynote-speaker",
        permanent: true,
      },
      {
        source: "/downloads",
        destination: "/sales-playbooks-resources",
        permanent: true,
      },
      {
        source: "/diagnostic",
        destination: "/sales-pipeline-diagnostic",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

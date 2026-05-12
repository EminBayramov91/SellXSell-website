import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactCompiler: isProduction,
  devIndicators: false,
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/approach",
        destination: "/revenue-operating-system-method",
        permanent: true,
      },
      {
        source: "/meddic-implementation",
        destination: "/revenue-operating-system-method",
        permanent: true,
      },
      {
        source: "/advisory",
        destination: "/executive-revenue-advisory",
        permanent: true,
      },
      {
        source: "/revenue-consulting-services",
        destination: "/executive-revenue-advisory",
        permanent: true,
      },
      {
        source: "/speaking",
        destination: "/revenue-keynote-speaker",
        permanent: true,
      },
      {
        source: "/sales-keynote-speaker",
        destination: "/revenue-keynote-speaker",
        permanent: true,
      },
      {
        source: "/downloads",
        destination: "/newsletter",
        permanent: true,
      },
      {
        source: "/downloads/:asset",
        destination: "/newsletter",
        permanent: true,
      },
      {
        source: "/downloads/thank-you",
        destination: "/newsletter",
        permanent: true,
      },
      {
        source: "/sales-playbooks-resources",
        destination: "/newsletter",
        permanent: true,
      },
      {
        source: "/revenue-playbooks-and-resources",
        destination: "/newsletter",
        permanent: true,
      },
      {
        source: "/diagnostic",
        destination: "/revenue-diagnostic-assessment",
        permanent: true,
      },
      {
        source: "/sales-pipeline-diagnostic",
        destination: "/revenue-diagnostic-assessment",
        permanent: true,
      },
      {
        source: "/sales-pipeline-audit",
        destination: "/revenue-diagnostic-assessment",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/revenue-operating-system-expert",
        permanent: true,
      },
      {
        source: "/sales-playbooks-resources/:asset",
        destination: "/newsletter",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  devIndicators: false,
  async redirects() {
    return [
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
        destination: "/revenue-playbooks-and-resources",
        permanent: true,
      },
      {
        source: "/downloads/:asset",
        destination: "/revenue-playbooks-and-resources/:asset",
        permanent: true,
      },
      {
        source: "/downloads/thank-you",
        destination: "/revenue-playbooks-and-resources/thank-you",
        permanent: true,
      },
      {
        source: "/sales-playbooks-resources",
        destination: "/revenue-playbooks-and-resources",
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
        destination: "/revenue-playbooks-and-resources/:asset",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

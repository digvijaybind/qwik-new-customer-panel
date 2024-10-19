const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimizer.push(new TerserPlugin());
    }

    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ["qwiklif.com"],
  },
  async rewrites() {
    return [
      {
        source: "/neonatal-and-pediatric-air-transfer-services",
        destination: "/subservices/neonatal-pediatric",
      },
      {
        source: "/ecmo-initiation-and-air-transfer-services",
        destination: "/subservices/ecmo-initiation",
      },
      {
        source: "/dedicated-air-ambulance",
        destination: "/subservices/dedicated-air-ambulance",
      },
      {
        source: "/international-patient-transfer",
        destination: "/subservices/international-patient-transfer",
      },
      {
        source: "/commercial-stretcher-transfer",
        destination: "/subservices/commercial-stretcher-transfer",
      },
    ];
  },
  trailingSlash: true,
  exportPathMap: async function (defaultPathMap) {
    return defaultPathMap;
  },
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});

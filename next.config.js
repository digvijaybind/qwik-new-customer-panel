const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimizer.push(new TerserPlugin());
    }

    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ['qwiklif.com'],
  },
};

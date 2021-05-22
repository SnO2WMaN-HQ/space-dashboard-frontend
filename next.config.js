const {i18n} = require('./next-i18next.config');

module.exports = {
  i18n,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  future: {
    webpack5: true,
  },
  images: {
    domains: ['pbs.twimg.com'],
  },
};

module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    API_GRAPHQL_JWT_SECRET: process.env.API_GRAPHQL_JWT_SECRET,
    API_GRAPHQL_ENDPOINT: process.env.API_GRAPHQL_ENDPOINT,

    TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
    TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
  },
  images: {
    domains: ['pbs.twimg.com'],
  },
};

const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const tsconfig = path.resolve(__dirname, '../tsconfig.json');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  // eslint-disable-next-line require-await
  webpackFinal: async (config) => {
    config.node = {
      ...config.node,
      fs: 'empty',
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      'next-i18next': 'react-i18next',
    };

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({configFile: tsconfig}),
    ];

    return config;
  },
};

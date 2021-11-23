const path = require('path');
const { webpackReactBaseConfigFactory } = require('../webpack.config');

const outputPath = path.join(__dirname, '/dist');
const tsconfigPath = path.resolve(__dirname, '../tsconfig.json');

// Construct base react config to reuse in storybook webpack config
const webpackReactBaseConfig = webpackReactBaseConfigFactory({
  outputPath,
  tsconfigPath,
});

module.exports = {
  // Define storybook stories pattern
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs'],

  /**
   * Allows changes to storybook webpack config.
   * Since storybook does not support typescript out of the box, the default react webpack
   * config is going to be merged with storybook's by pushing react default rules to storybook's.
   */
  webpackFinal: async (config) => {
    // Push module rules
    config.module.rules.push(...webpackReactBaseConfig.module.rules);

    // Push resolve extensions
    config.resolve.extensions.push(
      ...webpackReactBaseConfig.resolve.extensions
    );

    // No need to merge aliases since storybook does not use any. So just use the default
    config.resolve.alias = webpackReactBaseConfig.resolve.alias;

    config.resolve.alias['core-js/modules'] = path.resolve(
      __dirname,
      '..',
      'node_modules/core-js/modules'
    );

    // Webpack final config
    return config;
  },
};

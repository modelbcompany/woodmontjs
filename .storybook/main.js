// Webpack Configuration
const webpack = require('../webpack/webpack.config')

/**
 * @file Storybook Configuration
 * @see {@link https://woodmontjs.modelb.now.sh/docs/storybook-config}
 */

module.exports = {
  /**
   * Project addons.
   *
   * @see {@link https://storybook.js.org/docs/addons/introduction/}
   *
   * @property {Array<Object, String>} addons
   */
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    },
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
    '@storybook/addon-actions'
  ],

  /**
   * Project presets.
   *
   * @see {@link https://storybook.js.org/docs/presets/introduction/}
   *
   * @property {Array<Object, String>} presets
   */
  presets: [],

  /**
   * Stories paths to load.
   *
   * @property {string[]} stories
   */
  stories: [
    '../src/index.stories.mdx',
    '../src/services/**/*.stories.mdx',
    '../src/blocks/*.stories.mdx',
    '../src/components/**/**/stories/*.(stories|chapters).(js|mdx)'
  ],

  /**
   * Alters the Storybook Webpack configuration.
   *
   * This project uses Sass.
   *
   * @param param1.configType has a value of 'DEVELOPMENT' or 'PRODUCTION'.
   * 'PRODUCTION' is used when building the static version of storybook.
   *
   * @param {object} config - Base Webpack config
   * @param {object} param1 - Storybook config
   * @param {string} param1.configType - Storybook development environment
   * @returns {object} Webpack configuration
   */
  webpackFinal: async (config, { configType }) => {
    config.node = webpack.node
    webpack.module.rules.forEach(rule => config.module.rules.push(rule))

    return config
  }
}

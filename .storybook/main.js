/**
 * @file Storybook Configuration
 * @see {@link https://woodmontjs.modelb.now.sh/ref/storybook-config}
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
    config.module.rules.push(
      {
        test: /\.jsx?$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              ignore: [
                './node_modules/*',
                './public/*',
                './src/sass/*'
              ],
              plugins: [
                '@babel/plugin-proposal-export-default-from',
                '@babel/plugin-proposal-nullish-coalescing-operator',
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-proposal-throw-expressions'
              ],
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        ]
      }
    )

    config.module.rules.push(
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {

              config: {
                path: './postcss.config.js'
              },
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import ../../../sass/global.sass',
              sassOptions: {
                includePaths: ['./src/components/**/**/*.sass'],
                indentedSyntax: true,
                prependData: `$env: ${process.env.NODE_ENV}`
              }
            }
          }
        ]
      }
    )

    return config
  }
}

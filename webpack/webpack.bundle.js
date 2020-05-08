// Default Config
const defaultWebpackConfig = require('./webpack.config.js')

/**
 * @file Webpack Configuration - Production
 * @module webpack/package
 */

const { output, ...defaultConfig } = defaultWebpackConfig

module.exports = {
  ...defaultConfig,
  mode: 'production',
  output: {
    ...output,
    filename: 'woodmont.min.js'
  }
}

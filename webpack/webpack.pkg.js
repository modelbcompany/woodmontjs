// Default Config
const defaultWebpackConfig = require('./webpack.config')

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
    filename: 'bundle.min.js'
  }
}

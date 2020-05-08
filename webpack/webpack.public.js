// Packages
const path = require('path')

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
    path: path.resolve(__dirname, '../build/packages'),
    filename: 'woodmont.min.js'
  }
}

// Packages
const Dotenv = require('dotenv-webpack')
const path = require('path')

/**
 * @file Webpack Configuration - Default
 * @module webpack/default
 */

module.exports = {
  mode: 'development',
  entry: {
    gateway: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'woodmont.js',
    library: 'WoodmontJS',
    libraryTarget: 'global'
  },
  module: {
    rules: [
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
      },

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
    ]
  },
  target: 'web',
  externals: {},
  node: {
    fs: 'empty',
    process: true
  },
  plugins: [
    new Dotenv({})
  ]
}

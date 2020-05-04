/**
 * @file Project Wide Babel Configuration
 * @see {@link https://babeljs.io/docs/en/config-files}
 */

module.exports = api => {
  api.cache(true)

  return {
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

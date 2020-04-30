/**
 * @file PostCSS Configuration
 */

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      features: {
        'nesting-rules': true
      },
      stage: 3
    })
  ]
}

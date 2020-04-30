// Packages
const fs = require('fs')

// Data
const PACKAGE = require('./package.json')

/**
 * @file Runs when executing "git pub"
 */

// Edit package.json for ./dist directory
console.warn('Preparing package.json for distribution...')

// Copy current package.json
const dist_package = Object.assign({}, PACKAGE)

// Update fields
dist_package.main = 'index.js'
dist_package.private = false

// Remove extraneous scripts
delete dist_package.scripts
delete dist_package.devDependencies
delete dist_package.sasslintConfig

console.info('Finished preparing package.json for distribution.')

// Create package.json in ./dist directory
const filename = './dist/package.json'
fs.writeFile(filename, JSON.stringify(dist_package), 'utf8', err => {
  if (err) {
    console.error(`An error occured while writing ${filename}.`)
    return console.error(err)
  }

  console.info(`Created ${filename}.`)
})

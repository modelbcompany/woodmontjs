/**
 * @file Jest Configuration
 * @see {@link https://jestjs.io/docs/en/configuration}
 */

module.exports = {
  moduleNameMapper: {
    '^.+\\.(css|sass|scss|less)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  verbose: true
}

// Packages
import { grey } from '@material-ui/core/colors'

/**
 * @file Color Palettes
 * @module config/color-palettes
 */

/**
 * React color palette.
 *
 * @type {Object}
 */
export const REACT = {
  '$color-react-blue': 'rgba(97, 218, 251, 1)',
  '$color-react-gray': 'rgba(40, 44, 52, 1)'
}

/**
 * Brand color palette.
 *
 * @type {Object}
 */
export const BRAND = {
  '$color-brand-cod-gray': 'rgba(10, 10, 10, 1)',
  '$color-brand-rolling-stone': 'rgba(111, 118, 123, 1)',
  '$color-brand-silver-rust': 'rgba(203, 195, 188, 1)',
  '$color-brand-tussock': 'rgba(191, 141, 74, 1)'
}

/**
 * Alert color palettes.
 *
 * @type {Object}
 */
export const ALERT = {
  '$ap-default-success': 'rgba(65, 173, 73, 1)',
  '$ap-default-warning': 'rgba(233, 190, 18, 1)',
  '$ap-default-negative': 'rgba(237, 107, 117, 1)'
}

/**
 * Application colors configured for the Storybook Backgrounds addon.
 *
 * @readonly
 * @namespace StorybookBackgrounds
 */
export const StorybookBackgrounds = Object.freeze({
  brand: {
    '$color-brand-silver-rust': {
      name: '$color-brand-silver-rust',
      value: BRAND['$color-brand-silver-rust'],
      default: true
    }
  },
  grey: {
    200: {
      name: 'Grey 200',
      value: grey['200'],
      default: true
    }
  },
  react: {
    '$color-react-gray': {
      name: '$color-react-gray',
      value: REACT['$color-react-gray'],
      default: true
    },
    '$color-react-blue': {
      name: '$color-react-blue',
      value: REACT['$color-react-blue'],
      default: true
    }
  }
})

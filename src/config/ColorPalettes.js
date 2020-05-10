// Packages
import { grey } from '@material-ui/core/colors'

/**
 * @file Color Palettes
 * @module config/ColorPalettes
 */

/**
 * Application color palettes.
 *
 * @enum {object}
 * @namespace {object} ColorPalettes
 */
export const ColorPalettes = {
  alert: {
    '$color-status-negative': 'rgba(237, 107, 117, 1)',
    '$color-status-success': 'rgba(65, 173, 73, 1)',
    '$color-status-warning': 'rgba(233, 190, 18, 1)'
  },
  brand: {
    '$color-brand-cape-palliser': 'rgba(170, 123, 63, 1)',
    '$color-brand-cod-gray': 'rgba(10, 10, 10, 1)',
    '$color-brand-rolling-stone': 'rgba(111, 118, 123, 1)',
    '$color-brand-silver-rust': 'rgba(203, 195, 188, 1)',
    '$color-brand-tussock': 'rgba(191, 141, 74, 1)'
  },
  react: {
    '$color-react-blue': 'rgba(97, 218, 251, 1)',
    '$color-react-gray': 'rgba(40, 44, 52, 1)'
  }
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
      value: ColorPalettes.brand['$color-brand-silver-rust'],
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
    '$color-react-blue': {
      name: '$color-react-blue',
      value: ColorPalettes.react['$color-react-blue'],
      default: true
    },
    '$color-react-gray': {
      name: '$color-react-gray',
      value: ColorPalettes.react['$color-react-gray'],
      default: true
    }
  }
})

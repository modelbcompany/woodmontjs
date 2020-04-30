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
  blue: '#61dafb',
  gray: '#282c34'
}

/**
 * Primary color palettes.
 * Each key represents the id of a theme.
 *
 * @type {Object}
 */
export const PRIMARY = {
  /**
   * Primary color palette for `default` theme.
   *
   * @property {string} default
   */
  default: {}
}

/**
 * Alert color palettes.
 * Each key represents the id of a theme.
 *
 * @type {Object}
 */
export const ALERT = {
  /**
   * Alert color palette for `default` theme.
   *
   * @property {string} default
   */
  default: {
    positive: '#40ad48',
    warning: '#f1c40f',
    negative: '#ed6b75'
  }
}

/**
 * Application colors configured for the Storybook Backgrounds addon.
 *
 * @readonly
 * @namespace StorybookBackgrounds
 */
export const StorybookBackgrounds = Object.freeze({
  grey: {
    200: {
      name: 'Grey 200',
      value: grey['200'],
      default: true
    }
  },
  react: {
    blue: {
      name: 'React Blue',
      value: REACT.blue,
      default: true
    },
    gray: {
      name: 'React Gray',
      value: REACT.gray,
      default: true
    }
  }
})

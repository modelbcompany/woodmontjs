// Utility Functions
import { animateScroll } from '../utils'

/**
 * @file @link Button properties
 * @module config/ButtonTypes
 */

/**
 * Default dropdown @link Button properties.
 *
 * @readonly
 * @property {object} DROPDOWN_BUTTON_DEFAULTS
 */
export const DROPDOWN_BUTTON_DEFAULTS = Object.freeze({
  className: 'dropdown-btn',
  'data-icon': {
    'aria-label': 'Open dropdown menu',
    children: 'expand_more',
    'data-position': 'right'
  },
  name: 'dropdown'
})

/**
 * Default smooth scroll @link Button properties.
 *
 * @readonly
 * @property {object} SMOOTH_SCROLL_BUTTON_DEFAULTS
 */
export const SMOOTH_SCROLL_BUTTON_DEFAULTS = Object.freeze({
  className: 'smooth-scroll-btn',
  name: 'smooth_scroll',
  onClick: event => animateScroll(event),
  value: {
    duration: 400,
    to: 'body'
  }
})

/**
 * @link Button component properties.
 *
 * @readonly
 * @namespace {object} ButtonTypes
 */
export const ButtonTypes = Object.freeze({
  /**
   * Default dropdown @link Button properties.
   *
   * @property {object} Dropdown
   */
  Dropdown: DROPDOWN_BUTTON_DEFAULTS,

  /**
   * Default smooth scroll @link Button properties.
   *
   * @property {object} SmoothScroll
   */
  SmoothScroll: SMOOTH_SCROLL_BUTTON_DEFAULTS
})

export default ButtonTypes

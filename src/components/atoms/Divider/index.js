// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Hooks
import { useAttributes } from '../../../hooks'

// Stylesheets
import './divider.sass'

/**
 * @file Component representing a <hr /> element
 * @module components/atoms/Divider
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/hr}
 */

/**
 * Renders a `<hr>` element with the class `ada-divider`.
 *
 * @class Divider
 * @param {DividerProps} props - Component data
 * @returns {HTMLHRElement}
 */
export const Divider = props => {
  return <hr {...useAttributes(props, 'ada-divider')} />
}

/**
 * @link Divider component properties.
 *
 * @typedef {DividerProps}
 */
Divider.propTypes = {
  /**
   * A space-separated list of the classes of the element.
   *
   * Classes allows CSS and JavaScript to select and access specific elements
   * via the class selectors or functions like the method
   * `Document.getElementsByClassName()`.
   */
  className: PropTypes.string,

  /**
   * Custom data attribute.
   *
   * https://developer.mozilla.org/docs/Web/HTML/Global_attributes/data-*
   */
  'data-*': PropTypes.any,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string,

  /**
   * Contains a text representing advisory information related to the element it
   * belongs to. Such information can typically, but not necessarily, be
   * presented to the user as a tooltip.
   */
  title: PropTypes.string
}

Divider.defaultProps = {}

export default Divider

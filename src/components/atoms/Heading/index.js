// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Hooks
import { useAttributes } from '../../../hooks'

// Stylesheets
import './heading.sass'

/**
 * @file Component representing heading elements
 * @module components/atoms/Heading
 * @see
 * {@link https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements}
 * @see {@link https://reactjs.org/docs/dom-elements.html}
 */

/**
 * Renders a `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, or `<h6>` element with the
 * base class `ada-heading`.
 *
 * @class Heading
 * @param {HeadingProps} props - Component data
 * @returns {HTMLHeadingElement}
 */
export const Heading = ({ children, 'data-size': size, ...props }) => {
  const attributes = useAttributes(props, 'ada-heading')

  size = size || ((size < 1 || size > 6) ? 1 : size)

  let $el

  switch (size) {
    case 2:
      $el = <h2 {...attributes}>{children}</h2>
      break
    case 3:
      $el = <h3 {...attributes}>{children}</h3>
      break
    case 4:
      $el = <h4 {...attributes}>{children}</h4>
      break
    case 5:
      $el = <h5 {...attributes}>{children}</h5>
      break
    case 6:
      $el = <h6 {...attributes}>{children}</h6>
      break
    default:
      $el = <h1 {...attributes}>{children}</h1>
      break
  }

  return $el
}

/**
 * @link Heading component properties.
 *
 * @typedef {HeadingProps}
 */
Heading.propTypes = {
  /**
   * `Heading` text.
   */
  children: PropTypes.node,

  /**
   * A space-separated list of the classes of the element.
   *
   * Classes allows CSS and JavaScript to select and access specific elements
   * via the class selectors or functions like the method
   * `Document.getElementsByClassName()`.
   */
  className: PropTypes.string,

  /**
   * React’s replacement for using `innerHTML` in the browser DOM.
   *
   * In general, setting HTML from code is risky because it’s easy to
   * inadvertently expose your users to a cross-site scripting (XSS) attack.
   *
   * See: https://reactjs.org/docs/dom-elements.html
   */
  dangerouslySetInnerHTML: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),

  /**
   * Custom data attribute.
   *
   * https://developer.mozilla.org/docs/Web/HTML/Global_attributes/data-*
   */
  'data-*': PropTypes.any,

  /**
   * Heading sizes.
   */
  'data-size': PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

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

Heading.defaultProps = {
  children: 'The quick brown fox jumps over the lazy dog',
  'data-size': 1
}

export default Heading

// Packages
import React from 'react'
import PropTypes from 'prop-types'
import * as MaterialIcon from '@material-ui/core/Icon'

// Hooks
import { useAttributes, useIcon } from '../../../hooks'

// Stylesheets
import './span.sass'

/**
 * @file Components representing a <span> element
 * @module components/atoms/Span
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/span}
 * @see {@link https://reactjs.org/docs/dom-elements.html}
 */

/**
 * Renders a `<span>` element with the class `ada-span`.
 *
 * @class Span
 * @param {SpanProps} props - Component data
 * @returns {HTMLSpanElement}
 */
export const Span = props => {
  const { children } = useIcon(props)
  return <span {...useAttributes(props, 'ada-span')}>{children}</span>
}

/**
 * Renders a @link Span component with the class `icon`.
 *
 * @class Icon
 * @param {IconProps} props - Component data
 * @returns {MaterialIcon}
 */
export const Icon = ({ children, ...props }) => {
  const attributes = useAttributes(props, 'ada-span icon')

  // If not rendering a Font Awesome icon
  if (!attributes.className.includes('fa-')) {
    attributes.className = `material-icons-outlined ${attributes.className}`
    attributes['data-icon'] = children
  }

  return <MaterialIcon.default {...attributes}>{children}</MaterialIcon.default>
}

/**
 * @link Span component properties.
 *
 * @typedef {SpanProps}
 */
Span.propTypes = {
  /**
   * `Span` content.
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

/**
 * @link Icon properties.
 *
 * @typedef {IconProps}
 */
Icon.propTypes = {
  /**
   * An Icon can have two purposes: **decorative** and **non-decorative**.
   *
   * Non-decorative icons illustrate the text next to it. To ensure the icon is
   * ignored by screen readers, set `aria-hidden` to `true`.
   */
  'aria-hidden': PropTypes.bool,

  /**
   * ARIA14: Provide an invisible label where a visible label cannot be used.
   *
   * Used to present information about the component, such as when the `Icon` is
   * the only child of a `Button` component.
   *
   * https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html
   */
  'aria-label': PropTypes.string,

  /**
   * Ligature or numeric character reference.
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
   * Custom data attribute.
   *
   * https://developer.mozilla.org/docs/Web/HTML/Global_attributes/data-*
   */
  'data-*': PropTypes.any,

  /**
   * If true, prepend `material-icons-outlined` to `className`.
   */
  'data-outlined': PropTypes.bool,

  /**
   * If rendering inside of another component, such as `Button` or `Link`, this
   * value determines where the `Icon` will be placed.
   */
  'data-position': PropTypes.oneOf(['right', 'left', '', undefined]),

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

Span.defaultProps = {}

Icon.defaultProps = {
  // Mirror MaterialIcon default value
  'aria-hidden': true
}

export default Span

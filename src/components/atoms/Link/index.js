// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Icon } from '../Span'

// Hooks
import { useAttributes, useIcon } from '../../../hooks'

// Stylesheets
import './link.sass'

/**
 * @file Component representing <a> elements
 * @module components/atoms/Link
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/a}
 * @see {@link https://reach.tech/router/api/Link}
 * @see {@link https://reactjs.org/docs/dom-elements.html}
 */

/**
 * Renders an `<a>` element with the class `ada-link`.
 *
 * @class Link
 * @param {LinkProps} props - Component data
 * @returns {HTMLAnchorElement | RouterLink}
 */
export const Link = props => {
  const attributes = useAttributes(props, 'ada-link')
  const { children } = useIcon(props)

  return <a {...attributes}>{children}</a>
}

/**
 * @link Link component properties.
 *
 * @typedef {LinkProps}
 */
Link.propTypes = {
  /**
   * Link text.
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
   * `Icon` properties.
   *
   * If defined, `children` will be rendered next to an `Icon`.
   */
  'data-icon': Icon.propTypes,

  /**
   * Prompts the user to save the linked URL instead of navigating to it.
   */
  download: PropTypes.bool,

  /**
   * The URL that the hyperlink points to.
   */
  href: PropTypes.string.isRequired,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string,

  /**
   * The relationship of the linked URL as space-separated link types.
   */
  rel: PropTypes.string,

  /**
   * Where to display the linked URL, as the name for a browsing context (a tab,
   * window, or `<iframe>`).
   */
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top'])
}

Link.defaultProps = {
  href: '#',
  rel: 'noreferrer noopener',
  target: '_self'
}

export default Link

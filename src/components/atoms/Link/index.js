// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from '@reach/router'

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
 * If @param props.router is true, a Reach Router Link will be rendered instead.
 *
 * @class Link
 * @param {LinkProps} props - Component data
 * @returns {HTMLAnchorElement | RouterLink}
 */
export const Link = ({ 'data-router': router, ...props }) => {
  const attributes = useAttributes(
    props,
    'ada-link',
    router ? 'href' : 'to, replace, ref, innerRef, getProps, state'
  )

  const { children } = useIcon(props)

  return router
    ? <RouterLink {...attributes} to={props.href}>{children}</RouterLink>
    : <a {...attributes} data-router={router}>{children}</a>
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
   * If defined, `children` will be rendered next to an `Icon`.
   */
  'data-icon': Icon.propTypes,

  /**
   * If true, a Reach Router `Link` component will be rendered instead of an
   * `<a>` element.
   *
   * See: https://reach.tech/router/api/Link
   */
  'data-router': PropTypes.bool,

  /**
   * Prompts the user to save the linked URL instead of navigating to it.
   */
  download: PropTypes.bool,

  /**
   * Function to gather the props for the underlying anchor element.
   * Useful for styling the anchor as active.
   *
   * This function takes one argument, `obj`. It will have the following
   * properties:
   *
   * - **`isCurrent`**: `true` if `location.pathname` is exactly the same as the
   *   anchor’s `href`
   * - **`isPartiallyCurrent`**: `true` if `location.pathname` starts with the
   *   anchor’s `href`
   * - **`href`**: the fully resolved href of the link
   * - **`location`**: the app’s location
   *
   * If `data-router` is false, this value will be ignored.
   */
  getProps: PropTypes.func,

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
   * Calls up with its inner ref for apps on `React` <16.4.
   * If using `React` >=16.4, use the `ref` property instead.
   *
   * If `data-router` is false, this value will be ignored.
   */
  innerRef: PropTypes.func,

  /**
   * If using `React` >=16.4, `Link` will forward its ref to you.
   *
   * If `data-router` is false, this value will be ignored.
   */
  ref: PropTypes.func,

  /**
   * The relationship of the linked URL as space-separated link types.
   */
  rel: PropTypes.string,

  /**
   * If true, the latest entry on the history stack will be replaced with a new
   * one. Use this when you don’t want the previous page to show up when the
   * user clicks the back button.
   */
  replace: PropTypes.bool,

  /**
   * An object to put on location state.
   *
   * If `data-router` is false, this value will be ignored.
   */
  state: PropTypes.object,

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

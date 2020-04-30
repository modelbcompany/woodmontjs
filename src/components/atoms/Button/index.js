// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Hooks
import {
  useAttributes,
  useButtonTypes,
  useIcon
} from '../../../hooks'

// Utility Functions
import { classNames } from '../../../utils'

// Stylesheets
import './button.sass'

/**
 * @file Components representing <button> elements
 * @module components/atoms/Button
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/button}
 */

/**
 * Renders a `<button>` element with the class `ada-button`.
 *
 * @class Button
 * @param {ButtonProps} props - Component data
 * @returns {HTMLElement}
 */
export const Button = ({ className, ...props }) => {
  // Get properties from ButtonTypes enum
  const type = useButtonTypes(props)

  // Handle icon
  const { children } = useIcon({ ...props, ...type })

  // Get HTML attributes
  const attributes = useAttributes({
    ...props,
    ...type,
    children: undefined,
    className: classNames(type.className, className)
  }, 'ada-button')

  return <button {...attributes}>{children}</button>
}

/**
 * @link Button component properties.
 *
 * @typedef {ButtonProps}
 */
Button.propTypes = {
  /**
   * This attribute on a `<button>` is nonstandard and Firefox-specific.
   *
   * Unlike other browsers, Firefox persists the dynamic disabled state of a
   * `<button>` across page loads. Setting autocomplete="off" on the button
   * disables this feature.
   */
  autoComplete: PropTypes.oneOf([
    'off',
    'on',
    'name',
    'honorific-prefix',
    'given-name',
    'additional-name',
    'family-name',
    'honorific-suffix',
    'nickname',
    'email',
    'username',
    'new-password',
    'current-password',
    'one-time-code',
    'organization-title',
    'organization',
    'street-address',
    'address-line1',
    'address-line2',
    'address-line3',
    'address-level4',
    'address-level3',
    'address-level2',
    'address-level1',
    'country',
    'country-name',
    'postal-code',
    'cc-name',
    'cc-given-name',
    'cc-additional-name',
    'cc-family-name',
    'cc-number',
    'cc-exp',
    'cc-exp-month',
    'cc-exp-year',
    'cc-csc',
    'cc-type',
    'transaction-currency',
    'transaction-amount',
    'language',
    'bday',
    'bday-day',
    'bday-month',
    'bday-year',
    'sex',
    'tel',
    'tel-country-code',
    'tel-national',
    'tel-area-code',
    'tel-local',
    'tel-extension',
    'impp',
    'url',
    'photo'
  ]),

  /**
   * `Button` content.
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
   * If defined, `children` will be rendered next to an `Icon`.
   */
  'data-icon': PropTypes.shape({
    'aria-label': PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string,
    title: PropTypes.string
  }),

  /**
   * Prevents the user from interacting with the button: it cannot be pressed or
   * focused.
   *
   * Firefox, unlike other browsers, persists the dynamic disabled state of a
   * `<button>` across page loads. Use the `autocomplete` attribute to
   * control this feature.
   */
  disabled: PropTypes.bool,

  /**
   * The `<form>` element to associate the button with (its form owner). The
   * value of this attribute must be the id of a `<form>` in the same document.
   * (If this attribute is not set, the `<button>` is associated with its
   * ancestor `<form>` element, if any.)
   *
   * This attribute lets you associate `<button>` elements to `<form>`s
   * anywhere in the document, not just inside a `<form>`. It can also override
   * an ancestor `<form>` element.
   */
  form: PropTypes.string,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string,

  /**
   * The name of the button, submitted as a pair with the button’s value as part
   * of the form data.
   */
  name: PropTypes.string,

  /**
   * Code to be called when the the `click` event is raised.
   */
  onClick: PropTypes.func,

  /**
   * Contains a text representing advisory information related to the element it
   * belongs to. Such information can typically, but not necessarily, be
   * presented to the user as a tooltip.
   */
  title: PropTypes.string,

  /**
   * The default behavior of the button.
   *
   * Possible values are:
   *
   * - **submit**: Submits the form data to the server. This is the default if
   *   the attribute is not specified for buttons associated with a `<form>`, or
   *   if the attribute is an empty or invalid value.
   * - **reset**: Resets all the controls to their initial values, like `<input
   *   type="reset">` (This behavior tends to annoy users).
   * - **button**: No default behavior, and does nothing when pressed by
   *   default. It can have client-side scripts listen to the element's events,
   *   which are triggered when the events occur.
   */
  type: PropTypes.oneOf(['submit', 'reset', 'button']),

  /**
   * Defines the value associated with the button’s name when it’s submitted
   * with the form data.
   *
   * This value is passed to the server in params when the form is submitted.
   */
  value: PropTypes.any
}

Button.defaultProps = {
  autoComplete: 'off',
  disabled: false,
  type: 'button'
}

export default Button

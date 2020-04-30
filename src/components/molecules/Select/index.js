// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Icon, Option } from '../../atoms'

// Hooks
import { useAttributes, useOptions } from '../../../hooks'

// Stylesheets
import './select.sass'

/**
 * @file Component representing a <select> element
 * @module components/molecules/Select
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/select}
 */

/**
 * Renders a <div> element with the class `adm-select`.
 *
 * Inside of the container, a native <select> element will be rendered, as well
 * as an `expand_more` @link Icon.
 *
 * @class Select
 * @param {SelectProps} props - Component data
 * @returns {List}
 */
export const Select = ({ children, ...props }) => {
  const attributes = useAttributes(props)
  const { handleBlur, options } = useOptions(props)

  return (
    <div className='adm-select'>
      <select {...attributes} onBlur={handleBlur}>
        {options.map((option, i) => {
          return <Option {...option} key={`option-${i}`} />
        })}
      </select>
      <Icon aria-hidden>expand_more</Icon>
    </div>
  )
}

/**
 * @link Select component properties.
 *
 * @typedef {SelectProps}
 */
Select.propTypes = {
  /**
   * ARIA14: Provide an invisible label where a visible label cannot be used.
   *
   * https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html
   */
  'aria-label': PropTypes.string,

  /**
   * Not a `Boolean` attribute, the autocomplete attribute takes as its value a
   * space separated string that describes what, if any, type of autocomplete
   * functionality the input should provide.
   *
   * The autocomplete attribute is valid on `hidden`, `text`, `search`, `url`,
   * `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`,
   * `number`, `range`, `color` and `password`.
   *
   * This attribute has no effect on input types that do not return numeric or
   * text data, being valid for all input types except `checkbox`, `radio`,
   * `file`, or any of the button types.
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
   * This `Boolean` attribute lets you specify that a form control should have
   * input focus when the page loads. Only one form element in a document can
   * have the `autofocus` attribute.
   */
  autoFocus: PropTypes.bool,

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
   * Collection of `Option` data.
   */
  'data-options': PropTypes.arrayOf(PropTypes.shape({
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    selected: PropTypes.bool,
    title: PropTypes.string,
    value: PropTypes.any.isRequired
  })),

  /**
   * This `Boolean` attribute indicates that the user cannot interact with the
   * control.
   *
   * If this attribute is not specified, the control inherits its setting from
   * the containing element.
   *
   * For example `<fieldset>`; if there is no containing element with the
   * `disabled` attribute set, then the control is enabled.
   */
  disabled: PropTypes.bool,

  /**
   * A string specifying the `<form>` element with which the input is associated
   * (that is, its form owner).
   *
   * The value of this attribute must be the id of a `<form>` in the same
   * document. (If this attribute is not set, the `<select>` is associated with
   * its ancestor `<form>` element, if any.)
   *
   * This attribute lets you associate `<select>` elements to `<form>`s anywhere
   * in he document, not just inside a `<form>`. It can also override an
   * ancestor `<form>` element.
   */
  form: PropTypes.string,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string,

  /**
   * This `Boolean` attribute indicates that multiple options can be selected in
   * the list. If it is not specified, then only one option can be selected at a
   * time.
   *
   * When multiple is specified, most browsers will show a scrolling list
   * box instead of a single line dropdown.
   */
  multiple: PropTypes.bool,

  /**
   * This attribute is used to specify the name of the control.
   */
  name: PropTypes.string,

  /**
   * Code to be called when the `blur` event is raised.
   *
   * `onBlur` must be used instead of `onChange`, unless absolutely necessary
   * and it causes no negative consequences for keyboard only or screen reader
   * users.
   */
  onBlur: PropTypes.func,

  /**
   * Code to be called when the `change` event is raised.
   *
   * `onBlur` must be used instead of `onChange`, unless absolutely necessary
   * and it causes no negative consequences for keyboard only or screen reader
   * users.
   */
  onChange: PropTypes.func,

  /**
   * A `Boolean` attribute indicating that an option with a non-empty string
   * value must be selected.
   */
  required: PropTypes.bool,

  /**
   * If the control is presented as a scrolling list box (e.g. when `multiple`
   * is specified), this attribute represents the number of rows in the list
   * that should be visible at one time.
   *
   * Browsers are not required to present a select element as a scrolled list
   * box. The default value is `0`.
   */
  size: PropTypes.number,

  /**
   * Value of the default `Option`.
   */
  value: PropTypes.any
}

Select.defaultProps = {
  autoComplete: 'off',
  'data-options': [],
  disabled: false,
  multiple: false,
  required: false
}

export default Select

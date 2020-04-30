// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Hooks
import { useAttributes } from '../../../hooks'

// Stylesheets
import './option.sass'

/**
 * @file Component representing an <option> element
 * @module components/atoms/Option
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/option}
 */

/**
 * Renders a `<option>` element with the class `ada-option`.
 *
 * @class Option
 * @param {OptionProps} props - Component data
 * @returns {HTMLOptionElement}
 */
export const Option = ({ children, ...props }) => {
  const attributes = useAttributes(props, 'ada-option')

  if (attributes.selected) attributes.className += ' is selected'

  return <option {...attributes}>{children}</option>
}

/**
 * @link Option component properties.
 *
 * @typedef {OptionProps}
 */
Option.propTypes = {
  /**
   * `Option` text.
   */
  children: PropTypes.node.isRequired,

  /**
   * A space-separated list of the classes of the element.
   *
   * Classes allows CSS and JavaScript to select and access specific elements
   * via the class selectors or functions like the method
   * `Document.getElementsByClassName()`.
   */
  className: PropTypes.string,

  /**
   * If this Boolean attribute is set, this option is not checkable.
   *
   * Often browsers grey out such control and it won't receive any browsing
   * event, like mouse clicks or focus-related ones.
   *
   * If this attribute is not set, the element can still be disabled if one of
   * its ancestors is a disabled `<optgroup>` element.
   */
  disabled: PropTypes.bool,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string,

  /**
   * This attribute is text for the label indicating the meaning of the option.
   * If the `label` attribute isn't defined, its value is that of the element
   * text content.
   */
  label: PropTypes.string,

  /**
   * If present, this Boolean attribute indicates that the option is initially
   * selected.
   *
   * If the `<option>` element is the descendant of a `<select>` element whose
   * multiple attribute is not set, only one single `<option>` of this
   * `<select>` element may have the selected attribute.
   */
  selected: PropTypes.bool,

  /**
   * Contains a text representing advisory information related to the element it
   * belongs to. Such information can typically, but not necessarily, be
   * presented to the user as a tooltip.
   */
  title: PropTypes.string,

  /**
   * The content of this attribute represents the value to be submitted with the
   * form, should this option be selected.
   *
   * If this attribute is omitted, the value is taken from the text content of
   * the option element.
   */
  value: PropTypes.any.isRequired
}

Option.defaultProps = {
  children: 'Select an option',
  disabled: false,
  selected: false,
  value: ''
}

export default Option

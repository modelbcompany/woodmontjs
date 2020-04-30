// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Container from '../Container'

// Hooks
import { useAttributes } from '../../../hooks'

// Stylesheets
import './fieldset.sass'

/**
 * @file Components representing <fieldset> elements
 * @module components/molecules/Fieldset
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/fieldset}
 * @see {@link https://khrome.dev/blog/html-elements-with-flex-box-quirks/}
 */

/**
 * Renders a `<fieldset>` element with the class `adm-fieldset`.
 *
 * Because `<fieldset>` elements ignore Flexbox properties, a `Container`
 * component with the class `fieldset-container` will wrap the child elements.
 *
 * See: https://khrome.dev/blog/html-elements-with-flex-box-quirks/
 *
 * @class Fieldset
 * @param {FieldsetProps} props - Component data
 * @returns {HTMLFieldSetElement}
 */
export const Fieldset = ({ children, ...props }) => (
  <fieldset {...useAttributes(props, 'adm-fieldset')}>
    <Container className='fieldset-container is-full-width'>
      {children}
    </Container>
  </fieldset>
)

/**
 * @link Fieldset component properties.
 *
 * @typedef {FieldsetProps}
 */
Fieldset.propTypes = {
  /**
   * Form controls to group together.
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
   * If this Boolean attribute is set, all form controls that are descendants of
   * the `<fieldset>`, are disabled, meaning they are not editable and won't be
   * submitted along with the `<form>`. They won't receive any browsing
   * events, like mouse clicks or focus-related events. By default browsers
   * display such controls grayed out.
   *
   * **Note**: Form elements inside the `<legend>` element won't be disabled.
   *
   */
  disabled: PropTypes.bool,

  /**
   * This attribute takes the value of the id attribute of a `<form>` element
   * you want the `<fieldset>` to be part of, even if it is not inside the form.
   */
  form: PropTypes.string,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string,

  /**
   * The name associated with the group.
   */
  name: PropTypes.string
}

Fieldset.defaultProps = {}

export default Fieldset

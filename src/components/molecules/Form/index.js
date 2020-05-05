// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Button } from '../../atoms'
import { FloorsPlanSearchFiltersField } from '../Fieldset'

// Config
import { FLOOR_PLAN_SEARCH_FORM_ID } from './config/Form.constants'
import { Logger } from '../../../config'

// Hooks
import { useAttributes } from '../../../hooks'

// Stylesheets
import './form.sass'

/**
 * @file Components representing <form> elements
 * @module components/molecules/Form
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/form}
 */

/**
 * Renders a `<form>` element with the class `adm-form`.
 *
 * @class Form
 * @param {FormProps} props - Component data
 * @returns {HTMLFormElement}
 */
export const Form = ({ children, ...props }) => (
  <form {...useAttributes(props, 'adm-form')}>
    {children}
  </form>
)

/**
 * Renders a @link Form component with the class `floorplan-search-form`.
 *
 * @todo Toggle Button disabled state
 * @todo Implement useFloorPlanSearch
 *
 * @param {FloorPlansSearchFormProps} props - Component data
 * @returns {Form}
 */
export const FloorPlansSearchForm = ({
  handleFilter,
  handleSearch,
  ...rest
}) => {
  const attributes = useAttributes(rest, 'floorplan-search-form')

  return (
    <Form {...attributes} id={FLOOR_PLAN_SEARCH_FORM_ID}>
      <FloorsPlanSearchFiltersField
        form={FLOOR_PLAN_SEARCH_FORM_ID}
        handleFilter={handleFilter}
      />

      <Button
        className='floorplan-search-form-btn'
        disabled
        form={FLOOR_PLAN_SEARCH_FORM_ID}
        onClick={handleSearch}
        type='submit'
      >
        Search
      </Button>
    </Form>
  )
}

/**
 * @link Form component properties.
 *
 * @typedef {FormProps}
 */
Form.propTypes = {
  /**
   * The URL that processes the form submission.
   *
   * This value can be overridden by a formaction attribute on a `<button>`,
   * `<input type=submit>`, or `<input type=image>` element.
   */
  action: PropTypes.string,

  /**
   * Indicates whether input elements can by default have their values
   * automatically completed by the browser. autocomplete properties on form
   * elements override it on `<form>`.
   *
   * Possible values:
   *
   * - **off**: The browser may not automatically complete entries. (Browsers
   *   tend to ignore this for suspected login forms)
   * - **on**: The browser may automatically complete entries.
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
   * If the value of the method attribute is post, enctype is the MIME type of
   * the form submission.
   *
   * Possible values:
   *
   * - application/x-www-form-urlencoded: The default value.
   * - multipart/form-data: Use this if the form contains `<input>` elements
   *   with `type=file`.
   * - text/plain: Introduced by HTML5 for debugging purposes.
   *
   * This value can be overridden by formenctype properties on `<button>`,
   * `<input type="submit">`, or `<input type="image">` elements.
   */
  encType: PropTypes.oneOf([
    'application/x-www-form-urlencoded',
    'multipart/form-data',
    'text/plain'
  ]),

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string,

  /**
   * The HTTP method to submit the form with.
   *
   * Possible values:
   *
   * - post: The `POST` method; form data sent as the request body.
   * - get: The `GET` method; form data appended to the action URL with a `?`
   *   separator. Use this method when the form has no side-effects.
   * - dialog: When the form is inside a `<dialog>`, closes the dialog on
   *   submission.
   *
   * This value is overridden by formmethod properties on `<button>`, `<input
   * type="submit">`, or `<input type="image">` elements.
   */
  method: PropTypes.oneOf(['post', 'get', 'dialog']),

  /**
   * Indicates that the form shouldn't be validated when submitted.
   *
   * If this attribute is not set (and therefore the form is validated), it can
   * be overridden by a formnovalidate attribute on a `<button>`, `<input
   * type="submit">`, or `<input type="image">` element belonging to the form.
   */
  noValidate: PropTypes.bool,

  /**
   * Indicates where to display the response after submitting the form.
   *
   * In HTML4, this is the name/keyword for a frame.
   *
   * In HTML5, it is a name/keyword for a browsing context (for example, tab,
   * window, or iframe).
   *
   * The following keywords have special meanings:
   *
   * - `_self`: Load into the same browsing context as the current one.
   * - `_blank`: Load into a new unnamed browsing context.
   * - `_parent`: Load into the parent browsing context of the current one. If
   *   no parent, behaves the same as `_self`.
   * - `_top`: Load into the top-level browsing context (i.e., the browsing
   *   context that is an ancestor of the current one and has no parent). If no
   *   parent, behaves the same as `_self`.
   *
   * This value can be overridden by a formtarget attribute on a `<button>`,
   * `<input type="submit">`, or `<input type="image">` element.
   */
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top'])
}

/**
 * @link FloorPlansSearchForm component properties.
 *
 * @typedef {FloorPlansSearchFormProps}
 */
FloorPlansSearchForm.propTypes = {
  /**
   * Code to call when the `click` event is raised.
   */
  handleFilter: PropTypes.func,

  /**
   * Code to be called when the `click` event is raised by the submit `Button`.
   */
  handleSearch: PropTypes.func,

  /**
   * This value cannot be overridden.
   */
  id: PropTypes.string
}

Form.defaultProps = {
  action: null,
  autoComplete: 'on',
  noValidate: false,
  target: '_self'
}

FloorPlansSearchForm.defaultProps = {
  handleFilter: ({ target: { name, value } }) => {
    Logger.warn('@todo handleFilter =>', { name, value })
  },
  handleSearch: event => Logger.warn('@todo handleSearch =>', event.target),
  id: FLOOR_PLAN_SEARCH_FORM_ID
}

export default Form

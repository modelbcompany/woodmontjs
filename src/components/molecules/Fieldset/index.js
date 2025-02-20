// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Container from '../Container'
import Dropdown from '../Dropdown'

// Config
import {
  FLOOR_PLAN_SEARCH_FILTERS_FIELD_NAME
} from './config/Fieldset.constants'
import { FLOOR_PLAN_SEARCH_FORM_ID } from '../Form/config/Form.constants'
import {
  FloorplansSearchFormDropdownProps as FloorplanSearchFilters
} from '../../../config'
import Logger from '../../../logger'

// Hooks
import { useAttributes } from '../../../hooks'

// Utility Functions
import { getDropdownProps } from '../../../utils/react.utils'

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
 * Renders a @link Fieldset component with the class
 * `floorplan-search-form-filters`.
 *
 * @todo Implement handleFilter - map over dropdown items
 *
 * @param {FloorplansSearchFiltersFieldProps} props - Component data
 * @returns {Fieldset}
 */
export const FloorplansSearchFiltersField = ({ handleFilter, ...props }) => {
  const attributes = useAttributes(props, 'floorplan-search-form-filters')
  const filters = Object.keys(FloorplanSearchFilters)

  return (
    <Fieldset
      {...attributes}
      form={FLOOR_PLAN_SEARCH_FORM_ID}
      name={FLOOR_PLAN_SEARCH_FILTERS_FIELD_NAME}
    >
      {filters.map(filter => {
        let dropdown = FloorplanSearchFilters[filter]
        const { button, children } = dropdown

        button.form = props.form
        children.props.items = children.props.items.map(item => ({
          ...item, onClick: handleFilter, role: 'button'
        }))

        dropdown = getDropdownProps(dropdown)

        const key = `${filter.toLowerCase()}-filter`

        return <Dropdown {...dropdown} key={key} />
      })}
    </Fieldset>
  )
}

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

/**
 * @link FloorplansSearchFiltersField component properties.
 *
 * @typedef {FloorplansSearchFiltersFieldProps}
 */
FloorplansSearchFiltersField.propTypes = {
  /**
   * Code to call when the `click` event is raised.
   */
  handleFilter: PropTypes.func,

  /**
   * This value cannot be overridden.
   */
  form: PropTypes.string,

  /**
   * This value cannot be overridden.
   */
  name: PropTypes.string
}

Fieldset.defaultProps = {}

FloorplansSearchFiltersField.defaultProps = {
  form: FLOOR_PLAN_SEARCH_FORM_ID,
  handleFilter: ({ target: { name, value } }) => {
    Logger.warn('@todo handleFilter =>', { name, value })
  },
  name: FLOOR_PLAN_SEARCH_FILTERS_FIELD_NAME
}

export default Fieldset

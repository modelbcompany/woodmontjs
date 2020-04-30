// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Main } from '../../organisms'

// Hooks
import { useAttributes } from '../../../hooks'

// Stylesheets
import './floorplans-template.sass'

/**
 * @file Floor Plans Template
 * @module components/Components/Templates/FloorPlans
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/main}
 */

/**
 * Renders a `<main>` element with the class `adt-floorplans`.
 *
 * @class FloorPlansTemplate
 * @param {FloorPlansTemplateProps} props - Component data
 * @returns {HTMLElement}
 */
export const FloorPlansTemplate = props => {
  const attributes = useAttributes(props, 'adt-floorplans')

  return (
    <Main {...attributes}>
      {/*  */}
    </Main>
  )
}

/**
 * @link FloorPlansTemplate component properties.
 *
 * @typedef {FloorPlansTemplateProps}
 */
FloorPlansTemplate.propTypes = {
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
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string
}

FloorPlansTemplate.defaultProps = {}

export default FloorPlansTemplate

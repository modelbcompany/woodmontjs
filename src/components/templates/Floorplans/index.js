// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Container, FloorplansSearchForm } from '../../molecules'
import { FloorplansGrid, Main } from '../../organisms'

// Hooks
import { useAttributes, useApartmentsWithFloorplans } from '../../../hooks'

// Stylesheets
import './floorplans-template.sass'

/**
 * @file Floor Plans Template
 * @module components/Components/Templates/Floorplans
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/main}
 */

/**
 * Renders a `<main>` element with the class `adt-floorplans`.
 *
 * @todo Implement state
 * @todo handleFilter
 * @todo handleSearch
 *
 * @class FloorplansTemplate
 * @param {FloorplansTemplateProps} props - Component data
 * @returns {HTMLElement}
 */
export const FloorplansTemplate = props => {
  const attributes = useAttributes(props, 'adt-floorplans')

  const { aptsWithPlans } = useApartmentsWithFloorplans({})

  return (
    <Main {...attributes}>
      <Container className='form-container is-full-width'>
        <FloorplansSearchForm />
      </Container>

      <FloorplansGrid apartments={aptsWithPlans} title='One Bedroom' />
    </Main>
  )
}

/**
 * @link FloorplansTemplate component properties.
 *
 * @typedef {FloorplansTemplateProps}
 */
FloorplansTemplate.propTypes = {
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

FloorplansTemplate.defaultProps = {}

export default FloorplansTemplate

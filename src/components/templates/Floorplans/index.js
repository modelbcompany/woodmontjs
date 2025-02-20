// Packages
import React, { useState } from 'react'
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
 * @class FloorplansTemplate
 * @param {FloorplansTemplateProps} props - Component data
 * @returns {HTMLElement}
 */
export const FloorplansTemplate = ({ auth, ...rest }) => {
  const attributes = useAttributes(rest, 'adt-floorplans')

  const {
    aptsWithPlans, aptsWithPlansError, setAptQuery
  } = useApartmentsWithFloorplans({}, auth)
  const [gridTitle, setGridTitle] = useState('One Bedroom')

  const handleSearch = aptsWithPlansError
    ? null
    : query => {
      const { numberOfBeds: beds } = query

      setAptQuery(query)

      if (beds) {
        setGridTitle(beds === 0
          ? 'Studios' : `${beds} Bedroom${beds === 1 ? '' : 's'}`)
      }
    }

  return (
    <Main {...attributes}>
      <Container className='form-container is-full-width'>
        <FloorplansSearchForm handleSearch={handleSearch} />
      </Container>

      <FloorplansGrid
        apartments={aptsWithPlans}
        error={aptsWithPlansError}
        title={gridTitle}
      />
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

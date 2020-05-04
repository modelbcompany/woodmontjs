// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Heading } from '../../atoms'
import { Container, Floorplan } from '../../molecules'

// Hooks
import { useAttributes } from '../../../hooks'

// Stylesheets
import './section.sass'

/**
 * @file Components representing UI sections
 * @module components/organisms/Section
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/section}
 */

/**
 * Renders a `<section>` element with the class `ado-section`.
 *
 * @class Section
 * @param {SectionProps} props - Component data
 * @returns {HTMLElement}
 */
export const Section = ({
  children,
  'data-container': container,
  ...props
}) => {
  const attributes = useAttributes(props, 'ado-section')

  if (!container) return <section {...attributes}>{children}</section>

  return (
    <section {...attributes}>
      <Container className='section-container'>{children}</Container>
    </section>
  )
}

/**
 * Renders a `Section` component with the class `floorplans-grid`.
 *
 * @todo Integrate @module FloorPlanSearch
 *
 * @class FloorPlansGrid
 * @param {FloorPlansGridProps} props - Component data
 * @returns {Section}
 */
export const FloorPlansGrid = ({ floorplans, ...rest }) => {
  const { title } = rest
  const attributes = useAttributes(rest, 'floorplans-grid')

  return (
    <Section {...attributes}>
      <Heading className='floorplans-grid-title' data-size={2}>
        {title}
      </Heading>

      <Container className='floorplans-grid-container is-full-width'>
        {floorplans.map(floorplan => (
          <Floorplan {...floorplan} key={`${floorplans.id}_floorplan`} />
        ))}
      </Container>
    </Section>
  )
}

/**
 * @link Section component properties.
 *
 * @typedef {SectionProps}
 */
Section.propTypes = {
  /**
   * `Section` content.
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
   * If true, render `children` inside of a `Container` component.
   *
   * The container will have the base class `section-container`.
   */
  'data-container': PropTypes.bool,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string,

  /**
   * Contains a text representing advisory information related to the element it
   * belongs to. Such information can typically, but not necessarily, be
   * presented to the user as a tooltip.
   */
  title: PropTypes.string
}

Section.defaultProps = {
  'data-container': false
}

/**
 * @link FloorPlansGrid component properties.
 *
 * @todo Update documentation
 *
 * @typedef {FloorPlansGridProps}
 */
FloorPlansGrid.propTypes = {
  floorplans: PropTypes.arrayOf(PropTypes.shape({
    apt: PropTypes.shape({
      apply: PropTypes.string,
      name: PropTypes.string
    }),
    floorplan: PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.shape({
        src: PropTypes.string
      }),
      name: PropTypes.string,
      type: PropTypes.string
    }),
    rent: PropTypes.shape({
      max: PropTypes.string,
      min: PropTypes.string
    }),
    sqft: PropTypes.string
  })),

  /**
   * `Section` `Heading` text.
   */
  title: PropTypes.string
}

FloorPlansGrid.defaultProps = {
  floorplans: [],
  title: 'One Bedroom'
}

export default Section

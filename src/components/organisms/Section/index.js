// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Heading, Icon } from '../../atoms'
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
 * @todo Integrate @module FloorplanSearch
 *
 * @class FloorplansGrid
 * @param {FloorplansGridProps} props - Component data
 * @returns {Section}
 */
export const FloorplansGrid = ({ apartments: apts, error, ...rest }) => {
  const { title } = rest
  const attributes = useAttributes(rest, 'floorplans-grid')

  const container_style = `floorplans-grid-container ${apts.length === 0
    ? 'display-flex' : ''}`

  if (error) return null

  return (
    <Section {...attributes}>
      <Heading className='floorplans-grid-title' data-size={2}>
        {title}
      </Heading>

      <Container className={container_style}>
        {
          apts.length === 0
            ? <Icon className='fa-spinner fa-spin' />
            : apts.map(apt => (
              <Floorplan aptWithPlan={apt} key={`apt_${apt.ApartmentName}`} />
            ))
        }
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
 * @link FloorplansGrid component properties.
 *
 * @todo Update documentation
 *
 * @typedef {FloorplansGridProps}
 */
FloorplansGrid.propTypes = {
  /**
   * Array of `ApartmentWithPlan` objects.
   */
  apartments: PropTypes.arrayOf(PropTypes.shape({
    aptWithPlan: PropTypes.shape({
      Amenities: PropTypes.string,
      ApartmentId: PropTypes.string,
      ApartmentName: PropTypes.string,
      ApplyOnlineURL: PropTypes.string,
      AvailabilityURL: PropTypes.string,
      AvailableDate: PropTypes.string,
      AvailableUnitsCount: PropTypes.string,
      Baths: PropTypes.string,
      Beds: PropTypes.string,
      Deposit: PropTypes.string,
      FloorplanHasSpecials: PropTypes.string,
      FloorplanId: PropTypes.string,
      FloorplanImageAltText: '',
      FloorplanImageName: PropTypes.string,
      FloorplanImageURL: PropTypes.string,
      FloorplanName: PropTypes.string,
      MaximumDeposit: PropTypes.string,
      MaximumRent: PropTypes.string,
      MaximumSQFT: PropTypes.string,
      MinimumDeposit: PropTypes.string,
      MinimumRent: PropTypes.string,
      MinimumSQFT: PropTypes.string,
      PropertyId: PropTypes.string,
      PropertyShowsSpecials: PropTypes.string,
      SQFT: PropTypes.string,
      Specials: PropTypes.string,
      UnitImageAltText: PropTypes.string,
      UnitImageURLs: PropTypes.arrayOf(PropTypes.string),
      UnitStatus: PropTypes.string,
      UnitTypeMapping: PropTypes.string,
      VoyagerPropertyCode: PropTypes.string,
      VoyagerPropertyId: PropTypes.string
    })
  })),

  /**
   * Error from API call.
   */
  error: PropTypes.object,

  /**
   * `Section` `Heading` text.
   */
  title: PropTypes.string
}

FloorplansGrid.defaultProps = {
  apartments: [{ aptWithPlan: null }],
  error: null,
  title: 'One Bedroom'
}

export default Section

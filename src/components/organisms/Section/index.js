// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Container } from '../../molecules'

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
  id: PropTypes.string
}

Section.defaultProps = {
  'data-container': false
}

export default Section

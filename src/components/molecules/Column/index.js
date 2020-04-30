// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Container from '../Container'

// Hooks
import { useAttributes } from '../../../hooks'

// Stylesheets
import './column.sass'

/**
 * @file Components representing UI columns
 * @module components/molecules/Column
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/div}
 */

/**
 * Renders a `<div>` element with the class `adm-column`.
 *
 * @class Column
 * @param {ColumnProps} props - Component data
 * @returns {HTMLDivElement}
 */
export const Column = ({ children, 'data-container': container, ...props }) => {
  const attributes = useAttributes(props, 'adm-column')

  if (!container) return <div {...attributes}>{children}</div>

  return (
    <div {...attributes}>
      <Container className='column-container'>{children}</Container>
    </div>
  )
}

/**
 * @link Column component properties.
 *
 * @typedef {ColumnProps}
 */
Column.propTypes = {
  /**
   * `Column` content.
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
   * The container will have the base class `column-container`.
   */
  'data-container': PropTypes.bool,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string
}

Column.defaultProps = {
  'data-container': false
}

export default Column

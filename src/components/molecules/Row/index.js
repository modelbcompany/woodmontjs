// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Container from '../Container'

// Hooks
import { useAttributes } from '../../../hooks'

// Stylesheets
import './row.sass'

/**
 * @file Components representing UI rows
 * @module components/molecules/Row
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/div}
 */

/**
 * Renders a `<div>` element with the class `adm-row`.
 *
 * @class Row
 * @param {RowProps} props - Component data
 * @returns {HTMLDivElement}
 */
export const Row = ({ children, 'data-container': container, ...props }) => {
  const attributes = useAttributes(props, 'adm-row')

  if (!container) return <div {...attributes}>{children}</div>

  return (
    <div {...attributes}>
      <Container className='row-container'>{children}</Container>
    </div>
  )
}

/**
 * @link Row component properties.
 *
 * @typedef {RowProps}
 */
Row.propTypes = {
  /**
   * `Row` content.
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
   * The container will have the base class `row-container`.
   */
  'data-container': PropTypes.bool,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string
}

Row.defaultProps = {}

export default Row

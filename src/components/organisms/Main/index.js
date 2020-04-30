// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Container } from '../../molecules'

// Hooks
import { useAttributes } from '../../../hooks'

// Stylesheets
import './main.sass'

/**
 * @file <main> element components
 * @module components/organisms/Main
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/main}
 */

/**
 * Renders a `<main>` element with the class `ado-main`.
 *
 * @class Main
 * @param {MainProps} props - Component data
 * @returns {HTMLElement}
 */
export const Main = ({ children, 'data-container': container, ...props }) => {
  const attributes = useAttributes(props, 'ado-main')

  if (!container) return <main {...attributes}>{children}</main>

  return (
    <main {...attributes}>
      <Container className='main-container'>{children}</Container>
    </main>
  )
}

/**
 * @link Main component properties.
 *
 * @typedef {MainProps}
 */
Main.propTypes = {
  /**
   * `Main` content.
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
   * The container will have the base class `main-container`.
   */
  'data-container': PropTypes.bool,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string
}

Main.defaultProps = {
  'data-container': false
}

export default Main

// Packages
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

// Components
import { Button } from '../../atoms'
import Container from '../Container'

// Hooks
import { useAttributes, useDisclosure, useIcon } from '../../../hooks'

// Utility Functions
import { classNames } from '../../../utils'

// Stylesheets
import './dropdown.sass'

/**
 * @file Dropdown components
 * @module components/molecules/Dropdown
 */

/**
 * Renders a `<div>` element with the class `adm-dropdown`.
 *
 * @param {DropdownProps} props - Component data
 * @returns {HTMLDivElement}
 */
export const Dropdown = ({ button: btn, container, ...props }) => {
  const attributes = useAttributes(props, 'adm-dropdown')
  const { children } = useIcon(props)
  const { button, content, expanded, setDisclosure } = useDisclosure({
    button: btn,
    content: {
      ...container,
      className: classNames('dropdown-content', container.className),
      children
    }
  })

  useEffect(() => {
    $('*').click(event => { if (expanded) setDisclosure(false) })

    return () => $(document).off('click')
  }, [expanded])

  return (
    <div {...attributes} data-open={expanded}>
      <Button {...button} name='dropdown' type='reset' />
      {expanded ? <Container {...content} /> : null}
    </div>
  )
}

/**
 * @link Dropdown component properties.
 *
 * @typedef {DropdownProps}
 */
Dropdown.propTypes = {
  /**
   * `Button` component properties.
   */
  button: PropTypes.shape({
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    form: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    value: PropTypes.any
  }),

  /**
   * `Dropdown` content.
   */
  children: PropTypes.element,

  /**
   * `Container` properties. `children` will be used as `Container.children`.
   */
  container: PropTypes.shape({
    className: PropTypes.string,
    'data-*': PropTypes.any,
    id: PropTypes.string,
    title: PropTypes.string
  }),

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

Dropdown.defaultProps = {
  button: {
    children: 'Dropdown',
    name: 'dropdown'
  },
  container: {
    id: 'dropdown-content'
  }
}

export default Dropdown

// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Button } from '../../atoms'
import Container from '../Container'

// Hooks
import { useAttributes, useDropdown, useIcon } from '../../../hooks'

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
export const Dropdown = ({ 'data-button': pb, ...props }) => {
  const attributes = useAttributes(props, 'adm-dropdown')
  const { children } = useIcon(props)
  const { handleDropdown, open } = useDropdown()

  return (
    <div {...attributes} data-open={open}>
      <Button {...pb} name='dropdown' onClick={handleDropdown} />
      {
        open && children
          ? <Container className='dropdown-content'>{children}</Container>
          : null
      }
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
   * `Dropdown` content.
   */
  children: PropTypes.element,

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
   * `Button` component properties.
   */
  'data-button': PropTypes.shape({
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
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string
}

Dropdown.defaultProps = {
  'data-button': {
    children: 'Dropdown',
    name: 'dropdown'
  },
  'data-content': null
}

export default Dropdown

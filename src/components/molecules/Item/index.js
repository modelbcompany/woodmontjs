// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Hooks
import { useAttributes, useIcon } from '../../../hooks'

// Stylesheets
import './item.sass'

/**
 * @file Component representing a <li> element
 * @module components/molecules/Item
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/li}
 */

/**
 * Renders a `<li>` element with the class `adm-item`.
 *
 * @class Item
 * @param {ItemProps} props - Component data
 * @returns {HTMLLIElement}
 */
export const Item = props => {
  const attributes = useAttributes(props, 'adm-item')
  attributes.children = useIcon(attributes).children

  return <li {...attributes} />
}

/**
 * @link Item component properties.
 *
 * @typedef {ItemProps}
 */
Item.propTypes = {
  /**
   * `Item` content.
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

Item.defaultProps = {}

export default Item

// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Hooks
import { useAttributes, useItems } from '../../../hooks'

// Stylesheets
import './list.sass'

/**
 * @file Components representing <ol> and <ul> elements
 * @module components/molecules/List
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/ol}
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/ul}
 */

/**
 * Renders a `<ol>` or `<ul>` element with the class `adm-list`.
 *
 * @todo Handle description list
 *
 * @class List
 * @param {ListProps} props - Component data
 * @returns {HTMLOListElement | HTMLUListElement}
 */
export const List = ({
  children,
  items: di,
  'data-item-type': item_type,
  'data-type': type,
  ...props
}) => {
  const attributes = useAttributes(props, 'adm-list')
  const { items } = useItems(di, item_type)

  switch (type) {
    case 'ordered':
      return <ol {...attributes}>{children || items}</ol>
    default:
      return <ul {...attributes}>{children || items}</ul>
  }
}

/**
 * @link List component properties.
 *
 * @typedef {ListProps}
 */
List.propTypes = {
  /**
   * Array of `Item` components.
   */
  children: PropTypes.arrayOf(PropTypes.element),

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
   * Determines the type of list rendered.
   *
   * Possible values are:
   *
   * - unordered: `<ul>`
   * - ordered: `<ol>`
   */
  'data-type': PropTypes.oneOf(['unordered', 'ordered']),

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string,

  /**
   * Array of `Item` component **properties** or components.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    children: PropTypes.node,
    className: PropTypes.string,
    'data-*': PropTypes.any,
    id: PropTypes.string,
    title: PropTypes.string
  }))
}

List.defaultProps = {
  'data-type': 'unordered',
  items: []
}

export default List

// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Container from '../Container'

// Hooks
import { useAttributes } from '../../../hooks'

// Stylesheets
import './article.sass'

/**
 * @file Component representing <article> elements
 * @module components/molecules/Article
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/article}
 */

/**
 * Renders an `<article>` element with the class `adm-article`.
 *
 * @class Article
 * @param {ArticleProps} props - Component data
 * @returns {HTMLElement}
 */
export const Article = ({
  children,
  'data-container': container,
  ...props
}) => {
  const attributes = useAttributes(props, 'adm-article')

  if (!container) return <article {...attributes}>{children}</article>

  return (
    <article {...attributes}>
      <Container className='article-container'>{children}</Container>
    </article>
  )
}

/**
 * Renders an @link Article component with the class `floorplan`.
 *
 * @class Floorplan
 * @param {FloorplanProps} props - Component data
 * @returns {Article}
 */
export const Floorplan = props => {
  const attributes = useAttributes(props, 'floorplan')

  return (
    <Article {...attributes}>
      {/*  */}
    </Article>
  )
}

/**
 * @link Article component properties.
 *
 * @typedef {ArticleProps}
 */
Article.propTypes = {
  /**
   * `Article` content
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
   * The container will have the base class `article-container`.
   */
  'data-container': PropTypes.bool,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string
}

/**
 * @link Floorplan component properties.
 *
 * @typedef {FloorplanProps}
 */
Floorplan.propTypes = {}

Article.defaultProps = {
  'data-container': false
}

Floorplan.defaultProps = {}

export default Article

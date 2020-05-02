// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { Heading, Image, Link, Paragraph, Span } from '../../atoms'
import Column from '../Column'
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
export const Floorplan = ({ apt, floorplan, rent, sqft, ...rest }) => {
  const attributes = useAttributes(rest, 'floorplan')

  floorplan.image.alt = `Floorplan for apartment #${apt.name}`

  return (
    <Article {...attributes}>
      <Column className='floorplan-column'>
        <Column className='image-column'>
          <Image {...floorplan.image} className='floorplan-img' />
        </Column>

        <Column className='text-column'>
          <Heading className='apartment-name' data-size={4}>
            {`#${apt.name}`}
          </Heading>
          <Paragraph className='floorplan-details'>
            <Span className='unit-type'>
              {floorplan.type.substring(5, floorplan.type.length)}&nbsp;
            </Span>
            <Span className='floorplan-name'>
              {` | ${(floorplan?.name ?? '').replace(',', ' |')}`}
            </Span>
          </Paragraph>
          <Paragraph className='sqft'>
            {`${sqft} SQ. FT.`}
          </Paragraph>
          <Paragraph className='rent'>
            {`$${rent.min.slice(0, 1)},${rent.min.slice(1, rent.min.length)}`}
          </Paragraph>
        </Column>

        <Column className='link-column'>
          <Link className='floorplan-link' href={apt.apply}>
            Apply Now
          </Link>

          <Link className='floorplan-link' href={floorplan.image.src} download>
            Download Floorplan
          </Link>
        </Column>
      </Column>
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
 * @todo Update documentation
 *
 * @typedef {FloorplanProps}
 */
Floorplan.propTypes = {
  apt: PropTypes.shape({
    apply: PropTypes.string,
    name: PropTypes.string
  }),
  floorplan: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.shape({
      src: PropTypes.string
    }),
    name: PropTypes.string,
    type: PropTypes.string
  }),
  rent: PropTypes.shape({
    max: PropTypes.string,
    min: PropTypes.string
  }),
  sqft: PropTypes.string
}

Article.defaultProps = {
  'data-container': false
}

Floorplan.defaultProps = {
  apt: {
    apply: '#',
    name: '101'
  },
  floorplan: {
    id: null,
    image: {
      src: '/assets/images/fp-image-944x1024.jpg'
    },
    name: '1 Bedroom, 1 Bathroom',
    type: 'ca011b1b'
  },
  rent: {
    max: '2300',
    min: '2300'
  },
  sqft: '875'
}

export default Article

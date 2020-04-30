// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Hooks
import { useAttributes } from '../../../hooks'

// Stylesheets
import './image.sass'

/**
 * @file Component representing an <img> element
 * @module components/atoms/Image
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/img}
 */

/**
 * Renders an `<img>` element with the class `ada-image`.
 *
 * @class Image
 * @param {ImageProps} props - Component data
 * @returns {HTMLImageElement}
 */
export const Image = ({ children, ...props }) => {
  const attributes = useAttributes(props, 'ada-image')
  return <img {...attributes} alt={attributes.alt} />
}

/**
 * @link Image component properties.
 *
 * @typedef {ImageProps}
 */
Image.propTypes = {
  /**
   * Defines an alternative text description of the image.
   *
   * Omitting alt altogether indicates that the image is a key part of the
   * content and no textual equivalent is available.
   *
   * Setting this attribute to an empty string (`alt=""`) indicates that this
   * image is not a key part of the content (it’s decoration or a tracking
   * pixel), and that non-visual browsers may omit it from rendering.
   *
   * Visual browsers will also hide the broken image icon if the alt is empty
   * and the image failed to display.
   *
   * This attribute is also used when copying and pasting the image to text, or
   * saving a linked image to a bookmark.
   */
  alt: PropTypes.string,

  /**
   * A space-separated list of the classes of the element.
   *
   * Classes allows CSS and JavaScript to select and access specific elements
   * via the class selectors or functions like the method
   * `Document.getElementsByClassName()`.
   */
  className: PropTypes.string,

  /**
   * A `Boolean` attribute indicates that the element is not yet, or is no
   * longer, relevant.
   *
   * For example, it can be used to hide elements of the page that can't be used
   * until the login process has been completed. The browser won't render such
   * elements.
   *
   * This attribute must not be used to hide content that could legitimately be
   * shown.
   */
  hidden: PropTypes.bool,

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the element when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id: PropTypes.string,

  /**
   * One or more strings separated by commas, indicating a set of source sizes.
   *
   * Each source size consists of:
   *
   * 1. A media condition. This must be omitted for the last item in the list.
   * 2. A source size value.
   *
   * Source size values specify the intended display size of the image. User
   * agents use the current source size to select one of the sources supplied by
   * the srcset attribute.
   */
  sizes: PropTypes.string,

  /**
   * The image URL.
   */
  src: PropTypes.string.isRequired,

  /**
   * One or more strings separated by commas, indicating possible image sources
   * for the user agent to use.
   *
   * Each string is composed of:
   *
   * 1. A URL to an image
   * 2. Optionally, whitespace followed by one of:
   *    - A width descriptor (a positive integer directly followed by w). The
   *      width descriptor is divided by the source size given in the sizes
   *      attribute to calculate the effective pixel density.
   *    - A pixel density descriptor (a positive floating point number directly
   *      followed by x).
   */
  srcSet: PropTypes.string,

  /**
   * Contains a text representing advisory information related to the element it
   * belongs to. Such information can typically, but not necessarily, be
   * presented to the user as a tooltip.
   */
  title: PropTypes.string
}

Image.defaultProps = {
  hidden: false
}

export default Image

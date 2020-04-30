// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Hooks
import { useAttributes } from '../../../hooks'

// Stylesheets
import './paragraph.sass'

/**
 * @file Components representing a <p> element
 * @module components/atoms/Paragraph
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/p}
 * @see {@link https://reactjs.org/docs/dom-elements.html}
 */

/**
 * Renders a `<p>` element with the class `ada-paragraph`.
 *
 * @class Paragraph
 * @param {ParagraphProps} props - Component data
 * @returns {HTMLParagraphElement}
 */
export const Paragraph = ({ children, ...props }) => {
  return <p {...useAttributes(props, 'ada-paragraph')}>{children}</p>
}

/**
 * @link Paragraph component properties.
 *
 * @typedef {ParagraphProps}
 */
Paragraph.propTypes = {
  /**
   * Paragraph text.
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
   * React’s replacement for using `innerHTML` in the browser DOM.
   *
   * In general, setting HTML from code is risky because it’s easy to
   * inadvertently expose your users to a cross-site scripting (XSS) attack.
   *
   * See: https://reactjs.org/docs/dom-elements.html
   */
  dangerouslySetInnerHTML: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),

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

Paragraph.defaultProps = {
  children: 'The quick brown fox jumps over the lazy dog. How vexingly quick daft zebras jump! Sphinx of black quartz, judge my vow. The five boxing wizards jump quickly. Jackdaws love my big sphinx of quartz. Pack my box with five dozen liquor jugs. Jived fox nymph grabs quick waltz. Glib jocks quiz nymph to vex dwarf.'
}

export default Paragraph

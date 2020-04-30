// Packages
import React from 'react'

// Components
import Components from '../components'

// Utility Functions
import { isObject } from './validation.utils'

/**
 * @file React component utilities
 * @module utils/react
 * @see {@link https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html}
 */

/**
 * Creates an array of @param component components.
 *
 * @param {React.Component} component - Collection component
 * @param {object[]} items - Items to convert
 * @returns {React.Component[]}
 */
export const createCollection = (component, data = []) => {
  return data.map(obj => <component {...obj} key={obj.id || obj['data-key']} />)
}

/**
 * Creates a React DOM or Component Element.
 *
 * An element is an object describing a component instance or DOM node and its
 * desired properties. It contains only information about the component type,
 * its properties, and any child elements inside it.
 *
 * An element is not an actual instance. Rather, it is a way to tell React what
 * you want to see on the screen.
 *
 * @see
 * {@link https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html}
 *
 * @param {ReactElementSkeleton} skeleton
 * @param {Object} skeleton.props - HTML element or component properties
 * @param {string} skeleton.type - HTML tag or component name
 * @returns {ReactElement}
 */
export const createElement = skeleton => {
  if (!skeleton || !isObject(skeleton)) return null

  const { type, props: { children, ...props } } = skeleton

  return React.createElement(Components[type] || type, props, children)
}

/**
 * Creates an array of @link ReactElement objects.
 *
 * @param {ReactElementSkeleton[]} data - Data to create elements from
 * @returns {React.Component[]} Rendered components
 */
export const createElements = (data = []) => {
  return data.map(skeleton => createElement(skeleton))
}
